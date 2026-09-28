/**
 * VERITAS AI - Enterprise Agentic RAG Assessment System
 * Mock Data Engine & Datasets
 */

const MOCK_DATA = {
  // Current logged in profiles for roles
  profiles: {
    professor: {
      name: "Prof. Marcus Vance",
      roleTitle: "Professor & Academic Dean",
      dept: "Department of Computer Science",
      avatar: "MV",
      email: "m.vance@stanford.edu",
      college: "School of Engineering"
    },
    student: {
      name: "Aiden Scott",
      roleTitle: "Undergraduate (3rd Year)",
      dept: "Computer Science & Eng",
      avatar: "AS",
      studentId: "CS2023-8942",
      email: "aiden.scott@stanford.edu"
    },
    admin: {
      name: "Elena Rostova",
      roleTitle: "Chief Assessment Administrator",
      dept: "Academic Technology Council",
      avatar: "ER",
      email: "e.rostova@stanford.edu"
    }
  },

  // Courses List
  courses: [
    {
      id: "cs-301",
      code: "CS-301",
      name: "Computer Networks",
      dept: "Computer Science",
      students: 120,
      curriculumStatus: "Ready for Assessment",
      lastUpdated: "2026-09-24 10:15 AM",
      topics: [
        { id: "tcp-ip", name: "TCP/IP & Transport Layer", count: 28, indexed: true },
        { id: "routing", name: "Routing Algorithms & Protocols", count: 22, indexed: true },
        { id: "dns", name: "DNS & Application Services", count: 18, indexed: true },
        { id: "http", name: "HTTP/1.1 & HTTP/2 Protocols", count: 15, indexed: true },
        { id: "sec", name: "Network Security & Cryptography", count: 20, indexed: false }
      ],
      syllabusFiles: [
        { name: "Computer_Networks_Syllabus_2026.pdf", size: "4.8 MB", uploadedAt: "Sep 22, 2026", status: "Indexed (1,480 chunks)" },
        { name: "Transport_Layer_DeepDive_Notes.docx", size: "2.1 MB", uploadedAt: "Sep 23, 2026", status: "Indexed (620 chunks)" }
      ]
    },
    {
      id: "cs-201",
      code: "CS-201",
      name: "Data Structures & Algorithms",
      dept: "Computer Science",
      students: 145,
      curriculumStatus: "Ready for Assessment",
      lastUpdated: "2026-09-20 04:30 PM",
      topics: [
        { id: "trees", name: "Balanced Search Trees & AVL", count: 32, indexed: true },
        { id: "graphs", name: "Graph Algorithms & Traversal", count: 29, indexed: true },
        { id: "dp", name: "Dynamic Programming Paradigms", count: 24, indexed: true },
        { id: "sorting", name: "Sorting & Order Statistics", count: 19, indexed: true }
      ],
      syllabusFiles: [
        { name: "DSA_Core_Curriculum.pdf", size: "6.2 MB", uploadedAt: "Sep 18, 2026", status: "Indexed (2,100 chunks)" }
      ]
    },
    {
      id: "cs-304",
      code: "CS-304",
      name: "Database Management Systems",
      dept: "Information Systems",
      students: 98,
      curriculumStatus: "Ready for Assessment",
      lastUpdated: "2026-09-15 11:00 AM",
      topics: [
        { id: "sql", name: "Advanced SQL & Indexing", count: 25, indexed: true },
        { id: "concurrency", name: "ACID & Concurrency Control", count: 21, indexed: true },
        { id: "normalization", name: "Schema Normalization (3NF/BCNF)", count: 16, indexed: true }
      ],
      syllabusFiles: [
        { name: "DBMS_Syllabus_Coursepack.pdf", size: "5.4 MB", uploadedAt: "Sep 14, 2026", status: "Indexed (1,890 chunks)" }
      ]
    },
    {
      id: "cs-208",
      code: "CS-208",
      name: "Operating Systems",
      dept: "Computer Science",
      students: 110,
      curriculumStatus: "Ready for Assessment",
      lastUpdated: "2026-09-12 02:45 PM",
      topics: [
        { id: "virtual-memory", name: "Virtual Memory & Paging", count: 26, indexed: true },
        { id: "scheduling", name: "Process Scheduling & IPC", count: 22, indexed: true },
        { id: "deadlocks", name: "Deadlock Avoidance & Bankers", count: 17, indexed: true }
      ],
      syllabusFiles: [
        { name: "Operating_Systems_Syllabus.pdf", size: "7.1 MB", uploadedAt: "Sep 10, 2026", status: "Indexed (2,450 chunks)" }
      ]
    }
  ],

  // AI Generated Questions Suite for Review
  generatedQuestions: [
    {
      id: "q-07",
      number: 7,
      text: "Which protocol provides reliable, ordered, and error-checked delivery of a stream of octets between applications running on hosts communicating via an IP network?",
      type: "MCQ",
      topic: "TCP/IP",
      course: "Computer Networks",
      difficulty: "Medium",
      marks: 2,
      options: [
        { key: "A", text: "Internet Protocol (IP)" },
        { key: "B", text: "Transmission Control Protocol (TCP)" },
        { key: "C", text: "User Datagram Protocol (UDP)" },
        { key: "D", text: "Address Resolution Protocol (ARP)" }
      ],
      correctAnswer: "B",
      status: "VALIDATED",
      approvalStatus: "APPROVED",
      validations: {
        schema: true,
        curriculumAlignment: true,
        groundingCheck: true,
        factualValidation: true,
        answerValidation: true,
        difficultyValidation: true,
        duplicateCheck: true,
        safetyCheck: true
      },
      evidence: {
        document: "Computer_Networks_Syllabus_2026.pdf",
        page: 42,
        topic: "TCP/IP & Transport Layer",
        relevanceScore: 0.98,
        retrievedSnippet: "TCP provides reliable, connection-oriented communication by utilizing byte-stream sequencing, acknowledgment mechanisms, and sliding window flow control over unreliable IP networks."
      }
    },
    {
      id: "q-08",
      number: 8,
      text: "In the context of distance vector routing, what mechanism prevents two nodes from continuously advertising an incrementally infinite metric for an unreachable network destination?",
      type: "MCQ",
      topic: "Routing",
      course: "Computer Networks",
      difficulty: "Hard",
      marks: 3,
      options: [
        { key: "A", text: "Split Horizon with Poison Reverse" },
        { key: "B", text: "Dijkstra Shortest Path First" },
        { key: "C", text: "Flooding with Link State Packets" },
        { key: "D", text: "Border Gateway Protocol Peering" }
      ],
      correctAnswer: "A",
      status: "VALIDATED",
      approvalStatus: "APPROVED",
      validations: {
        schema: true,
        curriculumAlignment: true,
        groundingCheck: true,
        factualValidation: true,
        answerValidation: true,
        difficultyValidation: true,
        duplicateCheck: true,
        safetyCheck: true
      },
      evidence: {
        document: "Computer_Networks_Syllabus_2026.pdf",
        page: 78,
        topic: "Routing Algorithms",
        relevanceScore: 0.95,
        retrievedSnippet: "The count-to-infinity problem in Bellman-Ford/Distance-Vector algorithms is mitigated via Split Horizon and Poison Reverse, setting the infinite metric to 16 hops."
      }
    },
    {
      id: "q-09",
      number: 9,
      text: "What DNS record type is specifically used to delegate a domain zone to an authoritative name server?",
      type: "MCQ",
      topic: "DNS",
      course: "Computer Networks",
      difficulty: "Easy",
      marks: 1,
      options: [
        { key: "A", text: "A Record (IPv4 Address)" },
        { key: "B", text: "CNAME Record (Canonical Name)" },
        { key: "C", text: "NS Record (Name Server)" },
        { key: "D", text: "MX Record (Mail Exchange)" }
      ],
      correctAnswer: "C",
      status: "VALIDATED",
      approvalStatus: "APPROVED",
      validations: {
        schema: true,
        curriculumAlignment: true,
        groundingCheck: true,
        factualValidation: true,
        answerValidation: true,
        difficultyValidation: true,
        duplicateCheck: true,
        safetyCheck: true
      },
      evidence: {
        document: "Transport_Layer_DeepDive_Notes.docx",
        page: 14,
        topic: "DNS & Application Services",
        relevanceScore: 0.96,
        retrievedSnippet: "NS (Name Server) records map a subzone domain to its authoritative DNS server hostnames."
      }
    },
    {
      id: "q-10",
      number: 10,
      text: "Which header field in HTTP/1.1 is strictly required to enable persistent connections by default without reopening TCP sockets?",
      type: "MCQ",
      topic: "HTTP",
      course: "Computer Networks",
      difficulty: "Medium",
      marks: 2,
      options: [
        { key: "A", text: "Connection: keep-alive" },
        { key: "B", text: "Cache-Control: no-cache" },
        { key: "C", text: "Accept-Encoding: gzip" },
        { key: "D", text: "Host: required-domain" }
      ],
      correctAnswer: "A",
      status: "VALIDATED",
      approvalStatus: "APPROVED",
      validations: {
        schema: true,
        curriculumAlignment: true,
        groundingCheck: true,
        factualValidation: true,
        answerValidation: true,
        difficultyValidation: true,
        duplicateCheck: true,
        safetyCheck: true
      },
      evidence: {
        document: "Computer_Networks_Syllabus_2026.pdf",
        page: 112,
        topic: "HTTP Protocols",
        relevanceScore: 0.93,
        retrievedSnippet: "HTTP/1.1 introduces persistent TCP connections through the Connection: keep-alive mechanism to reuse sockets across consecutive HTTP requests."
      }
    },
    // The Dedicated Validation Failure Case (Question #12)
    {
      id: "q-12",
      number: 12,
      text: "According to the course syllabus, what is the exact default socket buffer size allocated by QuantumTunnel v5 for high-bandwidth satellite uplinks?",
      type: "MCQ",
      topic: "TCP/IP",
      course: "Computer Networks",
      difficulty: "Hard",
      marks: 3,
      options: [
        { key: "A", text: "512 KB Buffer Pool" },
        { key: "B", text: "2048 KB Ring Buffer" },
        { key: "C", text: "1024 KB Dynamic Window" },
        { key: "D", text: "128 KB Static Memory" }
      ],
      correctAnswer: "B",
      status: "VALIDATION FAILED",
      failureReason: "Grounding Failure",
      failureDetails: "The generated claim 'QuantumTunnel v5 satellite uplink socket buffer size' could not be grounded or supported by the uploaded curriculum material (Computer_Networks_Syllabus_2026.pdf). Hallucinated external entity detected.",
      approvalStatus: "REQUIRES_REVIEW",
      hasRetried: false,
      validations: {
        schema: true,
        curriculumAlignment: false,
        groundingCheck: false,
        factualValidation: false,
        answerValidation: true,
        difficultyValidation: true,
        duplicateCheck: true,
        safetyCheck: true
      },
      evidence: {
        document: "Computer_Networks_Syllabus_2026.pdf",
        page: 54,
        topic: "TCP/IP",
        relevanceScore: 0.42,
        retrievedSnippet: "[Low Confidence Match] ...Standard TCP socket buffer sizes in BSD sockets default to 64KB for general socket buffers... (No mention of QuantumTunnel v5 in syllabus)."
      },
      retryData: {
        refinedPrompt: "Extract strictly syllabus-grounded TCP Flow Control buffer sizing concepts from Chapter 4 (Syllabus p.54). Do not introduce proprietary protocols.",
        refinedQuestionText: "In standard TCP sliding window flow control as specified in RFC 793 and the syllabus, how does the receiver signal that its buffer is full?",
        refinedOptions: [
          { key: "A", text: "Advertises a Receive Window (rwnd) size of 0" },
          { key: "B", text: "Transmits an ICMP Source Quench datagram" },
          { key: "C", text: "Sets the FIN flag in the TCP header" },
          { key: "D", text: "Emits a Reset (RST) packet immediately" }
        ],
        refinedCorrectAnswer: "A",
        refinedEvidence: {
          document: "Computer_Networks_Syllabus_2026.pdf",
          page: 55,
          topic: "TCP/IP & Transport Layer",
          relevanceScore: 0.99,
          retrievedSnippet: "When the TCP receiving buffer is completely filled, the receiver advertises rwnd = 0 in its ACK segment, halting transmission from the sender until buffer space is reclaimed."
        }
      }
    }
  ],

  // Question Bank Master Database
  questionBank: [
    {
      id: "qb-101",
      text: "Which protocol provides reliable transmission over packet-switched IP networks?",
      topic: "TCP/IP",
      course: "Computer Networks",
      type: "MCQ",
      difficulty: "Medium",
      marks: 2,
      validation: "VALIDATED",
      status: "Approved",
      createdDate: "2026-09-24"
    },
    {
      id: "qb-102",
      text: "Explain how TCP three-way handshake establishes a synchronized sequence number exchange.",
      topic: "TCP/IP",
      course: "Computer Networks",
      type: "Subjective",
      difficulty: "Hard",
      marks: 5,
      validation: "VALIDATED",
      status: "Approved",
      createdDate: "2026-09-24"
    },
    {
      id: "qb-103",
      text: "What is the primary difference between OSPF (Link State) and RIP (Distance Vector)?",
      topic: "Routing",
      course: "Computer Networks",
      type: "MCQ",
      difficulty: "Medium",
      marks: 2,
      validation: "VALIDATED",
      status: "Approved",
      createdDate: "2026-09-23"
    },
    {
      id: "qb-104",
      text: "Implement a circular queue buffer in C++ to handle incoming UDP datagram queues.",
      topic: "TCP/IP",
      course: "Computer Networks",
      type: "Coding",
      difficulty: "Hard",
      marks: 10,
      validation: "VALIDATED",
      status: "Approved",
      createdDate: "2026-09-22"
    },
    {
      id: "qb-105",
      text: "How does DNS caching at recursive resolvers decrease authoritative root server latency?",
      topic: "DNS",
      course: "Computer Networks",
      type: "Subjective",
      difficulty: "Easy",
      marks: 3,
      validation: "VALIDATED",
      status: "Approved",
      createdDate: "2026-09-21"
    },
    {
      id: "qb-106",
      text: "Calculate the time complexity of balancing an AVL tree after insertion.",
      topic: "Balanced Search Trees",
      course: "Data Structures & Algorithms",
      type: "MCQ",
      difficulty: "Medium",
      marks: 2,
      validation: "VALIDATED",
      status: "Approved",
      createdDate: "2026-09-20"
    },
    {
      id: "qb-107",
      text: "Which SQL isolation level prevents dirty reads, non-repeatable reads, and phantom reads?",
      topic: "ACID & Concurrency Control",
      course: "Database Management Systems",
      type: "MCQ",
      difficulty: "Hard",
      marks: 3,
      validation: "VALIDATED",
      status: "Approved",
      createdDate: "2026-09-18"
    }
  ],

  // Published Assessments
  assessments: [
    {
      id: "asm-cn-mid",
      code: "CN-MID-01",
      title: "Computer Networks Mid Term",
      course: "Computer Networks",
      courseCode: "CS-301",
      questionsCount: 30,
      totalMarks: 50,
      durationMinutes: 60,
      status: "Published",
      snapshotVersion: "Version 1.0",
      snapshotHash: "sha256:7f8a91b2c3d4e5f6...",
      approvedBy: "Prof. Marcus Vance",
      createdDate: "2026-09-25",
      scheduledDate: "Today, 13:00 - 15:00 UTC",
      studentsAssigned: 120,
      studentsSubmitted: 118,
      avgScore: 42.4
    },
    {
      id: "asm-dsa-quiz",
      code: "DSA-QZ-02",
      title: "Graph Traversal & DP Sprint",
      course: "Data Structures & Algorithms",
      courseCode: "CS-201",
      questionsCount: 15,
      totalMarks: 30,
      durationMinutes: 45,
      status: "Published",
      snapshotVersion: "Version 1.2",
      snapshotHash: "sha256:3a1c89f0e1b2...",
      approvedBy: "Prof. Marcus Vance",
      createdDate: "2026-09-21",
      scheduledDate: "Sep 27, 2026",
      studentsAssigned: 145,
      studentsSubmitted: 0,
      avgScore: null
    },
    {
      id: "asm-db-review",
      code: "DBMS-REV-01",
      title: "Database Normalization & ACID Test",
      course: "Database Management Systems",
      courseCode: "CS-304",
      questionsCount: 25,
      totalMarks: 50,
      durationMinutes: 60,
      status: "Under Review",
      snapshotVersion: "Draft v0.9",
      snapshotHash: "Pending Approval",
      approvedBy: "Unapproved",
      createdDate: "2026-09-24",
      scheduledDate: "Oct 02, 2026",
      studentsAssigned: 98,
      studentsSubmitted: 0,
      avgScore: null
    }
  ],

  // Live Exam Question Set for Aiden Scott
  studentExamQuestions: [
    {
      id: "exam-q-1",
      number: 1,
      topic: "TCP/IP",
      text: "Which layer of the OSI reference model is responsible for end-to-end process-to-process communication and flow control?",
      options: [
        { key: "A", text: "Network Layer" },
        { key: "B", text: "Transport Layer" },
        { key: "C", text: "Data Link Layer" },
        { key: "D", text: "Session Layer" }
      ],
      correctKey: "B",
      userAnswer: "B"
    },
    {
      id: "exam-q-2",
      number: 2,
      topic: "TCP/IP",
      text: "What is the primary role of the SYN-ACK packet in TCP connection establishment?",
      options: [
        { key: "A", text: "Terminates the socket gracefully" },
        { key: "B", text: "Acknowledges client SYN and initiates server sequence synchronization" },
        { key: "C", text: "Forces window resize to zero" },
        { key: "D", text: "Transmits encrypted payload" }
      ],
      correctKey: "B",
      userAnswer: "B"
    },
    {
      id: "exam-q-3",
      number: 3,
      topic: "Routing",
      text: "Which routing protocol utilizes the Bellman-Ford equation to compute distance vectors?",
      options: [
        { key: "A", text: "Routing Information Protocol (RIP)" },
        { key: "B", text: "Open Shortest Path First (OSPF)" },
        { key: "C", text: "Intermediate System to Intermediate System (IS-IS)" },
        { key: "D", text: "Border Gateway Protocol (BGP)" }
      ],
      correctKey: "A",
      userAnswer: "A"
    },
    {
      id: "exam-q-4",
      number: 4,
      topic: "Routing",
      text: "In Link-State routing, what algorithm calculates the least-cost path from one node to all other network nodes?",
      options: [
        { key: "A", text: "Floyd-Warshall Algorithm" },
        { key: "B", text: "Dijkstra's Algorithm" },
        { key: "C", text: "Prim's Minimum Spanning Tree" },
        { key: "D", text: "Kruskal's Algorithm" }
      ],
      correctKey: "B",
      userAnswer: "B"
    },
    {
      id: "exam-q-5",
      number: 5,
      topic: "DNS",
      text: "Which top-level domain entity handles '.edu' and '.gov' name resolutions?",
      options: [
        { key: "A", text: "Authoritative Name Servers" },
        { key: "B", text: "Root Name Servers" },
        { key: "C", text: "TLD (Top-Level Domain) Servers" },
        { key: "D", text: "Local Caching Resolver" }
      ],
      correctKey: "C",
      userAnswer: "C"
    },
    {
      id: "exam-q-6",
      number: 6,
      topic: "DNS",
      text: "What port number does the DNS protocol standardly bind for UDP queries?",
      options: [
        { key: "A", text: "Port 22" },
        { key: "B", text: "Port 53" },
        { key: "C", text: "Port 80" },
        { key: "D", text: "Port 443" }
      ],
      correctKey: "B",
      userAnswer: "B"
    },
    {
      id: "exam-q-7",
      number: 7,
      topic: "TCP/IP",
      text: "Which protocol provides reliable, ordered, and error-checked delivery of octets across IP networks?",
      options: [
        { key: "A", text: "Internet Protocol (IP)" },
        { key: "B", text: "Transmission Control Protocol (TCP)" },
        { key: "C", text: "User Datagram Protocol (UDP)" },
        { key: "D", text: "Address Resolution Protocol (ARP)" }
      ],
      correctKey: "B",
      userAnswer: "B"
    },
    {
      id: "exam-q-8",
      number: 8,
      topic: "HTTP",
      text: "Which HTTP status code indicates that the requested resource has been permanently moved to a new URI?",
      options: [
        { key: "A", text: "200 OK" },
        { key: "B", text: "301 Moved Permanently" },
        { key: "C", text: "302 Found" },
        { key: "D", text: "404 Not Found" }
      ],
      correctKey: "B",
      userAnswer: "B"
    }
  ],

  // Student Completed Result Summary
  studentResult: {
    assessmentTitle: "Computer Networks Mid Term",
    course: "Computer Networks (CS-301)",
    studentName: "Aiden Scott",
    studentId: "CS2023-8942",
    score: 42,
    totalMarks: 50,
    percentage: 84,
    correctCount: 25,
    incorrectCount: 5,
    unansweredCount: 0,
    timeTaken: "48 mins 12 secs",
    submittedAt: "2026-09-25 13:48:12",
    topicPerformance: [
      { topic: "TCP/IP & Transport", score: 90, total: 100 },
      { topic: "Routing Protocols", score: 80, total: 100 },
      { topic: "DNS Architecture", score: 90, total: 100 },
      { topic: "HTTP/1.1 & HTTP/2", score: 70, total: 100 }
    ],
    solutions: [
      {
        qNum: 1,
        question: "Which layer of the OSI reference model is responsible for end-to-end process communication?",
        chosen: "B. Transport Layer",
        correct: "B. Transport Layer",
        isCorrect: true,
        explanation: "The Transport Layer handles process-to-process addressing (ports), flow control, and end-to-end error checking."
      },
      {
        qNum: 7,
        question: "Which protocol provides reliable, ordered, and error-checked delivery of octets across IP networks?",
        chosen: "B. Transmission Control Protocol (TCP)",
        correct: "B. Transmission Control Protocol (TCP)",
        isCorrect: true,
        explanation: "TCP establishes connection state, validates ACKs, and retransmits lost packets to guarantee reliability."
      },
      {
        qNum: 12,
        question: "How does the TCP receiver signal that its buffer is full in sliding window flow control?",
        chosen: "A. Advertises a Receive Window (rwnd) size of 0",
        correct: "A. Advertises a Receive Window (rwnd) size of 0",
        isCorrect: true,
        explanation: "Setting rwnd = 0 informs the transmitter that no incoming payload bytes can currently be buffered."
      }
    ]
  },

  // Class-wide Professor Analytics
  analytics: {
    course: "Computer Networks (CS-301)",
    assessment: "Computer Networks Mid Term",
    metrics: {
      averageScore: 42.4,
      highestScore: 50,
      lowestScore: 28,
      participationRate: 98.3,
      totalStudents: 120,
      submissions: 118
    },
    topicProficiency: [
      { topic: "TCP/IP", rate: 88 },
      { topic: "Routing", rate: 71 },
      { topic: "DNS", rate: 84 },
      { topic: "HTTP", rate: 63 }
    ],
    questionAccuracy: [
      { q: "Q1", rate: 92, difficulty: "Easy", topic: "TCP/IP" },
      { q: "Q2", rate: 84, difficulty: "Medium", topic: "TCP/IP" },
      { q: "Q3", rate: 41, difficulty: "Hard", topic: "Routing" },
      { q: "Q4", rate: 87, difficulty: "Medium", topic: "DNS" },
      { q: "Q5", rate: 68, difficulty: "Medium", topic: "HTTP" },
      { q: "Q6", rate: 79, difficulty: "Easy", topic: "DNS" },
      { q: "Q7", rate: 94, difficulty: "Medium", topic: "TCP/IP" },
      { q: "Q8", rate: 58, difficulty: "Hard", topic: "Routing" }
    ],
    scoreDistribution: [
      { bracket: "0-20", count: 0 },
      { bracket: "21-30", count: 4 },
      { bracket: "31-40", count: 28 },
      { bracket: "41-45", count: 56 },
      { bracket: "46-50", count: 30 }
    ],
    studentPerformanceList: [
      { name: "Aiden Scott", id: "CS2023-8942", score: 42, percentage: "84%", time: "48m", status: "Graded" },
      { name: "Sophia Martinez", id: "CS2023-8910", score: 48, percentage: "96%", time: "52m", status: "Graded" },
      { name: "Liam Chen", id: "CS2023-8874", score: 39, percentage: "78%", time: "58m", status: "Graded" },
      { name: "Emma Watson", id: "CS2023-8931", score: 45, percentage: "90%", time: "44m", status: "Graded" },
      { name: "Noah Patel", id: "CS2023-8865", score: 32, percentage: "64%", time: "59m", status: "Graded" }
    ]
  },

  // Integrity & Risk Signals Telemetry
  integrityData: {
    summary: {
      totalStudents: 120,
      lowRisk: 108,
      reviewNeeded: 10,
      highSignals: 2
    },
    signalCategories: [
      { key: "focus", name: "Focus & Window Changes", count: 8, desc: "Tab switching or backgrounding exam window" },
      { key: "fullscreen", name: "Fullscreen Exits", count: 4, desc: "Exiting enforced browser fullscreen viewport" },
      { key: "timing", name: "Answer Timing Anomalies", count: 6, desc: "Complex 3-mark questions solved under 3.2s" },
      { key: "network", name: "Network Telemetry Shifts", count: 3, desc: "Multiple IP handoffs during active session" },
      { key: "session", name: "Concurrent Session Anomalies", count: 1, desc: "Secondary auth handshake attempt" },
      { key: "similarity", name: "Answer Pattern Similarity", count: 2, desc: "Identical sequence of erroneous distractors" }
    ],
    flaggedStudents: [
      {
        id: "risk-01",
        studentName: "Lucas Vance",
        studentId: "CS2023-8821",
        riskLevel: "High Signals",
        badgeClass: "badge-danger",
        signalsDetected: 4,
        keyReason: "4 Window blur events & rapid timing anomaly on Q12",
        details: [
          { timestamp: "13:22:10", event: "Browser window blur / Focus change (Duration: 14s)" },
          { timestamp: "13:24:05", event: "Fullscreen mode exited (Restored after 8s)" },
          { timestamp: "13:31:40", event: "Answer saved for 3-mark Hard question in 2.8s" },
          { timestamp: "13:42:15", event: "IP address subnet change detected" }
        ]
      },
      {
        id: "risk-02",
        studentName: "Chloe Dupont",
        studentId: "CS2023-8902",
        riskLevel: "High Signals",
        badgeClass: "badge-danger",
        signalsDetected: 3,
        keyReason: "Dual monitor focus shifts & high distractor similarity with CS2023-8819",
        details: [
          { timestamp: "13:15:30", event: "Repeated cursor loss to secondary display" },
          { timestamp: "13:38:00", event: "Answer vector 94% correlated with adjacent peer" },
          { timestamp: "13:44:10", event: "Clipboard paste shortcut triggered in notes area" }
        ]
      },
      {
        id: "risk-03",
        studentName: "Oliver Kahn",
        studentId: "CS2023-8799",
        riskLevel: "Review Needed",
        badgeClass: "badge-warning",
        signalsDetected: 2,
        keyReason: "Unusual latency burst and 1 tab switch during section 2",
        details: [
          { timestamp: "13:18:22", event: "Window blur event (Duration: 3s)" },
          { timestamp: "13:29:10", event: "Packet retransmission burst over 1500ms" }
        ]
      },
      {
        id: "risk-04",
        studentName: "Maya Lin",
        studentId: "CS2023-8854",
        riskLevel: "Review Needed",
        badgeClass: "badge-warning",
        signalsDetected: 1,
        keyReason: "Single fullscreen toggle during diagram magnification",
        details: [
          { timestamp: "13:33:04", event: "Fullscreen exit to inspect OS scaling settings" }
        ]
      }
    ]
  },

  // Audit Logs
  auditLogs: [
    { timestamp: "2026-09-25 10:42 AM", user: "Prof. Marcus Vance", action: "Approved Question #12 (Self-Corrected)", resource: "Computer Networks / TCP/IP", status: "Success" },
    { timestamp: "2026-09-25 10:35 AM", user: "Prof. Marcus Vance", action: "Published Assessment Snapshot v1.0", resource: "CN-MID-01", status: "Success" },
    { timestamp: "2026-09-25 10:28 AM", user: "Agentic RAG Engine", action: "Completed Self-Correction & Grounding Retry", resource: "Question #12", status: "Validated" },
    { timestamp: "2026-09-25 10:22 AM", user: "Agentic RAG Engine", action: "Flagged Grounding Failure (Hallucination)", resource: "Question #12", status: "Warning" },
    { timestamp: "2026-09-25 10:15 AM", user: "Prof. Marcus Vance", action: "Executed Agentic Question Blueprint Generation", resource: "CS-301 (20 Questions)", status: "Success" },
    { timestamp: "2026-09-25 09:50 AM", user: "Prof. Marcus Vance", action: "Indexed Curriculum Document", resource: "Computer_Networks_Syllabus_2026.pdf", status: "Success" },
    { timestamp: "2026-09-24 04:12 PM", user: "Elena Rostova (Admin)", action: "Updated System RAG Grounding Threshold to 0.85", resource: "Agentic Policy Config", status: "Success" }
  ],

  // Admin Colleges Database
  colleges: [
    { id: "col-1", name: "School of Engineering & Applied Sciences", code: "SEAS", dean: "Dr. Robert Sterling", depts: 6, professors: 84, students: 2850, status: "Active", plan: "Enterprise Tier" },
    { id: "col-2", name: "School of Information Systems", code: "SIS", dean: "Dr. Patricia Chen", depts: 4, professors: 42, students: 1420, status: "Active", plan: "Enterprise Tier" },
    { id: "col-3", name: "College of Computing & Data Science", code: "CCDS", dean: "Dr. Jonathan Hayes", depts: 5, professors: 65, students: 2100, status: "Active", plan: "Enterprise Tier" },
    { id: "col-4", name: "Department of Mathematics & Statistics", code: "MATH", dean: "Dr. Sarah Al-Mansoor", depts: 3, professors: 38, students: 980, status: "Active", plan: "Standard Academic" }
  ],

  // Admin Users & Students Database
  userDirectory: [
    { id: "usr-1", name: "Aiden Scott", email: "aiden.scott@stanford.edu", rollNo: "CS2023-8942", role: "Student", college: "School of Engineering", dept: "Computer Science", course: "Computer Networks (CS-301)", status: "Active" },
    { id: "usr-2", name: "Sophia Martinez", email: "s.martinez@stanford.edu", rollNo: "CS2023-8910", role: "Student", college: "School of Engineering", dept: "Computer Science", course: "Computer Networks (CS-301)", status: "Active" },
    { id: "usr-3", name: "Liam Chen", email: "liam.chen@stanford.edu", rollNo: "CS2023-8874", role: "Student", college: "School of Engineering", dept: "Computer Science", course: "Data Structures (CS-201)", status: "Active" },
    { id: "usr-4", name: "Emma Watson", email: "e.watson@stanford.edu", rollNo: "CS2023-8931", role: "Student", college: "School of Information Systems", dept: "Information Systems", course: "DBMS (CS-304)", status: "Active" },
    { id: "usr-5", name: "Prof. Marcus Vance", email: "m.vance@stanford.edu", rollNo: "FAC-8812", role: "Professor", college: "School of Engineering", dept: "Computer Science", course: "CS-301, CS-201", status: "Active" }
  ],

  // System Notifications
  notifications: [
    { id: "n1", type: "success", title: "Assessment Published", desc: "Computer Networks Mid Term v1.0 snapshot published for 120 enrolled students.", time: "15 mins ago", unread: true },
    { id: "n2", type: "warning", title: "Grounding Validation Alert", desc: "Question #12 flagged during RAG verification. Automatic retry generated grounded revision.", time: "30 mins ago", unread: true },
    { id: "n3", type: "info", title: "Curriculum Knowledge Graph Ready", desc: "1,480 chunks indexed with hybrid embeddings for CS-301.", time: "1 hour ago", unread: true },
    { id: "n4", type: "info", title: "Student Submission Received", desc: "Aiden Scott completed Computer Networks Mid Term (Score: 42/50).", time: "2 hours ago", unread: false }
  ]
};
