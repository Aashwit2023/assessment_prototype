/**
 * VERITAS AI - State Management & Event Bus
 */

class AppState {
  constructor() {
    this.currentRole = 'professor'; // 'professor' | 'student' | 'admin'
    this.currentView = 'dashboard';
    
    // AI Generator Wizard form state
    this.generatorConfig = {
      courseId: 'cs-301',
      selectedTopics: ['tcp-ip', 'routing', 'dns', 'http'],
      totalQuestions: 20,
      totalMarks: 50,
      durationMinutes: 60,
      difficulty: 'Medium',
      questionType: 'MCQ',
      distribution: {
        'tcp-ip': 30,
        'routing': 20,
        'dns': 15,
        'http': 15,
        'other': 20
      }
    };

    // Question Review & Retry status
    this.reviewQuestions = JSON.parse(JSON.stringify(MOCK_DATA.generatedQuestions));
    this.isQ12Retried = false;

    // Student Exam Runtime State
    this.activeExamIndex = 0;
    this.studentAnswers = {
      'exam-q-1': 'B',
      'exam-q-2': 'B',
      'exam-q-3': 'A',
      'exam-q-4': 'B',
      'exam-q-5': 'C',
      'exam-q-6': 'B',
      'exam-q-7': null,
      'exam-q-8': null
    };
    this.examSecondsRemaining = 42 * 60 + 18; // 42:18 countdown
    this.examTimerInterval = null;
    this.examSubmitted = false;

    // Filter states for Question Bank
    this.qbFilters = {
      search: '',
      course: 'all',
      topic: 'all',
      difficulty: 'all',
      type: 'all'
    };

    // Audit logs & notifications dynamic array
    this.auditLogs = [...MOCK_DATA.auditLogs];
    this.notifications = [...MOCK_DATA.notifications];

    this.listeners = [];
  }

  // Subscribe to state updates
  subscribe(fn) {
    this.listeners.push(fn);
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  // Role switching
  setRole(role) {
    this.currentRole = role;
    if (role === 'professor') {
      this.currentView = 'dashboard';
    } else if (role === 'student') {
      this.currentView = 'student-dashboard';
    } else if (role === 'admin') {
      this.currentView = 'admin-overview';
    }
    this.notify();
  }

  // View navigation
  setView(viewName) {
    this.currentView = viewName;
    this.notify();
  }

  // Retry Question 12 self-correction
  retryQuestion12() {
    const q12 = this.reviewQuestions.find(q => q.id === 'q-12');
    if (q12 && !this.isQ12Retried) {
      this.isQ12Retried = true;
      q12.text = q12.retryData.refinedQuestionText;
      q12.options = q12.retryData.refinedOptions;
      q12.correctAnswer = q12.retryData.refinedCorrectAnswer;
      q12.evidence = q12.retryData.refinedEvidence;
      q12.status = 'VALIDATED';
      q12.approvalStatus = 'APPROVED';
      q12.hasRetried = true;
      q12.validations.curriculumAlignment = true;
      q12.validations.groundingCheck = true;
      q12.validations.factualValidation = true;

      // Log in audit
      this.auditLogs.unshift({
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        user: 'Agentic RAG Engine',
        action: 'Self-Corrected Question #12 & Grounding Validation Passed',
        resource: 'Computer Networks / TCP/IP',
        status: 'Success'
      });

      this.notify();
    }
  }

  // Approve / Reject question
  setQuestionStatus(qId, status) {
    const q = this.reviewQuestions.find(item => item.id === qId);
    if (q) {
      q.approvalStatus = status;
      this.auditLogs.unshift({
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        user: 'Prof. Marcus Vance',
        action: `${status === 'APPROVED' ? 'Approved' : 'Rejected'} Question #${q.number}`,
        resource: 'Computer Networks',
        status: 'Success'
      });
      this.notify();
    }
  }

  // Student exam timer start/stop
  startExamTimer(onTick) {
    if (this.examTimerInterval) clearInterval(this.examTimerInterval);
    this.examTimerInterval = setInterval(() => {
      if (this.examSecondsRemaining > 0 && !this.examSubmitted) {
        this.examSecondsRemaining--;
        if (onTick) onTick(this.examSecondsRemaining);
      } else {
        clearInterval(this.examTimerInterval);
      }
    }, 1000);
  }

  stopExamTimer() {
    if (this.examTimerInterval) {
      clearInterval(this.examTimerInterval);
      this.examTimerInterval = null;
    }
  }

  // Save student answer with autosave simulation
  setStudentAnswer(qId, selectedOption) {
    this.studentAnswers[qId] = selectedOption;
    this.notify();
  }
}

window.appState = new AppState();
