/* ════════════════════════════════════════
   LEAD ALLOCATION DASHBOARD — table.js
   Table rendering, filters, status update, delete
   ════════════════════════════════════════ */

/* ── POPULATE FILTER DROPDOWNS ── */
function populateFilters() {
  const trainers  = [...new Set(leads.map(l => l.trainer).filter(Boolean))].sort();
  const countries = [...new Set(leads.map(l => l.country).filter(Boolean))].sort();

  document.getElementById('fTrainer').innerHTML =
    '<option value="">All Trainers</option>' +
    trainers.map(t => `<option value="${t}">${t}</option>`).join('');

  document.getElementById('fCountry').innerHTML =
    '<option value="">All Countries</option>' +
    countries.map(c => `<option value="${c}">${c}</option>`).join('');
}

/* ── RENDER TABLE WITH FILTERS ── */
function renderTable() {
  const q   = document.getElementById('searchBox').value.toLowerCase();
  const fs  = document.getElementById('fStatus').value;
  const ft  = document.getElementById('fTrainer').value;
  const fc  = document.getElementById('fCountry').value;

  const filtered = leads.filter(l => {
    const matchSearch  = !q  || [l.name, l.email, l.country, l.course, l.trainer, l.csm].join(' ').toLowerCase().includes(q);
    const matchStatus  = !fs || getStatusType(l.status) === fs;
    const matchTrainer = !ft || l.trainer === ft;
    const matchCountry = !fc || l.country === fc;
    return matchSearch && matchStatus && matchTrainer && matchCountry;
  });

  document.getElementById('rowCount').textContent = `— ${filtered.length} of ${leads.length}`;

  document.getElementById('tableBody').innerHTML = filtered.map((l, i) => `
    <tr>
      <td style="color:var(--dim);font-size:11px">${i + 1}</td>
      <td style="white-space:nowrap;font-size:11px">${l.date}</td>
      <td class="name-cell">
        <div class="name">${l.name}</div>
        <div class="email">${l.email}</div>
      </td>
      <td style="font-size:11px">${l.country}</td>
      <td style="max-width:180px;font-size:11px;color:#94a3b8">${l.course}</td>
      <td style="font-size:11px">${l.csm}</td>
      <td style="font-size:11px;font-weight:500">${l.trainer}</td>
      <td>
        <select class="status-sel" onchange="updateStatus(${l.id}, this.value)">
          <option value=""           ${!l.status                         ? 'selected' : ''}>— None —</option>
          <option value="Converted"  ${l.status === 'Converted'          ? 'selected' : ''}>✓ Converted</option>
          <option value="In Progress"${l.status === 'In Progress'        ? 'selected' : ''}>⏳ In Progress</option>
          <option value="Closed"     ${l.status === 'Closed'             ? 'selected' : ''}>✖ Closed</option>
        </select>
      </td>
      <td style="max-width:200px;font-size:11px;color:#94a3b8;white-space:normal;line-height:1.4">
        ${l.query || '<span style="color:#334155">—</span>'}
      </td>
      <td>
        <div style="display:flex;gap:4px">
          <button class="act-btn act-edit" onclick="openEdit(${l.id})">✏️</button>
          <button class="act-btn act-del"  onclick="deleteLead(${l.id})">🗑️</button>
        </div>
      </td>
    </tr>`).join('');
}

/* ── UPDATE STATUS INLINE ── */
function updateStatus(id, status) {
  leads = leads.map(l => l.id === id ? { ...l, status } : l);
  renderAll();
}

/* ── DELETE LEAD ── */
function deleteLead(id) {
  if (confirm('Delete this lead? This cannot be undone.')) {
    leads = leads.filter(l => l.id !== id);
    renderAll();
  }
}

/* ── EXPORT CSV ── */
function exportCSV() {
  const headers = ['Date', 'Time', 'Client Name', 'Email', 'Country', 'Course', 'CSM', 'Trainer', 'Status', 'Query'];
  const rows = leads.map(l =>
    [l.date, l.time, l.name, l.email, l.country, l.course, l.csm, l.trainer, l.status, l.query]
      .map(v => `"${(v || '').replace(/"/g, '""')}"`)
      .join(',')
  );
  const blob = new Blob([[headers.join(','), ...rows].join('\n')], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'leads_export.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}
