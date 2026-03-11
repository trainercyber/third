/* ════════════════════════════════════════
   LEAD ALLOCATION DASHBOARD — modal.js
   Add / Edit lead modal
   ════════════════════════════════════════ */

let editingId = null;

const FORM_FIELDS = ['date', 'time', 'name', 'email', 'country', 'trainer', 'csm', 'csmemail', 'course', 'query'];

/* ── OPEN ADD MODAL ── */
function openModal() {
  editingId = null;
  clearForm();
  document.getElementById('modalTitle').textContent = '➕ Add New Lead';
  document.getElementById('modalOverlay').classList.remove('hidden');
  document.getElementById('f_name').focus();
}

/* ── OPEN EDIT MODAL ── */
function openEdit(id) {
  editingId = id;
  const lead = leads.find(l => l.id === id);
  if (!lead) return;

  FORM_FIELDS.forEach(key => {
    const el = document.getElementById('f_' + key);
    if (el) el.value = lead[key === 'csmemail' ? 'csmEmail' : key] || '';
  });

  document.getElementById('f_status').value = lead.status || '';
  document.getElementById('modalTitle').textContent = '✏️ Edit Lead';
  document.getElementById('modalOverlay').classList.remove('hidden');
  document.getElementById('f_name').focus();
}

/* ── CLOSE MODAL ── */
function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
  editingId = null;
}

/* ── CLEAR FORM ── */
function clearForm() {
  FORM_FIELDS.forEach(key => {
    const el = document.getElementById('f_' + key);
    if (el) el.value = '';
  });
  document.getElementById('f_status').value = '';
}

/* ── SAVE LEAD (add or update) ── */
function saveLead() {
  const name = document.getElementById('f_name').value.trim();
  if (!name) {
    alert('Client name is required.');
    document.getElementById('f_name').focus();
    return;
  }

  const obj = {
    date:     document.getElementById('f_date').value.trim(),
    time:     document.getElementById('f_time').value.trim(),
    name,
    email:    document.getElementById('f_email').value.trim(),
    country:  document.getElementById('f_country').value.trim(),
    course:   document.getElementById('f_course').value.trim(),
    csmEmail: document.getElementById('f_csmemail').value.trim(),
    csm:      document.getElementById('f_csm').value.trim(),
    trainer:  document.getElementById('f_trainer').value.trim(),
    query:    document.getElementById('f_query').value.trim(),
    status:   document.getElementById('f_status').value,
  };

  if (editingId) {
    leads = leads.map(l => l.id === editingId ? { ...obj, id: editingId } : l);
  } else {
    leads.push({ ...obj, id: nextId++ });
  }

  closeModal();
  renderAll();
}

/* ── CLOSE ON OVERLAY CLICK ── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  /* ── CLOSE ON ESCAPE KEY ── */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
