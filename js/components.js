/**
 * VERITAS AI - UI Component Renderers & Views
 */

const Components = {
  // Navigation Sidebar Links by Role
  getSidebarNav(role) {
    if (role === 'professor') {
      return [
        { id: 'dashboard', label: 'Dashboard', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>' },
        { id: 'courses', label: 'Courses', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>' },
        { id: 'curriculum', label: 'Curriculum', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>', badge: 'Ready' },
        { id: 'generator', label: 'AI Question Generator', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>', badge: 'RAG' },
        { id: 'question-review', label: 'Question Validation', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>', badge: '1 Action' },
        { id: 'question-bank', label: 'Question Bank', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10M7 12h10M7 16h10"/></svg>' },
        { id: 'builder', label: 'Assessments', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1"/></svg>' },
        { id: 'analytics', label: 'Analytics', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>' },
        { id: 'integrity', label: 'Integrity & Risk', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', badge: '2 Signals' },
        { id: 'audit-logs', label: 'Audit Logs', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
        { id: 'settings', label: 'Settings', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' }
      ];
    } else if (role === 'student') {
      return [
        { id: 'student-dashboard', label: 'Dashboard', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>' },
        { id: 'student-exam', label: 'Active Assessment', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>', badge: 'Live' },
        { id: 'student-results', label: 'Results & Solutions', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>' }
      ];
    } else {
      return [
        { id: 'admin-overview', label: 'Overview', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>' },
        { id: 'admin-colleges', label: 'College Management', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M5 21V10.85M19 21V10.85M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/></svg>' },
        { id: 'admin-users', label: 'User Management', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
        { id: 'admin-audit', label: 'System Audit Logs', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' }
      ];
    }
  },

  // 1. Professor Dashboard
  renderProfessorDashboard() {
    return `
      <div class="dashboard-wrapper">
        <!-- Welcome Banner -->
        <div class="card" style="margin-bottom: 24px; background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(30, 41, 59, 0.8) 100%); border-color: rgba(99, 102, 241, 0.25);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="badge badge-brand" style="margin-bottom: 8px;">Stanford University &bull; Fall Semester 2026</span>
              <h2 style="font-size: 22px; font-weight: 800; color: #fff;">Welcome back, Prof. Marcus Vance</h2>
              <p style="color: var(--text-secondary); font-size: 13px; margin-top: 4px;">
                Agentic RAG assessment engine is active. Curriculum indexing is up-to-date across 4 registered courses.
              </p>
            </div>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-secondary" onclick="appState.setView('curriculum')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                Upload Curriculum
              </button>
              <button class="btn btn-primary" onclick="appState.setView('generator')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                Generate Questions
              </button>
            </div>
          </div>
        </div>

        <!-- 4 KPI Metrics -->
        <div class="grid-4">
          <div class="metric-card">
            <div class="metric-card-top">
              <span class="metric-title">Total Courses</span>
              <div class="metric-icon-wrap" style="background: rgba(99, 102, 241, 0.15); color: var(--brand-primary);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
              </div>
            </div>
            <div class="metric-value">4</div>
            <div class="metric-trend up"><span>&uarr; 100% indexed</span></div>
          </div>

          <div class="metric-card">
            <div class="metric-card-top">
              <span class="metric-title">Total Questions</span>
              <div class="metric-icon-wrap" style="background: rgba(16, 185, 129, 0.15); color: var(--status-success);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10M7 12h10M7 16h10"/></svg>
              </div>
            </div>
            <div class="metric-value">142</div>
            <div class="metric-trend up"><span>&uarr; 94% validated</span></div>
          </div>

          <div class="metric-card">
            <div class="metric-card-top">
              <span class="metric-title">Active Assessments</span>
              <div class="metric-icon-wrap" style="background: rgba(245, 158, 11, 0.15); color: var(--status-warning);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
            </div>
            <div class="metric-value">3</div>
            <div class="metric-trend"><span>1 live midterm</span></div>
          </div>

          <div class="metric-card">
            <div class="metric-card-top">
              <span class="metric-title">Total Students</span>
              <div class="metric-icon-wrap" style="background: rgba(6, 182, 212, 0.15); color: var(--status-info);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              </div>
            </div>
            <div class="metric-value">473</div>
            <div class="metric-trend up"><span>&uarr; 98.3% participation</span></div>
          </div>
        </div>

        <!-- AI Activity Section & Quick Actions -->
        <div class="grid-2-1">
          <div class="card">
            <div class="card-header">
              <div>
                <h3 class="card-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  Agentic AI Generation & Validation Telemetry
                </h3>
                <p class="card-subtitle">Real-time stats from self-correcting RAG pipeline</p>
              </div>
              <span class="badge badge-success">Engine Healthy</span>
            </div>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 16px;">
              <div style="background: var(--bg-surface-subtle); padding: 14px; border-radius: var(--radius-md); text-align: center;">
                <div style="font-size: 20px; font-weight: 800; color: #fff;">180</div>
                <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Questions Generated</div>
              </div>
              <div style="background: var(--bg-surface-subtle); padding: 14px; border-radius: var(--radius-md); text-align: center;">
                <div style="font-size: 20px; font-weight: 800; color: var(--status-success);">168</div>
                <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Passed Validation</div>
              </div>
              <div style="background: var(--bg-surface-subtle); padding: 14px; border-radius: var(--radius-md); text-align: center;">
                <div style="font-size: 20px; font-weight: 800; color: var(--status-warning);">12</div>
                <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Required Review</div>
              </div>
              <div style="background: var(--bg-surface-subtle); padding: 14px; border-radius: var(--radius-md); text-align: center;">
                <div style="font-size: 20px; font-weight: 800; color: var(--brand-primary);">8</div>
                <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Snapshots Created</div>
              </div>
            </div>

            <div style="background: #090d16; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px; font-family: var(--font-mono); font-size: 11px;">
              <div style="color: var(--status-success);">[RAG-ENGINE] ✓ Grounding verification benchmark: 98.2% factual precision</div>
              <div style="color: var(--brand-primary);">[RAG-ENGINE] ✓ 1,480 syllabus chunks indexed with hybrid embeddings (Dense + BM25)</div>
              <div style="color: var(--status-warning);">[AGENT-LOOP] ℹ Self-correction module resolved 1 grounding failure automatically</div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Quick Actions</h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div class="quick-action-card" onclick="appState.setView('builder')">
                <div class="qa-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></div>
                <div class="qa-content">
                  <h5>Create Assessment</h5>
                  <p>Build and snapshot from Question Bank</p>
                </div>
              </div>
              <div class="quick-action-card" onclick="appState.setView('curriculum')">
                <div class="qa-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></div>
                <div class="qa-content">
                  <h5>Upload Curriculum</h5>
                  <p>Index PDF/DOC syllabus materials</p>
                </div>
              </div>
              <div class="quick-action-card" onclick="appState.setView('generator')">
                <div class="qa-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg></div>
                <div class="qa-content">
                  <h5>Generate Questions</h5>
                  <p>Launch 4-step Agentic RAG generator</p>
                </div>
              </div>
              <div class="quick-action-card" onclick="appState.setView('analytics')">
                <div class="qa-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg></div>
                <div class="qa-content">
                  <h5>View Analytics</h5>
                  <p>Inspect class score curves & telemetry</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Assessments Table -->
        <div class="data-table-container">
          <div class="table-toolbar">
            <h3 class="card-title">Recent Assessments</h3>
            <button class="btn btn-sm btn-primary" onclick="appState.setView('builder')">+ New Assessment</button>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Assessment Name</th>
                <th>Course</th>
                <th>Enrolled / Submitted</th>
                <th>Status</th>
                <th>Average Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${MOCK_DATA.assessments.map(a => `
                <tr>
                  <td style="font-weight: 700; color: #fff;">${a.title}</td>
                  <td>${a.course} (${a.courseCode})</td>
                  <td>${a.studentsAssigned} / ${a.studentsSubmitted}</td>
                  <td>
                    <span class="badge ${a.status === 'Published' ? 'badge-success' : a.status === 'Under Review' ? 'badge-warning' : 'badge-subtle'}">
                      ${a.status}
                    </span>
                  </td>
                  <td style="font-weight: 700; color: #fff;">${a.avgScore ? a.avgScore + ' / ' + a.totalMarks : '&mdash;'}</td>
                  <td>
                    <div style="display: flex; gap: 6px;">
                      <button class="btn btn-sm btn-secondary" onclick="appState.setView('analytics')">Analytics</button>
                      <button class="btn btn-sm btn-outline" onclick="appState.setView('builder')">Snapshot</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 2. Courses & Curriculum Management
  renderCoursesPage() {
    return `
      <div class="courses-wrapper">
        <div class="card-header" style="margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 20px; font-weight: 800; color: #fff;">Department Courses</h2>
            <p style="color: var(--text-secondary); font-size: 13px;">Manage course syllabi, curriculum chunking, and topic embeddings.</p>
          </div>
          <button class="btn btn-primary" onclick="appState.setView('curriculum')">+ Upload Curriculum</button>
        </div>

        <div class="grid-2">
          ${MOCK_DATA.courses.map(c => `
            <div class="card">
              <div class="card-header">
                <div>
                  <span class="badge badge-brand" style="margin-bottom: 6px;">${c.code} &bull; ${c.dept}</span>
                  <h3 style="font-size: 18px; font-weight: 800; color: #fff;">${c.name}</h3>
                </div>
                <span class="badge badge-success">${c.curriculumStatus}</span>
              </div>

              <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-secondary); margin-bottom: 16px; padding: 8px 12px; background: var(--bg-surface-subtle); border-radius: var(--radius-sm);">
                <span><strong>Students:</strong> ${c.students}</span>
                <span><strong>Last Updated:</strong> ${c.lastUpdated}</span>
              </div>

              <div style="margin-bottom: 16px;">
                <div style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">Active Curriculum Topics</div>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                  ${c.topics.map(t => `
                    <span class="rag-pill" style="display: flex; align-items: center; gap: 6px;">
                      <span style="width: 6px; height: 6px; border-radius: 50%; background: ${t.indexed ? 'var(--status-success)' : 'var(--status-warning)'};"></span>
                      ${t.name} (${t.count} items)
                    </span>
                  `).join('')}
                </div>
              </div>

              <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
                <button class="btn btn-sm btn-secondary" onclick="appState.setView('curriculum')">View Syllabus Files</button>
                <button class="btn btn-sm btn-primary" onclick="appState.setView('generator')">Generate Assessment</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // 3. Curriculum Upload Simulation Screen
  renderCurriculumPage() {
    return `
      <div class="curriculum-wrapper" style="max-width: 900px; margin: 0 auto;">
        <div class="card" style="margin-bottom: 24px;">
          <div class="card-header">
            <div>
              <h2 style="font-size: 18px; font-weight: 800; color: #fff;">Upload Curriculum Material</h2>
              <p style="color: var(--text-secondary); font-size: 13px;">Upload syllabus files to parse, chunk, embed, and index into the RAG vector store.</p>
            </div>
            <span class="badge badge-brand">Computer Networks (CS-301)</span>
          </div>

          <!-- Drag and Drop Zone -->
          <div class="upload-dropzone" id="curriculumDropzone" onclick="simulateFileUpload()">
            <div class="upload-icon-circle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            </div>
            <h4 style="font-size: 15px; font-weight: 700; color: #fff;">Drag and drop curriculum files or click to browse</h4>
            <p style="font-size: 12px; color: var(--text-muted);">Supports PDF, PPT, PPTX, DOCX, Markdown, and Lecture Notes up to 50MB</p>
            <div class="file-type-tags">
              <span class="badge badge-subtle">PDF Syllabus</span>
              <span class="badge badge-subtle">PowerPoint Slides</span>
              <span class="badge badge-subtle">DOCX Notes</span>
              <span class="badge badge-subtle">Markdown Transcripts</span>
            </div>
          </div>

          <!-- 5-Stage Document Processing Pipeline -->
          <div style="margin-top: 24px;">
            <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 12px; color: #fff;">Document Processing & Ingestion Status</h4>
            <div class="pipeline-stepper" id="pipelineStepper">
              <div class="pipeline-step-item completed">
                <div class="pipeline-step-icon">&check;</div>
                <div class="pipeline-step-name">1. File Uploaded & Validated (Computer_Networks_Syllabus_2026.pdf)</div>
                <div class="pipeline-step-status" style="color: var(--status-success);">Completed</div>
              </div>
              <div class="pipeline-step-item completed">
                <div class="pipeline-step-icon">&check;</div>
                <div class="pipeline-step-name">2. Text Extraction & OCR Parsing (148 Pages Extracted)</div>
                <div class="pipeline-step-status" style="color: var(--status-success);">Completed</div>
              </div>
              <div class="pipeline-step-item completed">
                <div class="pipeline-step-icon">&check;</div>
                <div class="pipeline-step-name">3. Content Chunking (1,480 Semantic Chunks with 20% Overlap)</div>
                <div class="pipeline-step-status" style="color: var(--status-success);">Completed</div>
              </div>
              <div class="pipeline-step-item completed">
                <div class="pipeline-step-icon">&check;</div>
                <div class="pipeline-step-name">4. Embedding Generation (1536-dim Dense + Sparse BM25 Vectors)</div>
                <div class="pipeline-step-status" style="color: var(--status-success);">Completed</div>
              </div>
              <div class="pipeline-step-item completed">
                <div class="pipeline-step-icon">&check;</div>
                <div class="pipeline-step-name">5. Knowledge Graph & Topic Indexing</div>
                <div class="pipeline-step-status" style="color: var(--status-success);">Completed</div>
              </div>
            </div>

            <!-- Ready for Assessment Badge -->
            <div style="margin-top: 18px; padding: 14px 20px; background: var(--status-success-bg); border: 1px solid var(--status-success-border); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: var(--status-success);"></span>
                <span style="font-weight: 700; color: var(--status-success); font-size: 14px;">Status: Ready for Assessment Generation</span>
              </div>
              <button class="btn btn-sm btn-primary" onclick="appState.setView('generator')">Proceed to Question Generator &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 4. AI Assessment Generator 4-Step Wizard
  renderAIGeneratorPage() {
    return `
      <div class="wizard-container">
        <!-- Wizard Steps Navigation -->
        <div class="wizard-sidebar">
          <h4 style="font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 4px;">Generation Steps</h4>
          <p style="font-size: 11px; color: var(--text-muted); margin-bottom: 12px;">Configure agentic blueprint</p>
          
          <div class="wizard-step-tab active" id="tab-step-1">
            <span class="wizard-step-num">1</span>
            <span>Course Selection</span>
          </div>
          <div class="wizard-step-tab active" id="tab-step-2">
            <span class="wizard-step-num">2</span>
            <span>Select Topics</span>
          </div>
          <div class="wizard-step-tab active" id="tab-step-3">
            <span class="wizard-step-num">3</span>
            <span>Blueprint Config</span>
          </div>
          <div class="wizard-step-tab active" id="tab-step-4">
            <span class="wizard-step-num">4</span>
            <span>Topic Distribution</span>
          </div>
        </div>

        <!-- Wizard Main Form Card -->
        <div class="wizard-content-card">
          <div class="card-header" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 14px; margin-bottom: 10px;">
            <div>
              <h2 style="font-size: 18px; font-weight: 800; color: #fff;">Agentic Assessment Blueprint Generator</h2>
              <p style="font-size: 12px; color: var(--text-secondary);">Synthesizes grounded evaluation items directly from syllabus evidence</p>
            </div>
            <span class="badge badge-brand">RAG Model: Claude 3.5 Sonnet / LlamaIndex</span>
          </div>

          <!-- Step 1: Select Course -->
          <div class="form-group">
            <label class="form-label">Step 1: Select Course</label>
            <select class="form-select" id="wizardCourseSelect">
              <option value="cs-301" selected>Computer Networks (CS-301) - 1,480 indexed chunks</option>
              <option value="cs-201">Data Structures & Algorithms (CS-201)</option>
              <option value="cs-304">Database Management Systems (CS-304)</option>
              <option value="cs-208">Operating Systems (CS-208)</option>
            </select>
          </div>

          <!-- Step 2: Select Topics -->
          <div class="form-group">
            <label class="form-label">Step 2: Select Topics for Coverage</label>
            <div class="topic-checkbox-grid">
              <label class="topic-check-item selected">
                <input type="checkbox" checked id="chk-tcp">
                <div>
                  <strong style="color: #fff; font-size: 13px;">TCP/IP & Transport Layer</strong>
                  <div style="font-size: 11px; color: var(--text-muted);">28 Indexed Evidence Passages</div>
                </div>
              </label>
              <label class="topic-check-item selected">
                <input type="checkbox" checked id="chk-routing">
                <div>
                  <strong style="color: #fff; font-size: 13px;">Routing Protocols & Bellman-Ford</strong>
                  <div style="font-size: 11px; color: var(--text-muted);">22 Indexed Evidence Passages</div>
                </div>
              </label>
              <label class="topic-check-item selected">
                <input type="checkbox" checked id="chk-dns">
                <div>
                  <strong style="color: #fff; font-size: 13px;">DNS & Application Layer Services</strong>
                  <div style="font-size: 11px; color: var(--text-muted);">18 Indexed Evidence Passages</div>
                </div>
              </label>
              <label class="topic-check-item selected">
                <input type="checkbox" checked id="chk-http">
                <div>
                  <strong style="color: #fff; font-size: 13px;">HTTP/1.1 & HTTP/2 Protocols</strong>
                  <div style="font-size: 11px; color: var(--text-muted);">15 Indexed Evidence Passages</div>
                </div>
              </label>
              <label class="topic-check-item">
                <input type="checkbox" id="chk-sec">
                <div>
                  <strong style="color: #fff; font-size: 13px;">Network Security & Cryptography</strong>
                  <div style="font-size: 11px; color: var(--text-muted);">Pending Re-indexing</div>
                </div>
              </label>
            </div>
          </div>

          <!-- Step 3: Assessment Configuration -->
          <div class="form-group">
            <label class="form-label">Step 3: Assessment Parameters</label>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;">
              <div>
                <span style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Total Questions</span>
                <input type="number" class="form-input" value="20" id="cfgQuestions" style="width: 100%; margin-top: 4px;">
              </div>
              <div>
                <span style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Total Marks</span>
                <input type="number" class="form-input" value="50" id="cfgMarks" style="width: 100%; margin-top: 4px;">
              </div>
              <div>
                <span style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Duration (Mins)</span>
                <input type="number" class="form-input" value="60" id="cfgDuration" style="width: 100%; margin-top: 4px;">
              </div>
              <div>
                <span style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Difficulty</span>
                <select class="form-select" id="cfgDifficulty" style="width: 100%; margin-top: 4px;">
                  <option>Easy</option>
                  <option selected>Medium</option>
                  <option>Hard</option>
                  <option>Mixed (Balanced)</option>
                </select>
              </div>
            </div>

            <!-- Question Types Pill Selection -->
            <div style="margin-top: 14px;">
              <span style="font-size: 11px; color: var(--text-muted); font-weight: 600; display: block; margin-bottom: 6px;">Question Types</span>
              <div class="pill-select-group">
                <button class="pill-btn active" type="button">Multiple Choice (MCQ)</button>
                <button class="pill-btn active" type="button">Coding Exercises</button>
                <button class="pill-btn active" type="button">Subjective / Analytical</button>
              </div>
            </div>
          </div>

          <!-- Step 4: Topic Weight Distribution -->
          <div class="form-group">
            <label class="form-label">Step 4: Topic Weight Distribution</label>
            <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px;">
              <div class="topic-dist-row">
                <span class="topic-dist-name">TCP/IP</span>
                <input type="range" class="topic-dist-slider" min="0" max="100" value="30" oninput="this.nextElementSibling.innerText = this.value + '%'">
                <span class="topic-dist-val">30%</span>
              </div>
              <div class="topic-dist-row">
                <span class="topic-dist-name">Routing</span>
                <input type="range" class="topic-dist-slider" min="0" max="100" value="20" oninput="this.nextElementSibling.innerText = this.value + '%'">
                <span class="topic-dist-val">20%</span>
              </div>
              <div class="topic-dist-row">
                <span class="topic-dist-name">DNS</span>
                <input type="range" class="topic-dist-slider" min="0" max="100" value="15" oninput="this.nextElementSibling.innerText = this.value + '%'">
                <span class="topic-dist-val">15%</span>
              </div>
              <div class="topic-dist-row">
                <span class="topic-dist-name">HTTP</span>
                <input type="range" class="topic-dist-slider" min="0" max="100" value="15" oninput="this.nextElementSibling.innerText = this.value + '%'">
                <span class="topic-dist-val">15%</span>
              </div>
              <div class="topic-dist-row">
                <span class="topic-dist-name">Other / Mixed</span>
                <input type="range" class="topic-dist-slider" min="0" max="100" value="20" oninput="this.nextElementSibling.innerText = this.value + '%'">
                <span class="topic-dist-val">20%</span>
              </div>
            </div>
          </div>

          <!-- Generate CTA Button -->
          <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 10px;">
            <button class="btn btn-secondary" onclick="appState.setView('dashboard')">Cancel</button>
            <button class="btn btn-lg btn-primary" onclick="startGenerationWorkflow()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              Generate Assessment with AI
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // 5. AI Generation Workflow Screen
  renderAIWorkflowPage() {
    return `
      <div class="workflow-execution-panel" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 8px;">
          <span class="badge badge-brand" style="margin-bottom: 8px;">Agentic RAG Engine Running</span>
          <h2 style="font-size: 22px; font-weight: 800; color: #fff;">Synthesizing & Validating Assessment Questions</h2>
          <p style="font-size: 13px; color: var(--text-secondary);">Multi-stage agent loop: Retrieval &rarr; Synthesis &rarr; Strict Validation &rarr; Self-Correction</p>
        </div>

        <!-- Visual Multi-Step Node Tree -->
        <div class="workflow-tree-flow">
          <div class="workflow-tree-node completed" id="wfNode1">
            <div class="workflow-node-icon">&check;</div>
            <span class="workflow-node-label">Curriculum</span>
          </div>
          <div class="workflow-tree-node completed" id="wfNode2">
            <div class="workflow-node-icon">&check;</div>
            <span class="workflow-node-label">Doc Process</span>
          </div>
          <div class="workflow-tree-node completed" id="wfNode3">
            <div class="workflow-node-icon">&check;</div>
            <span class="workflow-node-label">RAG Retrieval</span>
          </div>
          <div class="workflow-tree-node completed" id="wfNode4">
            <div class="workflow-node-icon">&check;</div>
            <span class="workflow-node-label">Context Analysis</span>
          </div>
          <div class="workflow-tree-node completed" id="wfNode5">
            <div class="workflow-node-icon">&check;</div>
            <span class="workflow-node-label">Blueprint</span>
          </div>
          <div class="workflow-tree-node completed" id="wfNode6">
            <div class="workflow-node-icon">&check;</div>
            <span class="workflow-node-label">Generation</span>
          </div>
          <div class="workflow-tree-node active" id="wfNode7">
            <div class="workflow-node-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span class="workflow-node-label">Validation</span>
          </div>
          <div class="workflow-tree-node" id="wfNode8">
            <div class="workflow-node-icon">8</div>
            <span class="workflow-node-label">Prof. Review</span>
          </div>
        </div>

        <!-- Realtime Telemetry Console -->
        <div class="telemetry-console" id="workflowTelemetry">
          <div class="telemetry-line"><span class="telemetry-time">[10:14:02]</span> <span class="telemetry-success">&check; Curriculum analyzed: Computer_Networks_Syllabus_2026.pdf (148 pages)</span></div>
          <div class="telemetry-line"><span class="telemetry-time">[10:14:05]</span> <span class="telemetry-success">&check; Relevant evidence retrieved: 42 high-confidence chunks matched</span></div>
          <div class="telemetry-line"><span class="telemetry-time">[10:14:08]</span> <span class="telemetry-success">&check; Assessment blueprint generated: 20 Questions / 50 Marks</span></div>
          <div class="telemetry-line"><span class="telemetry-time">[10:14:12]</span> <span class="telemetry-success">&check; Questions generated across 4 selected topic vectors</span></div>
          <div class="telemetry-line"><span class="telemetry-time">[10:14:14]</span> <span class="telemetry-success">&check; Schema validation completed (20/20 valid JSON format)</span></div>
          <div class="telemetry-line"><span class="telemetry-time">[10:14:16]</span> <span class="telemetry-success">&check; Curriculum alignment completed (19/20 fully aligned)</span></div>
          <div class="telemetry-line"><span class="telemetry-time">[10:14:18]</span> <span class="telemetry-warning">&excl; Grounding verification: Question #12 flagged (hallucinated protocol parameter)</span></div>
          <div class="telemetry-line"><span class="telemetry-time">[10:14:20]</span> <span class="telemetry-success">&check; Grounding verification completed: 18 Passed, 2 Require Professor Review</span></div>
        </div>

        <!-- Generation Results Box -->
        <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 20px; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; gap: 24px;">
            <div>
              <div style="font-size: 24px; font-weight: 800; color: #fff;">20</div>
              <div style="font-size: 11px; color: var(--text-muted);">Questions Generated</div>
            </div>
            <div>
              <div style="font-size: 24px; font-weight: 800; color: var(--status-success);">18</div>
              <div style="font-size: 11px; color: var(--text-muted);">Passed Validation</div>
            </div>
            <div>
              <div style="font-size: 24px; font-weight: 800; color: var(--status-warning);">2</div>
              <div style="font-size: 11px; color: var(--text-muted);">Require Review</div>
            </div>
          </div>
          <button class="btn btn-lg btn-primary" onclick="appState.setView('question-review')">
            Open Question Validation Review &rarr;
          </button>
        </div>
      </div>
    `;
  },

  // 6. Question Validation Review & RAG Evidence View
  renderQuestionReviewPage() {
    const questions = appState.reviewQuestions;

    return `
      <div class="review-page-wrapper">
        <div class="card-header" style="margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 20px; font-weight: 800; color: #fff;">Generated Questions &amp; RAG Evidence Review</h2>
            <p style="color: var(--text-secondary); font-size: 13px;">Review AI synthesized questions, inspect curriculum grounding evidence, and approve items.</p>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary" onclick="appState.setView('generator')">&larr; Back to Generator</button>
            <button class="btn btn-primary" onclick="appState.setView('builder')">Approve All &amp; Build Assessment &rarr;</button>
          </div>
        </div>

        <!-- Filter banner -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 18px; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 20px;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <span style="font-size: 12px; font-weight: 700; color: var(--text-muted);">STATUS FILTER:</span>
            <span class="badge badge-brand">Showing 5 Sample Items</span>
            <span class="badge badge-success">4 Validated</span>
            <span class="badge ${appState.isQ12Retried ? 'badge-success' : 'badge-danger'}">
              ${appState.isQ12Retried ? '0 Pending Failures' : '1 Grounding Failure Flagged'}
            </span>
          </div>
          <div style="font-size: 12px; color: var(--text-secondary);">
            Course: <strong>Computer Networks (CS-301)</strong>
          </div>
        </div>

        <!-- Question Cards List -->
        <div class="questions-list">
          ${questions.map(q => {
            const isFailed = q.status === 'VALIDATION FAILED';
            return `
              <div class="question-review-card ${isFailed ? 'has-failure' : ''}" id="card-${q.id}">
                <div class="q-review-header">
                  <div class="q-review-number">
                    <span>Question #${q.number < 10 ? '0' + q.number : q.number}</span>
                    <span class="badge badge-subtle">${q.topic}</span>
                    <span class="badge badge-subtle">${q.difficulty} (${q.marks} Marks)</span>
                  </div>
                  <div>
                    <span class="badge ${isFailed ? 'badge-danger' : 'badge-success'}">
                      ${q.status}
                    </span>
                  </div>
                </div>

                <div class="q-review-text">${q.text}</div>

                <!-- Multiple Choice Options -->
                <div class="q-options-list">
                  ${q.options.map(opt => `
                    <div class="q-option-badge ${opt.key === q.correctAnswer ? 'correct' : ''}">
                      <strong style="color: #fff;">${opt.key}.</strong>
                      <span>${opt.text}</span>
                      ${opt.key === q.correctAnswer ? '<span style="margin-left: auto; font-size: 11px; color: var(--status-success);">&check; Correct</span>' : ''}
                    </div>
                  `).join('')}
                </div>

                <!-- 8-Point Validation Checks Checklist -->
                <div class="validation-checklist-grid">
                  <div class="val-check-item ${q.validations.schema ? 'passed' : 'failed'}">
                    <span>${q.validations.schema ? '&check;' : '&cross;'}</span> Schema Validation
                  </div>
                  <div class="val-check-item ${q.validations.curriculumAlignment ? 'passed' : 'failed'}">
                    <span>${q.validations.curriculumAlignment ? '&check;' : '&cross;'}</span> Curriculum Alignment
                  </div>
                  <div class="val-check-item ${q.validations.groundingCheck ? 'passed' : 'failed'}">
                    <span>${q.validations.groundingCheck ? '&check;' : '&cross;'}</span> Grounding Check
                  </div>
                  <div class="val-check-item ${q.validations.factualValidation ? 'passed' : 'failed'}">
                    <span>${q.validations.factualValidation ? '&check;' : '&cross;'}</span> Factual Validation
                  </div>
                  <div class="val-check-item ${q.validations.answerValidation ? 'passed' : 'failed'}">
                    <span>${q.validations.answerValidation ? '&check;' : '&cross;'}</span> Answer Validation
                  </div>
                  <div class="val-check-item ${q.validations.difficultyValidation ? 'passed' : 'failed'}">
                    <span>${q.validations.difficultyValidation ? '&check;' : '&cross;'}</span> Difficulty Validation
                  </div>
                  <div class="val-check-item ${q.validations.duplicateCheck ? 'passed' : 'failed'}">
                    <span>${q.validations.duplicateCheck ? '&check;' : '&cross;'}</span> Duplicate Check
                  </div>
                  <div class="val-check-item ${q.validations.safetyCheck ? 'passed' : 'failed'}">
                    <span>${q.validations.safetyCheck ? '&check;' : '&cross;'}</span> Safety &amp; Ethics Check
                  </div>
                </div>

                <!-- Dedicated Failure & Self-Correction Banner for Q12 -->
                ${isFailed ? `
                  <div class="failure-retry-banner">
                    <div class="failure-header">
                      <div class="failure-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        <span>Validation Failed: ${q.failureReason}</span>
                      </div>
                      <span class="badge badge-danger">Hallucination Detected</span>
                    </div>

                    <p style="font-size: 12px; color: var(--text-primary);">${q.failureDetails}</p>

                    <!-- Self Correction Agentic Workflow Tree -->
                    <div style="background: var(--bg-surface); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                      <div style="font-size: 11px; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">RETRY WORKFLOW PIPELINE:</div>
                      <div class="failure-flow-steps">
                        <span class="done">&check; Question Generated</span> &rarr;
                        <span class="done">&check; Validation Failed</span> &rarr;
                        <span class="current">&bull; Failure Analysis</span> &rarr;
                        <span class="current">&bull; Prompt Refinement</span> &rarr;
                        <span>Retry #1</span> &rarr;
                        <span>Validation Passed</span>
                      </div>
                    </div>

                    <!-- Action Buttons -->
                    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 4px;">
                      <button class="btn btn-sm btn-secondary" onclick="showFailureDetailsModal('${q.id}')">View Failure Details</button>
                      <button class="btn btn-sm btn-outline" onclick="showHumanReviewModal('${q.id}')">Send to Human Review</button>
                      <button class="btn btn-sm btn-primary" onclick="triggerRetryQ12()">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                        Retry Question (Agentic Self-Correction)
                      </button>
                    </div>
                  </div>
                ` : ''}

                <!-- Expandable RAG Evidence Section -->
                <div class="rag-evidence-box">
                  <button class="rag-evidence-toggle" onclick="toggleEvidence('${q.id}')">
                    <span style="display: flex; align-items: center; gap: 8px;">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      Retrieved Syllabus Evidence &amp; Grounding Context
                    </span>
                    <span id="ev-chevron-${q.id}">&darr; Expand Source</span>
                  </button>
                  <div class="rag-evidence-body" id="ev-body-${q.id}" style="display: none;">
                    <div class="rag-meta-pills">
                      <span class="rag-pill"><strong>Source Document:</strong> ${q.evidence.document}</span>
                      <span class="rag-pill"><strong>Page:</strong> ${q.evidence.page}</span>
                      <span class="rag-pill"><strong>Topic:</strong> ${q.evidence.topic}</span>
                      <span class="rag-pill" style="color: ${q.evidence.relevanceScore > 0.8 ? 'var(--status-success)' : 'var(--status-danger)'};">
                        <strong>Relevance Score:</strong> ${(q.evidence.relevanceScore * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div class="rag-evidence-quote">
                      "${q.evidence.retrievedSnippet}"
                    </div>
                  </div>
                </div>

                <!-- Professor Decision Buttons -->
                <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 14px;">
                  <button class="btn btn-sm btn-secondary" onclick="editQuestionModal('${q.id}')">Edit</button>
                  <button class="btn btn-sm btn-danger" onclick="appState.setQuestionStatus('${q.id}', 'REJECTED')">Reject</button>
                  <button class="btn btn-sm btn-success" onclick="appState.setQuestionStatus('${q.id}', 'APPROVED')">
                    &check; ${q.approvalStatus === 'APPROVED' ? 'Approved' : 'Approve'}
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  // 7. Question Bank Page
  renderQuestionBankPage() {
    return `
      <div class="question-bank-wrapper">
        <div class="card-header" style="margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 20px; font-weight: 800; color: #fff;">Enterprise Question Bank</h2>
            <p style="color: var(--text-secondary); font-size: 13px;">Curated repository of validated, evidence-backed assessment items.</p>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary" onclick="appState.setView('generator')">+ Generate with AI</button>
            <button class="btn btn-primary" onclick="appState.setView('builder')">Create Assessment</button>
          </div>
        </div>

        <div class="data-table-container">
          <div class="table-toolbar">
            <div class="search-input-wrap">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" class="search-input" placeholder="Search questions, topics, concepts..." id="qbSearchInput" oninput="filterQuestionBank(this.value)">
            </div>
            <div class="table-filters">
              <select class="filter-select" id="qbCourseFilter" onchange="filterQuestionBank()">
                <option value="all">All Courses</option>
                <option value="Computer Networks">Computer Networks</option>
                <option value="Data Structures & Algorithms">DSA</option>
                <option value="Database Management Systems">DBMS</option>
              </select>
              <select class="filter-select" id="qbDifficultyFilter" onchange="filterQuestionBank()">
                <option value="all">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              <select class="filter-select" id="qbTypeFilter" onchange="filterQuestionBank()">
                <option value="all">All Types</option>
                <option value="MCQ">MCQ</option>
                <option value="Subjective">Subjective</option>
                <option value="Coding">Coding</option>
              </select>
            </div>
          </div>

          <table class="data-table" id="qbTable">
            <thead>
              <tr>
                <th>Question</th>
                <th>Topic / Course</th>
                <th>Type</th>
                <th>Difficulty</th>
                <th>Validation</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${MOCK_DATA.questionBank.map(q => `
                <tr>
                  <td style="font-weight: 600; color: #fff; max-width: 340px;">${q.text}</td>
                  <td>
                    <div><strong>${q.topic}</strong></div>
                    <div style="font-size: 11px; color: var(--text-muted);">${q.course}</div>
                  </td>
                  <td><span class="badge badge-subtle">${q.type}</span></td>
                  <td><span class="badge ${q.difficulty === 'Easy' ? 'badge-success' : q.difficulty === 'Medium' ? 'badge-warning' : 'badge-danger'}">${q.difficulty} (${q.marks}M)</span></td>
                  <td><span class="badge badge-success">&check; ${q.validation}</span></td>
                  <td><span class="badge badge-brand">${q.status}</span></td>
                  <td>
                    <div style="display: flex; gap: 6px;">
                      <button class="btn btn-sm btn-secondary" onclick="previewQuestionModal('${q.id}')">Preview</button>
                      <button class="btn btn-sm btn-primary" onclick="addQuestionToAssessment('${q.id}')">+ Add</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 8. Assessment Builder & Snapshot Publisher
  renderAssessmentBuilderPage() {
    return `
      <div class="assessment-builder-wrapper">
        <div class="card-header" style="margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 20px; font-weight: 800; color: #fff;">Assessment Builder &amp; Version Snapshotter</h2>
            <p style="color: var(--text-secondary); font-size: 13px;">Assemble approved questions into an immutable versioned assessment snapshot.</p>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary" onclick="saveDraftAssessment()">Save Draft</button>
            <button class="btn btn-outline" onclick="previewAssessmentModal()">Preview Exam</button>
            <button class="btn btn-success" onclick="publishAssessmentSnapshot()">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 5 5L20 7"/></svg>
              Publish Assessment Snapshot
            </button>
          </div>
        </div>

        <div class="grid-2-1">
          <!-- Assessment Metadata & Question Roster -->
          <div class="card">
            <h3 class="card-title" style="margin-bottom: 14px;">Assessment Configuration</h3>
            
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 14px; margin-bottom: 16px;">
              <div class="form-group">
                <label class="form-label">Assessment Name</label>
                <input type="text" class="form-input" value="Computer Networks Mid Term" id="asmName">
              </div>
              <div class="form-group">
                <label class="form-label">Course</label>
                <select class="form-select" id="asmCourse">
                  <option selected>Computer Networks (CS-301)</option>
                  <option>Data Structures & Algorithms (CS-201)</option>
                </select>
              </div>
            </div>

            <div class="form-group" style="margin-bottom: 16px;">
              <label class="form-label">Description / Student Instructions</label>
              <textarea class="form-input" rows="2" style="resize: none;">Comprehensive mid-term examination covering TCP/IP protocol stack, distance-vector routing, DNS architecture, and HTTP/1.1 fundamentals. Single attempt, timed 60 minutes.</textarea>
            </div>

            <div class="card-header" style="border-top: 1px solid var(--border-subtle); padding-top: 16px;">
              <h4 style="font-size: 14px; font-weight: 700; color: #fff;">Included Approved Questions (30 Selected)</h4>
              <button class="btn btn-sm btn-secondary" onclick="appState.setView('question-bank')">+ Add More from Question Bank</button>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px; max-height: 380px; overflow-y: auto;">
              ${MOCK_DATA.generatedQuestions.map((q, idx) => `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
                  <div style="display: flex; align-items: center; gap: 10px; max-width: 75%;">
                    <span style="font-weight: 700; color: var(--brand-primary); font-size: 12px;">#0${idx + 1}</span>
                    <span style="font-size: 13px; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${q.text}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="badge badge-subtle">${q.topic}</span>
                    <span class="badge badge-success">${q.marks} Marks</span>
                    <button class="btn btn-sm btn-secondary" style="padding: 2px 6px;" title="Remove">&times;</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Live Assessment Summary Card -->
          <div class="card">
            <h3 class="card-title" style="margin-bottom: 14px;">Assessment Summary</h3>
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="display: flex; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
                <span style="color: var(--text-secondary);">Total Questions:</span>
                <strong style="color: #fff; font-size: 15px;">30</strong>
              </div>
              <div style="display: flex; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
                <span style="color: var(--text-secondary);">Total Marks:</span>
                <strong style="color: #fff; font-size: 15px;">50 Marks</strong>
              </div>
              <div style="display: flex; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
                <span style="color: var(--text-secondary);">Duration:</span>
                <strong style="color: #fff; font-size: 15px;">60 Minutes</strong>
              </div>
              <div style="display: flex; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
                <span style="color: var(--text-secondary);">Overall Difficulty:</span>
                <span class="badge badge-warning">Medium (Balanced)</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
                <span style="color: var(--text-secondary);">Target Students:</span>
                <strong style="color: #fff;">120 Enrolled</strong>
              </div>

              <!-- Snapshot Immutability Notice -->
              <div style="padding: 12px; background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: var(--radius-md); font-size: 11px; color: var(--text-secondary);">
                <strong style="color: #fff; display: block; margin-bottom: 4px;">&block; Immutable Snapshot Architecture:</strong>
                Publishing freezes an immutable cryptographic version. Students receive this exact snapshot ensuring deterministic grading.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 9. Student Experience: Dashboard
  renderStudentDashboard() {
    return `
      <div class="student-dash-wrapper">
        <div class="card" style="margin-bottom: 24px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(30, 41, 59, 0.8) 100%); border-color: rgba(16, 185, 129, 0.25);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="badge badge-success" style="margin-bottom: 8px;">Student Portal &bull; CS2023-8942</span>
              <h2 style="font-size: 22px; font-weight: 800; color: #fff;">Welcome, Aiden Scott</h2>
              <p style="color: var(--text-secondary); font-size: 13px; margin-top: 4px;">
                You have 1 active assessment ready to attempt. Make sure your browser remains in focused mode.
              </p>
            </div>
            <button class="btn btn-lg btn-success" onclick="appState.setView('student-exam')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Start Mid Term Exam
            </button>
          </div>
        </div>

        <!-- Student Stats -->
        <div class="grid-4">
          <div class="metric-card">
            <div class="metric-title">Available Assessments</div>
            <div class="metric-value" style="color: var(--status-success);">1</div>
            <div class="metric-trend"><span>Ready now</span></div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Completed Assessments</div>
            <div class="metric-value">4</div>
            <div class="metric-trend up"><span>All graded</span></div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Average Score</div>
            <div class="metric-value" style="color: var(--brand-primary);">84%</div>
            <div class="metric-trend up"><span>&uarr; Top 15% in class</span></div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Questions Solved</div>
            <div class="metric-value">148</div>
            <div class="metric-trend"><span>Across 4 courses</span></div>
          </div>
        </div>

        <!-- Upcoming / Active Assessments Section -->
        <div class="card" style="margin-bottom: 24px;">
          <div class="card-header">
            <h3 class="card-title">Assigned Examination</h3>
            <span class="badge badge-success">Active &bull; Available</span>
          </div>

          <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="badge badge-brand" style="margin-bottom: 6px;">Computer Networks (CS-301)</span>
              <h4 style="font-size: 18px; font-weight: 800; color: #fff;">Computer Networks Mid Term</h4>
              <div style="display: flex; gap: 16px; font-size: 12px; color: var(--text-secondary); margin-top: 6px;">
                <span><strong>Questions:</strong> 30 Questions</span>
                <span><strong>Duration:</strong> 60 Minutes</span>
                <span><strong>Total Marks:</strong> 50 Marks</span>
                <span><strong>Status:</strong> Available</span>
              </div>
            </div>
            <button class="btn btn-primary btn-lg" onclick="appState.setView('student-exam')">
              Start Assessment &rarr;
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // 10. Student Live Examination Interface
  renderStudentExamScreen() {
    const questions = MOCK_DATA.studentExamQuestions;
    const currentQ = questions[appState.activeExamIndex] || questions[0];
    const totalQ = questions.length;
    const currentSelected = appState.studentAnswers[currentQ.id];

    return `
      <div class="exam-wrapper">
        <!-- Sticky Exam Header with Real Live Timer -->
        <div class="exam-header-bar">
          <div class="exam-title-group">
            <h2>Computer Networks Mid Term</h2>
            <p>CS-301 &bull; Enforced Proctored Assessment Environment</p>
          </div>
          <div class="exam-timer-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span class="exam-timer-digits" id="liveExamTimer">42:18</span>
            <span style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">remaining</span>
          </div>
        </div>

        <div class="exam-layout-grid">
          <!-- Main Question Panel -->
          <div class="exam-question-panel">
            <div>
              <div class="exam-q-header">
                <span class="exam-q-number">Question ${appState.activeExamIndex + 1} of ${totalQ} (${currentQ.topic})</span>
                <span class="autosave-indicator saved" id="autosaveIndicator">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Answer saved &check;
                </span>
              </div>

              <div class="exam-q-text">${currentQ.text}</div>

              <!-- Answer Options Stack -->
              <div class="exam-options-stack">
                ${currentQ.options.map(opt => `
                  <div class="exam-option-item ${currentSelected === opt.key ? 'selected' : ''}" onclick="selectStudentOption('${currentQ.id}', '${opt.key}')">
                    <div class="option-key-circle">${opt.key}</div>
                    <div class="option-content-text">${opt.text}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Bottom Navigation Actions -->
            <div class="exam-bottom-actions">
              <button class="btn btn-secondary" onclick="navigateExamQuestion(-1)" ${appState.activeExamIndex === 0 ? 'disabled' : ''}>
                &larr; Previous Question
              </button>

              <div style="display: flex; gap: 10px;">
                <button class="btn btn-primary" onclick="navigateExamQuestion(1)">
                  Save &amp; Next &rarr;
                </button>
                <button class="btn btn-success" onclick="openSubmitModal()">
                  Submit Assessment
                </button>
              </div>
            </div>
          </div>

          <!-- Question Navigation Palette -->
          <div class="palette-card">
            <h4 style="font-size: 13px; font-weight: 700; color: #fff;">Question Navigator</h4>
            <div class="palette-grid">
              ${questions.map((q, idx) => {
                const isAnswered = !!appState.studentAnswers[q.id];
                const isActive = appState.activeExamIndex === idx;
                return `
                  <button class="palette-num-btn ${isActive ? 'active' : isAnswered ? 'answered' : ''}" onclick="jumpExamQuestion(${idx})">
                    ${idx + 1} ${isAnswered && !isActive ? '&check;' : ''}
                  </button>
                `;
              }).join('')}
            </div>

            <div class="palette-legend">
              <div class="legend-item">
                <span class="legend-dot" style="background: var(--status-success);"></span>
                <span>Answered (${Object.values(appState.studentAnswers).filter(Boolean).length})</span>
              </div>
              <div class="legend-item">
                <span class="legend-dot" style="background: var(--brand-primary);"></span>
                <span>Active Question</span>
              </div>
              <div class="legend-item">
                <span class="legend-dot" style="background: var(--bg-surface-elevated); border: 1px solid var(--border-light);"></span>
                <span>Unanswered (${Object.values(appState.studentAnswers).filter(v => !v).length})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 11. Student Results & Solutions Screen
  renderStudentResultsScreen() {
    const res = MOCK_DATA.studentResult;

    return `
      <div class="results-wrapper" style="max-width: 960px; margin: 0 auto;">
        <!-- Results Hero Card -->
        <div class="results-hero-card">
          <div>
            <span class="badge badge-success" style="margin-bottom: 8px;">Assessment Completed &amp; Graded</span>
            <h2 style="font-size: 24px; font-weight: 800; color: #fff;">${res.assessmentTitle}</h2>
            <p style="color: var(--text-secondary); font-size: 13px; margin-top: 4px;">Student: <strong>${res.studentName}</strong> (${res.studentId}) &bull; Completed in ${res.timeTaken}</p>
          </div>
          <div style="text-align: right;">
            <div class="score-highlight">
              <span class="score-number">${res.score}</span>
              <span style="font-size: 20px; color: var(--text-muted);">/ ${res.totalMarks}</span>
            </div>
            <div class="score-pct">${res.percentage}% &bull; Grade A</div>
          </div>
        </div>

        <!-- Breakdown Statistics -->
        <div class="grid-3">
          <div class="metric-card" style="text-align: center;">
            <div class="metric-title">Correct Answers</div>
            <div class="metric-value" style="color: var(--status-success);">${res.correctCount}</div>
            <div class="metric-trend up"><span>+42 Marks earned</span></div>
          </div>
          <div class="metric-card" style="text-align: center;">
            <div class="metric-title">Incorrect Answers</div>
            <div class="metric-value" style="color: var(--status-danger);">${res.incorrectCount}</div>
            <div class="metric-trend down"><span>-8 Marks deducted</span></div>
          </div>
          <div class="metric-card" style="text-align: center;">
            <div class="metric-title">Unanswered</div>
            <div class="metric-value">${res.unansweredCount}</div>
            <div class="metric-trend"><span>0 penalty</span></div>
          </div>
        </div>

        <!-- Topic Performance Chart -->
        <div class="card" style="margin-bottom: 24px;">
          <h3 class="card-title" style="margin-bottom: 16px;">Topic-Wise Performance Breakdown</h3>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${res.topicPerformance.map(tp => `
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 6px;">
                  <strong style="color: #fff;">${tp.topic}</strong>
                  <span style="font-family: var(--font-mono); font-weight: 700; color: ${tp.score >= 80 ? 'var(--status-success)' : 'var(--status-warning)'};">${tp.score}%</span>
                </div>
                <div style="height: 8px; background: var(--bg-surface-subtle); border-radius: var(--radius-full); overflow: hidden;">
                  <div style="height: 100%; width: ${tp.score}%; background: ${tp.score >= 80 ? 'var(--status-success)' : 'var(--status-warning)'}; border-radius: var(--radius-full);"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Detailed Question Solutions Review -->
        <div class="card" style="margin-bottom: 24px;">
          <h3 class="card-title" style="margin-bottom: 16px;">Question Solutions &amp; Explanations</h3>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${res.solutions.map(sol => `
              <div style="padding: 14px; background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                  <strong style="color: var(--brand-primary); font-size: 13px;">Question #${sol.qNum}</strong>
                  <span class="badge ${sol.isCorrect ? 'badge-success' : 'badge-danger'}">${sol.isCorrect ? 'Correct (+2 Marks)' : 'Incorrect'}</span>
                </div>
                <div style="font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 8px;">${sol.question}</div>
                <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 6px;">
                  Your Answer: <strong style="color: ${sol.isCorrect ? 'var(--status-success)' : 'var(--status-danger)'};">${sol.chosen}</strong>
                </div>
                <div style="padding: 10px; background: #090d16; border-left: 3px solid var(--brand-primary); font-size: 12px; color: #e2e8f0; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
                  <strong>AI Pedagogical Explanation:</strong> ${sol.explanation}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; justify-content: space-between;">
          <button class="btn btn-secondary" onclick="appState.setView('student-dashboard')">&larr; Back to Dashboard</button>
          <button class="btn btn-primary" onclick="appState.setRole('professor'); appState.setView('analytics');">
            Switch to Professor Analytics &rarr;
          </button>
        </div>
      </div>
    `;
  },

  // 12. Professor Analytics Dashboard
  renderAnalyticsPage() {
    const an = MOCK_DATA.analytics;

    return `
      <div class="analytics-wrapper">
        <div class="card-header" style="margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 20px; font-weight: 800; color: #fff;">Assessment Performance Analytics</h2>
            <p style="color: var(--text-secondary); font-size: 13px;">Cohort-wide performance metrics, question difficulty calibration, and topic mastery.</p>
          </div>
          <div style="display: flex; gap: 8px;">
            <select class="filter-select">
              <option>Computer Networks Mid Term</option>
              <option>Graph Traversal & DP Sprint</option>
            </select>
          </div>
        </div>

        <!-- 4 KPI Metrics -->
        <div class="grid-4">
          <div class="metric-card">
            <div class="metric-title">Average Score</div>
            <div class="metric-value" style="color: var(--brand-primary);">${an.metrics.averageScore} / 50</div>
            <div class="metric-trend up"><span>84.8% cohort average</span></div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Highest Score</div>
            <div class="metric-value" style="color: var(--status-success);">${an.metrics.highestScore} / 50</div>
            <div class="metric-trend"><span>Sophia Martinez</span></div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Lowest Score</div>
            <div class="metric-value" style="color: var(--status-warning);">${an.metrics.lowestScore} / 50</div>
            <div class="metric-trend"><span>Remedial recommended</span></div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Participation Rate</div>
            <div class="metric-value">${an.metrics.participationRate}%</div>
            <div class="metric-trend up"><span>118 / 120 submissions</span></div>
          </div>
        </div>

        <!-- Charts Grid -->
        <div class="grid-2">
          <!-- Topic Performance -->
          <div class="card">
            <h3 class="card-title" style="margin-bottom: 16px;">Topic-Wise Class Accuracy</h3>
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${an.topicProficiency.map(tp => `
                <div>
                  <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 6px;">
                    <strong style="color: #fff;">${tp.topic}</strong>
                    <span style="font-family: var(--font-mono); font-weight: 700; color: ${tp.rate >= 80 ? 'var(--status-success)' : tp.rate >= 70 ? 'var(--status-warning)' : 'var(--status-danger)'};">${tp.rate}%</span>
                  </div>
                  <div style="height: 10px; background: var(--bg-surface-subtle); border-radius: var(--radius-full); overflow: hidden;">
                    <div style="height: 100%; width: ${tp.rate}%; background: ${tp.rate >= 80 ? 'var(--status-success)' : tp.rate >= 70 ? 'var(--status-warning)' : 'var(--status-danger)'}; border-radius: var(--radius-full);"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Question-Wise Accuracy Analysis -->
          <div class="card">
            <h3 class="card-title" style="margin-bottom: 16px;">Question Accuracy &amp; Discrimination</h3>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
              ${an.questionAccuracy.map(qa => `
                <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px; text-align: center;">
                  <div style="font-size: 13px; font-weight: 800; color: #fff;">${qa.q}</div>
                  <div style="font-size: 18px; font-weight: 800; color: ${qa.rate >= 80 ? 'var(--status-success)' : qa.rate >= 60 ? 'var(--status-warning)' : 'var(--status-danger)'}; margin: 4px 0;">
                    ${qa.rate}%
                  </div>
                  <span class="badge badge-subtle" style="font-size: 10px;">${qa.difficulty}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Student Submissions Table -->
        <div class="data-table-container">
          <div class="table-toolbar">
            <h3 class="card-title">Student Submissions &amp; Grades</h3>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Score</th>
                <th>Percentage</th>
                <th>Time Taken</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${an.studentPerformanceList.map(st => `
                <tr>
                  <td style="font-weight: 700; color: #fff;">${st.name}</td>
                  <td>${st.id}</td>
                  <td style="font-weight: 700; color: #fff;">${st.score} / 50</td>
                  <td style="font-weight: 700; color: var(--status-success);">${st.percentage}</td>
                  <td>${st.time}</td>
                  <td><span class="badge badge-success">${st.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 13. Integrity & Risk Telemetry Dashboard
  renderIntegrityRiskPage() {
    const it = MOCK_DATA.integrityData;

    return `
      <div class="integrity-wrapper">
        <div class="card-header" style="margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 20px; font-weight: 800; color: #fff;">Assessment Integrity &amp; Risk Telemetry</h2>
            <p style="color: var(--text-secondary); font-size: 13px;">Probabilistic anomaly detection and non-invasive behavioral telemetry during exam sessions.</p>
          </div>
          <span class="badge badge-brand">Active Telemetry Monitor</span>
        </div>

        <!-- 4 KPI Cards -->
        <div class="risk-kpi-row">
          <div class="risk-kpi-card low">
            <span class="metric-title">Total Enrolled</span>
            <div class="metric-value">${it.summary.totalStudents}</div>
            <div class="metric-trend"><span>Active Cohort</span></div>
          </div>
          <div class="risk-kpi-card low">
            <span class="metric-title">Low Risk (Normal)</span>
            <div class="metric-value" style="color: var(--status-success);">${it.summary.lowRisk}</div>
            <div class="metric-trend up"><span>90.0% clean telemetry</span></div>
          </div>
          <div class="risk-kpi-card medium">
            <span class="metric-title">Review Needed</span>
            <div class="metric-value" style="color: var(--status-warning);">${it.summary.reviewNeeded}</div>
            <div class="metric-trend"><span>Minor window blurs</span></div>
          </div>
          <div class="risk-kpi-card high">
            <span class="metric-title">High-Risk Signals</span>
            <div class="metric-value" style="color: var(--status-danger);">${it.summary.highSignals}</div>
            <div class="metric-trend down"><span>Requires instructor inspection</span></div>
          </div>
        </div>

        <!-- Signal Categories Grid -->
        <h3 class="card-title" style="margin-bottom: 14px;">Signal Categories &amp; Anomalies</h3>
        <div class="signals-category-grid">
          ${it.signalCategories.map(sc => `
            <div class="signal-category-card">
              <div class="signal-cat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <strong style="color: #fff; font-size: 13px;">${sc.name}</strong>
                  <span class="badge badge-subtle">${sc.count} events</span>
                </div>
                <p style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${sc.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Student Flagged Telemetry Table -->
        <div class="data-table-container">
          <div class="table-toolbar">
            <h3 class="card-title">Behavioral Risk Signals &amp; Evidence Timeline</h3>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Risk Category</th>
                <th>Signals Count</th>
                <th>Telemetry Summary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${it.flaggedStudents.map(st => `
                <tr>
                  <td style="font-weight: 700; color: #fff;">${st.studentName}</td>
                  <td>${st.studentId}</td>
                  <td><span class="badge ${st.badgeClass}">${st.riskLevel}</span></td>
                  <td style="font-weight: 700; color: #fff;">${st.signalsDetected} Signals</td>
                  <td style="font-size: 12px;">${st.keyReason}</td>
                  <td>
                    <button class="btn btn-sm btn-secondary" onclick="viewRiskEvidenceModal('${st.id}')">
                      View Telemetry Log
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 14. Audit Logs View
  renderAuditLogsPage() {
    return `
      <div class="audit-logs-wrapper">
        <div class="card-header" style="margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 20px; font-weight: 800; color: #fff;">System &amp; Action Audit Logs</h2>
            <p style="color: var(--text-secondary); font-size: 13px;">Immutable ledger of AI generation, human approval, and publishing actions.</p>
          </div>
        </div>

        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Initiating User / Agent</th>
                <th>Action Performed</th>
                <th>Resource / Target</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${appState.auditLogs.map(log => `
                <tr>
                  <td style="font-family: var(--font-mono); font-size: 12px;">${log.timestamp}</td>
                  <td style="font-weight: 700; color: #fff;">${log.user}</td>
                  <td>${log.action}</td>
                  <td><span class="badge badge-subtle">${log.resource}</span></td>
                  <td><span class="badge ${log.status === 'Success' || log.status === 'Validated' ? 'badge-success' : 'badge-warning'}">${log.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 15. Admin Overview Page
  renderAdminDashboard() {
    return `
      <div class="admin-wrapper">
        <div class="card-header" style="margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 20px; font-weight: 800; color: #fff;">Institutional Administration &amp; Governance</h2>
            <p style="color: var(--text-secondary); font-size: 13px;">Enterprise multi-tenant configuration, college enrollment, and user access roles.</p>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary" onclick="openAddCollegeModal()">+ Add College</button>
            <button class="btn btn-primary" onclick="openEnrollStudentModal()">+ Enroll Student</button>
          </div>
        </div>

        <div class="grid-4">
          <div class="metric-card">
            <div class="metric-title">Colleges &amp; Depts</div>
            <div class="metric-value">${MOCK_DATA.colleges.length}</div>
            <div class="metric-trend up"><span>Active institutional units</span></div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Professors</div>
            <div class="metric-value">450</div>
            <div class="metric-trend"><span>Authorized creators</span></div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Enrolled Students</div>
            <div class="metric-value">${MOCK_DATA.userDirectory.filter(u => u.role === 'Student').length + 7346}</div>
            <div class="metric-trend up"><span>Active test-takers</span></div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Assessments Published</div>
            <div class="metric-value">1,890</div>
            <div class="metric-trend up"><span>Immutable snapshots</span></div>
          </div>
        </div>

        <div class="grid-2">
          <!-- Quick College Overview Card -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Registered Colleges</h3>
              <button class="btn btn-sm btn-secondary" onclick="appState.setView('admin-colleges')">View All</button>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${MOCK_DATA.colleges.slice(0, 3).map(col => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--bg-surface-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                  <div>
                    <strong style="color: #fff; font-size: 13px;">${col.name}</strong>
                    <div style="font-size: 11px; color: var(--text-muted);">Dean: ${col.dean} &bull; ${col.depts} Depts</div>
                  </div>
                  <span class="badge badge-brand">${col.students} Students</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- RAG Governance Policies -->
          <div class="card">
            <h3 class="card-title" style="margin-bottom: 14px;">Agentic RAG Engine Governance Policies</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="padding: 12px; background: var(--bg-surface-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-weight: 700; color: #fff; font-size: 12px; margin-bottom: 2px;">Grounding Verification Threshold</div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;">
                  <input type="range" min="70" max="99" value="85" style="width: 70%; accent-color: var(--brand-primary);" oninput="this.nextElementSibling.innerText = this.value + '%'">
                  <span style="font-family: var(--font-mono); font-weight: 700; color: var(--brand-primary);">85%</span>
                </div>
              </div>

              <div style="padding: 12px; background: var(--bg-surface-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-weight: 700; color: #fff; font-size: 12px; margin-bottom: 4px;">Self-Correction Retry Policy</div>
                <select class="form-select" style="width: 100%; font-size: 12px; padding: 6px 10px;">
                  <option>1 Attempt (Strict Failure Mode)</option>
                  <option selected>2 Attempts with Prompt Augmentation</option>
                  <option>3 Attempts (Extended Agent Loop)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 15b. Admin: College Management Page
  renderAdminCollegesPage() {
    return `
      <div class="admin-colleges-wrapper">
        <div class="card-header" style="margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 20px; font-weight: 800; color: #fff;">College &amp; Department Management</h2>
            <p style="color: var(--text-secondary); font-size: 13px;">Manage participating schools, institutional quotas, and department deans.</p>
          </div>
          <button class="btn btn-primary" onclick="openAddCollegeModal()">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            + Add New College
          </button>
        </div>

        <div class="data-table-container">
          <div class="table-toolbar">
            <div class="search-input-wrap">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" class="search-input" placeholder="Search colleges by name or code...">
            </div>
            <span class="badge badge-brand">${MOCK_DATA.colleges.length} Registered Units</span>
          </div>

          <table class="data-table">
            <thead>
              <tr>
                <th>College / Institute Name</th>
                <th>Code</th>
                <th>Dean / Head</th>
                <th>Departments</th>
                <th>Professors</th>
                <th>Enrolled Students</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${MOCK_DATA.colleges.map(col => `
                <tr>
                  <td style="font-weight: 700; color: #fff;">${col.name}</td>
                  <td><span class="badge badge-subtle">${col.code}</span></td>
                  <td>${col.dean}</td>
                  <td>${col.depts} Depts</td>
                  <td>${col.professors} Faculty</td>
                  <td style="font-weight: 700; color: var(--brand-primary);">${col.students}</td>
                  <td><span class="badge badge-success">${col.status}</span></td>
                  <td>
                    <div style="display: flex; gap: 6px;">
                      <button class="btn btn-sm btn-secondary" onclick="openEnrollStudentModal('${col.name}')">+ Add Students</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 15c. Admin: User & Student Management Page
  renderAdminUsersPage() {
    return `
      <div class="admin-users-wrapper">
        <div class="card-header" style="margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 20px; font-weight: 800; color: #fff;">User &amp; Student Enrollment Directory</h2>
            <p style="color: var(--text-secondary); font-size: 13px;">Enroll students into colleges and courses, assign roles, and manage access.</p>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary" onclick="simulateBulkCsvImport()">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Bulk Import CSV
            </button>
            <button class="btn btn-primary" onclick="openEnrollStudentModal()">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
              + Enroll New Student
            </button>
          </div>
        </div>

        <div class="data-table-container">
          <div class="table-toolbar">
            <div class="search-input-wrap">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" class="search-input" placeholder="Search students by name, email, roll number...">
            </div>
            <div class="table-filters">
              <select class="filter-select">
                <option>All Colleges</option>
                <option>School of Engineering</option>
                <option>School of Information Systems</option>
              </select>
              <select class="filter-select">
                <option>All Roles</option>
                <option>Student</option>
                <option>Professor</option>
              </select>
            </div>
          </div>

          <table class="data-table">
            <thead>
              <tr>
                <th>Student / User Name</th>
                <th>Roll No / ID</th>
                <th>Role</th>
                <th>College / Faculty</th>
                <th>Department</th>
                <th>Enrolled Courses</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${MOCK_DATA.userDirectory.map(u => `
                <tr>
                  <td>
                    <div style="font-weight: 700; color: #fff;">${u.name}</div>
                    <div style="font-size: 11px; color: var(--text-muted);">${u.email}</div>
                  </td>
                  <td style="font-family: var(--font-mono); font-size: 12px;">${u.rollNo}</td>
                  <td><span class="badge ${u.role === 'Professor' ? 'badge-brand' : 'badge-subtle'}">${u.role}</span></td>
                  <td>${u.college}</td>
                  <td>${u.dept}</td>
                  <td style="font-size: 12px; color: var(--text-primary);">${u.course}</td>
                  <td><span class="badge badge-success">${u.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 16. Settings Page
  renderSettingsPage() {
    return `
      <div class="settings-wrapper" style="max-width: 800px; margin: 0 auto;">
        <div class="card">
          <div class="card-header">
            <h2 style="font-size: 18px; font-weight: 800; color: #fff;">Faculty &amp; RAG System Settings</h2>
            <span class="badge badge-brand">CS Faculty Profile</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div class="form-group">
              <label class="form-label">Default LLM Synthesis Model</label>
              <select class="form-select">
                <option selected>Claude 3.5 Sonnet (Agentic Synthesis)</option>
                <option>GPT-4o Enterprise</option>
                <option>Gemini 1.5 Pro</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">RAG Retrieval Strategy</label>
              <select class="form-select">
                <option selected>Hybrid (Dense Vector + BM25 Lexical Re-ranking)</option>
                <option>Dense Embeddings (OpenAI text-embedding-3-large)</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Proctoring Telemetry Strictness</label>
              <select class="form-select">
                <option selected>Standard Academic (Focus blurs &gt; 3s, Fullscreen check)</option>
                <option>Strict (Zero window blurs allowed)</option>
              </select>
            </div>

            <button class="btn btn-primary" style="align-self: flex-start;" onclick="showToast('Settings successfully updated', 'success')">Save Configuration</button>
          </div>
        </div>
      </div>
    `;
  }
};

