/* ════════════════════════════════════════
   LEAD ALLOCATION DASHBOARD — app.js
   Main entry point: tab switching, renderAll
   ════════════════════════════════════════ */

let currentTab = 'dashboard';

/* ── TAB SWITCHING ── */
function switchTab(tab) {
  currentTab = tab;

  document.getElementById('dashTab').style.display   = tab === 'dashboard' ? 'block' : 'none';
  document.getElementById('tableTab').style.display  = tab === 'table'     ? 'block' : 'none';

  document.getElementById('tabDash').className  = 'tab-btn' + (tab === 'dashboard' ? ' active' : '');
  document.getElementById('tabTable').className = 'tab-btn' + (tab === 'table'     ? ' active' : '');

  if (tab === 'table') {
    populateFilters();
    renderTable();
  }
}

/* ── RENDER EVERYTHING ── */
function renderAll() {
  renderKPIs();
  renderBar('countryChart', countBy(leads, 'country'));
  renderBar('trainerChart', countBy(leads, 'trainer'));
  renderDonut();
  renderConversion();
  renderMonth();

  if (currentTab === 'table') {
    populateFilters();
    renderTable();
  }
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
});
