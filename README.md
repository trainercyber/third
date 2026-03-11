<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Lead Allocation Dashboard — CRM Intelligence Tool"/>
  <title>Lead Allocation Dashboard</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="css/style.css"/>
</head>
<body>

  <!-- TOPBAR -->
  <header class="topbar">
    <div class="brand">
      <div class="brand-eye">CRM Intelligence</div>
      <div class="brand-title">Lead Allocation Dashboard</div>
    </div>
    <div class="topbar-right">
      <button class="tab-btn active" id="tabDash" onclick="switchTab('dashboard')">📊 Dashboard</button>
      <button class="tab-btn" id="tabTable" onclick="switchTab('table')">📋 All Leads</button>
      <button class="btn btn-blue" onclick="openModal()">+ Add Lead</button>
      <button class="btn btn-green" onclick="exportCSV()">⬇ Export CSV</button>
    </div>
  </header>

  <!-- MAIN -->
  <main class="main">

    <!-- KPI ROW -->
    <div class="kpi-row" id="kpiRow"></div>

    <!-- DASHBOARD TAB -->
    <div id="dashTab">
      <div class="grid-3">
        <div class="card"><div class="card-title">📍 Leads by Country</div><div class="bar-wrap" id="countryChart"></div></div>
        <div class="card"><div class="card-title">👤 Leads by Trainer</div><div class="bar-wrap" id="trainerChart"></div></div>
        <div class="card"><div class="card-title">🎯 Conversion by Trainer</div><div class="conv-wrap" id="convChart"></div></div>
      </div>
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📊 Status Breakdown</div>
          <div class="donut-wrap">
            <svg id="donutSvg" width="150" height="150" viewBox="0 0 150 150" aria-label="Status donut chart"></svg>
            <div class="donut-legend" id="donutLegend"></div>
          </div>
        </div>
        <div class="card"><div class="card-title">📅 Leads by Month</div><div class="bar-wrap" id="monthChart"></div></div>
      </div>
    </div>

    <!-- TABLE TAB -->
    <div id="tableTab" style="display:none;">
      <div class="table-section">
        <div class="table-header">
          <div class="table-heading">All Leads <span id="rowCount"></span></div>
        </div>
        <div class="filter-bar">
          <input class="search-inp" id="searchBox" type="text" placeholder="🔍  Search name, course, country…" oninput="renderTable()"/>
          <select class="filter-sel" id="fStatus" onchange="renderTable()">
            <option value="">All Status</option>
            <option value="converted">Converted</option>
            <option value="pending">In Progress</option>
            <option value="closed">Closed</option>
            <option value="empty">No Status</option>
          </select>
          <select class="filter-sel" id="fTrainer" onchange="renderTable()">
            <option value="">All Trainers</option>
          </select>
          <select class="filter-sel" id="fCountry" onchange="renderTable()">
            <option value="">All Countries</option>
          </select>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th><th>Date</th><th>Client</th><th>Country</th>
                <th>Course</th><th>CSM</th><th>Trainer</th>
                <th>Status</th><th>Query / Comments</th><th>Actions</th>
              </tr>
            </thead>
            <tbody id="tableBody"></tbody>
          </table>
        </div>
      </div>
    </div>

  </main>

  <!-- ADD / EDIT MODAL -->
  <div class="overlay hidden" id="modalOverlay" role="dialog" aria-modal="true">
    <div class="modal">
      <div class="modal-hdr">
        <div class="modal-title" id="modalTitle">➕ Add New Lead</div>
        <button class="modal-close" onclick="closeModal()" aria-label="Close">✕</button>
      </div>
      <div class="modal-body">
        <div class="form-grp"><label class="form-lbl" for="f_date">Date</label><input class="form-inp" id="f_date" placeholder="9-Jan-26"/></div>
        <div class="form-grp"><label class="form-lbl" for="f_time">Time</label><input class="form-inp" id="f_time" placeholder="11:30 IST"/></div>
        <div class="form-grp"><label class="form-lbl" for="f_name">Client Name</label><input class="form-inp" id="f_name"/></div>
        <div class="form-grp"><label class="form-lbl" for="f_email">Client Email</label><input class="form-inp" id="f_email" type="email"/></div>
        <div class="form-grp"><label class="form-lbl" for="f_country">Country</label><input class="form-inp" id="f_country"/></div>
        <div class="form-grp"><label class="form-lbl" for="f_trainer">Trainer</label><input class="form-inp" id="f_trainer"/></div>
        <div class="form-grp"><label class="form-lbl" for="f_csm">CSM Name</label><input class="form-inp" id="f_csm"/></div>
        <div class="form-grp"><label class="form-lbl" for="f_csmemail">CSM Email</label><input class="form-inp" id="f_csmemail"/></div>
        <div class="form-grp full"><label class="form-lbl" for="f_course">Course</label><input class="form-inp" id="f_course"/></div>
        <div class="form-grp full"><label class="form-lbl" for="f_query">Query / Comments</label><input class="form-inp" id="f_query"/></div>
        <div class="form-grp full">
          <label class="form-lbl" for="f_status">Status</label>
          <select class="form-sel" id="f_status">
            <option value="">— No Status —</option>
            <option value="Converted">✓ Converted</option>
            <option value="In Progress">⏳ In Progress</option>
            <option value="Closed">✖ Closed</option>
          </select>
        </div>
      </div>
      <div class="modal-ftr">
        <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        <button class="btn btn-blue" onclick="saveLead()">Save Lead</button>
      </div>
    </div>
  </div>

  <script src="js/data.js"></script>
  <script src="js/charts.js"></script>
  <script src="js/table.js"></script>
  <script src="js/modal.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
