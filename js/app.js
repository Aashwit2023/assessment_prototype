/**
 * VERITAS AI - Main Application Controller & Event Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // Subscribe UI renderer to AppState changes
  appState.subscribe(renderCurrentView);

  // Setup Event Listeners
  setupGlobalListeners();

  // Initial View Render
  renderCurrentView();

  // Render Notifications
  renderNotificationsList();
}

function renderCurrentView() {
  const role = appState.currentRole;
  const view = appState.currentView;

  // 1. Update Top Bar Demo Pills Active State
  updateDemoFlowPills(view, role);

  // 2. Update Top Bar Role Selector
  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.role === role);
  });

  // 3. Update User Chip & Profile
  const profile = MOCK_DATA.profiles[role];
  document.getElementById('currentAvatar').innerText = profile.avatar;
  document.getElementById('currentUserName').innerText = profile.name;
  document.getElementById('currentUserRole').innerText = profile.roleTitle;

  // Sidebar profile
  document.getElementById('sidebarProfileAvatar').innerText = profile.avatar;
  document.getElementById('sidebarProfileName').innerText = profile.name;
  document.getElementById('sidebarProfileDept').innerText = profile.dept;
  document.getElementById('sidebarSectionTitle').innerText = `${role.toUpperCase()} WORKSPACE`;

  // 4. Render Sidebar Links
  renderSidebarLinks(role, view);

  // 5. Update Page Heading & Breadcrumb
  updatePageHeadings(view, role);

  // 6. Render Main Content View
  const container = document.getElementById('viewContainer');
  container.innerHTML = getComponentHtml(view, role);

  // 7. If student exam is active, start live timer
  if (view === 'student-exam' && !appState.examSubmitted) {
    appState.startExamTimer(updateExamTimerDisplay);
  } else {
    appState.stopExamTimer();
  }
}

function getComponentHtml(view, role) {
  switch (view) {
    case 'dashboard': return Components.renderProfessorDashboard();
    case 'courses': return Components.renderCoursesPage();
    case 'curriculum': return Components.renderCurriculumPage();
    case 'generator': return Components.renderAIGeneratorPage();
    case 'ai-workflow': return Components.renderAIWorkflowPage();
    case 'question-review': return Components.renderQuestionReviewPage();
    case 'question-bank': return Components.renderQuestionBankPage();
    case 'builder': return Components.renderAssessmentBuilderPage();
    case 'analytics': return Components.renderAnalyticsPage();
    case 'integrity': return Components.renderIntegrityRiskPage();
    case 'audit-logs': return Components.renderAuditLogsPage();
    case 'settings': return Components.renderSettingsPage();

    // Student Views
    case 'student-dashboard': return Components.renderStudentDashboard();
    case 'student-exam': return Components.renderStudentExamScreen();
    case 'student-results': return Components.renderStudentResultsScreen();

    // Admin Views
    case 'admin-overview': return Components.renderAdminDashboard();
    case 'admin-colleges': return Components.renderAdminCollegesPage();
    case 'admin-users': return Components.renderAdminUsersPage();
    case 'admin-audit': return Components.renderAuditLogsPage();

    default: return Components.renderProfessorDashboard();
  }
}

function renderSidebarLinks(role, activeView) {
  const navList = document.getElementById('sidebarNavList');
  const links = Components.getSidebarNav(role);

  navList.innerHTML = links.map(link => `
    <li class="nav-item ${activeView === link.id ? 'active' : ''}" onclick="appState.setView('${link.id}')">
      ${link.icon}
      <span>${link.label}</span>
      ${link.badge ? `<span class="nav-badge">${link.badge}</span>` : ''}
    </li>
  `).join('');
}

function updatePageHeadings(view, role) {
  const breadcrumb = document.getElementById('pageBreadcrumb');
  const heading = document.getElementById('pageHeading');
  const actions = document.getElementById('pageActions');

  const titles = {
    'dashboard': { b: 'Professor / Overview', h: 'Professor Dashboard' },
    'courses': { b: 'Curriculum / Courses', h: 'Department Course Syllabi' },
    'curriculum': { b: 'Curriculum / Document Processing', h: 'Upload & Index Curriculum' },
    'generator': { b: 'Agentic RAG / Synthesizer', h: 'AI Question Generator' },
    'ai-workflow': { b: 'Agentic RAG / Execution', h: 'RAG Pipeline & Validation' },
    'question-review': { b: 'Validation / Grounding', h: 'Question Review & Evidence' },
    'question-bank': { b: 'Repository / Master Bank', h: 'Question Bank' },
    'builder': { b: 'Assessments / Snapshotter', h: 'Assessment Builder' },
    'analytics': { b: 'Insights / Performance', h: 'Cohort Analytics' },
    'integrity': { b: 'Telemetry / Risk', h: 'Integrity & Risk Telemetry' },
    'audit-logs': { b: 'Governance / Ledger', h: 'System Audit Logs' },
    'settings': { b: 'System / Config', h: 'Faculty Settings' },
    'student-dashboard': { b: 'Student / Portal', h: 'Student Dashboard' },
    'student-exam': { b: 'Examination / Live', h: 'Computer Networks Mid Term' },
    'student-results': { b: 'Results / Graded', h: 'Assessment Solutions & Grade' },
    'admin-overview': { b: 'Admin / Institutional', h: 'Institutional Overview' },
    'admin-colleges': { b: 'Admin / Colleges', h: 'College & Department Management' },
    'admin-users': { b: 'Admin / Enrollment', h: 'User & Student Enrollment Directory' },
    'admin-audit': { b: 'Admin / Audit Ledger', h: 'Institutional Audit Logs' }
  };

  const item = titles[view] || { b: `${role.toUpperCase()} / View`, h: 'Assessment Suite' };
  breadcrumb.innerText = item.b;
  heading.innerText = item.h;
  actions.innerHTML = '';
}

function updateDemoFlowPills(view, role) {
  document.querySelectorAll('.flow-step-btn').forEach(btn => {
    const flow = btn.dataset.flow;
    let isActive = false;
    if (flow === 'prof-dash' && view === 'dashboard') isActive = true;
    if (flow === 'curriculum-upload' && view === 'curriculum') isActive = true;
    if (flow === 'ai-generator' && view === 'generator') isActive = true;
    if (flow === 'ai-workflow' && view === 'ai-workflow') isActive = true;
    if (flow === 'question-review' && view === 'question-review') isActive = true;
    if (flow === 'failure-retry' && view === 'question-review' && !appState.isQ12Retried) isActive = true;
    if (flow === 'assessment-builder' && view === 'builder') isActive = true;
    if (flow === 'student-exam' && view === 'student-exam') isActive = true;
    if (flow === 'student-results' && view === 'student-results') isActive = true;
    if (flow === 'analytics' && view === 'analytics') isActive = true;
    if (flow === 'integrity' && view === 'integrity') isActive = true;

    btn.classList.toggle('active', isActive);
  });
}

function setupGlobalListeners() {
  // Role Selector Click Handlers
  document.getElementById('roleSelectorGroup').addEventListener('click', (e) => {
    const btn = e.target.closest('.role-btn');
    if (btn) {
      const role = btn.dataset.role;
      appState.setRole(role);
      showToast(`Switched active workspace role to ${role.toUpperCase()}`, 'info');
    }
  });

  // Demo Flow Bar Click Handlers
  document.getElementById('demoFlowBar').addEventListener('click', (e) => {
    const btn = e.target.closest('.flow-step-btn');
    if (btn) {
      const flow = btn.dataset.flow;
      handleDemoFlowClick(flow);
    }
  });

  // Notification Dropdown Toggle
  const notifBtn = document.getElementById('notificationBtn');
  const notifDropdown = document.getElementById('notificationDropdown');
  notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!notifDropdown.contains(e.target) && !notifBtn.contains(e.target)) {
      notifDropdown.classList.remove('open');
    }
  });

  document.getElementById('markAllReadBtn').addEventListener('click', () => {
    appState.notifications.forEach(n => n.unread = false);
    renderNotificationsList();
    showToast('All notifications marked as read', 'info');
  });

  // Mobile Menu Toggle
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('appSidebar').classList.toggle('mobile-open');
  });

  // Modal Close Button
  document.getElementById('modalCloseBtn').addEventListener('click', hideModal);
  document.getElementById('globalModalBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'globalModalBackdrop') hideModal();
  });
}

function handleDemoFlowClick(flow) {
  switch (flow) {
    case 'prof-dash':
      appState.setRole('professor');
      appState.setView('dashboard');
      break;
    case 'curriculum-upload':
      appState.setRole('professor');
      appState.setView('curriculum');
      break;
    case 'ai-generator':
      appState.setRole('professor');
      appState.setView('generator');
      break;
    case 'ai-workflow':
      appState.setRole('professor');
      appState.setView('ai-workflow');
      break;
    case 'question-review':
      appState.setRole('professor');
      appState.setView('question-review');
      break;
    case 'failure-retry':
      appState.setRole('professor');
      appState.setView('question-review');
      setTimeout(() => {
        const el = document.getElementById('card-q-12');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
      break;
    case 'assessment-builder':
      appState.setRole('professor');
      appState.setView('builder');
      break;
    case 'student-exam':
      appState.setRole('student');
      appState.setView('student-exam');
      break;
    case 'student-results':
      appState.setRole('student');
      appState.setView('student-results');
      break;
    case 'analytics':
      appState.setRole('professor');
      appState.setView('analytics');
      break;
    case 'integrity':
      appState.setRole('professor');
      appState.setView('integrity');
      break;
  }
}

// --------------------------------------------------------------------------
// Interactive Workflow Handlers
// --------------------------------------------------------------------------

// 1. Curriculum Upload Simulation
window.simulateFileUpload = function() {
  const stepper = document.getElementById('pipelineStepper');
  if (!stepper) return;

  stepper.innerHTML = `
    <div class="pipeline-step-item processing">
      <div class="pipeline-step-icon">&#8635;</div>
      <div class="pipeline-step-name">1. Uploading & Verifying Syllabus PDF...</div>
      <div class="pipeline-step-status" style="color: var(--brand-primary);">Processing</div>
    </div>
    <div class="pipeline-step-item pending">
      <div class="pipeline-step-icon">2</div>
      <div class="pipeline-step-name">2. Text Extraction & OCR Parsing</div>
      <div class="pipeline-step-status" style="color: var(--text-muted);">Waiting</div>
    </div>
    <div class="pipeline-step-item pending">
      <div class="pipeline-step-icon">3</div>
      <div class="pipeline-step-name">3. Semantic Chunking</div>
      <div class="pipeline-step-status" style="color: var(--text-muted);">Waiting</div>
    </div>
    <div class="pipeline-step-item pending">
      <div class="pipeline-step-icon">4</div>
      <div class="pipeline-step-name">4. Dense & BM25 Vector Embedding</div>
      <div class="pipeline-step-status" style="color: var(--text-muted);">Waiting</div>
    </div>
    <div class="pipeline-step-item pending">
      <div class="pipeline-step-icon">5</div>
      <div class="pipeline-step-name">5. Knowledge Graph Indexing</div>
      <div class="pipeline-step-status" style="color: var(--text-muted);">Waiting</div>
    </div>
  `;

  setTimeout(() => {
    showToast('Computer_Networks_Syllabus_2026.pdf processed and indexed successfully!', 'success');
    appState.setView('curriculum');
  }, 1200);
};

// 2. Start AI Generation Workflow
window.startGenerationWorkflow = function() {
  appState.setView('ai-workflow');
  showToast('Agentic RAG assessment generator initiated...', 'info');

  setTimeout(() => {
    showToast('20 Questions synthesized. Grounding verification completed.', 'success');
  }, 1500);
};

// 3. Evidence Drawer Toggle
window.toggleEvidence = function(qId) {
  const body = document.getElementById(`ev-body-${qId}`);
  const chevron = document.getElementById(`ev-chevron-${qId}`);
  if (body) {
    const isHidden = body.style.display === 'none';
    body.style.display = isHidden ? 'flex' : 'none';
    if (chevron) {
      chevron.innerHTML = isHidden ? '&uarr; Collapse Source' : '&darr; Expand Source';
    }
  }
};

// 4. Trigger Retry for Question 12
window.triggerRetryQ12 = function() {
  showToast('Executing Prompt Refinement on Question #12...', 'info');
  setTimeout(() => {
    appState.retryQuestion12();
    showToast('Self-Correction complete: Question #12 grounded & validated!', 'success');
  }, 800);
};

// 5. Question Review Modals
window.showFailureDetailsModal = function(qId) {
  const q = appState.reviewQuestions.find(item => item.id === qId);
  if (!q) return;

  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="padding: 12px; background: rgba(239, 68, 68, 0.1); border: 1px solid var(--status-danger-border); border-radius: var(--radius-md);">
        <strong style="color: var(--status-danger); display: block; margin-bottom: 4px;">Grounding Failure Diagnostic:</strong>
        <p style="font-size: 13px; color: #fff;">${q.failureDetails}</p>
      </div>

      <div>
        <h4 style="font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 6px;">Original Synthesized Question:</h4>
        <div style="padding: 10px; background: var(--bg-surface-subtle); border-radius: var(--radius-sm); font-size: 13px;">
          ${q.text}
        </div>
      </div>

      <div>
        <h4 style="font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 6px;">Refined Grounded Prompt for Retry:</h4>
        <div style="padding: 10px; background: #090d16; border-left: 3px solid var(--brand-primary); font-family: var(--font-mono); font-size: 12px; color: #38bdf8;">
          ${q.retryData.refinedPrompt}
        </div>
      </div>
    </div>
  `;

  const footerHtml = `
    <button class="btn btn-secondary" onclick="hideModal()">Close</button>
    <button class="btn btn-primary" onclick="hideModal(); triggerRetryQ12();">Execute Retry Now</button>
  `;

  showModal('Validation Failure Analysis & Diagnostic', bodyHtml, footerHtml);
};

window.showHumanReviewModal = function(qId) {
  const bodyHtml = `
    <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 14px;">
      Send Question #12 to the Faculty Peer Review queue for manual verification and syllabus alignment.
    </p>
    <div class="form-group">
      <label class="form-label">Reviewer Notes</label>
      <textarea class="form-input" rows="3" placeholder="Add specific guidance for the reviewing professor..."></textarea>
    </div>
  `;

  const footerHtml = `
    <button class="btn btn-secondary" onclick="hideModal()">Cancel</button>
    <button class="btn btn-primary" onclick="hideModal(); showToast('Question sent to Human Review Queue', 'success');">Submit to Review</button>
  `;

  showModal('Send to Human Review', bodyHtml, footerHtml);
};

window.editQuestionModal = function(qId) {
  const q = appState.reviewQuestions.find(item => item.id === qId);
  if (!q) return;

  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div class="form-group">
        <label class="form-label">Question Text</label>
        <textarea class="form-input" rows="3" id="editQText">${q.text}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Marks</label>
        <input type="number" class="form-input" value="${q.marks}" id="editQMarks">
      </div>
    </div>
  `;

  const footerHtml = `
    <button class="btn btn-secondary" onclick="hideModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveEditedQuestion('${qId}')">Save Changes</button>
  `;

  showModal(`Edit Question #${q.number}`, bodyHtml, footerHtml);
};

window.saveEditedQuestion = function(qId) {
  const q = appState.reviewQuestions.find(item => item.id === qId);
  const textVal = document.getElementById('editQText').value;
  if (q && textVal) {
    q.text = textVal;
    hideModal();
    appState.notify();
    showToast('Question updated successfully', 'success');
  }
};

// 6. Question Bank Filtering
window.filterQuestionBank = function() {
  const search = document.getElementById('qbSearchInput') ? document.getElementById('qbSearchInput').value.toLowerCase() : '';
  const course = document.getElementById('qbCourseFilter') ? document.getElementById('qbCourseFilter').value : 'all';
  const diff = document.getElementById('qbDifficultyFilter') ? document.getElementById('qbDifficultyFilter').value : 'all';
  const type = document.getElementById('qbTypeFilter') ? document.getElementById('qbTypeFilter').value : 'all';

  const rows = document.querySelectorAll('#qbTable tbody tr');
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    const matchSearch = !search || text.includes(search);
    const matchCourse = course === 'all' || text.includes(course.toLowerCase());
    const matchDiff = diff === 'all' || text.includes(diff.toLowerCase());
    const matchType = type === 'all' || text.includes(type.toLowerCase());

    row.style.display = (matchSearch && matchCourse && matchDiff && matchType) ? '' : 'none';
  });
};

window.addQuestionToAssessment = function(qbId) {
  showToast('Question added to assessment roster', 'success');
};

window.previewQuestionModal = function(qbId) {
  const q = MOCK_DATA.questionBank.find(item => item.id === qbId);
  if (!q) return;

  const bodyHtml = `
    <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 12px;">${q.text}</div>
    <div style="display: flex; gap: 8px; font-size: 12px;">
      <span class="badge badge-brand">${q.course}</span>
      <span class="badge badge-subtle">${q.topic}</span>
      <span class="badge badge-success">${q.difficulty} (${q.marks} Marks)</span>
    </div>
  `;

  showModal('Question Bank Item Preview', bodyHtml, `<button class="btn btn-secondary" onclick="hideModal()">Close</button>`);
};

// 7. Assessment Builder & Snapshot Publisher
window.saveDraftAssessment = function() {
  showToast('Assessment draft saved to repository', 'info');
};

window.previewAssessmentModal = function() {
  showToast('Launching student perspective preview...', 'info');
  setTimeout(() => {
    appState.setRole('student');
    appState.setView('student-exam');
  }, 500);
};

window.publishAssessmentSnapshot = function() {
  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="text-align: center;">
        <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--status-success-bg); color: var(--status-success); display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">
          &check;
        </div>
        <h3 style="font-size: 18px; font-weight: 800; color: #fff;">Approved Assessment Snapshot Created</h3>
        <p style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">
          Assessment is now locked into an immutable snapshot and published to 120 enrolled students.
        </p>
      </div>

      <!-- Snapshot Specs -->
      <div class="snapshot-meta-grid" style="background: var(--bg-surface-subtle); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <div class="snapshot-meta-item">
          <span class="snapshot-meta-label">Snapshot ID</span>
          <span class="snapshot-meta-val">ASM-SNP-9812</span>
        </div>
        <div class="snapshot-meta-item">
          <span class="snapshot-meta-label">Version</span>
          <span class="snapshot-meta-val">Version 1.0</span>
        </div>
        <div class="snapshot-meta-item">
          <span class="snapshot-meta-label">Total Marks</span>
          <span class="snapshot-meta-val">50 Marks</span>
        </div>
        <div class="snapshot-meta-item">
          <span class="snapshot-meta-label">Duration</span>
          <span class="snapshot-meta-val">60 Minutes</span>
        </div>
      </div>

      <div style="padding: 10px 14px; background: #090d16; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 11px; color: #38bdf8;">
        <div>Cryptographic Hash: sha256:7f8a91b2c3d4e5f6890abce...</div>
        <div>Approved By: Prof. Marcus Vance &bull; Status: Published</div>
      </div>
    </div>
  `;

  const footerHtml = `
    <button class="btn btn-secondary" onclick="hideModal()">Dismiss</button>
    <button class="btn btn-primary" onclick="hideModal(); appState.setRole('student'); appState.setView('student-dashboard');">
      Switch to Student Experience &rarr;
    </button>
  `;

  showModal('Assessment Published Successfully', bodyHtml, footerHtml);

  // Add audit log
  appState.auditLogs.unshift({
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    user: 'Prof. Marcus Vance',
    action: 'Published Assessment Snapshot v1.0 (CN-MID-01)',
    resource: 'Computer Networks',
    status: 'Success'
  });
};

// 8. Student Exam Interactions
window.navigateExamQuestion = function(delta) {
  const newIndex = appState.activeExamIndex + delta;
  const total = MOCK_DATA.studentExamQuestions.length;
  if (newIndex >= 0 && newIndex < total) {
    appState.activeExamIndex = newIndex;
    appState.notify();
  }
};

window.jumpExamQuestion = function(index) {
  appState.activeExamIndex = index;
  appState.notify();
};

window.selectStudentOption = function(qId, optionKey) {
  appState.setStudentAnswer(qId, optionKey);

  // Trigger autosave pulse animation
  const indicator = document.getElementById('autosaveIndicator');
  if (indicator) {
    indicator.classList.remove('saved');
    void indicator.offsetWidth; // trigger reflow
    indicator.classList.add('saved');
  }
};

function updateExamTimerDisplay(seconds) {
  const timerEl = document.getElementById('liveExamTimer');
  if (!timerEl) return;

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerEl.innerText = `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
}

// 9. Exam Submission & Automatic Grading
window.openSubmitModal = function() {
  const answers = appState.studentAnswers;
  const answeredCount = Object.values(answers).filter(Boolean).length;
  const totalCount = MOCK_DATA.studentExamQuestions.length;
  const unansweredCount = totalCount - answeredCount;

  const bodyHtml = `
    <div style="text-align: center; margin-bottom: 16px;">
      <h3 style="font-size: 18px; font-weight: 800; color: #fff;">Are you sure you want to submit?</h3>
      <p style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">
        Once submitted, your answers will be sealed and processed by the automatic grading engine.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: var(--bg-surface-subtle); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); text-align: center;">
      <div>
        <div style="font-size: 24px; font-weight: 800; color: var(--status-success);">${answeredCount}</div>
        <div style="font-size: 12px; color: var(--text-muted);">Answered Questions</div>
      </div>
      <div>
        <div style="font-size: 24px; font-weight: 800; color: ${unansweredCount > 0 ? 'var(--status-warning)' : 'var(--text-muted)'};">${unansweredCount}</div>
        <div style="font-size: 12px; color: var(--text-muted);">Unanswered Questions</div>
      </div>
    </div>
  `;

  const footerHtml = `
    <button class="btn btn-secondary" onclick="hideModal()">Continue Exam</button>
    <button class="btn btn-success" onclick="submitAssessmentExam()">Confirm &amp; Submit Assessment</button>
  `;

  showModal('Confirm Assessment Submission', bodyHtml, footerHtml);
};

window.submitAssessmentExam = function() {
  hideModal();
  appState.examSubmitted = true;
  appState.stopExamTimer();

  showToast('Sealing answers & executing automatic grading engine...', 'info');

  setTimeout(() => {
    appState.setView('student-results');
    showToast('Assessment graded: Score 42 / 50 (84%)', 'success');
  }, 1000);
};

// 10. Integrity & Risk Evidence Modal
window.viewRiskEvidenceModal = function(studentId) {
  const student = MOCK_DATA.integrityData.flaggedStudents.find(s => s.id === studentId);
  if (!student) return;

  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h4 style="font-size: 16px; font-weight: 800; color: #fff;">${student.studentName}</h4>
          <span style="font-size: 12px; color: var(--text-muted);">${student.studentId} &bull; Computer Networks Mid Term</span>
        </div>
        <span class="badge ${student.badgeClass}">${student.riskLevel}</span>
      </div>

      <div style="padding: 12px; background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: var(--radius-md); font-size: 12px; color: var(--text-secondary);">
        <strong style="color: #fff; display: block; margin-bottom: 2px;">Behavioral Summary:</strong>
        ${student.keyReason}
      </div>

      <div>
        <h5 style="font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 8px;">Timestamped Telemetry Timeline</h5>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          ${student.details.map(d => `
            <div style="display: flex; gap: 10px; padding: 8px 12px; background: #090d16; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 11px;">
              <span style="color: var(--brand-primary);">${d.timestamp}</span>
              <span style="color: #e2e8f0;">${d.event}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  showModal('Behavioral Telemetry & Integrity Evidence', bodyHtml, `<button class="btn btn-secondary" onclick="hideModal()">Close</button>`);
};

// --------------------------------------------------------------------------
// Admin Actions: College & Student Enrollment
// --------------------------------------------------------------------------

window.openAddCollegeModal = function() {
  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div class="form-group">
        <label class="form-label">College / Institution Name</label>
        <input type="text" class="form-input" id="newCollegeName" placeholder="e.g. School of Artificial Intelligence & Robotics">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">College Code</label>
          <input type="text" class="form-input" id="newCollegeCode" placeholder="e.g. SAIR">
        </div>
        <div class="form-group">
          <label class="form-label">Dean / Academic Head</label>
          <input type="text" class="form-input" id="newCollegeDean" placeholder="e.g. Dr. Alan Turing">
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">Initial Departments Count</label>
          <input type="number" class="form-input" id="newCollegeDepts" value="4">
        </div>
        <div class="form-group">
          <label class="form-label">Subscription Tier</label>
          <select class="form-select" id="newCollegePlan">
            <option>Enterprise Tier</option>
            <option>Standard Academic</option>
          </select>
        </div>
      </div>
    </div>
  `;

  const footerHtml = `
    <button class="btn btn-secondary" onclick="hideModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveNewCollege()">Register College</button>
  `;

  showModal('Register New College / Faculty Unit', bodyHtml, footerHtml);
};

window.saveNewCollege = function() {
  const name = document.getElementById('newCollegeName').value;
  const code = document.getElementById('newCollegeCode').value;
  const dean = document.getElementById('newCollegeDean').value;
  const depts = document.getElementById('newCollegeDepts').value;
  const plan = document.getElementById('newCollegePlan').value;

  if (!name || !code) {
    showToast('Please specify college name and code', 'danger');
    return;
  }

  MOCK_DATA.colleges.unshift({
    id: `col-${Date.now()}`,
    name,
    code: code.toUpperCase(),
    dean: dean || 'Appointed Dean',
    depts: parseInt(depts) || 3,
    professors: 12,
    students: 0,
    status: 'Active',
    plan
  });

  hideModal();
  appState.notify();
  showToast(`College "${name}" successfully registered!`, 'success');
};

window.openEnrollStudentModal = function(preselectedCollege = '') {
  const collegeOptions = MOCK_DATA.colleges.map(c => `
    <option value="${c.name}" ${preselectedCollege === c.name ? 'selected' : ''}>${c.name} (${c.code})</option>
  `).join('');

  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">Student Full Name</label>
          <input type="text" class="form-input" id="newStudentName" placeholder="e.g. Maya Lin">
        </div>
        <div class="form-group">
          <label class="form-label">Roll Number / Student ID</label>
          <input type="text" class="form-input" id="newStudentRoll" placeholder="e.g. CS2023-9104">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Student Institutional Email</label>
        <input type="email" class="form-input" id="newStudentEmail" placeholder="e.g. m.lin@stanford.edu">
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">College / Faculty</label>
          <select class="form-select" id="newStudentCollege">
            ${collegeOptions}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Department</label>
          <input type="text" class="form-input" id="newStudentDept" value="Computer Science">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Enroll into Course</label>
        <select class="form-select" id="newStudentCourse">
          <option>Computer Networks (CS-301)</option>
          <option>Data Structures & Algorithms (CS-201)</option>
          <option>Database Management Systems (CS-304)</option>
          <option>Operating Systems (CS-208)</option>
        </select>
      </div>
    </div>
  `;

  const footerHtml = `
    <button class="btn btn-secondary" onclick="hideModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveNewStudent()">Enroll Student</button>
  `;

  showModal('Enroll New Student into College', bodyHtml, footerHtml);
};

window.saveNewStudent = function() {
  const name = document.getElementById('newStudentName').value;
  const rollNo = document.getElementById('newStudentRoll').value;
  const email = document.getElementById('newStudentEmail').value;
  const college = document.getElementById('newStudentCollege').value;
  const dept = document.getElementById('newStudentDept').value;
  const course = document.getElementById('newStudentCourse').value;

  if (!name || !rollNo) {
    showToast('Please fill student name and roll number', 'danger');
    return;
  }

  MOCK_DATA.userDirectory.unshift({
    id: `usr-${Date.now()}`,
    name,
    email: email || `${rollNo.toLowerCase()}@stanford.edu`,
    rollNo: rollNo.toUpperCase(),
    role: 'Student',
    college,
    dept,
    course,
    status: 'Active'
  });

  // Update student count in corresponding college
  const matchedCol = MOCK_DATA.colleges.find(c => c.name === college);
  if (matchedCol) matchedCol.students += 1;

  hideModal();
  appState.notify();
  showToast(`Student ${name} (${rollNo}) enrolled into ${college}!`, 'success');
};

window.simulateBulkCsvImport = function() {
  showToast('Parsing CSV batch enrollment sheet (45 students)...', 'info');
  setTimeout(() => {
    MOCK_DATA.userDirectory.unshift(
      { id: `usr-${Date.now()}-1`, name: "Lucas Vance", email: "l.vance@stanford.edu", rollNo: "CS2023-8821", role: "Student", college: "School of Engineering", dept: "Computer Science", course: "Computer Networks (CS-301)", status: "Active" },
      { id: `usr-${Date.now()}-2`, name: "Chloe Dupont", email: "c.dupont@stanford.edu", rollNo: "CS2023-8902", role: "Student", college: "School of Engineering", dept: "Computer Science", course: "Computer Networks (CS-301)", status: "Active" }
    );
    appState.notify();
    showToast('Bulk import completed: 45 student accounts provisioned & enrolled!', 'success');
  }, 1000);
};

// --------------------------------------------------------------------------
// Modal & Toast Utilities
// --------------------------------------------------------------------------

function showModal(title, bodyHtml, footerHtml = '') {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalBody').innerHTML = bodyHtml;
  document.getElementById('modalFooter').innerHTML = footerHtml;
  document.getElementById('globalModalBackdrop').classList.add('open');
}

function hideModal() {
  document.getElementById('globalModalBackdrop').classList.remove('open');
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div style="font-size: 13px; font-weight: 600; color: #fff;">${message}</div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function renderNotificationsList() {
  const list = document.getElementById('notificationList');
  const badge = document.getElementById('notifCountBadge');
  const dot = document.getElementById('unreadNotifDot');

  const unread = appState.notifications.filter(n => n.unread).length;
  badge.innerText = `${unread} new`;
  dot.style.display = unread > 0 ? 'block' : 'none';

  list.innerHTML = appState.notifications.map(n => `
    <div class="notif-item ${n.unread ? 'unread' : ''}">
      <div class="notif-icon ${n.type}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/></svg>
      </div>
      <div class="notif-content">
        <p><strong>${n.title}</strong> &bull; ${n.desc}</p>
        <span class="notif-time">${n.time}</span>
      </div>
    </div>
  `).join('');
}
