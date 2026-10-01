const { createClient } = window.supabase;
const sb = createClient(MIDORI_CONFIG.SUPABASE_URL, MIDORI_CONFIG.SUPABASE_KEY);

const ROLE_LABEL = {
  admin: 'Administration',
  professor: 'Professeur',
  surveillant: 'Surveillant',
  student: 'Élève',
  psychologue: 'Psychologue',
  infirmiere: 'Infirmière'
};

const HOME = {
  admin: 'dashboard.html',
  professor: 'prof-space.html',
  surveillant: 'supervisor-space.html',
  student: 'student-space.html',
  psychologue: 'psych-space.html',
  infirmiere: 'nurse-space.html'
};

const NAV = {
  admin: [
    ['Général', [
      ['dashboard.html', '📊', 'Tableau de bord'],
      ['messages.html', '✉️', 'Messagerie'],
      ['announcements.html', '📣', 'Annonces'],
      ['events.html', '🎪', 'Calendrier RP']
    ]],
    ['Scolarité', [
      ['students.html', '🎓', 'Élèves'],
      ['professors.html', '👩‍🏫', 'Professeurs'],
      ['supervisors.html', '🛡️', 'Surveillants'],
      ['classes.html', '🏫', 'Classes'],
      ['subjects.html', '📚', 'Matières'],
      ['timetable.html', '🗓️', 'Emploi du temps']
    ]],
    ['Suivi', [
      ['attendance.html', '📝', 'Fiches d’appel'],
      ['absences.html', '⏱️', 'Absences'],
      ['grades.html', '💯', 'Notes'],
      ['homework.html', '📓', 'Devoirs'],
      ['points.html', '⭐', 'Points / Réputation'],
      ['discipline.html', '⚖️', 'Discipline'],
      ['clubs.html', '🌸', 'Clubs'],
      ['supervisor-reports.html', '📄', 'Rapports surveillants']
    ]],
    ['Administration', [
      ['access.html', '🔐', 'Accès & comptes'],
      ['logs.html', '🕘', 'Journal d’activité'],
      ['profile.html', '👤', 'Mon profil']
    ]]
  ],
  professor: [
    ['Mon espace', [
      ['prof-space.html', '🏠', 'Accueil'],
      ['messages.html', '✉️', 'Messagerie'],
      ['prof-attendance.html', '📝', 'Fiches d’appel'],
      ['prof-grades.html', '💯', 'Notes'],
      ['prof-homework.html', '📓', 'Devoirs'],
      ['prof-resources.html', '📁', 'Ressources'],
      ['prof-timetable.html', '🗓️', 'Emploi du temps'],
      ['announcements.html', '📣', 'Annonces'],
      ['events.html', '🎪', 'Calendrier RP'],
      ['profile.html', '👤', 'Mon profil']
    ]]
  ],
  surveillant: [
    ['Mon espace', [
      ['supervisor-space.html', '🏠', 'Accueil'],
      ['messages.html', '✉️', 'Messagerie'],
      ['supervisor-absences.html', '⏱️', 'Absences & retards'],
      ['supervisor-sanctions.html', '⚖️', 'Sanctions'],
      ['supervisor-reports.html', '📄', 'Rapports'],
      ['announcements.html', '📣', 'Annonces'],
      ['events.html', '🎪', 'Calendrier RP'],
      ['profile.html', '👤', 'Mon profil']
    ]]
  ],
  student: [
    ['Mon espace', [
      ['student-space.html', '🏠', 'Accueil'],
      ['messages.html', '✉️', 'Messagerie'],
      ['student-grades.html', '💯', 'Mes notes'],
      ['student-homework.html', '📓', 'Mes devoirs'],
      ['student-timetable.html', '🗓️', 'Mon emploi du temps'],
      ['student-attendance.html', '⏱️', 'Mes absences'],
      ['student-points.html', '⭐', 'Ma réputation'],
      ['student-appointments.html', '🩺', 'Mes rendez-vous'],
      ['student-clubs.html', '🌸', 'Mes clubs'],
      ['announcements.html', '📣', 'Annonces'],
      ['events.html', '🎪', 'Calendrier RP'],
      ['profile.html', '👤', 'Mon profil']
    ]]
  ],
  psychologue: [
    ['Mon espace', [
      ['psych-space.html', '🏠', 'Accueil'],
      ['messages.html', '✉️', 'Messagerie'],
      ['psych-appointments.html', '🧠', 'Rendez-vous'],
      ['psych-records.html', '🔒', 'Dossiers confidentiels'],
      ['announcements.html', '📣', 'Annonces'],
      ['events.html', '🎪', 'Calendrier RP'],
      ['profile.html', '👤', 'Mon profil']
    ]]
  ],
  infirmiere: [
    ['Mon espace', [
      ['nurse-space.html', '🏠', 'Accueil'],
      ['messages.html', '✉️', 'Messagerie'],
      ['nurse-appointments.html', '🩺', 'Rendez-vous'],
      ['nurse-records.html', '🔒', 'Dossiers infirmerie'],
      ['announcements.html', '📣', 'Annonces'],
      ['events.html', '🎪', 'Calendrier RP'],
      ['profile.html', '👤', 'Mon profil']
    ]]
  ]
};

const TITLE = {
  'dashboard.html': 'Tableau de bord', 'messages.html': 'Messagerie', 'homework-submissions.html': 'Remises de devoirs', 'announcements.html': 'Annonces', 'students.html': 'Élèves', 'student-profile.html': 'Dossier élève',
  'professors.html': 'Professeurs', 'supervisors.html': 'Surveillants', 'classes.html': 'Classes',
  'subjects.html': 'Matières', 'timetable.html': 'Emploi du temps', 'attendance.html': 'Fiches d’appel',
  'absences.html': 'Absences', 'grades.html': 'Notes', 'homework.html': 'Devoirs',
  'points.html': 'Points / Réputation', 'discipline.html': 'Discipline', 'clubs.html': 'Clubs',
  'access.html': 'Accès & comptes', 'logs.html': 'Journal d’activité', 'events.html': 'Calendrier RP', 'profile.html': 'Mon profil',
  'prof-space.html': 'Espace professeur', 'prof-attendance.html': 'Fiches d’appel', 'prof-grades.html': 'Notes',
  'prof-homework.html': 'Devoirs', 'prof-resources.html': 'Ressources', 'prof-timetable.html': 'Emploi du temps',
  'supervisor-space.html': 'Espace surveillant', 'supervisor-absences.html': 'Absences & retards',
  'supervisor-sanctions.html': 'Sanctions', 'supervisor-reports.html': 'Rapports',
  'student-space.html': 'Espace élève', 'student-grades.html': 'Mes notes', 'student-homework.html': 'Mes devoirs',
  'student-timetable.html': 'Mon emploi du temps', 'student-attendance.html': 'Mes absences', 'student-points.html': 'Ma réputation',
  'student-appointments.html': 'Mes rendez-vous', 'student-clubs.html': 'Mes clubs',
  'psych-space.html': 'Espace psychologue', 'psych-appointments.html': 'Rendez-vous', 'psych-records.html': 'Dossiers confidentiels',
  'nurse-space.html': 'Espace infirmière', 'nurse-appointments.html': 'Rendez-vous', 'nurse-records.html': 'Dossiers infirmerie'
};

const PAGE_ROLES = {
  'dashboard.html': ['admin'], 'messages.html': ['admin','professor','surveillant','student','psychologue','infirmiere'], 'homework-submissions.html': ['admin','professor'], 'access.html': ['admin'], 'students.html': ['admin'], 'professors.html': ['admin'],
  'supervisors.html': ['admin'], 'classes.html': ['admin'], 'subjects.html': ['admin'], 'timetable.html': ['admin'],
  'attendance.html': ['admin', 'professor', 'surveillant'], 'absences.html': ['admin', 'professor', 'surveillant'],
  'grades.html': ['admin', 'professor'], 'homework.html': ['admin', 'professor'], 'points.html': ['admin'],
  'discipline.html': ['admin', 'surveillant'], 'clubs.html': ['admin'], 'supervisor-reports.html': ['admin','surveillant'], 'events.html': ['admin','professor','surveillant','student','psychologue','infirmiere'], 'logs.html': ['admin'],
  'announcements.html': ['admin', 'professor', 'surveillant', 'student', 'psychologue', 'infirmiere'],
  'profile.html': ['admin', 'professor', 'surveillant', 'student', 'psychologue', 'infirmiere'], 'student-profile.html': ['admin'],
  'prof-space.html': ['professor'], 'prof-attendance.html': ['professor'], 'prof-grades.html': ['professor'],
  'prof-homework.html': ['professor'], 'prof-resources.html': ['professor'], 'prof-timetable.html': ['professor'],
  'supervisor-space.html': ['surveillant'], 'supervisor-absences.html': ['surveillant'],
  'supervisor-sanctions.html': ['surveillant'], 'supervisor-reports.html': ['admin','surveillant'],
  'student-space.html': ['student'], 'student-grades.html': ['student'], 'student-homework.html': ['student'],
  'student-timetable.html': ['student'], 'student-attendance.html': ['student'], 'student-points.html': ['student'], 'student-appointments.html': ['student'],
  'student-clubs.html': ['student'], 'psych-space.html': ['psychologue'], 'psych-appointments.html': ['psychologue'],
  'psych-records.html': ['psychologue'], 'nurse-space.html': ['infirmiere'], 'nurse-appointments.html': ['infirmiere'],
  'nurse-records.html': ['infirmiere']
};

const qs = s => document.querySelector(s);
const qsa = s => [...document.querySelectorAll(s)];
const esc = v => String(v ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
const dateFR = v => { if (!v) return '—'; const d = new Date(`${v}T00:00:00`); return isNaN(d) ? v : d.toLocaleDateString('fr-FR'); };
const dtFR = v => { if (!v) return '—'; const d = new Date(v); return isNaN(d) ? v : d.toLocaleString('fr-FR'); };
const today = () => new Date().toISOString().slice(0, 10);
const errMsg = e => e?.message || e?.error_description || e?.details || 'Une erreur est survenue.';

function toast(msg, type = 'success') {
  const x = document.createElement('div');
  x.className = `notice ${type}`;
  x.textContent = msg;
  Object.assign(x.style, { position: 'fixed', right: '18px', bottom: '18px', zIndex: 999, boxShadow: '0 15px 40px rgba(0,0,0,.14)', maxWidth: '480px' });
  document.body.appendChild(x);
  setTimeout(() => x.remove(), 4200);
}
function openModal(id) { qs(`#${id}`)?.classList.add('open'); }
function closeModal(id) { qs(`#${id}`)?.classList.remove('open'); }
function closeBindings() { qsa('[data-close]').forEach(b => b.onclick = () => closeModal(b.dataset.close)); }
function head(title, sub) { return `<div class="head"><h1>${title}</h1><p>${sub}</p></div>`; }
function statCard(label, val, icon = '•') { return `<div class="card stat"><div><div class="muted">${esc(label)}</div><div class="n">${esc(val)}</div></div><div class="brand-mark" style="width:42px;height:42px">${icon}</div></div>`; }
function tableEmpty(colspan, msg = 'Aucune donnée.') { return `<tr><td colspan="${colspan}" class="empty">${esc(msg)}</td></tr>`; }
function modal(id, title, formHtml) { return `<div class="modal" id="${id}"><div class="modal-box"><div class="modal-head"><h3>${esc(title)}</h3><button class="close" data-close="${id}">✕</button></div>${formHtml}</div></div>`; }
function opts(rows, val = 'id', lab = 'name', sel = '') { return `<option value="">— Sélectionner —</option>${rows.map(r => `<option value="${esc(r[val])}" ${String(r[val]) === String(sel) ? 'selected' : ''}>${esc(r[lab])}</option>`).join('')}`; }
function badge(v) { const s = String(v ?? ''); return `<span class="tag">${esc(s)}</span>`; }

async function session() {
  const r = await sb.auth.getSession();
  if (r.error) throw r.error;
  return r.data.session;
}
async function currentUser() {
  const r = await sb.auth.getUser();
  if (r.error) throw r.error;
  return r.data.user;
}
async function currentProfile() {
  const user = await currentUser();
  if (!user) return null;
  const r = await sb.from('profiles').select('*').eq('id', user.id).maybeSingle();
  if (r.error) throw r.error;
  return r.data;
}
async function guard(roles = []) {
  const s = await session();
  if (!s) { location.href = 'index.html'; return null; }
  const p = await currentProfile();
  if (!p || p.active === false) {
    location.href = 'index.html?e=profil';
    return null;
  }
  if (roles.length && !roles.includes(p.role)) {
    location.href = HOME[p.role] || 'index.html';
    return null;
  }
  return { session: s, profile: p };
}
async function logout() { await sb.auth.signOut(); location.href = 'index.html'; }

function shell(p) {
  const page = location.pathname.split('/').pop() || 'dashboard.html';
  let nav = '';
  (NAV[p.role] || []).forEach(group => {
    nav += `<div class="nav-section">${esc(group[0])}</div>`;
    group[1].forEach(item => {
      nav += `<a href="${item[0]}" class="${page === item[0] ? 'active' : ''}"><span>${item[1]}</span><span style="display:flex;gap:7px;align-items:center">${esc(item[2])}${item[0] === 'messages.html' ? '<span id="mailBadge" class="tag red" style="display:none;padding:2px 6px;font-size:10px"></span>' : ''}</span></a>`;
    });
  });
  document.body.className = '';
  document.body.innerHTML = `
    <div class="page-shell">
      <aside class="sidebar" id="sidebar">
        <div class="brand">
          <svg class="school-logo" viewBox="0 0 64 64" role="img" aria-label="Midori High" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="midoriLogoGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#bfe9f1"/><stop offset="100%" stop-color="#f6c6dc"/></linearGradient></defs>
            <path d="M32 3 57 13v18c0 15-10 25-25 30C17 56 7 46 7 31V13L32 3Z" fill="url(#midoriLogoGradient)" stroke="#6b8790" stroke-width="2"/>
            <path d="M18 22h28M18 29h28M18 36h28" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".9"/>
            <text x="32" y="34" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#345b63">MI</text>
            <text x="32" y="49" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" font-weight="700" fill="#345b63">1990</text>
          </svg>
          <div><strong>Midori High</strong><small>Portail administratif</small></div>
        </div>
        <nav class="nav">${nav}</nav>
      </aside>
      <section class="main">
        <header class="topbar">
          <div style="display:flex;gap:9px;align-items:center">
            <button class="menu" id="menu">☰</button>
            <div><strong>${esc(TITLE[page] || 'Portail')}</strong></div>
          </div>
          <div class="top-user">
            <div class="avatar">${esc((p.full_name || p.username || '?').slice(0, 1).toUpperCase())}</div>
            <div style="text-align:right"><strong style="font-size:13px;display:block">${esc(p.full_name || p.username)}</strong><span style="font-size:11px;color:#77827e">${esc(ROLE_LABEL[p.role] || p.role)}</span></div>
            <button id="logout" class="logout">Déconnexion</button>
          </div>
        </header>
        <main class="content" id="app"></main>
      </section>
    </div>`;
  qs('#logout').onclick = logout;
  qs('#menu').onclick = () => qs('#sidebar').classList.toggle('open');
  loadUnreadBadge();
}


async function rows(table, select = '*', cfg = {}) {
  // Récupération paginée pour ne jamais perdre les fiches au-delà de 1 000 lignes.
  // Les appels avec cfg.limit restent limités à la quantité demandée.
  const PAGE_SIZE = 1000;
  const requestedLimit = Number.isFinite(Number(cfg.limit)) && Number(cfg.limit) > 0 ? Number(cfg.limit) : null;
  const target = requestedLimit || Infinity;
  const out = [];
  let from = 0;

  while (out.length < target) {
    const size = Math.min(PAGE_SIZE, target - out.length);
    let q = sb.from(table).select(select);
    if (cfg.order) q = q.order(cfg.order, { ascending: cfg.ascending ?? true });
    if (cfg.filters) cfg.filters.forEach(f => { q = q[f.op || 'eq'](f.column, f.value); });
    q = q.range(from, from + size - 1);

    const r = await q;
    if (r.error) throw r.error;
    const page = r.data || [];
    out.push(...page);

    if (page.length < size || page.length === 0) break;
    from += page.length;
  }

  return requestedLimit ? out.slice(0, requestedLimit) : out;
}
async function add(table, row) { const r = await sb.from(table).insert(row).select().single(); if (r.error) throw r.error; return r.data; }
async function update(table, id, row) { const r = await sb.from(table).update(row).eq('id', id).select().single(); if (r.error) throw r.error; return r.data; }
async function remove(table, id) { const r = await sb.from(table).delete().eq('id', id); if (r.error) throw r.error; }
async function log(action, entity, entityId = null, details = null) {
  try { await sb.from('activity_logs').insert({ actor_profile_id: (await currentUser())?.id || null, action, entity, entity_id: entityId, details: details || null }); } catch (_) {}
}


const MESSAGE_BUCKET = 'midori-messages';

function roleLabel(role) { return ROLE_LABEL[role] || role || 'Utilisateur'; }

async function messageDirectory() {
  const r = await sb.rpc('list_message_recipients');
  if (r.error) throw r.error;
  return r.data || [];
}

async function loadUnreadBadge() {
  const badge = qs('#mailBadge');
  if (!badge) return;
  try {
    const user = await currentUser();
    if (!user) return;
    const r = await sb.from('messages').select('id', { count:'exact', head:true }).eq('recipient_id', user.id).is('read_at', null);
    if (r.error) throw r.error;
    const n = r.count || 0;
    badge.textContent = n > 99 ? '99+' : String(n);
    badge.style.display = n ? 'inline-flex' : 'none';
  } catch (_) {}
}

function safeFileName(name) {
  return String(name || 'fichier').replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120);
}

async function sendInternalMessage({ recipientId, subject, body, files = [], homeworkId = null }) {
  const user = await currentUser();
  if (!user) throw new Error('Session expirée.');
  if (!recipientId) throw new Error('Destinataire manquant.');
  const messageId = crypto.randomUUID();
  let message = null;
  const uploadedPaths = [];
  try {
    const r = await sb.from('messages').insert({
      id: messageId,
      sender_id: user.id,
      recipient_id: recipientId,
      subject: String(subject || '').trim() || '(Sans objet)',
      body: String(body || '').trim(),
      homework_id: homeworkId || null
    }).select().single();
    if (r.error) throw r.error;
    message = r.data;

    for (const file of Array.from(files || [])) {
      if (!file || !file.name) continue;
      if (file.size > 10 * 1024 * 1024) throw new Error(`Le fichier « ${file.name} » dépasse 10 Mo.`);
      const path = `${user.id}/${messageId}/${crypto.randomUUID()}-${safeFileName(file.name)}`;
      const up = await sb.storage.from(MESSAGE_BUCKET).upload(path, file, { upsert:false, contentType:file.type || 'application/octet-stream' });
      if (up.error) throw up.error;
      uploadedPaths.push(path);
      const ar = await sb.from('message_attachments').insert({
        message_id: messageId,
        file_name: file.name,
        storage_path: path,
        mime_type: file.type || 'application/octet-stream',
        size_bytes: file.size
      });
      if (ar.error) throw ar.error;
    }
    return message;
  } catch (er) {
    if (uploadedPaths.length) {
      try { await sb.storage.from(MESSAGE_BUCKET).remove(uploadedPaths); } catch (_) {}
    }
    if (message) {
      try { await sb.from('messages').delete().eq('id', messageId); } catch (_) {}
    }
    throw er;
  }
}

async function deleteInternalMessage(messageId) {
  if (!messageId) throw new Error('Message introuvable.');
  const ar = await sb.from('message_attachments').select('id,storage_path').eq('message_id', messageId);
  if (ar.error) throw ar.error;
  const paths = (ar.data || []).map(x => x.storage_path).filter(Boolean);
  if (paths.length) {
    const sr = await sb.storage.from(MESSAGE_BUCKET).remove(paths);
    if (sr.error) throw sr.error;
  }
  const mr = await sb.from('messages').delete().eq('id', messageId);
  if (mr.error) throw mr.error;
}

async function renderMessages(p) {
  const user = await currentUser();
  const directory = await messageDirectory();
  const people = new Map(directory.map(x => [x.id, x]));
  const [inboxR, sentR] = await Promise.all([
    sb.from('messages').select('id,sender_id,recipient_id,subject,body,homework_id,sent_at,read_at').eq('recipient_id', user.id).order('sent_at',{ascending:false}).limit(200),
    sb.from('messages').select('id,sender_id,recipient_id,subject,body,homework_id,sent_at,read_at').eq('sender_id', user.id).order('sent_at',{ascending:false}).limit(200)
  ]);
  if (inboxR.error) throw inboxR.error;
  if (sentR.error) throw sentR.error;
  const inbox = inboxR.data || [];
  const sent = sentR.data || [];
  const personName = id => people.get(id)?.full_name || people.get(id)?.username || 'Utilisateur';
  const displayRows = (list, mode) => list.map(m => {
    const other = mode === 'inbox' ? personName(m.sender_id) : personName(m.recipient_id);
    return `<div class="item msg-item ${!m.read_at && mode==='inbox' ? 'msg-unread' : ''}" data-msg="${esc(m.id)}" data-mode="${mode}" role="button" tabindex="0">
      <div style="min-width:0;text-align:left;flex:1"><strong>${esc(m.subject || '(Sans objet)')}</strong><span>${mode==='inbox'?'De':'À'} : ${esc(other)} · ${dtFR(m.sent_at)}</span><p style="margin-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:760px">${esc(m.body || '')}</p></div>
      <div class="actions" style="flex-shrink:0">${m.homework_id ? '<span class="tag">📓 Devoir</span>' : ''}${!m.read_at && mode==='inbox' ? '<span class="tag red" style="margin-left:5px">Nouveau</span>' : ''}<button type="button" class="btn danger small" data-delete-message="${esc(m.id)}">🗑️</button></div>
    </div>`;
  }).join('') || '<div class="card empty">Aucun message.</div>';

  qs('#app').innerHTML = head('Messagerie', 'Messagerie interne de Midori High — uniquement pour le RP.') +
    `<div class="toolbar"><div class="actions"><button id="composeMsg" class="btn primary">✉️ Nouveau message</button><span class="tag">${inbox.filter(x=>!x.read_at).length} non lu(s)</span></div></div>` +
    `<div class="grid g2"><div class="card"><div class="toolbar"><h3>Boîte de réception</h3></div><div class="list">${displayRows(inbox,'inbox')}</div></div><div class="card"><div class="toolbar"><h3>Messages envoyés</h3></div><div class="list">${displayRows(sent,'sent')}</div></div></div>` +
    modal('msgCompose','Nouveau message', `<form id="msgForm" class="form"><div class="field full"><label>Destinataire</label><select name="recipient_id" required>${opts(directory.filter(x=>x.id!==user.id).sort((a,b)=>String(a.full_name).localeCompare(String(b.full_name),'fr')),'id','full_name')}</select></div><div class="field full"><label>Objet</label><input name="subject" required maxlength="180"></div><div class="field full"><label>Message</label><textarea name="body" required placeholder="Écrivez votre message RP…"></textarea></div><div class="field full"><label>Pièces jointes <span class="muted">(3 fichiers max, 10 Mo chacun)</span></label><input name="files" type="file" multiple></div><div class="field full"><button class="btn primary">Envoyer</button></div></form>`) +
    `<div id="messageModalHost"></div>`;

  qs('#composeMsg').onclick=()=>openModal('msgCompose');
  closeBindings();
  qs('#msgForm').onsubmit = async e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const files = Array.from(e.target.querySelector('[name="files"]').files || []);
    if (files.length > 3) { toast('Maximum 3 pièces jointes.', 'error'); return; }
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn?.disabled) return;
    try {
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Envoi…'; }
      const m = await sendInternalMessage({ recipientId:f.get('recipient_id'), subject:f.get('subject'), body:f.get('body'), files });
      await log('create','message',m.id,null);
      toast('Message envoyé.');
      closeModal('msgCompose');
      await renderMessages(p);
    } catch (er) { toast(errMsg(er),'error'); if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Envoyer'; } }
  };

  qsa('[data-msg]').forEach(btn => btn.onclick = async () => {
    const id = btn.dataset.msg;
    const mode = btn.dataset.mode;
    try {
      const list = mode === 'inbox' ? inbox : sent;
      const m = list.find(x=>x.id===id);
      if (!m) return;
      if (mode === 'inbox' && !m.read_at) {
        const ur = await sb.rpc('mark_message_read',{p_message_id:id});
        if (ur.error) throw ur.error;
        m.read_at = new Date().toISOString();
      }
      const ar = await sb.from('message_attachments').select('id,file_name,storage_path,mime_type,size_bytes').eq('message_id',id).order('id');
      if (ar.error) throw ar.error;
      const sender = people.get(m.sender_id)?.full_name || 'Utilisateur';
      const recipient = people.get(m.recipient_id)?.full_name || 'Utilisateur';
      const attachmentHtml = (ar.data||[]).map(a=>`<button type="button" class="btn secondary small" data-download="${esc(a.id)}" data-path="${esc(a.storage_path)}">📎 ${esc(a.file_name)}</button>`).join(' ') || '<span class="muted">Aucune pièce jointe.</span>';
      const canReply = mode === 'inbox';
      const host=qs('#messageModalHost');
      host.innerHTML=modal('msgView','Message',`<div class="card" style="box-shadow:none;padding:0;border:0"><div class="muted">De : ${esc(sender)}<br>À : ${esc(recipient)}<br>${dtFR(m.sent_at)}</div><h2 style="font-size:21px;margin:15px 0 10px">${esc(m.subject)}</h2><div style="white-space:pre-wrap;line-height:1.6">${esc(m.body)}</div><div style="margin-top:16px"><strong>Pièces jointes</strong><div class="actions" style="margin-top:8px">${attachmentHtml}</div></div><div class="actions" style="margin-top:18px">${canReply?'<button id="replyMsg" class="btn primary">↩️ Répondre</button>':''}<button id="deleteMsgView" class="btn danger">🗑️ Supprimer</button><button class="btn secondary" data-close="msgView">Fermer</button></div></div>`);
      openModal('msgView'); closeBindings();
      qsa('[data-download]').forEach(x=>x.onclick=async()=>{
        try { const r=await sb.storage.from(MESSAGE_BUCKET).createSignedUrl(x.dataset.path,60); if(r.error) throw r.error; window.open(r.data.signedUrl,'_blank'); } catch(er){ toast(errMsg(er),'error'); }
      });
      qs('#replyMsg')?.addEventListener('click',()=>{
        closeModal('msgView');
        qs('#msgCompose [name="recipient_id"]').value=m.sender_id;
        qs('#msgCompose [name="subject"]').value=`Re: ${m.subject}`;
        qs('#msgCompose [name="body"]').value=`\n\n--- Message précédent ---\n${m.body}`;
        openModal('msgCompose');
      });
      qs('#deleteMsgView')?.addEventListener('click', async () => {
        if (!confirm('Supprimer définitivement ce message ?')) return;
        const b = qs('#deleteMsgView');
        try {
          b.disabled = true;
          await deleteInternalMessage(m.id);
          await log('delete', 'message', m.id, null);
          closeModal('msgView');
          toast('Message supprimé.');
          await renderMessages(p);
          await loadUnreadBadge();
        } catch (er) {
          b.disabled = false;
          toast(errMsg(er), 'error');
        }
      });
      await loadUnreadBadge();
      btn.classList.remove('msg-unread');
    } catch (er) { toast(errMsg(er),'error'); }
  });
  qsa('[data-delete-message]').forEach(btn => btn.onclick = async e => {
    e.stopPropagation();
    if (!confirm('Supprimer définitivement ce message ?')) return;
    try {
      btn.disabled = true;
      await deleteInternalMessage(btn.dataset.deleteMessage);
      await log('delete', 'message', btn.dataset.deleteMessage, null);
      toast('Message supprimé.');
      await renderMessages(p);
      await loadUnreadBadge();
    } catch (er) {
      btn.disabled = false;
      toast(errMsg(er), 'error');
    }
  });

}

async function renderHomeworkSubmissions(p) {
  const id = new URLSearchParams(location.search).get('id');
  if (!id) { qs('#app').innerHTML = head('Remises de devoirs','Sélectionnez un devoir depuis l’espace devoirs.')+'<div class="card empty">Aucun devoir sélectionné.</div>'; return; }
  const hr = await sb.from('homework').select('id,title,description,due_date,attachment_url,classes(name),subjects(name),professors(full_name)').eq('id',id).maybeSingle();
  if (hr.error) throw hr.error;
  if (!hr.data) { qs('#app').innerHTML = '<div class="notice error">Devoir introuvable ou non accessible.</div>'; return; }
  const homework=hr.data;
  const sr=await sb.from('homework_submissions').select('id,homework_id,student_id,message_id,submitted_at,status,note,students(full_name,username,class_name)').eq('homework_id',id).order('submitted_at',{ascending:false});
  if(sr.error) throw sr.error;
  const list=sr.data||[];
  qs('#app').innerHTML=head('Remises de devoirs',`${esc(homework.title)} · ${esc(homework.classes?.name||'')} · ${esc(homework.subjects?.name||'')}`)+
    `<div class="card" style="margin-bottom:15px"><strong>Date limite :</strong> ${dateFR(homework.due_date)}<br><span class="muted">${esc(homework.description||'')}</span></div>`+
    `<div class="card"><div class="toolbar"><h3>${list.length} remise(s)</h3></div><div class="table-wrap"><table class="table"><thead><tr><th>Élève</th><th>Date</th><th>Statut</th><th>Commentaire</th><th>Pièces jointes</th></tr></thead><tbody>${list.map(x=>`<tr><td><strong>${esc(x.students?.full_name||'')}</strong><span>${esc(x.students?.class_name||x.students?.username||'')}</span></td><td>${dtFR(x.submitted_at)}</td><td><select class="sub-status" data-sub="${esc(x.id)}"><option ${x.status==='Envoyé'?'selected':''}>Envoyé</option><option ${x.status==='En retard'?'selected':''}>En retard</option><option ${x.status==='Lu'?'selected':''}>Lu</option><option ${x.status==='Corrigé'?'selected':''}>Corrigé</option></select></td><td>${esc(x.note||'—')}</td><td><div class="actions" data-files="${esc(x.message_id)}"><span class="muted">Chargement…</span></div></td></tr>`).join('')||tableEmpty(5,'Aucune remise pour le moment.')}</tbody></table></div></div>`;
  for(const x of list){
    const fr=await sb.from('message_attachments').select('file_name,storage_path').eq('message_id',x.message_id);
    const box=qs(`[data-files="${x.message_id}"]`);
    if(fr.error){ if(box) box.innerHTML='<span class="muted">Impossible de charger les fichiers.</span>'; continue; }
    if(box) box.innerHTML=(fr.data||[]).map(a=>`<button type="button" class="btn secondary small" data-path="${esc(a.storage_path)}">📎 ${esc(a.file_name)}</button>`).join(' ')||'<span class="muted">Aucun fichier</span>';
  }
  qsa('[data-path]').forEach(b=>b.onclick=async()=>{try{const r=await sb.storage.from(MESSAGE_BUCKET).createSignedUrl(b.dataset.path,60);if(r.error)throw r.error;window.open(r.data.signedUrl,'_blank')}catch(er){toast(errMsg(er),'error')}});
  qsa('[data-sub]').forEach(sel=>sel.onchange=async()=>{try{await update('homework_submissions',sel.dataset.sub,{status:sel.value});await log('update','homework_submission',sel.dataset.sub,{status:sel.value});toast('Statut mis à jour.')}catch(er){toast(errMsg(er),'error')}});
}

function reputation(total) {
  const n = Number(total || 0);
  if (n >= 600) return 'Parfait';
  if (n >= 100) return 'Normal';
  if (n <= -100) return 'Délinquant';
  return 'Zone intermédiaire';
}
function pointReference() {
  return `<div class="notice"><strong>Repères RP</strong><br>600 pts = Parfait · 100 pts = Normal · −100 pts = Délinquant.<br><span class="muted">Les valeurs entre ces repères restent une zone intermédiaire.</span></div>`;
}

function loginErrorMessage(er) {
  const code = er?.code || '';
  const msg = String(er?.message || '').toLowerCase();

  if (msg.includes('invalid api key') || msg.includes('api key')) {
    return 'Clé Supabase invalide : vérifiez config.js et la clé Publishable de votre projet.';
  }

  if (code === 'invalid_credentials' || msg.includes('invalid login credentials')) {
    return 'E-mail ou mot de passe incorrect.';
  }

  if (code === 'email_not_confirmed' || msg.includes('email not confirmed')) {
    return 'Ce compte n’est pas confirmé dans Supabase Authentication.';
  }

  if (code === 'user_not_found') {
    return 'Aucun compte Supabase ne correspond à cette adresse e-mail.';
  }

  return errMsg(er);
}

function showLoginError(message) {
  const errorEl = qs('#loginError');
  if (!errorEl) return;

  errorEl.textContent = message || '';
  errorEl.style.display = message ? 'block' : 'none';
}

async function initLogin() {
  const form = qs('#loginForm');
  if (!form) return;

  const params = new URLSearchParams(location.search);

  if (params.get('e')) {
    showLoginError(
      'Votre accès au portail est désactivé ou votre profil n’est pas correctement lié. Contactez l’administration.'
    );
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const email = String(form.elements.email?.value || '').trim().toLowerCase();
    const password = String(form.elements.password?.value || '');

    showLoginError('');

    if (!email) {
      showLoginError('Veuillez saisir votre e-mail Midori.');
      return;
    }

    if (!password) {
      showLoginError('Veuillez saisir votre mot de passe.');
      return;
    }

    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Connexion…';
    }

    try {
      // Connexion directe avec l’e-mail du compte Supabase.
      // Aucun pseudo Roblox, identifiant "admin" ou RPC de résolution n’est utilisé.
      const r = await sb.auth.signInWithPassword({
        email,
        password
      });

      if (r.error) throw r.error;

      // Le profil doit déjà exister dans public.profiles.
      // Cette fonction ne doit pas bloquer la connexion si elle n’existe pas.
      try {
        await sb.rpc('ensure_current_profile');
      } catch (_) {}

      const p = await currentProfile();

      if (!p) {
        await sb.auth.signOut();
        throw new Error(
          'Connexion réussie, mais aucun profil Midori High n’est lié à ce compte.'
        );
      }

      if (p.active === false) {
        await sb.auth.signOut();
        throw new Error(
          'Votre accès au portail est désactivé. Contactez l’administration.'
        );
      }

      location.href = HOME[p.role] || 'dashboard.html';

    } catch (er) {
      console.error('Midori High — erreur de connexion', er);
      showLoginError(loginErrorMessage(er));
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Se connecter';
      }
    }
  });
}


async function renderDashboard() {
  const [students, professors, classes, absences] = await Promise.all([
    sb.from('students').select('id', { count: 'exact', head: true }),
    sb.from('professors').select('id', { count: 'exact', head: true }),
    sb.from('classes').select('id', { count: 'exact', head: true }),
    sb.from('absences').select('id', { count: 'exact', head: true }).eq('date', today()).eq('type', 'absence')
  ]);
  const counts = [students, professors, classes, absences];
  counts.forEach(r => { if (r.error) throw r.error; });
  const announces = await rows('announcements', 'id,title,content,published_at', { order: 'published_at', ascending: false, limit: 4 });
  qs('#app').innerHTML = head('Tableau de bord', 'Vue générale de Midori High.') +
    `<div class="grid g4">${statCard('Élèves', students.count ?? 0, '🎓')}${statCard('Professeurs', professors.count ?? 0, '👩‍🏫')}${statCard('Classes', classes.count ?? 0, '🏫')}${statCard('Absences aujourd’hui', absences.count ?? 0, '⏱️')}</div>` +
    `<div class="grid g2" style="margin-top:15px"><div class="hero"><h2>Midori High</h2><p>Une école d’excellence : suivi scolaire, présence, réputation et vie de l’établissement.</p><div class="actions" style="margin-top:16px"><a href="attendance.html" class="btn secondary">📝 Ouvrir une fiche d’appel</a><a href="points.html" class="btn secondary">⭐ Gérer les points</a></div></div><div class="card"><h3 style="margin-bottom:12px">Dernières annonces</h3><div class="list">${announces.map(a => `<div class="item"><div><strong>${esc(a.title)}</strong><span>${dtFR(a.published_at)}</span><p style="margin-top:5px">${esc(String(a.content || '').slice(0, 150))}</p></div></div>`).join('') || '<div class="empty">Aucune annonce.</div>'}</div></div></div>`;
}

async function renderAnnouncements(p) {
  const isAdmin = p.role === 'admin';
  const list = await rows('announcements', '*', { order: 'published_at', ascending: false, limit: 200 });
  qs('#app').innerHTML = head('Annonces', 'Informations officielles de Midori High.') +
    (isAdmin ? `<div class="toolbar"><button id="aa" class="btn primary">+ Nouvelle annonce</button></div>` : '') +
    `<div class="list">${list.map(a => `<article class="card"><div class="toolbar" style="margin-bottom:8px"><div><h3>${esc(a.title)}</h3><span class="muted">${dtFR(a.published_at)} · ${a.published ? 'Publiée' : 'Brouillon'}</span></div>${isAdmin ? `<button class="btn danger small" data-del-ann="${esc(a.id)}">Supprimer</button>` : ''}</div><p style="white-space:pre-wrap">${esc(a.content)}</p></article>`).join('') || '<div class="card empty">Aucune annonce.</div>'}</div>` +
    (isAdmin ? modal('am', 'Nouvelle annonce', `<form id="af" class="form"><div class="field full"><label>Titre</label><input name="title" required></div><div class="field full"><label>Contenu</label><textarea name="content" required></textarea></div><div class="field"><label>État</label><select name="published"><option value="true">Publier</option><option value="false">Brouillon</option></select></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`) : '');
  if (isAdmin) {
    qs('#aa').onclick = () => openModal('am');
    closeBindings();
    qs('#af').onsubmit = async e => { e.preventDefault(); const f = new FormData(e.target); try { const r = await add('announcements', { title: f.get('title'), content: f.get('content'), published: f.get('published') === 'true', published_at: new Date().toISOString() }); await log('create', 'announcement', r.id, { title: r.title }); toast('Annonce enregistrée.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } };
    qsa('[data-del-ann]').forEach(b => b.onclick = async () => { if (!confirm('Supprimer cette annonce ?')) return; try { await remove('announcements', b.dataset.delAnn); toast('Annonce supprimée.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } });
  }
}

async function adminCrudPage({ title, sub, table, fields, select = '*', order = 'created_at', searchPlaceholder = 'Rechercher…' }) {
  const list = await rows(table, select, { order, ascending: false });
  const visibleFields=fields.filter(f=>f.table!==false);
  const formFields = fields.map(f => `<div class="field ${f.full ? 'full' : ''}"><label>${esc(f.label)}</label>${f.html}</div>`).join('');
  qs('#app').innerHTML = head(title, sub) + `<div class="toolbar"><input id="search" class="search" placeholder="${esc(searchPlaceholder)}"><button id="addBtn" class="btn primary">+ Ajouter</button></div><div class="card"><div class="table-wrap"><table class="table"><thead><tr>${visibleFields.map(f => `<th>${esc(f.label)}</th>`).join('')}<th>Actions</th></tr></thead><tbody id="rows">${list.map(r => `<tr>${visibleFields.map(f => `<td>${esc(f.display ? f.display(r) : r[f.name] ?? '')}</td>`).join('')}<td><button class="btn secondary small" data-edit="${esc(r.id)}">Modifier</button> <button class="btn danger small" data-del="${esc(r.id)}">Supprimer</button></td></tr>`).join('') || tableEmpty(visibleFields.length + 1)}</tbody></table></div></div>` + modal('genericModal', `Ajouter — ${title}`, `<form id="genericForm" class="form"><input type="hidden" name="__id">${formFields}<div class="field full"><button class="btn primary">Enregistrer</button></div></form>`);
  qs('#addBtn').onclick = () => { qs('#genericForm').reset(); openModal('genericModal'); };
  closeBindings();
  qs('#search').oninput = e => { const q = e.target.value.toLowerCase(); qsa('#rows tr').forEach(tr => tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none'); };
  qsa('[data-del]').forEach(b => b.onclick = async () => { if (!confirm('Supprimer cette ligne ?')) return; try { await remove(table, b.dataset.del); toast('Supprimé.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } });
  qsa('[data-edit]').forEach(b => b.onclick = () => { const r=list.find(x=>String(x.id)===String(b.dataset.edit)); if(!r)return; const form=qs('#genericForm'); form.reset(); form.elements.__id.value=r.id; fields.forEach(f=>{if(!f.name)return;const el=form.elements[f.name];if(!el)return;if(el.tagName==='SELECT')el.value=String(r[f.name]??'');else if(el.type==='checkbox')el.checked=!!r[f.name];else el.value=r[f.name]??'';}); qs('#genericModal .modal-head h3').textContent=`Modifier — ${title}`; openModal('genericModal'); });
  qs('#genericForm').onsubmit = async e => { e.preventDefault(); const f = new FormData(e.target); try { const obj = {}; fields.forEach(x => { if (x.name) obj[x.name] = x.type === 'number' ? Number(f.get(x.name) || 0) : (f.get(x.name) || null); }); const id=f.get('__id'); const r=id?await update(table,id,obj):await add(table,obj); await log(id?'update':'create', table, r.id, null); toast(id?'Modification enregistrée.':'Enregistré.'); closeModal('genericModal'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } };
}

async function renderStudents() {
  const classes = await rows('classes', 'id,name', { order: 'name' });
  const list = await rows('students', 'id,username,full_name,class_name,birth_date,class_id,created_at', { order: 'created_at', ascending: false });
  qs('#app').innerHTML = head('Élèves', 'Gestion des élèves, classes et accès.') + `<div class="toolbar"><input id="ss" class="search" placeholder="Rechercher un élève…"><button id="addStudent" class="btn primary">+ Ajouter</button></div><div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Pseudo</th><th>Nom</th><th>Classe</th><th>Date de naissance</th><th>Accès</th><th>Actions</th></tr></thead><tbody id="studentRows">${list.map(s => `<tr><td>${esc(s.username)}</td><td>${esc(s.full_name)}</td><td>${esc(s.class_name || classes.find(c => c.id === s.class_id)?.name || '—')}</td><td>${dateFR(s.birth_date)}</td><td><a class="btn secondary small" href="access.html?role=student&fiche_id=${encodeURIComponent(s.id)}">Gérer</a></td><td><a class="btn secondary small" href="student-profile.html?id=${esc(s.id)}">Dossier</a> <button class="btn danger small" data-del-student="${esc(s.id)}">Supprimer</button></td></tr>`).join('') || tableEmpty(6)}</tbody></table></div></div>` + modal('sm', 'Nouvel élève', `<form id="sf" class="form"><div class="field"><label>Pseudo Roblox</label><input name="username" required></div><div class="field"><label>Nom complet</label><input name="full_name" required></div><div class="field"><label>Classe</label><select name="class_id">${opts(classes)}</select></div><div class="field"><label>Date de naissance</label><input name="birth_date" type="date"></div><div class="field full"><button class="btn primary">Créer l’élève</button></div></form>`);
  qs('#addStudent').onclick = () => openModal('sm'); closeBindings();
  qs('#ss').oninput = e => { const q = e.target.value.toLowerCase(); qsa('#studentRows tr').forEach(tr => tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none'); };
  qs('#sf').onsubmit = async e => { e.preventDefault(); const f = new FormData(e.target); try { const c = classes.find(x => x.id === f.get('class_id')); const r = await add('students', { username: f.get('username'), full_name: f.get('full_name'), class_id: f.get('class_id') || null, class_name: c?.name || null, birth_date: f.get('birth_date') || null }); await log('create', 'student', r.id, { username: r.username }); toast('Élève créé.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } };
  qsa('[data-del-student]').forEach(b => b.onclick = async () => { if (!confirm('Supprimer cet élève et ses données liées ?')) return; try { await remove('students', b.dataset.delStudent); toast('Élève supprimé.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } });
}

async function renderStudentProfile(p, asAdmin = false) {
  const id = new URLSearchParams(location.search).get('id') || p.student_id;
  if (!id) { qs('#app').innerHTML = `<div class="card error">Aucun dossier élève n’est lié à ce compte.</div>`; return; }
  const s = await sb.from('students').select('*').eq('id', id).single(); if (s.error) throw s.error;
  const abs = await rows('absences', '*', { order: 'date', ascending: false, limit: 30 });
  const myAbs = abs.filter(a => a.student_id === id);
  const pts = await rows('student_points', 'points,reason,category,created_at,comment,attendance_id', { order: 'created_at', ascending: false, limit: 100 });
  const myPts = pts.filter(x => x.student_id === id);
  const total = myPts.reduce((n, x) => n + Number(x.points || 0), 0);
  qs('#app').innerHTML = head(`Dossier — ${esc(s.data.full_name)}`, 'Informations scolaires et suivi RP.') +
    `<div class="grid g4">${statCard('Classe', s.data.class_name || '—', '🏫')}${statCard('Absences', myAbs.filter(x => x.type === 'absence').length, '⏱️')}${statCard('Retards', myAbs.filter(x => x.type === 'retard').length, '⌛')}${statCard('Réputation', `${total} pts`, '⭐')}</div>` +
    `<div class="grid g2" style="margin-top:15px"><div class="card"><h3>Profil</h3><p style="margin-top:10px"><strong>Pseudo :</strong> ${esc(s.data.username)}</p><p><strong>Nom :</strong> ${esc(s.data.full_name)}</p><p><strong>Classe :</strong> ${esc(s.data.class_name || '—')}</p><p><strong>Date de naissance :</strong> ${dateFR(s.data.birth_date)}</p></div><div class="card"><h3>Réputation</h3><p style="margin-top:10px;font-size:22px;font-weight:800">${total} pts</p><p class="muted">${esc(reputation(total))}</p>${pointReference()}</div></div>` +
    `<div class="card" style="margin-top:15px"><h3>Derniers événements de présence</h3><div class="table-wrap" style="margin-top:12px"><table class="table"><thead><tr><th>Date</th><th>Type</th><th>Motif</th><th>Justifié</th></tr></thead><tbody>${myAbs.map(a => `<tr><td>${dateFR(a.date)}</td><td>${badge(a.type)}</td><td>${esc(a.motif || '—')}</td><td>${a.justifie ? 'Oui' : 'Non'}</td></tr>`).join('') || tableEmpty(4)}</tbody></table></div></div>`;
  if (!asAdmin) document.title = `Dossier — ${s.data.full_name}`;
}

async function renderClasses() {
  await adminCrudPage({ title: 'Classes', sub: 'Structure des classes de Midori High.', table: 'classes', fields: [
    { name: 'name', label: 'Nom', html: '<input name="name" required>' },
    { name: 'level', label: 'Niveau', html: '<input name="level" placeholder="1ère / 2ème / 3ème année">' },
    { name: 'section', label: 'Section', html: '<input name="section" placeholder="A / B / C">' }
  ], searchPlaceholder: 'Rechercher une classe…' });
}
async function renderSubjects() {
  await adminCrudPage({ title: 'Matières', sub: 'Matières enseignées au lycée.', table: 'subjects', fields: [
    { name: 'name', label: 'Matière', html: '<input name="name" required>' },
    { name: 'description', label: 'Description', html: '<textarea name="description"></textarea>', full: true }
  ], searchPlaceholder: 'Rechercher une matière…' });
}

async function renderProfessors() {
  const classes = await rows('classes', 'id,name', { order: 'name' });
  const list = await rows('professors', 'id,username,full_name,subject,email,phone,active,note,created_at', { order: 'created_at', ascending: false });
  const links = await rows('professor_classes', 'professor_id,class_id,classes(name)');
  const access = await rows('profiles', 'id,username,role,active', { order: 'username' });
  qs('#app').innerHTML = head('Professeurs', 'Fiches des enseignants et classes prises en charge.') + `<div class="toolbar"><input id="ps" class="search" placeholder="Rechercher un professeur…"><button id="pa" class="btn primary">+ Ajouter</button></div><div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Pseudo</th><th>Nom</th><th>Matière</th><th>Classes</th><th>Accès</th><th>Actions</th></tr></thead><tbody id="pr">${list.map(r => { const cs = links.filter(l => l.professor_id === r.id).map(l => l.classes?.name).filter(Boolean); const profAccess = access.find(a => a.username === r.username && a.role === 'professor'); return `<tr><td>${esc(r.username)}</td><td>${esc(r.full_name)}</td><td>${esc(r.subject || '—')}</td><td>${esc(cs.join(', ') || '—')}</td><td>${profAccess ? (profAccess.active ? '<span class="tag">Actif</span>' : '<span class="tag red">Désactivé</span>') : '<span class="tag yellow">Non créé</span>'}</td><td><button class="btn secondary small" data-edit-prof="${esc(r.id)}">Modifier</button> <a class="btn secondary small" href="access.html?role=professor&fiche_id=${encodeURIComponent(r.id)}">Accès</a> <button class="btn danger small" data-del-prof="${esc(r.id)}">Supprimer</button></td></tr>`; }).join('') || tableEmpty(6)}</tbody></table></div></div>` + modal('pm', 'Professeur', `<form id="pf" class="form"><input type="hidden" name="id"><div class="field"><label>Pseudo</label><input name="username" required></div><div class="field"><label>Nom complet</label><input name="full_name" required></div><div class="field"><label>Matière</label><input name="subject"></div><div class="field"><label>E-mail</label><input name="email" type="email"></div><div class="field"><label>Téléphone</label><input name="phone"></div><div class="field"><label>Actif</label><select name="active"><option value="true">Oui</option><option value="false">Non</option></select></div><div class="field full"><label>Classes</label><div class="checkgrid">${classes.map(c => `<label><input type="checkbox" name="class_ids" value="${esc(c.id)}"> ${esc(c.name)}</label>`).join('') || '<span class="muted">Créez d’abord des classes.</span>'}</div></div><div class="field full"><label>Note interne</label><textarea name="note"></textarea></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`);
  qs('#pa').onclick = () => { qs('#pf').reset(); qs('#pf [name="id"]').value = ''; qsa('input[name="class_ids"]').forEach(x => x.checked = false); openModal('pm'); };
  closeBindings();
  qs('#ps').oninput = e => { const q = e.target.value.toLowerCase(); qsa('#pr tr').forEach(tr => tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none'); };
  qsa('[data-edit-prof]').forEach(b => b.onclick = () => { const r = list.find(x => x.id === b.dataset.editProf); qs('#pf').reset(); Object.entries({ id: r.id, username: r.username, full_name: r.full_name, subject: r.subject || '', email: r.email || '', phone: r.phone || '', active: String(r.active !== false), note: r.note || '' }).forEach(([k,v]) => { if (qs(`#pf [name="${k}"]`)) qs(`#pf [name="${k}"]`).value = v; }); const ids = links.filter(x => x.professor_id === r.id).map(x => x.class_id); qsa('input[name="class_ids"]').forEach(x => x.checked = ids.includes(x.value)); openModal('pm'); });
  qsa('[data-del-prof]').forEach(b => b.onclick = async () => { if (!confirm('Supprimer ce professeur ?')) return; try { await remove('professors', b.dataset.delProf); toast('Professeur supprimé.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } });
  qs('#pf').onsubmit = async e => { e.preventDefault(); const f = new FormData(e.target); try { let r; const obj = { username: f.get('username'), full_name: f.get('full_name'), subject: f.get('subject') || null, email: f.get('email') || null, phone: f.get('phone') || null, active: f.get('active') === 'true', note: f.get('note') || null }; if (f.get('id')) r = await update('professors', f.get('id'), obj); else r = await add('professors', obj); const old = links.filter(x => x.professor_id === r.id); for (const x of old) await remove('professor_classes', x.id); for (const cid of f.getAll('class_ids')) await add('professor_classes', { professor_id: r.id, class_id: cid }); await log(f.get('id') ? 'update' : 'create', 'professor', r.id, { username: r.username }); toast('Professeur enregistré.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } };
}

async function renderSupervisors() {
  await adminCrudPage({ title: 'Surveillants', sub: 'Gestion des fiches de surveillance.', table: 'supervisors', fields: [
    { name: 'username', label: 'Pseudo', html: '<input name="username" required>' },
    { name: 'full_name', label: 'Nom complet', html: '<input name="full_name" required>' },
    { name: 'email', label: 'E-mail', html: '<input name="email" type="email">' },
    { name: 'phone', label: 'Téléphone', html: '<input name="phone">' },
    { name: 'active', label: 'Actif', html: '<select name="active"><option value="true">Oui</option><option value="false">Non</option></select>' },
    { name: 'note', label: 'Note interne', html: '<textarea name="note"></textarea>', full: true }
  ], searchPlaceholder: 'Rechercher un surveillant…' });
}

async function renderTimetable() {
  const [classes, professors, subjects, list] = await Promise.all([
    rows('classes', 'id,name', { order: 'name' }),
    rows('professors', 'id,full_name,username', { order: 'full_name' }),
    rows('subjects', 'id,name', { order: 'name' }),
    rows('timetable', 'id,class_id,professor_id,subject_id,day_of_week,start_time,end_time,room,classes(name),professors(full_name),subjects(name)', { order: 'day_of_week' })
  ]);
  const days = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  qs('#app').innerHTML = head('Emploi du temps', 'Construisez le planning de Midori High.') + `<div class="toolbar"><input id="ts" class="search" placeholder="Rechercher classe, prof ou matière…"><button id="ta" class="btn primary">+ Ajouter un cours</button></div><div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Jour</th><th>Horaire</th><th>Classe</th><th>Professeur</th><th>Matière</th><th>Salle</th><th>Actions</th></tr></thead><tbody id="tr">${list.map(r => `<tr><td>${days[r.day_of_week]}</td><td>${String(r.start_time).slice(0,5)}–${String(r.end_time).slice(0,5)}</td><td>${esc(r.classes?.name || '')}</td><td>${esc(r.professors?.full_name || '')}</td><td>${esc(r.subjects?.name || '')}</td><td>${esc(r.room || '—')}</td><td><button class="btn danger small" data-del-time="${esc(r.id)}">Supprimer</button></td></tr>`).join('') || tableEmpty(7)}</tbody></table></div></div>` + modal('tm', 'Cours', `<form id="tf" class="form"><div class="field"><label>Jour</label><select name="day_of_week" required>${days.slice(1).map((d,i) => `<option value="${i+1}">${d}</option>`).join('')}</select></div><div class="field"><label>Classe</label><select name="class_id" required>${opts(classes)}</select></div><div class="field"><label>Professeur</label><select name="professor_id" required>${opts(professors, 'id', 'full_name')}</select></div><div class="field"><label>Matière</label><select name="subject_id" required>${opts(subjects)}</select></div><div class="field"><label>Début</label><input name="start_time" type="time" required></div><div class="field"><label>Fin</label><input name="end_time" type="time" required></div><div class="field"><label>Salle</label><input name="room"></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`);
  qs('#ta').onclick = () => openModal('tm'); closeBindings();
  qs('#ts').oninput = e => { const q = e.target.value.toLowerCase(); qsa('#tr tr').forEach(tr => tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none'); };
  qsa('[data-del-time]').forEach(b => b.onclick = async () => { if (!confirm('Supprimer ce cours ?')) return; try { await remove('timetable', b.dataset.delTime); toast('Cours supprimé.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } });
  qs('#tf').onsubmit = async e => { e.preventDefault(); const f = new FormData(e.target); try { const r = await add('timetable', { class_id: f.get('class_id'), professor_id: f.get('professor_id'), subject_id: f.get('subject_id'), day_of_week: Number(f.get('day_of_week')), start_time: f.get('start_time'), end_time: f.get('end_time'), room: f.get('room') || null }); await log('create', 'timetable', r.id, null); toast('Cours ajouté.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } };
}

async function findLinkedRow(table, p, linkField, label) {
  // 1) Liaison officielle par ID stocké dans profiles.
  if (p?.[linkField]) {
    const linked = await sb.from(table).select('*').eq('id', p[linkField]).maybeSingle();
    if (linked.error) throw linked.error;
    if (linked.data) return linked.data;
  }

  // 2) Secours : identifiant portail / pseudo, sans tenir compte des majuscules.
  const username = String(p?.username || '').trim();
  if (username) {
    const byUsername = await sb.from(table).select('*').ilike('username', username).maybeSingle();
    if (byUsername.error) throw byUsername.error;
    if (byUsername.data) return byUsername.data;
  }

  // 3) Secours : e-mail si la fiche du personnel en possède un.
  const email = String(p?.email || '').trim().toLowerCase();
  if (email && ['professors'].includes(table)) {
    const byEmail = await sb.from(table).select('*').ilike('email', email).maybeSingle();
    if (byEmail.error) throw byEmail.error;
    if (byEmail.data) return byEmail.data;
  }

  // 4) Dernier secours : nom complet exact, utile pour les anciens comptes.
  const fullName = String(p?.full_name || '').trim();
  if (fullName) {
    const byName = await sb.from(table).select('*').ilike('full_name', fullName).maybeSingle();
    if (byName.error) throw byName.error;
    if (byName.data) return byName.data;
  }

  throw new Error(`Aucune fiche ${label} ne correspond à cet accès. Vérifiez que le compte portail est bien relié à une fiche ${label}.`);
}

async function professorRow(p) {
  return findLinkedRow('professors', p, 'professor_id', 'professeur');
}

async function supervisorRow(p) {
  return findLinkedRow('supervisors', p, 'supervisor_id', 'surveillant');
}

async function professorClasses(profId) {
  return rows('professor_classes', 'class_id,classes(id,name)', { order: 'created_at' }).then(x => x.filter(a => a.class_id).filter(a => a.classes));
}

async function renderAttendance(p, profOnly = false) {
  const courses = await rows('timetable', 'id,class_id,professor_id,subject_id,day_of_week,start_time,end_time,room,classes(name),professors(full_name,username),subjects(name)', { order: 'day_of_week' });
  let currentProf = null;
  if (p.role === 'professor' || profOnly) currentProf = await professorRow(p);
  const allowedCourses = currentProf ? courses.filter(c => c.professor_id === currentProf.id) : courses;
  const initialDate = today();
  qs('#app').innerHTML = head('Fiches d’appel', p.role === 'professor' ? 'Faites l’appel de vos cours.' : 'Suivi des présences par cours et par date.') +
    `<div class="card"><div class="form"><div class="field"><label>Date</label><input id="attDate" type="date" value="${initialDate}"></div><div class="field"><label>Cours</label><select id="attCourse">${allowedCourses.length ? opts(allowedCourses.map(c => ({ id: c.id, name: `${['','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'][c.day_of_week]} · ${String(c.start_time).slice(0,5)}–${String(c.end_time).slice(0,5)} · ${c.classes?.name || ''} · ${c.subjects?.name || ''}` }))) : '<option value="">Aucun cours configuré</option>'}</select></div></div><div id="courseInfo" class="notice" style="margin-top:12px">Sélectionnez un cours.</div></div><div id="attBox" style="margin-top:15px"></div>`;
  const courseSelect = qs('#attCourse'); const dateInput = qs('#attDate');
  const load = async () => {
    const course = allowedCourses.find(c => c.id === courseSelect.value);
    if (!course) { qs('#courseInfo').innerHTML = 'Aucun cours disponible pour cette date. Configurez d’abord l’emploi du temps.'; qs('#attBox').innerHTML = ''; return; }
    const dayExpected = course.day_of_week;
    const selectedDay = new Date(`${dateInput.value}T00:00:00`).getDay() || 7;
    if (selectedDay !== dayExpected) qs('#courseInfo').innerHTML = `<strong>${esc(course.subjects?.name || '')}</strong> · ${esc(course.classes?.name || '')} · ${String(course.start_time).slice(0,5)}–${String(course.end_time).slice(0,5)}<br><span class="muted">Attention : ce cours est normalement prévu le ${['','lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'][dayExpected]}.</span>`;
    else qs('#courseInfo').innerHTML = `<strong>${esc(course.subjects?.name || '')}</strong> · ${esc(course.classes?.name || '')} · ${String(course.start_time).slice(0,5)}–${String(course.end_time).slice(0,5)} · Salle ${esc(course.room || '—')}`;
    const students = await rows('students', 'id,username,full_name,class_name', { order: 'full_name' });
    const inClass = students.filter(s => s.class_id === course.class_id || s.class_name === course.classes?.name);
    const att = await sb.from('attendance').select('*').eq('timetable_id', course.id).eq('date', dateInput.value); if (att.error) throw att.error;
    const map = new Map((att.data || []).map(a => [a.student_id, a]));
    qs('#attBox').innerHTML = `<div class="card"><div class="toolbar"><div><strong>${inClass.length}</strong> élève(s)</div><button id="saveAtt" class="btn primary">Enregistrer l’appel</button></div><div class="table-wrap"><table class="table"><thead><tr><th>Élève</th><th>Statut</th><th>Heure d’arrivée</th><th>Motif</th><th>Commentaire</th></tr></thead><tbody>${inClass.map(s => { const a = map.get(s.id); return `<tr class="att-row" data-student="${esc(s.id)}"><td><strong>${esc(s.full_name)}</strong><span>${esc(s.username)}</span></td><td><select class="att-status"><option value="present" ${!a || a.status === 'present' ? 'selected' : ''}>Présent</option><option value="absent" ${a?.status === 'absent' ? 'selected' : ''}>Absent</option><option value="retard" ${a?.status === 'retard' ? 'selected' : ''}>Retard</option></select></td><td><input class="att-arrival" type="time" value="${esc(a?.arrival_time || '')}"></td><td><input class="att-reason" value="${esc(a?.reason || '')}" placeholder="Motif"></td><td><input class="att-comment" value="${esc(a?.comment || '')}" placeholder="Note RP"></td></tr>`; }).join('') || tableEmpty(5, 'Aucun élève dans cette classe.')}</tbody></table></div></div>`;
    qs('#saveAtt').onclick = async () => {
      const b = qs('#saveAtt'); b.disabled = true; b.textContent = 'Enregistrement…';
      try {
        for (const row of qsa('.att-row')) {
          const studentId = row.dataset.student; const status = row.querySelector('.att-status').value; const arrival = row.querySelector('.att-arrival').value || null; const reason = row.querySelector('.att-reason').value.trim() || null; const comment = row.querySelector('.att-comment').value.trim() || null;
          const r = await sb.rpc('save_attendance', { p_timetable_id: course.id, p_student_id: studentId, p_date: dateInput.value, p_status: status, p_arrival_time: status === 'retard' ? arrival : null, p_reason: status === 'absent' ? reason : null, p_comment: comment, p_justified: false });
          if (r.error) throw r.error;
        }
        toast('Fiche d’appel enregistrée.');
        await log('update', 'attendance', null, { timetable_id: course.id, date: dateInput.value });
        await load();
      } catch (er) { toast(errMsg(er), 'error'); } finally { b.disabled = false; b.textContent = 'Enregistrer l’appel'; }
    };
  };
  const refreshCoursesForDate = () => { const selectedDay = new Date(`${dateInput.value}T00:00:00`).getDay() || 7; const c = allowedCourses.filter(x => x.day_of_week === selectedDay); courseSelect.innerHTML = c.length ? opts(c.map(x => ({ id: x.id, name: `${String(x.start_time).slice(0,5)}–${String(x.end_time).slice(0,5)} · ${x.classes?.name || ''} · ${x.subjects?.name || ''}` }))) : '<option value="">Aucun cours ce jour</option>'; load(); };
  dateInput.onchange = refreshCoursesForDate;
  courseSelect.onchange = load;
  refreshCoursesForDate();
}

async function renderAbsences(p) {
  const list = await rows('absences', 'id,student_id,attendance_id,date,type,heure_arrivee,motif,justifie,created_at,students(full_name,class_name,username)', { order: 'date', ascending: false, limit: 500 });
  qs('#app').innerHTML = head('Absences', 'Vue globale des absences et retards.') + `<div class="toolbar"><input id="as" class="search" placeholder="Rechercher un élève…"><select id="afilter" class="search" style="min-width:170px"><option value="">Tous</option><option value="absence">Absences</option><option value="retard">Retards</option><option value="nonjust">Non justifiées</option></select></div><div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Élève</th><th>Classe</th><th>Date</th><th>Type</th><th>Heure</th><th>Motif</th><th>Justifié</th><th>Action</th></tr></thead><tbody id="arows">${list.map(r => `<tr data-type="${esc(r.type)}" data-just="${r.justifie ? 'yes' : 'no'}"><td>${esc(r.students?.full_name || '')}<span>${esc(r.students?.username || '')}</span></td><td>${esc(r.students?.class_name || '')}</td><td>${dateFR(r.date)}</td><td>${r.type === 'absence' ? '<span class="tag red">Absence</span>' : '<span class="tag yellow">Retard</span>'}</td><td>${esc(r.heure_arrivee ? String(r.heure_arrivee).slice(0,5) : '—')}</td><td>${esc(r.motif || '—')}</td><td>${r.justifie ? '<span class="tag">Oui</span>' : '<span class="tag red">Non</span>'}</td><td>${(p.role === 'admin' || p.role === 'surveillant') ? `<button class="btn secondary small" data-justify="${esc(r.id)}">${r.justifie ? 'Retirer' : 'Justifier'}</button>` : '—'}</td></tr>`).join('') || tableEmpty(8)}</tbody></table></div></div>`;
  qs('#as').oninput = e => filterAbs(e.target.value, qs('#afilter').value); qs('#afilter').onchange = e => filterAbs(qs('#as').value, e.target.value);
  function filterAbs(search, filter) { const q = search.toLowerCase(); qsa('#arows tr').forEach(tr => { const text = tr.textContent.toLowerCase(); const okText = !q || text.includes(q); const okFilter = !filter || (filter === 'nonjust' ? tr.dataset.just === 'no' : tr.dataset.type === filter); tr.style.display = okText && okFilter ? '' : 'none'; }); }
  qsa('[data-justify]').forEach(b => b.onclick = async () => { try { const id = b.dataset.justify; const target = list.find(x => x.id === id); await update('absences', id, { justifie: !target.justifie }); if (target.attendance_id) await sb.from('attendance').update({ justified: !target.justifie }).eq('id', target.attendance_id); await log('update', 'absence', id, { justifie: !target.justifie }); toast(target.justifie ? 'Justification retirée.' : 'Absence justifiée.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } });
}

async function renderGrades(p, restricted = false) {
  const subjects = await rows('subjects', 'id,name', { order: 'name' });
  const students = await rows('students', 'id,full_name,username,class_id,class_name', { order: 'full_name' });
  let prof = null; if (p.role === 'professor' || restricted) prof = await professorRow(p);
  const list = await rows('grades', 'id,student_id,professor_id,subject_id,value,coefficient,label,comment,grade_date,created_at,students(full_name,class_name),subjects(name),professors(full_name)', { order: 'grade_date', ascending: false, limit: 500 });
  let visible = prof ? list.filter(g => g.professor_id === prof.id) : list;
  if (p.role === 'student') visible = list.filter(g => g.student_id === p.student_id);
  const form = p.role === 'admin' || p.role === 'professor';
  qs('#app').innerHTML = head('Notes', p.role === 'student' ? 'Votre relevé de notes.' : 'Gestion des évaluations scolaires.') + (form ? `<div class="toolbar"><button id="ga" class="btn primary">+ Ajouter une note</button></div>` : '') +
    `<div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Élève</th><th>Matière</th><th>Note</th><th>Coefficient</th><th>Évaluation</th><th>Date</th><th>Professeur</th></tr></thead><tbody>${visible.map(g => `<tr><td>${esc(g.students?.full_name || '')}<span>${esc(g.students?.class_name || '')}</span></td><td>${esc(g.subjects?.name || '')}</td><td><strong>${g.value == null ? '—' : Number(g.value).toFixed(2) + '/20'}</strong></td><td>${esc(g.coefficient ?? 1)}</td><td>${esc(g.label || '—')}</td><td>${dateFR(g.grade_date)}</td><td>${esc(g.professors?.full_name || '—')}</td></tr>`).join('') || tableEmpty(7)}</tbody></table></div></div>` +
    (form ? modal('gm', 'Ajouter une note', `<form id="gf" class="form"><div class="field full"><label>Élève</label><select name="student_id" required>${opts(students, 'id', 'full_name')}</select></div><div class="field"><label>Matière</label><select name="subject_id" required>${opts(subjects)}</select></div><div class="field"><label>Note /20</label><input name="value" type="number" min="0" max="20" step="0.01" required></div><div class="field"><label>Coefficient</label><input name="coefficient" type="number" min="0.1" step="0.1" value="1" required></div><div class="field"><label>Évaluation</label><input name="label" placeholder="Contrôle, examen, oral…"></div><div class="field"><label>Date</label><input name="grade_date" type="date" value="${today()}" required></div><div class="field full"><label>Commentaire</label><textarea name="comment"></textarea></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`) : '');
  if (form) { qs('#ga').onclick = () => openModal('gm'); closeBindings(); qs('#gf').onsubmit = async e => { e.preventDefault(); const f = new FormData(e.target); try { const professor_id = p.role === 'professor' ? (await professorRow(p)).id : null; if (p.role === 'professor' && !professor_id) throw new Error('Professeur introuvable.'); const r = await add('grades', { student_id: f.get('student_id'), subject_id: f.get('subject_id'), professor_id, value: Number(f.get('value')), coefficient: Number(f.get('coefficient') || 1), label: f.get('label') || null, comment: f.get('comment') || null, grade_date: f.get('grade_date') }); await log('create', 'grade', r.id, { value: r.value }); toast('Note enregistrée.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } }; }
}

async function renderHomework(p, restricted = false) {
  const subjects = await rows('subjects', 'id,name', { order:'name' });
  const classes = await rows('classes', 'id,name', { order:'name' });
  const students = await rows('students', 'id,class_id,full_name');
  let prof = null;
  if (p.role === 'professor' || restricted) prof = await professorRow(p);
  const list = await rows('homework', 'id,class_id,professor_id,subject_id,title,description,due_date,attachment_url,published,created_at,classes(name),subjects(name),professors(full_name)', { order:'due_date', ascending:true, limit:300 });
  let visible = list;
  if (prof) visible = list.filter(x => x.professor_id === prof.id);
  if (p.role === 'student') visible = list.filter(x => students.find(s => s.id === p.student_id && s.class_id === x.class_id));

  let submissions = [];
  if (p.role === 'student') {
    const sr = await sb.from('homework_submissions').select('id,homework_id,submitted_at,status,note').eq('student_id',p.student_id).order('submitted_at',{ascending:false});
    if (sr.error) throw sr.error;
    submissions = sr.data || [];
  } else if (visible.length) {
    const sr = await sb.from('homework_submissions').select('id,homework_id').in('homework_id', visible.map(x=>x.id));
    if (sr.error) throw sr.error;
    submissions = sr.data || [];
  }
  const subCounts = new Map();
  submissions.forEach(x=>subCounts.set(x.homework_id,(subCounts.get(x.homework_id)||0)+1));
  const latestSubmission = new Map();
  submissions.filter(x=>x.submitted_at).forEach(x=>{ if(!latestSubmission.has(x.homework_id)) latestSubmission.set(x.homework_id,x); });

  let directory = [];
  if (p.role === 'student') directory = await messageDirectory();
  const professorRecipientByRow = new Map(directory.filter(x=>x.professor_id).map(x=>[x.professor_id,x]));
  const canCreate = p.role === 'admin' || p.role === 'professor';
  const now = new Date();
  qs('#app').innerHTML = head(p.role === 'student' ? 'Mes devoirs' : 'Devoirs', 'Travail à effectuer et suivi des classes.') +
    (canCreate ? `<div class="toolbar"><button id="ha" class="btn primary">+ Nouveau devoir</button></div>` : '') +
    `<div class="list">${visible.map(x => {
      const latest = latestSubmission.get(x.id);
      const rec = p.role === 'student' ? professorRecipientByRow.get(x.professor_id) : null;
      const due = x.due_date ? new Date(`${x.due_date}T23:59:59`) : null;
      const overdue = due && now > due;
      return `<article class="card"><div class="toolbar"><div><h3>${esc(x.title)}</h3><span class="muted">${esc(x.classes?.name || '')} · ${esc(x.subjects?.name || '')} · À rendre le ${dateFR(x.due_date)}</span></div><div class="actions">${x.attachment_url ? `<a class="btn secondary small" href="${esc(x.attachment_url)}" target="_blank">Ouvrir le document</a>` : ''}${canCreate ? `<a class="btn secondary small" href="homework-submissions.html?id=${esc(x.id)}">📥 ${subCounts.get(x.id)||0} rendu(s)</a>` : (rec ? `<button class="btn primary small" data-submit-homework="${esc(x.id)}">📤 Rendre le devoir</button>` : '')}</div></div><p style="white-space:pre-wrap">${esc(x.description || '')}</p><div class="muted" style="margin-top:9px">${x.professors?.full_name ? `Professeur : ${esc(x.professors.full_name)}` : ''}${p.role==='student' && latest ? ` · Dernier envoi : ${dtFR(latest.submitted_at)} · <strong>${esc(latest.status || (overdue ? 'En retard' : 'Envoyé'))}</strong>` : ''}</div>${p.role==='student' && !rec ? `<div class="notice" style="margin-top:12px">⚠️ Aucun professeur n’est associé à ce devoir. Contactez l’administration.</div>` : ''}</article>`;
    }).join('') || '<div class="card empty">Aucun devoir.</div>'}</div>` +
    (canCreate ? modal('hm', 'Nouveau devoir', `<form id="hf" class="form"><div class="field"><label>Titre</label><input name="title" required></div><div class="field"><label>Classe</label><select name="class_id" required>${opts(classes)}</select></div><div class="field"><label>Matière</label><select name="subject_id" required>${opts(subjects)}</select></div><div class="field"><label>Date limite</label><input name="due_date" type="date" required></div><div class="field full"><label>Lien de document</label><input name="attachment_url" type="url"></div><div class="field full"><label>Description</label><textarea name="description"></textarea></div><div class="field"><label>Publié</label><select name="published"><option value="true">Oui</option><option value="false">Non</option></select></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`) : '') +
    (p.role === 'student' ? modal('hsm','Rendre un devoir',`<form id="hsf" class="form"><input type="hidden" name="homework_id"><div class="field full"><label>Commentaire au professeur</label><textarea name="note" placeholder="Bonjour, voici mon devoir…"></textarea></div><div class="field full"><label>Fichier(s) <span class="muted">3 maximum, 10 Mo chacun</span></label><input name="files" type="file" multiple required></div><div class="field full"><button class="btn primary">📤 Envoyer mon devoir</button></div></form>`) : '');

  if (canCreate) {
    qs('#ha').onclick=()=>openModal('hm'); closeBindings();
    qs('#hf').onsubmit=async e=>{e.preventDefault();const f=new FormData(e.target);try{let professor_id=null;if(p.role==='professor')professor_id=prof.id;const r=await add('homework',{class_id:f.get('class_id'),subject_id:f.get('subject_id'),professor_id,title:f.get('title'),description:f.get('description')||null,due_date:f.get('due_date'),attachment_url:f.get('attachment_url')||null,published:f.get('published')==='true'});await log('create','homework',r.id,null);toast('Devoir enregistré.');location.reload()}catch(er){toast(errMsg(er),'error')}};
  }
  if(p.role==='student'){
    qsa('[data-submit-homework]').forEach(b=>b.onclick=()=>{const hw=visible.find(x=>x.id===b.dataset.submitHomework);const rec=professorRecipientByRow.get(hw?.professor_id);if(!hw||!rec){toast('Professeur introuvable pour ce devoir.','error');return;}qs('#hsf [name="homework_id"]').value=hw.id;qs('#hsf [name="files"]').value='';qs('#hsf [name="note"]').value='';openModal('hsm');closeBindings();});
    qs('#hsf').onsubmit=async e=>{e.preventDefault();const f=new FormData(e.target);const hw=visible.find(x=>x.id===f.get('homework_id'));if(!hw)return;const rec=professorRecipientByRow.get(hw.professor_id);const files=Array.from(e.target.querySelector('[name="files"]').files||[]);if(!files.length){toast('Ajoutez au moins un fichier.','error');return;}if(files.length>3){toast('Maximum 3 fichiers.','error');return;}try{const due=hw.due_date?new Date(`${hw.due_date}T23:59:59`):null;const status=due&&new Date()>due?'En retard':'Envoyé';const subject=`Remise de devoir — ${hw.title}`;const body=(f.get('note')||`Bonjour, je vous transmets mon devoir « ${hw.title} ».`) + `

Remise automatique via le portail Midori High.`;const m=await sendInternalMessage({recipientId:rec.id,subject,body,files,homeworkId:hw.id});const r=await add('homework_submissions',{homework_id:hw.id,student_id:p.student_id,message_id:m.id,status,note:f.get('note')||null});await log('create','homework_submission',r.id,{homework_id:hw.id});toast('Votre devoir a été envoyé au professeur.');closeModal('hsm');location.reload()}catch(er){toast(errMsg(er),'error')}};
  }
}

async function renderPoints() {
  const students = await rows('students', 'id,full_name,username,class_name', { order: 'full_name' });
  const pts = await rows('student_points', 'id,student_id,points,reason,category,created_by,comment,created_at', { order: 'created_at', ascending: false, limit: 1000 });
  const totals = students.map(s => ({ ...s, total: pts.filter(p => p.student_id === s.id).reduce((a, b) => a + Number(b.points || 0), 0) }));
  const rules = { 'Bonne action': 3, 'Respect du personnel': 4, 'Présence en cours': 5, 'Participation / réussite aux examens': 7, 'Prise en charge d’une situation': 10, 'Participation à un club': 12, 'Signalement d’un élève perturbateur': 2, 'Mauvaise action': -4, 'Absence': -7, 'Manque de respect envers le personnel': -6, 'Bagarre': -15, 'Dégradation': -15 };
  qs('#app').innerHTML = head('Points / Réputation', 'Barème RP centralisé des élèves.') + pointReference() + `<div class="toolbar" style="margin-top:14px"><input id="ptsSearch" class="search" placeholder="Rechercher un élève…"><button id="pta" class="btn primary">+ Ajouter / retirer des points</button></div><div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Élève</th><th>Classe</th><th>Total</th><th>Réputation</th><th>Actions</th></tr></thead><tbody id="ptr">${totals.map(s => `<tr><td>${esc(s.full_name)}<span>${esc(s.username)}</span></td><td>${esc(s.class_name || '—')}</td><td><strong>${s.total}</strong></td><td>${badge(reputation(s.total))}</td><td><a class="btn secondary small" href="student-profile.html?id=${esc(s.id)}">Dossier</a></td></tr>`).join('') || tableEmpty(5)}</tbody></table></div></div><div class="card" style="margin-top:15px"><h3>Derniers mouvements</h3><div class="table-wrap" style="margin-top:10px"><table class="table"><thead><tr><th>Date</th><th>Élève</th><th>Points</th><th>Motif</th><th>Auteur</th><th>Commentaire</th></tr></thead><tbody>${pts.slice(0, 100).map(x => `<tr><td>${dtFR(x.created_at)}</td><td>${esc(students.find(s => s.id === x.student_id)?.full_name || '')}</td><td><strong>${Number(x.points) > 0 ? '+' : ''}${Number(x.points)}</strong></td><td>${esc(x.reason)}</td><td>${esc(x.created_by || '—')}</td><td>${esc(x.comment || '—')}</td></tr>`).join('') || tableEmpty(6)}</tbody></table></div></div>` + modal('ptm', 'Points', `<form id="ptf" class="form"><div class="field full"><label>Élève</label><select name="student_id" required>${opts(students, 'id', 'full_name')}</select></div><div class="field"><label>Règle</label><select id="ruleSelect"><option value="">— Choisir un barème —</option>${Object.entries(rules).map(([k,v]) => `<option value="${esc(k)}" data-points="${v}">${esc(k)} (${v > 0 ? '+' : ''}${v})</option>`).join('')}<option value="custom">Personnalisé</option></select></div><div class="field"><label>Points</label><input id="pointValue" name="points" type="number" step="1" required></div><div class="field"><label>Catégorie</label><select name="category"><option value="bonus">Bonus</option><option value="malus">Malus</option></select></div><div class="field"><label>Motif</label><input id="pointReason" name="reason" required></div><div class="field full"><label>Commentaire</label><textarea name="comment"></textarea></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`);
  qs('#ptsSearch').oninput = e => { const q = e.target.value.toLowerCase(); qsa('#ptr tr').forEach(tr => tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none'); };
  qs('#pta').onclick = () => openModal('ptm'); closeBindings();
  qs('#ruleSelect').onchange = e => { const option = e.target.selectedOptions[0]; if (e.target.value === 'custom') return; qs('#pointValue').value = option?.dataset.points || ''; qs('#pointReason').value = e.target.value || ''; if (Number(qs('#pointValue').value) < 0) qs('#ptf [name="category"]').value = 'malus'; else qs('#ptf [name="category"]').value = 'bonus'; };
  qs('#ptf').onsubmit = async e => { e.preventDefault(); const f = new FormData(e.target); try { const n = Number(f.get('points')); if (!Number.isFinite(n)) throw new Error('Nombre de points invalide.'); const r = await add('student_points', { student_id: f.get('student_id'), points: n, reason: f.get('reason'), category: f.get('category'), created_by: (await currentUser())?.email || 'Administration', comment: f.get('comment') || null }); await log('create', 'student_points', r.id, { points: n, reason: r.reason }); toast('Points enregistrés.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } };
}

async function renderDiscipline(p) {
  const students = await rows('students', 'id,full_name,class_name', { order: 'full_name' });
  const list = await rows('sanctions', 'id,student_id,supervisor_id,date,category,reason,points_delta,duration,status,created_at,students(full_name,class_name),supervisors(full_name)', { order: 'date', ascending: false, limit: 500 });
  const canCreate = p.role === 'admin' || p.role === 'surveillant';
  const supervisor = p.role === 'surveillant' ? await supervisorRow(p) : null;
  const visible = p.role === 'surveillant' ? list.filter(x => x.supervisor_id === supervisor.id) : list;
  qs('#app').innerHTML = head('Discipline', 'Sanctions, comportements et suivi RP.') +
    (canCreate ? `<div class="toolbar"><button id="dna" class="btn primary">+ Nouvelle sanction</button></div>` : '') +
    `<div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Élève</th><th>Catégorie</th><th>Motif</th><th>Points</th><th>Durée</th><th>Statut</th><th>Par</th></tr></thead><tbody>${visible.map(x => `<tr><td>${dateFR(x.date)}</td><td>${esc(x.students?.full_name || '')}<span>${esc(x.students?.class_name || '')}</span></td><td>${esc(x.category)}</td><td>${esc(x.reason)}</td><td>${Number(x.points_delta || 0)}</td><td>${esc(x.duration || '—')}</td><td>${badge(x.status)}</td><td>${esc(x.supervisors?.full_name || 'Administration')}</td></tr>`).join('') || tableEmpty(8)}</tbody></table></div></div>` +
    (canCreate ? modal('dm', 'Nouvelle sanction', `<form id="df" class="form"><div class="field full"><label>Élève</label><select name="student_id" required>${opts(students, 'id', 'full_name')}</select></div><div class="field"><label>Catégorie</label><input name="category" required placeholder="Comportement, bagarre…"></div><div class="field"><label>Date</label><input name="date" type="date" value="${today()}" required></div><div class="field"><label>Points</label><input name="points_delta" type="number" value="0"></div><div class="field"><label>Durée</label><input name="duration"></div><div class="field"><label>Statut</label><select name="status"><option>Enregistrée</option><option>En cours</option><option>Terminée</option></select></div><div class="field full"><label>Motif</label><textarea name="reason" required></textarea></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`) : '');
  if (canCreate) {
    qs('#dna').onclick = () => openModal('dm');
    closeBindings();
    qs('#df').onsubmit = async e => {
      e.preventDefault();
      const f = new FormData(e.target);
      try {
        const r = await add('sanctions', {
          student_id: f.get('student_id'), supervisor_id: supervisor?.id || null,
          date: f.get('date'), category: f.get('category'), reason: f.get('reason'),
          points_delta: Number(f.get('points_delta') || 0), duration: f.get('duration') || null,
          status: f.get('status')
        });
        const delta = Number(r.points_delta || 0);
        if (delta) {
          await add('student_points', {
            student_id: r.student_id, points: delta, reason: `Sanction — ${r.category}`,
            category: delta < 0 ? 'malus' : 'bonus',
            created_by: (await currentUser())?.email || ROLE_LABEL[p.role], comment: r.reason
          });
        }
        await log('create', 'sanction', r.id, null);
        toast('Sanction enregistrée.');
        location.reload();
      } catch (er) { toast(errMsg(er), 'error'); }
    };
  }
}


async function renderEvents(p) {
  const isAdmin = p.role === 'admin';
  const list = await rows('school_events', 'id,title,description,event_date,start_time,end_time,location,event_type,created_by,created_at', { order: 'event_date', ascending: true, limit: 500 });
  qs('#app').innerHTML = head('Calendrier RP', 'Événements scolaires, clubs et moments importants de Midori High.') +
    (isAdmin ? `<div class="toolbar"><button id="ea" class="btn primary">+ Ajouter un événement</button></div>` : '') +
    `<div class="list">${list.map(x => `<article class="card"><div class="toolbar"><div><h3>${esc(x.title)}</h3><span class="muted">${dateFR(x.event_date)}${x.start_time ? ` · ${String(x.start_time).slice(0,5)}` : ''}${x.end_time ? `–${String(x.end_time).slice(0,5)}` : ''} · ${esc(x.event_type || 'Événement')}</span></div><div class="actions">${x.location ? badge(x.location) : ''}${isAdmin ? `<button class="btn danger small" data-del-event="${esc(x.id)}">Supprimer</button>` : ''}</div></div><p style="white-space:pre-wrap">${esc(x.description || '')}</p></article>`).join('') || '<div class="card empty">Aucun événement programmé.</div>'}</div>` +
    (isAdmin ? modal('em', 'Nouvel événement', `<form id="ef" class="form"><div class="field"><label>Titre</label><input name="title" required></div><div class="field"><label>Type</label><select name="event_type"><option>Événement scolaire</option><option>Club</option><option>Cérémonie</option><option>Examen</option><option>Sortie</option><option>RP libre</option></select></div><div class="field"><label>Date</label><input name="event_date" type="date" value="${today()}" required></div><div class="field"><label>Début</label><input name="start_time" type="time"></div><div class="field"><label>Fin</label><input name="end_time" type="time"></div><div class="field full"><label>Lieu</label><input name="location" placeholder="Gymnase, scène, ville…"></div><div class="field full"><label>Description</label><textarea name="description"></textarea></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`) : '');
  if (isAdmin) {
    qs('#ea').onclick = () => openModal('em');
    closeBindings();
    qs('#ef').onsubmit = async e => {
      e.preventDefault();
      const f = new FormData(e.target);
      try {
        const u = await currentUser();
        const r = await add('school_events', { title: f.get('title'), description: f.get('description') || null, event_date: f.get('event_date'), start_time: f.get('start_time') || null, end_time: f.get('end_time') || null, location: f.get('location') || null, event_type: f.get('event_type'), created_by: u?.id || null });
        await log('create', 'school_event', r.id, null);
        toast('Événement ajouté.');
        location.reload();
      } catch (er) { toast(errMsg(er), 'error'); }
    };
    qsa('[data-del-event]').forEach(b => b.onclick = async () => {
      if (!confirm('Supprimer cet événement ?')) return;
      try { await remove('school_events', b.dataset.delEvent); toast('Événement supprimé.'); location.reload(); }
      catch (er) { toast(errMsg(er), 'error'); }
    });
  }
}

async function renderAdminClubs() {
  const [list, students, requests, members] = await Promise.all([
    rows('clubs', '*', { order: 'created_at', ascending: false }),
    rows('students', 'id,full_name,username', { order: 'full_name' }),
    rows('club_requests', 'id,club_id,student_id,message,status,created_at,clubs(name),students(full_name,class_name,username)', { order: 'created_at', ascending: false, limit: 300 }),
    rows('club_members', 'id,club_id,student_id,role,joined_at,clubs(name),students(full_name,class_name,username)', { order: 'joined_at', ascending: false, limit: 500 })
  ]);
  qs('#app').innerHTML = head('Clubs', 'Vie scolaire, présidence, candidatures et membres.') +
    `<div class="toolbar"><button id="ca" class="btn primary">+ Créer un club</button></div>` +
    `<div class="list">${list.map(c => `<div class="card"><div class="toolbar"><div><h3>${esc(c.name)}</h3><span class="muted">${esc(c.status)} · président : ${esc(students.find(s => s.id === c.president_student_id)?.full_name || 'non défini')}</span></div><button class="btn danger small" data-del-club="${esc(c.id)}">Supprimer</button></div><p>${esc(c.description || '')}</p><div class="muted" style="margin-top:9px">${members.filter(m=>m.club_id===c.id).length} membre(s) · ${requests.filter(r=>r.club_id===c.id && r.status==='En attente').length} candidature(s) en attente</div></div>`).join('') || '<div class="card empty">Aucun club.</div>'}</div>` +
    `<div class="card" style="margin-top:15px"><h3>Candidatures</h3><div class="table-wrap" style="margin-top:10px"><table class="table"><thead><tr><th>Date</th><th>Élève</th><th>Club</th><th>Message</th><th>Statut</th><th>Action</th></tr></thead><tbody>${requests.map(r=>`<tr><td>${dtFR(r.created_at)}</td><td>${esc(r.students?.full_name||'')}<span>${esc(r.students?.class_name||'')}</span></td><td>${esc(r.clubs?.name||'')}</td><td>${esc(r.message)}</td><td>${badge(r.status)}</td><td>${r.status==='En attente'?`<button class="btn secondary small" data-approve-request="${esc(r.id)}">Accepter</button> <button class="btn danger small" data-reject-request="${esc(r.id)}">Refuser</button>`:'—'}</td></tr>`).join('')||tableEmpty(6)}</tbody></table></div></div>` +
    `<div class="card" style="margin-top:15px"><h3>Membres</h3><div class="table-wrap" style="margin-top:10px"><table class="table"><thead><tr><th>Club</th><th>Élève</th><th>Classe</th><th>Rôle</th><th>Depuis</th><th>Action</th></tr></thead><tbody>${members.map(m=>`<tr><td>${esc(m.clubs?.name||'')}</td><td>${esc(m.students?.full_name||'')}</td><td>${esc(m.students?.class_name||'')}</td><td>${esc(m.role||'Membre')}</td><td>${dateFR(m.joined_at?.slice(0,10))}</td><td><button class="btn danger small" data-del-member="${esc(m.id)}">Retirer</button></td></tr>`).join('')||tableEmpty(6)}</tbody></table></div></div>` +
    modal('cm', 'Créer un club', `<form id="cf" class="form"><div class="field"><label>Nom</label><input name="name" required></div><div class="field"><label>Statut</label><select name="status"><option>Actif</option><option>En préparation</option><option>Fermé</option></select></div><div class="field full"><label>Président</label><select name="president_student_id"><option value="">À définir</option>${students.map(s => `<option value="${esc(s.id)}">${esc(s.full_name)}</option>`).join('')}</select></div><div class="field full"><label>Description</label><textarea name="description"></textarea></div><div class="field full"><button class="btn primary">Créer</button></div></form>`);
  qs('#ca').onclick = () => openModal('cm');
  closeBindings();
  qs('#cf').onsubmit = async e => { e.preventDefault(); const f = new FormData(e.target); try { const r = await add('clubs', { name: f.get('name'), description: f.get('description') || null, president_student_id: f.get('president_student_id') || null, status: f.get('status') }); await log('create', 'club', r.id, null); toast('Club créé.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } };
  qsa('[data-del-club]').forEach(b => b.onclick = async () => { if (!confirm('Supprimer ce club et ses demandes ?')) return; try { await remove('clubs', b.dataset.delClub); toast('Club supprimé.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } });
  qsa('[data-del-member]').forEach(b => b.onclick = async () => { if (!confirm('Retirer cet élève du club ?')) return; try { await remove('club_members', b.dataset.delMember); toast('Membre retiré.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } });
  qsa('[data-approve-request]').forEach(b => b.onclick = async () => { const req=requests.find(x=>x.id===b.dataset.approveRequest); if(!req)return; try { await add('club_members',{club_id:req.club_id,student_id:req.student_id,role:'Membre'}); await update('club_requests',req.id,{status:'Acceptée'}); await log('update','club_request',req.id,{status:'Acceptée'}); toast('Candidature acceptée.'); location.reload(); } catch(er){toast(errMsg(er),'error');} });
  qsa('[data-reject-request]').forEach(b => b.onclick = async () => { try { await update('club_requests',b.dataset.rejectRequest,{status:'Refusée'}); await log('update','club_request',b.dataset.rejectRequest,{status:'Refusée'}); toast('Candidature refusée.'); location.reload(); } catch(er){toast(errMsg(er),'error');} });
}

async function renderAccess(p) {
  const [profs, students, teachers, supervisors] = await Promise.all([
    rows('profiles', 'id,email,username,full_name,role,active,student_id,professor_id,supervisor_id,created_at', { order: 'created_at', ascending: false }),
    rows('students', 'id,username,full_name', { order: 'full_name' }),
    rows('professors', 'id,username,full_name,subject', { order: 'full_name' }),
    rows('supervisors', 'id,username,full_name', { order: 'full_name' })
  ]);

  const queryUser = new URLSearchParams(location.search).get('username') || '';
  const preStudent = students.find(x => x.username === queryUser);
  const preTeacher = teachers.find(x => x.username === queryUser);
  const preSupervisor = supervisors.find(x => x.username === queryUser);

  qs('#app').innerHTML = head('Accès & comptes', 'Gérez les rôles, les fiches liées et l’accès au portail.') +
    `<div class="grid g2">
      <div class="card">
        <h3 id="accessFormTitle">Créer / lier un accès</h3>
        <form id="accessForm" class="form" style="margin-top:12px">
          <input type="hidden" name="id" value="">
          <div class="field full"><label>E-mail du compte Supabase</label><input name="email" type="email" placeholder="prenom@midori.fr" required><small id="emailHint" class="muted">Pour une création, utilisez l’e-mail du compte créé dans Supabase Authentication.</small></div>
          <div class="field"><label>Rôle</label><select id="accessRole" name="role"><option value="student">Élève</option><option value="professor">Professeur</option><option value="surveillant">Surveillant</option><option value="psychologue">Psychologue</option><option value="infirmiere">Infirmière</option><option value="admin">Administration</option></select></div>
          <div class="field"><label>Fiche à relier</label><select id="accessLink"><option value="">Aucune fiche / personnel santé / admin</option></select></div>
          <div class="field"><label>Identifiant portail</label><input id="accessUsername" name="username" value="${esc(queryUser)}" placeholder="pseudo.roblox" required></div>
          <div class="field"><label>Nom affiché</label><input id="accessName" name="full_name" value="${esc(preStudent?.full_name || preTeacher?.full_name || preSupervisor?.full_name || '')}" placeholder="Nom et prénom" required></div>
          <div class="field"><label>Accès</label><select name="active"><option value="true">Actif</option><option value="false">Révoqué</option></select></div>
          <div class="field full"><div id="accessHint" class="notice">Choisissez un rôle puis, pour un élève, professeur ou surveillant, la fiche correspondante.</div></div>
          <div class="field full actions"><button id="accessSubmit" class="btn primary" type="submit">Créer / mettre à jour le profil</button><button id="accessCancel" class="btn secondary" type="button" style="display:none">Annuler la modification</button></div>
        </form>
      </div>
      <div class="card">
        <h3>Gestion des accès</h3>
        <p class="muted" style="margin-top:8px">« Modifier » change le profil du portail et sa fiche liée. « Révoquer l’accès » empêche la connexion au portail sans supprimer le compte Supabase Authentication.</p>
        <p class="muted">« Supprimer définitivement » supprime le compte Supabase Authentication via une fonction serveur sécurisée. Cette action est irréversible.</p>
      </div>
    </div>` +
    `<div class="card" style="margin-top:15px"><h3>Comptes portail</h3><div class="table-wrap" style="margin-top:10px"><table class="table"><thead><tr><th>E-mail</th><th>Identifiant</th><th>Nom</th><th>Rôle</th><th>État</th><th>Créé</th><th>Actions</th></tr></thead><tbody>${profs.map(x => `<tr><td>${esc(x.email)}</td><td>${esc(x.username)}</td><td>${esc(x.full_name)}</td><td>${badge(ROLE_LABEL[x.role] || x.role)}</td><td>${x.active ? '<span class="tag">Actif</span>' : '<span class="tag red">Révoqué</span>'}</td><td>${dtFR(x.created_at)}</td><td><div class="actions"><button class="btn secondary small" data-edit-profile="${esc(x.id)}">Modifier</button><button type="button" class="btn secondary small" data-change-email="${esc(x.id)}" data-current-email="${esc(x.email || '')}">✉️ E-mail</button><button type="button" class="btn secondary small" data-relink-auth="${esc(x.id)}">🔗 Relier Auth</button>${String(x.id) === String(p.id) ? '' : `<button class="btn ${x.active ? 'danger' : 'secondary'} small" data-toggle-profile="${esc(x.id)}" data-current="${x.active ? 'true' : 'false'}">${x.active ? 'Révoquer l’accès' : 'Réactiver'}</button><button class="btn danger small" data-delete-profile="${esc(x.id)}" data-profile-email="${esc(x.email || '')}">🗑️ Supprimer définitivement</button>`}</div></td></tr>`).join('') || tableEmpty(7)}</tbody></table></div></div>`;

  const form = qs('#accessForm');
  const formTitle = qs('#accessFormTitle');
  const submitBtn = qs('#accessSubmit');
  const cancelBtn = qs('#accessCancel');
  const emailInput = form.elements.email;
  const idInput = form.elements.id;
  const roleSelect = qs('#accessRole');
  const linkSelect = qs('#accessLink');
  const usernameInput = qs('#accessUsername');
  const nameInput = qs('#accessName');
  const activeSelect = form.elements.active;
  const hint = qs('#accessHint');

  const rebuildLinkOptions = (selectedId = '') => {
    const role = roleSelect.value;
    let source = [];
    if (role === 'student') source = students.map(x => ({ id: x.id, username: x.username, full_name: x.full_name, label: `${x.full_name} · ${x.username}` }));
    if (role === 'professor') source = teachers.map(x => ({ id: x.id, username: x.username, full_name: x.full_name, label: `${x.full_name} · ${x.subject || 'Professeur'}` }));
    if (role === 'surveillant') source = supervisors.map(x => ({ id: x.id, username: x.username, full_name: x.full_name, label: `${x.full_name} · ${x.username}` }));
    linkSelect.innerHTML = `<option value="">Aucune fiche / personnel santé / admin</option>` + source.map(x => `<option value="${esc(x.id)}" data-username="${esc(x.username)}" data-name="${esc(x.full_name)}">${esc(x.label)}</option>`).join('');
    if (selectedId) linkSelect.value = selectedId;
    hint.textContent = role === 'student' ? 'La fiche élève sélectionnée sera reliée au compte.' : role === 'professor' ? 'La fiche professeur sélectionnée sera reliée au compte. Pensez ensuite à lui affecter ses classes.' : role === 'surveillant' ? 'La fiche surveillant sélectionnée sera reliée au compte.' : role === 'psychologue' ? 'Aucune fiche de personnel supplémentaire n’est nécessaire.' : role === 'infirmiere' ? 'Aucune fiche de personnel supplémentaire n’est nécessaire.' : 'Ce compte aura les droits d’administration du portail.';
  };

  const resetForm = () => {
    form.reset();
    idInput.value = '';
    emailInput.readOnly = false;
    emailInput.style.opacity = '';
    formTitle.textContent = 'Créer / lier un accès';
    submitBtn.textContent = 'Créer / mettre à jour le profil';
    cancelBtn.style.display = 'none';
    const pre = preStudent || preTeacher || preSupervisor;
    if (preStudent) roleSelect.value = 'student';
    else if (preTeacher) roleSelect.value = 'professor';
    else if (preSupervisor) roleSelect.value = 'surveillant';
    rebuildLinkOptions(pre?.id || '');
    if (pre) { linkSelect.value = pre.id; usernameInput.value = pre.username; nameInput.value = pre.full_name; }
  };

  const startEdit = profile => {
    idInput.value = profile.id;
    emailInput.value = profile.email || '';
    emailInput.readOnly = false;
    emailInput.style.opacity = '';
    roleSelect.value = profile.role || 'student';
    rebuildLinkOptions(profile.student_id || profile.professor_id || profile.supervisor_id || '');
    usernameInput.value = profile.username || '';
    nameInput.value = profile.full_name || '';
    activeSelect.value = profile.active === false ? 'false' : 'true';
    formTitle.textContent = `Modifier l’accès — ${profile.full_name || profile.username || 'compte'}`;
    submitBtn.textContent = 'Enregistrer les modifications';
    cancelBtn.style.display = '';
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  resetForm();
  roleSelect.onchange = () => {
    rebuildLinkOptions();
    if (!['student','professor','surveillant'].includes(roleSelect.value)) linkSelect.value = '';
  };
  linkSelect.onchange = () => {
    const o = linkSelect.selectedOptions[0];
    if (!o?.dataset.username) return;
    usernameInput.value = o.dataset.username;
    nameInput.value = o.dataset.name || '';
  };
  cancelBtn.onclick = resetForm;

  form.onsubmit = async e => {
    e.preventDefault();
    try {
      const fd = new FormData(form);
      const editingId = String(fd.get('id') || '').trim();
      const role = String(fd.get('role') || 'student');
      const linkId = linkSelect.value || null;
      const linkPayload = {
        student_id: role === 'student' ? linkId : null,
        professor_id: role === 'professor' ? linkId : null,
        supervisor_id: role === 'surveillant' ? linkId : null
      };

      if (editingId) {
        if (editingId === String(p.id) && (fd.get('active') === 'false' || role !== 'admin')) throw new Error('Vous ne pouvez pas désactiver ou retirer votre propre rôle administrateur ici.');

        const newEmail = String(fd.get('email') || '').trim().toLowerCase();
        if (!newEmail.endsWith('@midori.fr')) {
          throw new Error('L’e-mail d’accès doit obligatoirement être une adresse @midori.fr.');
        }

        const oldProfile = profs.find(x => String(x.id) === editingId);
        const oldEmail = String(oldProfile?.email || '').trim().toLowerCase();

        if (newEmail !== oldEmail) {
          const { data: emailResult, error: emailError } = await sb.functions.invoke('admin-update-user-email', {
            body: { user_id: editingId, new_email: newEmail }
          });
          if (emailError) {
            let message = errMsg(emailError);
            try {
              const ctx = await emailError.context?.json?.();
              if (ctx?.error) message = ctx.error;
            } catch (_) {}
            throw new Error(message);
          }
          if (emailResult?.error) throw new Error(emailResult.error);
        }

        const r = await update('profiles', editingId, {
          email: newEmail,
          username: String(fd.get('username') || '').trim(),
          full_name: String(fd.get('full_name') || '').trim(),
          role,
          active: fd.get('active') === 'true',
          ...linkPayload
        });
        await log('update', 'profile', r.id, { username: r.username, role: r.role, active: r.active });
        toast('Accès modifié.');
      } else {
        const r = await sb.rpc('admin_create_profile_linked', {
          p_email: fd.get('email'),
          p_username: fd.get('username'),
          p_full_name: fd.get('full_name'),
          p_role: role,
          p_active: fd.get('active') === 'true',
          p_student_id: role === 'student' ? linkId : null,
          p_professor_id: role === 'professor' ? linkId : null,
          p_supervisor_id: role === 'surveillant' ? linkId : null
        });
        if (r.error) throw r.error;
        let profileId = r.data?.id || (Array.isArray(r.data) ? r.data[0]?.id : null);
        if (!profileId) {
          const fr = await sb.from('profiles').select('id').eq('email', fd.get('email')).maybeSingle();
          if (fr.error) throw fr.error;
          profileId = fr.data?.id || null;
        }
        if (profileId) await update('profiles', profileId, linkPayload);
        await log('create', 'profile', profileId, { username: fd.get('username'), role });
        toast('Accès créé / mis à jour.');
      }
      location.reload();
    } catch (er) {
      toast(errMsg(er), 'error');
    }
  };

  qsa('[data-edit-profile]').forEach(b => b.onclick = () => {
    const profile = profs.find(x => String(x.id) === String(b.dataset.editProfile));
    if (profile) startEdit(profile);
  });

  qsa('[data-change-email]').forEach(b => b.onclick = async () => {
    const id = b.dataset.changeEmail;
    const currentEmail = b.dataset.currentEmail || '';
    const profile = profs.find(x => String(x.id) === String(id));
    const name = profile?.full_name || profile?.username || 'cet utilisateur';
    const newEmail = prompt(`Nouvel e-mail Midori pour ${name}\n\nAdresse actuelle : ${currentEmail}\n\nEntrez une adresse @midori.fr :`, currentEmail);
    if (newEmail === null) return;
    const normalized = newEmail.trim().toLowerCase();
    if (!normalized) return;
    if (!normalized.endsWith('@midori.fr')) {
      toast('L’e-mail doit se terminer par @midori.fr.', 'error');
      return;
    }
    if (normalized === currentEmail.toLowerCase()) {
      toast('Aucun changement.');
      return;
    }
    try {
      b.disabled = true;
      b.textContent = 'Modification…';
      const { data: sessionData, error: sessionError } = await sb.auth.getSession();
      if (sessionError) throw sessionError;
      const accessToken = sessionData?.session?.access_token;
      if (!accessToken) throw new Error('Votre session administrateur a expiré. Déconnectez-vous puis reconnectez-vous.');

      const { data, error } = await sb.functions.invoke('admin-update-user-email', {
        body: { user_id: id, new_email: normalized },
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      if (error) {
        let message = errMsg(error);
        try {
          const ctx = await error.context?.json?.();
          if (ctx?.error) message = ctx.error;
        } catch (_) {}
        throw new Error(message);
      }
      if (data?.error) throw new Error(data.error);
      toast(`E-mail modifié : ${normalized}`);
      const row = b.closest('tr');
      const emailCell = row?.querySelector('td');
      if (emailCell) emailCell.textContent = normalized;
      b.dataset.currentEmail = normalized;
      b.disabled = false;
      b.textContent = '✉️ E-mail';
    } catch (er) {
      console.error('Modification e-mail :', er);
      b.disabled = false;
      b.textContent = '✉️ E-mail';
      toast(errMsg(er), 'error');
    }
  });

  qsa('[data-relink-auth]').forEach(b => b.onclick = async () => {
    const profileId = b.dataset.relinkAuth;
    const profile = profs.find(x => String(x.id) === String(profileId));
    const name = profile?.full_name || profile?.username || 'cet utilisateur';

    const authEmail = prompt(
      `Adresse du NOUVEAU compte Supabase Authentication pour ${name}\n\n` +
      `Le compte doit déjà avoir été créé dans Authentication → Users.\n` +
      `Utilisez son adresse @midori.fr :`,
      ''
    );

    if (authEmail === null) return;

    const normalized = authEmail.trim().toLowerCase();
    if (!normalized) return;

    if (!normalized.endsWith('@midori.fr')) {
      toast('Le compte Auth doit utiliser une adresse @midori.fr.', 'error');
      return;
    }

    if (!confirm(`Relier le profil « ${name} » au compte Auth ${normalized} ?\n\nLes données du profil Midori seront conservées.`)) {
      return;
    }

    try {
      b.disabled = true;
      b.textContent = 'Liaison…';

      const { data: sessionData, error: sessionError } = await sb.auth.getSession();
      if (sessionError) throw sessionError;

      const accessToken = sessionData?.session?.access_token;
      if (!accessToken) {
        throw new Error('Votre session administrateur a expiré. Déconnectez-vous puis reconnectez-vous.');
      }

      const { data, error } = await sb.functions.invoke('admin-relink-profile', {
        body: {
          profile_id: profileId,
          auth_email: normalized
        },
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      if (error) {
        let message = errMsg(error);
        try {
          const ctx = await error.context?.json?.();
          if (ctx?.error) message = ctx.error;
        } catch (_) {}
        throw new Error(message);
      }

      if (data?.error) throw new Error(data.error);

      toast(`Compte Auth relié : ${normalized}`);
      setTimeout(() => location.reload(), 700);
    } catch (er) {
      console.error('Liaison profil / Auth :', er);
      b.disabled = false;
      b.textContent = '🔗 Relier Auth';
      toast(errMsg(er), 'error');
    }
  });

  qsa('[data-toggle-profile]').forEach(b => b.onclick = async () => {
    const isActive = b.dataset.current === 'true';
    if (!confirm(isActive ? 'Révoquer l’accès de ce compte au portail ?' : 'Réactiver l’accès de ce compte ?')) return;
    try {
      const r = await update('profiles', b.dataset.toggleProfile, { active: !isActive });
      await log('update', 'profile', r.id, { active: r.active });
      toast(r.active ? 'Accès réactivé.' : 'Accès révoqué.');
      location.reload();
    } catch (er) {
      toast(errMsg(er), 'error');
    }
  });

  qsa('[data-delete-profile]').forEach(b => b.onclick = async () => {
    const id = b.dataset.deleteProfile;
    const email = b.dataset.profileEmail || 'ce compte';
    const first = confirm(`⚠️ SUPPRESSION DÉFINITIVE\n\nLe compte ${email} sera supprimé de Supabase Authentication ainsi que son accès au portail.\n\nCette action est irréversible. Continuer ?`);
    if (!first) return;

    const second = prompt(`Pour confirmer la suppression définitive de ${email}, tapez SUPPRIMER`);
    if (second !== 'SUPPRIMER') {
      toast('Suppression annulée.', 'error');
      return;
    }

    try {
      b.disabled = true;
      b.textContent = 'Suppression…';
      const { data, error } = await sb.functions.invoke('admin-delete-user', {
        body: { user_id: id }
      });
      if (error) {
        let message = errMsg(error);
        try {
          const ctx = await error.context?.json?.();
          if (ctx?.error) message = ctx.error;
        } catch (_) {}
        throw new Error(message);
      }
      await log('delete', 'profile', id, { email, permanent_auth_delete: true });
      toast(data?.warning || 'Compte supprimé définitivement.');
      location.reload();
    } catch (er) {
      b.disabled = false;
      b.textContent = '🗑️ Supprimer définitivement';
      toast(errMsg(er), 'error');
    }
  });
}

async function renderLogs() {
  const list = await rows('activity_logs', 'id,action,entity,entity_id,details,created_at,profiles(full_name,username)', { order: 'created_at', ascending: false, limit: 500 });
  qs('#app').innerHTML = head('Journal d’activité', 'Traçabilité des principales actions du portail.') + `<div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Auteur</th><th>Action</th><th>Objet</th><th>Détails</th></tr></thead><tbody>${list.map(x => `<tr><td>${dtFR(x.created_at)}</td><td>${esc(x.profiles?.full_name || 'Système')}</td><td>${badge(x.action)}</td><td>${esc(x.entity || '—')}</td><td><pre style="white-space:pre-wrap;font:inherit">${esc(JSON.stringify(x.details || {}, null, 2))}</pre></td></tr>`).join('') || tableEmpty(5)}</tbody></table></div></div>`;
}

async function renderProfile(p) {
  qs('#app').innerHTML = head('Mon profil', 'Informations de votre compte portail.') + `<div class="card"><div class="grid g2"><div><p><strong>Nom :</strong> ${esc(p.full_name)}</p><p><strong>Identifiant :</strong> ${esc(p.username)}</p><p><strong>E-mail :</strong> ${esc(p.email)}</p><p><strong>Rôle :</strong> ${esc(ROLE_LABEL[p.role] || p.role)}</p></div><div>${p.student_id ? '<span class="tag">Compte lié à une fiche élève</span>' : ''}${p.professor_id ? '<span class="tag">Compte lié à une fiche professeur</span>' : ''}${p.supervisor_id ? '<span class="tag">Compte lié à une fiche surveillant</span>' : ''}<div class="notice" style="margin-top:12px">Pour modifier un mot de passe, utilisez la gestion des utilisateurs de Supabase Authentication.</div></div></div></div>`;
}

async function renderProfSpace(p) {
  const prof = await professorRow(p);
  const classes = await rows('professor_classes', 'class_id,classes(name)', { order: 'created_at' });
  const ownClasses = classes.filter(x => x.class_id && x.classes);
  const tt = await rows('timetable', 'id,day_of_week,start_time,end_time,room,class_id,professor_id,subjects(name),classes(name)', { order: 'day_of_week' });
  const ownTt = tt.filter(x => x.professor_id === prof.id);
  qs('#app').innerHTML = head('Espace professeur', 'Votre espace de travail pédagogique.') + `<div class="hero"><h2>Bonjour ${esc(p.full_name)}.</h2><p>${esc(prof.subject || 'Professeur')} · ${ownClasses.length} classe(s) assignée(s)</p><div class="actions"><a href="prof-attendance.html" class="btn secondary">📝 Faire l’appel</a><a href="prof-grades.html" class="btn secondary">💯 Saisir une note</a><a href="prof-homework.html" class="btn secondary">📓 Donner un devoir</a></div></div><div class="grid g3" style="margin-top:15px">${statCard('Classes', ownClasses.length, '🏫')}${statCard('Cours planifiés', ownTt.length, '🗓️')}${statCard('Matière', prof.subject || '—', '📚')}</div><div class="card" style="margin-top:15px"><h3>Vos classes</h3><div class="list" style="margin-top:10px">${ownClasses.map(c => `<div class="item"><strong>${esc(c.classes.name)}</strong><span>Classe assignée</span></div>`).join('') || '<div class="empty">Aucune classe assignée. Demandez à l’administration de vous rattacher une classe.</div>'}</div></div>`;
}
async function renderProfResources(p) {
  const prof = await professorRow(p); const sub = await rows('subjects', 'id,name', { order: 'name' }); const list = await rows('resources', 'id,title,description,url,subject_id,professor_id,created_at', { order: 'created_at', ascending: false }); const own = list.filter(r => r.professor_id === prof.id);
  qs('#app').innerHTML = head('Ressources', 'Vos documents et liens de cours.') + `<div class="toolbar"><button id="ra" class="btn primary">+ Ajouter</button></div><div class="list">${own.map(r => `<div class="card"><div class="toolbar"><div><h3>${esc(r.title)}</h3><span class="muted">${esc(sub.find(s => s.id === r.subject_id)?.name || '')} · ${dtFR(r.created_at)}</span></div><a class="btn secondary small" href="${esc(r.url)}" target="_blank">Ouvrir</a></div><p>${esc(r.description || '')}</p></div>`).join('') || '<div class="card empty">Aucune ressource.</div>'}</div>` + modal('rm', 'Ressource', `<form id="rf" class="form"><div class="field"><label>Titre</label><input name="title" required></div><div class="field"><label>Matière</label><select name="subject_id">${opts(sub)}</select></div><div class="field full"><label>URL</label><input name="url" type="url" required></div><div class="field full"><label>Description</label><textarea name="description"></textarea></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`); qs('#ra').onclick = () => openModal('rm'); closeBindings(); qs('#rf').onsubmit = async e => { e.preventDefault(); const f = new FormData(e.target); try { const r = await add('resources', { professor_id: prof.id, title: f.get('title'), subject_id: f.get('subject_id') || null, url: f.get('url'), description: f.get('description') || null }); await log('create', 'resource', r.id, null); toast('Ressource ajoutée.'); location.reload(); } catch (er) { toast(errMsg(er), 'error'); } };
}
async function renderProfTimetable(p) {
  const prof = await professorRow(p);
  const list = await rows('timetable', 'day_of_week,start_time,end_time,room,classes(name),subjects(name),professor_id', { order: 'day_of_week' });
  const own = list.filter(x => x.professor_id === prof.id);
  const days = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  qs('#app').innerHTML = head('Emploi du temps', 'Vos cours planifiés.') + `<div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Jour</th><th>Horaire</th><th>Classe</th><th>Matière</th><th>Salle</th></tr></thead><tbody>${own.map(r => `<tr><td>${days[r.day_of_week]}</td><td>${String(r.start_time).slice(0,5)}–${String(r.end_time).slice(0,5)}</td><td>${esc(r.classes?.name || '')}</td><td>${esc(r.subjects?.name || '')}</td><td>${esc(r.room || '—')}</td></tr>`).join('') || tableEmpty(5)}</tbody></table></div></div>`;
}

async function renderSupervisorSpace(p) { const s = await supervisorRow(p); const [rep, san] = await Promise.all([sb.from('supervisor_reports').select('id', { count: 'exact', head: true }).eq('supervisor_id', s.id), sb.from('sanctions').select('id', { count: 'exact', head: true }).eq('supervisor_id', s.id)]); if (rep.error) throw rep.error; if (san.error) throw san.error; qs('#app').innerHTML = head('Espace surveillant', 'Surveillance, incidents et vie scolaire.') + `<div class="hero"><h2>Bonjour ${esc(p.full_name)}.</h2><p>Vous assurez le suivi quotidien des élèves.</p><div class="actions"><a href="supervisor-absences.html" class="btn secondary">⏱️ Voir les absences</a><a href="supervisor-reports.html" class="btn secondary">📄 Rédiger un rapport</a><a href="supervisor-sanctions.html" class="btn secondary">⚖️ Enregistrer une sanction</a></div></div><div class="grid g2" style="margin-top:15px">${statCard('Vos rapports', rep.count || 0, '📄')}${statCard('Vos sanctions', san.count || 0, '⚖️')}</div>`; }
async function renderSupervisorReports(p) {
  const students = await rows('students', 'id,full_name,class_name', { order: 'full_name' });
  const supervisors = await rows('supervisors', 'id,full_name', { order: 'full_name' });
  const list = await rows('supervisor_reports', 'id,student_id,supervisor_id,date,category,description,severity,status,created_at,supervisors(full_name)', { order: 'date', ascending: false, limit: 500 });
  const ownSupervisor = p.role === 'surveillant' ? await supervisorRow(p) : null;
  const visible = ownSupervisor ? list.filter(x => x.supervisor_id === ownSupervisor.id) : list;
  const canCreate = p.role === 'admin' || p.role === 'surveillant';
  qs('#app').innerHTML = head('Rapports surveillants', 'Signalements, incidents et suivi de vie scolaire.') +
    (canCreate ? `<div class="toolbar"><button id="sra" class="btn primary">+ Nouveau rapport</button></div>` : '') +
    `<div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Élève</th><th>Catégorie</th><th>Gravité</th><th>Statut</th><th>Surveillant</th><th>Description</th></tr></thead><tbody>${visible.map(x=>`<tr><td>${dateFR(x.date)}</td><td>${esc(students.find(s=>s.id===x.student_id)?.full_name||'Élève')}</td><td>${esc(x.category)}</td><td>${badge(x.severity)}</td><td>${badge(x.status)}</td><td>${esc(x.supervisors?.full_name||'—')}</td><td>${esc(x.description)}</td></tr>`).join('')||tableEmpty(7)}</tbody></table></div></div>` +
    (canCreate ? modal('srm', 'Nouveau rapport', `<form id="srf" class="form"><div class="field full"><label>Élève</label><select name="student_id" required>${opts(students,'id','full_name')}</select></div><div class="field"><label>Date</label><input name="date" type="date" value="${today()}" required></div><div class="field"><label>Catégorie</label><input name="category" required placeholder="Incident, comportement, retard collectif…"></div><div class="field"><label>Gravité</label><select name="severity"><option>Faible</option><option>Modérée</option><option>Importante</option></select></div><div class="field"><label>Statut</label><select name="status"><option>Ouvert</option><option>Traité</option><option>Archivé</option></select></div>${p.role==='admin'?`<div class="field full"><label>Surveillant concerné</label><select name="supervisor_id" required>${opts(supervisors,'id','full_name')}</select></div>`:''}<div class="field full"><label>Description</label><textarea name="description" required></textarea></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`) : '');
  if(canCreate){qs('#sra').onclick=()=>openModal('srm');closeBindings();qs('#srf').onsubmit=async e=>{e.preventDefault();const f=new FormData(e.target);try{const supervisor_id= p.role==='surveillant' ? ownSupervisor.id : f.get('supervisor_id');const r=await add('supervisor_reports',{student_id:f.get('student_id'),supervisor_id,date:f.get('date'),category:f.get('category'),description:f.get('description'),severity:f.get('severity'),status:f.get('status')});await log('create','supervisor_report',r.id,null);toast('Rapport enregistré.');location.reload()}catch(er){toast(errMsg(er),'error')}};}
}
async function renderSupervisorSanctions(p) { qs('#app').innerHTML = head('Sanctions', 'Les sanctions que vous avez enregistrées.') + `<a class="btn primary" href="discipline.html">Ouvrir la discipline</a>`; }
async function renderSupervisorAbsences(p) { await renderAbsences(p); }

async function studentRow(p) { if (!p.student_id) throw new Error('Votre compte n’est pas encore lié à une fiche élève.'); const r = await sb.from('students').select('*').eq('id', p.student_id).single(); if (r.error) throw r.error; return r.data; }
async function renderStudentSpace(p) { const s = await studentRow(p); const [a, g, h, pts] = await Promise.all([sb.from('absences').select('id,type,justifie', { count: 'exact' }).eq('student_id', s.id), sb.from('grades').select('value,coefficient').eq('student_id', s.id), sb.from('homework').select('id,class_id').eq('class_id', s.class_id), sb.from('student_points').select('points').eq('student_id', s.id)]); if (a.error) throw a.error; if (g.error) throw g.error; if (h.error) throw h.error; if (pts.error) throw pts.error; const total = (pts.data || []).reduce((n,x)=>n+Number(x.points||0),0); const validGrades = (g.data || []).filter(x => x.value != null); const avg = validGrades.length ? (validGrades.reduce((n,x)=>n+Number(x.value)*Number(x.coefficient||1),0)/validGrades.reduce((n,x)=>n+Number(x.coefficient||1),0)).toFixed(2) : '—'; qs('#app').innerHTML = head('Espace élève', 'Votre vie scolaire à Midori High.') + `<div class="hero"><h2>Bienvenue, ${esc(s.full_name)}.</h2><p>${esc(s.class_name || 'Classe non renseignée')} · réputation : ${esc(reputation(total))}</p><div class="actions"><a href="student-grades.html" class="btn secondary">💯 Mes notes</a><a href="student-homework.html" class="btn secondary">📓 Mes devoirs</a><a href="student-timetable.html" class="btn secondary">🗓️ Mon emploi du temps</a></div></div><div class="grid g4" style="margin-top:15px">${statCard('Absences', a.count || 0, '⏱️')}${statCard('Moyenne', `${avg}/20`, '💯')}${statCard('Réputation', `${total} pts`, '⭐')}${statCard('Devoirs', h.data?.length || 0, '📓')}</div>`; }
async function renderStudentGrades(p) { await renderGrades({ ...p, role:'student' }); }
async function renderStudentHomework(p) { await renderHomework({ ...p, role:'student' }); }
async function renderStudentTimetable(p) { const s = await studentRow(p); const list = await rows('timetable', 'day_of_week,start_time,end_time,room,classes(name),professors(full_name),subjects(name),class_id', { order:'day_of_week' }); const own = list.filter(x=>x.class_id===s.class_id); const days=['','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']; qs('#app').innerHTML=head('Mon emploi du temps','Planning de votre classe.')+`<div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Jour</th><th>Horaire</th><th>Matière</th><th>Professeur</th><th>Salle</th></tr></thead><tbody>${own.map(r=>`<tr><td>${days[r.day_of_week]}</td><td>${String(r.start_time).slice(0,5)}–${String(r.end_time).slice(0,5)}</td><td>${esc(r.subjects?.name||'')}</td><td>${esc(r.professors?.full_name||'')}</td><td>${esc(r.room||'—')}</td></tr>`).join('')||tableEmpty(5)}</tbody></table></div></div>`; }
async function renderStudentAttendance(p) { const s=await studentRow(p); const list=await rows('attendance','id,student_id,date,status,arrival_time,reason,comment,timetable_id,justified,timetable(subjects(name),classes(name),start_time,end_time)',{order:'date',ascending:false,limit:300}); const own=list.filter(x=>x.student_id===s.id || x.timetable?.classes?.name===s.class_name); qs('#app').innerHTML=head('Mes absences','Votre historique de présence.')+`<div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Matière</th><th>Statut</th><th>Heure</th><th>Motif</th><th>Justifié</th></tr></thead><tbody>${own.map(r=>`<tr><td>${dateFR(r.date)}</td><td>${esc(r.timetable?.subjects?.name||'')}</td><td>${r.status==='absent'?'<span class="tag red">Absent</span>':r.status==='retard'?'<span class="tag yellow">Retard</span>':'<span class="tag">Présent</span>'}</td><td>${esc(r.arrival_time?String(r.arrival_time).slice(0,5):'—')}</td><td>${esc(r.reason||'—')}</td><td>${r.justified?'Oui':'Non'}</td></tr>`).join('')||tableEmpty(6)}</tbody></table></div></div>`; }

async function renderStudentPoints(p){
  const s=await studentRow(p);
  const pts=await rows('student_points','id,points,reason,category,comment,created_at',{order:'created_at',ascending:false,limit:300});
  const mine=pts.filter(x=>x.student_id===s.id);
  const total=mine.reduce((n,x)=>n+Number(x.points||0),0);
  qs('#app').innerHTML=head('Ma réputation','Historique des points attribués à votre personnage.')+`<div class="grid g3">${statCard('Total',`${total} pts`,'⭐')}${statCard('Réputation',reputation(total),'🏅')}${statCard('Mouvements',mine.length,'📜')}</div><div class="card" style="margin-top:15px"><h3>Historique</h3><div class="table-wrap" style="margin-top:10px"><table class="table"><thead><tr><th>Date</th><th>Points</th><th>Motif</th><th>Commentaire</th></tr></thead><tbody>${mine.map(x=>`<tr><td>${dtFR(x.created_at)}</td><td><strong>${Number(x.points)>0?'+':''}${Number(x.points)}</strong></td><td>${esc(x.reason)}</td><td>${esc(x.comment||'—')}</td></tr>`).join('')||tableEmpty(4)}</tbody></table></div></div>`;
}
async function renderStudentAppointments(p) { const s=await studentRow(p); const list=await rows('appointments','id,student_id,practitioner_id,practitioner_role,type,appointment_date,appointment_time,duration,status,reason,profiles(full_name,role)',{order:'appointment_date',ascending:true}); const own=list.filter(x=>x.student_id===s.id); qs('#app').innerHTML=head('Mes rendez-vous','Suivi infirmerie et psychologie.')+`<div class="list">${own.map(x=>`<div class="card"><h3>${esc(x.type)}</h3><p class="muted" style="margin-top:5px">${dateFR(x.appointment_date)} à ${String(x.appointment_time||'').slice(0,5)} · ${esc(x.status)}</p><p style="margin-top:7px">${esc(x.reason||'Aucun motif communiqué')}</p><p class="muted" style="margin-top:6px">Professionnel : ${esc(x.profiles?.full_name||'—')}</p></div>`).join('')||'<div class="card empty">Aucun rendez-vous.</div>'}</div>`; }
async function renderStudentClubs(p) { const s=await studentRow(p); const [clubs,members,requests]=await Promise.all([rows('clubs','*',{order:'name'}),rows('club_members','club_id,student_id,role,joined_at',{order:'joined_at'}),rows('club_requests','club_id,status,message,created_at',{order:'created_at',ascending:false})]); const mine=members.filter(m=>m.student_id===s.id); qs('#app').innerHTML=head('Mes clubs','Vie associative et candidatures RP.')+`<div class="grid g2"><div class="card"><h3>Clubs ouverts</h3><div class="list" style="margin-top:10px">${clubs.filter(c=>c.status==='Actif').map(c=>`<div class="item"><div><strong>${esc(c.name)}</strong><span>${esc(c.description||'')}</span></div><button class="btn secondary small" data-request-club="${esc(c.id)}">Postuler</button></div>`).join('')||'<div class="empty">Aucun club actif.</div>'}</div></div><div class="card"><h3>Mes adhésions</h3><div class="list" style="margin-top:10px">${mine.map(m=>`<div class="item"><strong>${esc(clubs.find(c=>c.id===m.club_id)?.name||'Club')}</strong><span>${esc(m.role||'Membre')} · depuis ${dateFR(m.joined_at?.slice(0,10))}</span></div>`).join('')||'<div class="empty">Vous n’êtes membre d’aucun club.</div>'}</div></div></div>`+modal('crm','Candidature club',`<form id="crf" class="form"><input type="hidden" name="club_id"><div class="field full"><label>Message de motivation</label><textarea name="message" required></textarea></div><div class="field full"><button class="btn primary">Envoyer la candidature</button></div></form>`); qsa('[data-request-club]').forEach(b=>b.onclick=()=>{qs('#crf').club_id.value=b.dataset.requestClub;openModal('crm')}); closeBindings(); qs('#crf').onsubmit=async e=>{e.preventDefault();const f=new FormData(e.target);try{const r=await add('club_requests',{club_id:f.get('club_id'),student_id:s.id,message:f.get('message'),status:'En attente'});await log('create','club_request',r.id,null);toast('Candidature envoyée.');closeModal('crm');location.reload()}catch(er){toast(errMsg(er),'error')}}; }

async function renderAppointments(p, role) {
  const students=await rows('students','id,full_name,class_name',{order:'full_name'}); const list=await rows('appointments','id,student_id,practitioner_id,practitioner_role,type,appointment_date,appointment_time,duration,status,reason,confidential_note,created_at,students(full_name,class_name)',{order:'appointment_date',ascending:true,limit:500}); const own=list.filter(x=>x.practitioner_id===p.id);
  qs('#app').innerHTML=head('Rendez-vous', role==='psychologue'?'Suivi psychologique confidentiel.':'Rendez-vous infirmerie et suivi santé.')+`<div class="toolbar"><button id="apa" class="btn primary">+ Nouveau rendez-vous</button></div><div class="list">${own.map(x=>`<div class="card"><div class="toolbar"><div><h3>${esc(x.students?.full_name||'Élève')}</h3><span class="muted">${dateFR(x.appointment_date)} à ${String(x.appointment_time||'').slice(0,5)} · ${esc(x.type)} · ${esc(x.status)}</span></div>${badge(x.status)}</div><p>${esc(x.reason||'')}</p></div>`).join('')||'<div class="card empty">Aucun rendez-vous.</div>'}</div>`+modal('apm','Nouveau rendez-vous',`<form id="apf" class="form"><div class="field full"><label>Élève</label><select name="student_id" required>${opts(students,'id','full_name')}</select></div><div class="field"><label>Type</label><select name="type">${role==='psychologue'?'<option>Psychologie</option>':'<option>Infirmerie</option><option>Consultation</option>'}</select></div><div class="field"><label>Date</label><input name="appointment_date" type="date" value="${today()}" required></div><div class="field"><label>Heure</label><input name="appointment_time" type="time" required></div><div class="field"><label>Durée (min)</label><input name="duration" type="number" value="20" min="5"></div><div class="field"><label>Statut</label><select name="status"><option>Prévu</option><option>Terminé</option><option>Annulé</option></select></div><div class="field full"><label>Motif</label><textarea name="reason"></textarea></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`);
  qs('#apa').onclick=()=>openModal('apm'); closeBindings(); qs('#apf').onsubmit=async e=>{e.preventDefault();const f=new FormData(e.target);try{const r=await add('appointments',{student_id:f.get('student_id'),practitioner_id:p.id,practitioner_role:role,type:f.get('type'),appointment_date:f.get('appointment_date'),appointment_time:f.get('appointment_time'),duration:Number(f.get('duration')||20),status:f.get('status'),reason:f.get('reason')||null});await log('create','appointment',r.id,null);toast('Rendez-vous créé.');location.reload()}catch(er){toast(errMsg(er),'error')}};
}
async function renderHealthRecords(p, role) {
  const students=await rows('students','id,full_name,class_name',{order:'full_name'}); const table=role==='psychologue'?'psych_records':'medical_records'; const selectFields = role === 'psychologue' ? 'id,student_id,record_date,subject,notes,confidential_note,psychologue_id,created_at,students(full_name,class_name)' : 'id,student_id,record_date,record_type,summary,confidential_note,nurse_id,created_at,students(full_name,class_name)';
  const list=await rows(table,selectFields,{order:'record_date',ascending:false,limit:500}); const own=list.filter(x=>(role==='psychologue'?x.psychologue_id:x.nurse_id)===p.id);
  qs('#app').innerHTML=head(role==='psychologue'?'Dossiers confidentiels':'Dossiers infirmerie','Accès réservé au professionnel concerné.')+`<div class="notice" style="margin-bottom:15px">🔒 Les autres rôles du portail ne peuvent pas lire vos notes confidentielles.</div><div class="toolbar"><button id="hra" class="btn primary">+ Ajouter une note</button></div><div class="list">${own.map(x=>`<div class="card"><h3>${esc(x.students?.full_name||'Élève')}</h3><span class="muted">${dateFR(x.record_date)} · ${esc(role==='psychologue'?x.subject||'Suivi':x.record_type||'Visite')}</span><p style="margin-top:8px;white-space:pre-wrap">${esc(role==='psychologue'?x.notes||'':x.summary||'')}</p></div>`).join('')||'<div class="card empty">Aucun dossier.</div>'}</div>`+modal('hrm', 'Nouvelle note confidentielle', `<form id="hrf" class="form"><div class="field full"><label>Élève</label><select name="student_id" required>${opts(students,'id','full_name')}</select></div><div class="field"><label>Date</label><input name="record_date" type="date" value="${today()}" required></div><div class="field"><label>${role==='psychologue'?'Objet':'Type'}</label><input name="kind" required></div><div class="field full"><label>${role==='psychologue'?'Notes confidentielles':'Résumé de visite'}</label><textarea name="note" required></textarea></div><div class="field full"><label>Note confidentielle complémentaire</label><textarea name="confidential_note"></textarea></div><div class="field full"><button class="btn primary">Enregistrer</button></div></form>`);
  qs('#hra').onclick=()=>openModal('hrm');closeBindings();qs('#hrf').onsubmit=async e=>{e.preventDefault();const f=new FormData(e.target);try{let r;if(role==='psychologue')r=await add('psych_records',{student_id:f.get('student_id'),psychologue_id:p.id,record_date:f.get('record_date'),subject:f.get('kind'),notes:f.get('note'),confidential_note:f.get('confidential_note')||null});else r=await add('medical_records',{student_id:f.get('student_id'),nurse_id:p.id,record_date:f.get('record_date'),record_type:f.get('kind'),summary:f.get('note'),confidential_note:f.get('confidential_note')||null});await log('create',table,r.id,null);toast('Note enregistrée.');location.reload()}catch(er){toast(errMsg(er),'error')}};
}
async function renderPsychSpace(p){ const ap=await sb.from('appointments').select('id',{count:'exact',head:true}).eq('practitioner_id',p.id);if(ap.error)throw ap.error;qs('#app').innerHTML=head('Espace psychologue','Suivi confidentiel des élèves.')+`<div class="hero"><h2>Bonjour ${esc(p.full_name)}.</h2><p>Vos rendez-vous et notes confidentielles sont accessibles ici.</p><div class="actions"><a class="btn secondary" href="psych-appointments.html">🧠 Rendez-vous</a><a class="btn secondary" href="psych-records.html">🔒 Dossiers</a></div></div><div class="grid g2" style="margin-top:15px">${statCard('Rendez-vous',ap.count||0,'🧠')}${statCard('Confidentialité','Activée','🔒')}</div>`; }
async function renderNurseSpace(p){ const ap=await sb.from('appointments').select('id',{count:'exact',head:true}).eq('practitioner_id',p.id);if(ap.error)throw ap.error;qs('#app').innerHTML=head('Espace infirmière','Infirmerie et suivi santé RP.')+`<div class="hero"><h2>Bonjour ${esc(p.full_name)}.</h2><p>Gérez les rendez-vous et dossiers d’infirmerie.</p><div class="actions"><a class="btn secondary" href="nurse-appointments.html">🩺 Rendez-vous</a><a class="btn secondary" href="nurse-records.html">🔒 Dossiers</a></div></div><div class="grid g2" style="margin-top:15px">${statCard('Rendez-vous',ap.count||0,'🩺')}${statCard('Accès','Confidentiel','🔒')}</div>`; }

async function renderStudentClubRequestsAdmin() {}

async function init() {
  const page = location.pathname.split('/').pop() || 'dashboard.html';
  if (page === 'index.html' || page === '') return;
  const roles = PAGE_ROLES[page] || [];
  const ctx = await guard(roles);
  if (!ctx) return;
  shell(ctx.profile);
  try {
    switch (page) {
      case 'dashboard.html': await renderDashboard(); break;
      case 'messages.html': await renderMessages(ctx.profile); break;
      case 'homework-submissions.html': await renderHomeworkSubmissions(ctx.profile); break;
      case 'announcements.html': await renderAnnouncements(ctx.profile); break;
      case 'students.html': await renderStudents(); break;
      case 'student-profile.html': await renderStudentProfile(ctx.profile, ctx.profile.role === 'admin'); break;
      case 'professors.html': await renderProfessors(); break;
      case 'supervisors.html': await renderSupervisors(); break;
      case 'classes.html': await renderClasses(); break;
      case 'subjects.html': await renderSubjects(); break;
      case 'timetable.html': await renderTimetable(); break;
      case 'attendance.html': await renderAttendance(ctx.profile); break;
      case 'prof-attendance.html': await renderAttendance(ctx.profile, true); break;
      case 'absences.html': await renderAbsences(ctx.profile); break;
      case 'grades.html': await renderGrades(ctx.profile); break;
      case 'prof-grades.html': await renderGrades(ctx.profile, true); break;
      case 'student-grades.html': await renderStudentGrades(ctx.profile); break;
      case 'homework.html': await renderHomework(ctx.profile); break;
      case 'prof-homework.html': await renderHomework(ctx.profile, true); break;
      case 'student-homework.html': await renderStudentHomework(ctx.profile); break;
      case 'points.html': await renderPoints(); break;
      case 'discipline.html': await renderDiscipline(ctx.profile); break;
      case 'clubs.html': await renderAdminClubs(); break;
      case 'events.html': await renderEvents(ctx.profile); break;
      case 'access.html': await renderAccess(ctx.profile); break;
      case 'logs.html': await renderLogs(); break;
      case 'profile.html': await renderProfile(ctx.profile); break;
      case 'prof-space.html': await renderProfSpace(ctx.profile); break;
      case 'prof-resources.html': await renderProfResources(ctx.profile); break;
      case 'prof-timetable.html': await renderProfTimetable(ctx.profile); break;
      case 'supervisor-space.html': await renderSupervisorSpace(ctx.profile); break;
      case 'supervisor-absences.html': await renderSupervisorAbsences(ctx.profile); break;
      case 'supervisor-sanctions.html': await renderDiscipline(ctx.profile); break;
      case 'supervisor-reports.html': await renderSupervisorReports(ctx.profile); break;
      case 'student-space.html': await renderStudentSpace(ctx.profile); break;
      case 'student-timetable.html': await renderStudentTimetable(ctx.profile); break;
      case 'student-attendance.html': await renderStudentAttendance(ctx.profile); break;
      case 'student-points.html': await renderStudentPoints(ctx.profile); break;
      case 'student-appointments.html': await renderStudentAppointments(ctx.profile); break;
      case 'student-clubs.html': await renderStudentClubs(ctx.profile); break;
      case 'psych-space.html': await renderPsychSpace(ctx.profile); break;
      case 'psych-appointments.html': await renderAppointments(ctx.profile, 'psychologue'); break;
      case 'psych-records.html': await renderHealthRecords(ctx.profile, 'psychologue'); break;
      case 'nurse-space.html': await renderNurseSpace(ctx.profile); break;
      case 'nurse-appointments.html': await renderAppointments(ctx.profile, 'infirmiere'); break;
      case 'nurse-records.html': await renderHealthRecords(ctx.profile, 'infirmiere'); break;
      default: qs('#app').innerHTML = `<div class="card error">Page non configurée.</div>`;
    }
  } catch (er) {
    console.error('Midori High — erreur page', page, er);
    qs('#app').innerHTML = head(TITLE[page] || 'Portail', 'Une erreur a empêché le chargement de cette page.') + `<div class="card"><div class="notice error"><strong>Erreur détectée :</strong><br>${esc(errMsg(er))}</div><p class="muted" style="margin-top:12px">Si le message mentionne une table, une colonne ou une policy Supabase, exécutez le SQL de réparation fourni avec cette version.</p><button class="btn secondary" onclick="location.reload()">Réessayer</button></div>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (location.pathname.split('/').pop() === 'index.html' || location.pathname.endsWith('/')) initLogin();
  else init();
});