# VeritasAI - Agentic RAG-Based Assessment Platform

An enterprise EdTech SaaS prototype demonstrating an end-to-end **Agentic Retrieval-Augmented Generation (RAG)** assessment lifecycle for higher education institutions.

---

## 🚀 Quick Start (Running from Scratch)

### Option 1: Direct File Launch (No dependencies needed)
1. Open the project folder in File Explorer.
2. Double-click `index.html` (or drag and drop it into Chrome, Edge, Firefox, or Safari).

### Option 2: Run via Local HTTP Server
Run any local static file server from the root directory:

**Using Python:**
```bash
python -m http.server 8080
```

**Using Node.js:**
```bash
npx serve .
```

Then open your browser at:
```
http://localhost:8080
```

---

## 🧭 Step-by-Step Demonstration Walkthrough

You can follow the complete product journey using the **Demo Flow Bar** at the top or manual navigation.

### Phase 1: Curriculum Ingestion & Ingestion Pipeline
1. **Login as Professor** (selected by default).
2. Navigate to **Curriculum** from the sidebar or click **2. Curriculum** in the top bar.
3. Click the **Upload Dropzone** to simulate uploading `Computer_Networks_Syllabus_2026.pdf`.
4. Watch the 5-stage ingestion pipeline execute:
   - File Uploaded & Validated
   - Text Extraction & OCR Parsing (148 Pages)
   - Content Chunking (1,480 Semantic Chunks)
   - Dense & Sparse BM25 Vector Embedding
   - Knowledge Graph Indexing
5. See the status transition to **Ready for Assessment Generation**.

### Phase 2: Agentic Question Generation
1. Navigate to **AI Question Generator** (or click **3. Generator**).
2. **Step 1:** Select Course (*Computer Networks CS-301*).
3. **Step 2:** Select Topics (*TCP/IP, Routing Protocols, DNS, HTTP*).
4. **Step 3:** Configure Blueprint (*20 Questions, 50 Marks, 60 Minutes, Medium Difficulty, MCQ/Coding/Subjective*).
5. **Step 4:** Adjust Topic Weight Distribution sliders.
6. Click **Generate Assessment with AI**.
7. Observe the **RAG Multi-Stage Visual Pipeline** and real-time agent telemetry stream.

### Phase 3: Grounding Verification & Self-Correction Retry
1. Click **Open Question Validation Review** (or **5. Validation**).
2. Inspect generated questions and expand the **Retrieved Syllabus Evidence** drawer to see:
   - Source document (`Computer_Networks_Syllabus_2026.pdf`)
   - Exact page number (`Page 42`)
   - Relevance score (`98%`)
   - Retrieved syllabus text
3. Review the **8-Point Validation Checklist** for each question.
4. Locate **Question #12** with status **VALIDATION FAILED (Grounding Failure)**.
5. Click **View Failure Details** to see the diagnostic root-cause analysis and prompt refinement diff.
6. Click **Retry Question (Agentic Self-Correction)**:
   - The agent loop executes prompt refinement.
   - Question #12 transforms into a grounded question with 100% syllabus alignment.
   - Status updates to **VALIDATED**.

### Phase 4: Assessment Snapshot & Publishing
1. Click **Approve All & Build Assessment** (or **7. Publish**).
2. Review the assessment configuration (30 Questions, 50 Marks, 60 Mins).
3. Click **Publish Assessment Snapshot**.
4. Inspect the **Immutable Version 1.0 Snapshot** dialog showing cryptographic hash `sha256:7f8a91b2...` and publication state for 120 enrolled students.

### Phase 5: Student Live Examination Experience
1. Switch role to **Student** in the header or click **8. Student Exam**.
2. Notice the **Live Countdown Timer** (`42:18` actively ticking down).
3. Select an answer choice:
   - Notice the green **"Answer saved ✓"** autosave pulse.
4. Navigate through questions using **Next**, **Previous**, or the **Question Navigator Palette** on the right.
5. Click **Submit Assessment**.
6. Review the confirmation modal showing answered (28) vs unanswered (2) counts.
7. Click **Confirm & Submit Assessment**.

### Phase 6: Student Grading & Solutions
1. View the **Graded Result**: Score **42 / 50 (84%)**, Grade A.
2. Inspect the **Topic-Wise Mastery Bars** (TCP/IP 90%, Routing 80%, DNS 90%, HTTP 70%).
3. Scroll through the **Solutions & AI Pedagogical Explanations** section.

### Phase 7: Professor Analytics & Integrity Telemetry
1. Switch back to **Professor** role and click **10. Analytics**:
   - Inspect cohort average score (`42.4 / 50`), highest/lowest score, and participation rate (`98.3%`).
   - Examine topic accuracy and question discrimination (`Q1` through `Q8`).
2. Click **11. Integrity** (Integrity & Risk Telemetry):
   - View categorized risk KPIs: **Low Risk: 108**, **Review Needed: 10**, **High Signals: 2**.
   - Review signal categories: *Focus Changes, Fullscreen Exits, Answer Timing, Network Telemetry, Session Anomalies*.
   - Click **View Telemetry Log** on a flagged student to inspect non-invasive timestamped telemetry events (strictly avoiding derogatory labels).

---

### Phase 8: Admin College & Student Enrollment
1. Switch role to **Admin** using the header role selector.
2. Navigate to **College Management** in the sidebar:
   - View all registered schools (e.g., *School of Engineering, School of Information Systems*).
   - Click **+ Add New College** to register a new college unit (Name, Code, Dean, Initial Depts, Subscription Tier).
3. Navigate to **User Management** in the sidebar:
   - View full directory of registered students and faculty.
   - Click **+ Enroll New Student** to add a student, assign them to a college, department, and course.
   - Click **Bulk Import CSV** to simulate batch ingestion of student rosters.

---

## 📁 Project Architecture

```
Assesment_Product/
│
├── index.html          # Main application container, role switcher & demo bar
├── README.md           # Documentation & usage guide
│
├── css/
│   └── styles.css      # Enterprise design tokens, dark slate theme, components
│
└── js/
    ├── data.js         # Realistic mock data (syllabi, evidence, questions, telemetry, colleges, users)
    ├── state.js        # Reactive state manager, role routing & exam timer bus
    ├── components.js   # UI renderers for Professor, Student & Admin screens
    └── app.js          # Main event handlers, modals, toasts, college & student enrollments
```

---

## 👥 Supported Roles

| Role | Core Capabilities |
| :--- | :--- |
| **Professor** | Upload syllabi, configure blueprints, validate RAG questions, retry hallucinated claims, publish snapshots, inspect class analytics & integrity signals. |
| **Student** | Attempt timed assessments, experience autosave, receive deterministic grading & pedagogical solutions. |
| **Admin** | Multi-tenant college management, student & faculty enrollment, vector grounding thresholds, audit trail inspection. |

---

## 🔒 Architectural Principles Demonstrated
1. **Self-Correcting Agentic RAG:** Questions failing grounding thresholds are automatically refined rather than blindly presented.
2. **Evidence-Backed Questions:** Every synthesized item includes traceable source metadata (file, page, excerpt, relevance).
3. **Deterministic Version Snapshots:** Assessments are sealed with immutable cryptographic identifiers prior to student delivery.
4. **Non-Invasive Integrity Monitoring:** Behavioral telemetry highlights unusual timing and blur events without accusatory labels.
5. **Institutional Hierarchy:** Multi-tenant college structure with individual department/course student enrollment and CSV batch ingestion.

