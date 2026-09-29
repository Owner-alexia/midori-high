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
  'dashboard.html': 'Tableau de bord',
  'messages.html': 'Messagerie',
  'homework-submissions.html': 'Remises de devoirs',
  'announcements.html': 'Annonces',
  'students.html': 'Élèves',
  'student-profile.html': 'Dossier élève',
  'professors.html': 'Professeurs',
  'supervisors.html': 'Surveillants',
  'classes.html': 'Classes',
  'subjects.html': 'Matières',
  'timetable.html': 'Emploi du temps',
  'attendance.html': 'Fiches d’appel',
  'absences.html': 'Absences',
  'grades.html': 'Notes',
  'homework.html': 'Devoirs',
  'points.html': 'Points / Réputation',
  'discipline.html': 'Discipline',
  'clubs.html': 'Clubs',
  'access.html': 'Accès & comptes',
  'logs.html': 'Journal d’activité',
  'events.html': 'Calendrier RP',
  'profile.html': 'Mon profil',
  'prof-space.html': 'Espace professeur',
  'prof-attendance.html': 'Fiches d’appel',
  'prof-grades.html': 'Notes',
  'prof-homework.html': 'Devoirs',
  'prof-resources.html': 'Ressources',
  'prof-timetable.html': 'Emploi du temps',
  'supervisor-space.html': 'Espace surveillant',
  'supervisor-absences.html': 'Absences & retards',
  'supervisor-sanctions.html': 'Sanctions',
  'supervisor-reports.html': 'Rapports',
  'student-space.html': 'Espace élève',
  'student-grades.html': 'Mes notes',
  'student-homework.html': 'Mes devoirs',
  'student-timetable.html': 'Mon emploi du temps',
  'student-attendance.html': 'Mes absences',
  'student-points.html': 'Ma réputation',
  'student-appointments.html': 'Mes rendez-vous',
  'student-clubs.html': 'Mes clubs',
  'psych-space.html': 'Espace psychologue',
  'psych-appointments.html': 'Rendez-vous',
  'psych-records.html': 'Dossiers confidentiels',
  'nurse-space.html': 'Espace infirmière',
  'nurse-appointments.html': 'Rendez-vous',
  'nurse-records.html': 'Dossiers infirmerie'
};

const PAGE_ROLES = {
  'dashboard.html': ['admin'],
  'messages.html': ['admin','professor','surveillant','student','psychologue','infirmiere'],
  'homework-submissions.html': ['admin','professor'],
  'access.html': ['admin'],
  'students.html': ['admin'],
  'professors.html': ['admin'],
  'supervisors.html': ['admin'],
  'classes.html': ['admin'],
  'subjects.html': ['admin'],
  'timetable.html': ['admin'],
  'attendance.html': ['admin', 'professor', 'surveillant'],
  'absences.html': ['admin', 'professor', 'surveillant'],
  'grades.html': ['admin', 'professor'],
  'homework.html': ['admin', 'professor'],
  'points.html': ['admin'],
  'discipline.html': ['admin', 'surveillant'],
  'clubs.html': ['admin'],
  'supervisor-reports.html': ['admin','surveillant'],
  'events.html': ['admin','professor','surveillant','student','psychologue','infirmiere'],
  'logs.html': ['admin'],
  'announcements.html': ['admin', 'professor', 'surveillant', 'student', 'psychologue', 'infirmiere'],
  'profile.html': ['admin', 'professor', 'surveillant', 'student', 'psychologue', 'infirmiere'],
  'student-profile.html': ['admin'],
  'prof-space.html': ['professor'],
  'prof-attendance.html': ['professor'],
  'prof-grades.html': ['professor'],
  'prof-homework.html': ['professor'],
  'prof-resources.html': ['professor'],
  'prof-timetable.html': ['professor'],
  'supervisor-space.html': ['surveillant'],
  'supervisor-absences.html': ['surveillant'],
  'supervisor-sanctions.html': ['surveillant'],
  'supervisor-reports.html': ['admin','surveillant'],
  'student-space.html': ['student'],
  'student-grades.html': ['student'],
  'student-homework.html': ['student'],
  'student-timetable.html': ['student'],
  'student-attendance.html': ['student'],
  'student-points.html': ['student'],
  'student-appointments.html': ['student'],
  'student-clubs.html': ['student'],
  'psych-space.html': ['psychologue'],
  'psych-appointments.html': ['psychologue'],
  'psych-records.html': ['psychologue'],
  'nurse-space.html': ['infirmiere'],
  'nurse-appointments.html': ['infirmiere'],
  'nurse-records.html': ['infirmiere']
};

const qs = s => document.querySelector(s);
const qsa = s => [...document.querySelectorAll(s)];

const esc = v =>
  String(v ?? '').replace(
    /[&<>'"]/g,
    c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[c])
  );

const dateFR = v => {
  if (!v) return '—';
  const d = new Date(`${v}T00:00:00`);
  return isNaN(d) ? v : d.toLocaleDateString('fr-FR');
};

const dtFR = v => {
  if (!v) return '—';
  const d = new Date(v);
  return isNaN(d) ? v : d.toLocaleString('fr-FR');
};

const today = () => new Date().toISOString().slice(0, 10);

const errMsg = e =>
  e?.message ||
  e?.error_description ||
  e?.details ||
  'Une erreur est survenue.';

function toast(msg, type = 'success') {
  const x = document.createElement('div');
  x.className = `notice ${type}`;
  x.textContent = msg;

  Object.assign(x.style, {
    position: 'fixed',
    right: '18px',
    bottom: '18px',
    zIndex: 999,
    boxShadow: '0 15px 40px rgba(0,0,0,.14)',
    maxWidth: '480px'
  });

  document.body.appendChild(x);
  setTimeout(() => x.remove(), 4200);
}

function openModal(id) {
  qs(`#${id}`)?.classList.add('open');
}

function closeModal(id) {
  qs(`#${id}`)?.classList.remove('open');
}

function closeBindings() {
  qsa('[data-close]').forEach(
    b => b.onclick = () => closeModal(b.dataset.close)
  );
}

function head(title, sub) {
  return `<div class="head"><h1>${title}</h1><p>${sub}</p></div>`;
}

function statCard(label, val, icon = '•') {
  return `
    <div class="card stat">
      <div>
        <div class="muted">${esc(label)}</div>
        <div class="n">${esc(val)}</div>
      </div>
      <div class="brand-mark" style="width:42px;height:42px">${icon}</div>
    </div>
  `;
}

function tableEmpty(colspan, msg = 'Aucune donnée.') {
  return `
    <tr>
      <td colspan="${colspan}" class="empty">${esc(msg)}</td>
    </tr>
  `;
}

function modal(id, title, formHtml) {
  return `
    <div class="modal" id="${id}">
      <div class="modal-box">
        <div class="modal-head">
          <h3>${esc(title)}</h3>
          <button class="close" data-close="${id}">✕</button>
        </div>
        ${formHtml}
      </div>
    </div>
  `;
}

function opts(rows, val = 'id', lab = 'name', sel = '') {
  return `
    <option value="">— Sélectionner —</option>
    ${rows.map(r => `
      <option
        value="${esc(r[val])}"
        ${String(r[val]) === String(sel) ? 'selected' : ''}
      >
        ${esc(r[lab])}
      </option>
    `).join('')}
  `;
}

function badge(v) {
  const s = String(v ?? '');
  return `<span class="tag">${esc(s)}</span>`;
}

async function session() {
  const r = await sb.auth.getSession();

  if (r.error) {
    throw r.error;
  }

  return r.data.session;
}

async function currentUser() {
  const r = await sb.auth.getUser();

  if (r.error) {
    throw r.error;
  }

  return r.data.user;
}

async function currentProfile() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const r = await sb
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle();

  if (r.error) {
    throw r.error;
  }

  return r.data;
}

async function guard(roles = []) {
  const s = await session();

  if (!s) {
    location.href = 'index.html';
    return null;
  }

  const p = await currentProfile();

  if (!p || p.active === false) {
    location.href = 'index.html?e=profil';
    return null;
  }

  if (roles.length && !roles.includes(p.role)) {
    location.href = HOME[p.role] || 'index.html';
    return null;
  }

  return {
    session: s,
    profile: p
  };
}

async function logout() {
  await sb.auth.signOut();
  location.href = 'index.html';
}

function shell(p) {
  const page =
    location.pathname.split('/').pop() ||
    'dashboard.html';

  let nav = '';

  (NAV[p.role] || []).forEach(group => {
    nav += `
      <div class="nav-section">
        ${esc(group[0])}
      </div>
    `;

    group[1].forEach(item => {
      nav += `
        <a href="${item[0]}" class="${page === item[0] ? 'active' : ''}">
          <span>${item[1]}</span>
          <span style="display:flex;gap:7px;align-items:center">
            ${esc(item[2])}
            ${
              item[0] === 'messages.html'
                ? '<span id="mailBadge" class="tag red" style="display:none;padding:2px 6px;font-size:10px"></span>'
                : ''
            }
          </span>
        </a>
      `;
    });
  });

  document.body.className = '';

  document.body.innerHTML = `
    <div class="page-shell">

      <aside class="sidebar" id="sidebar">

        <div class="brand">
          <img
            class="school-logo"
            src="assets/logo.svg"
            alt="Midori High"
          >

          <div>
            <strong>Midori High</strong>
            <small>Portail administratif</small>
          </div>
        </div>

        <nav class="nav">
          ${nav}
        </nav>

      </aside>

      <section class="main">

        <header class="topbar">

          <div style="display:flex;gap:9px;align-items:center">
            <button class="menu" id="menu">☰</button>

            <div>
              <strong>
                ${esc(TITLE[page] || 'Portail')}
              </strong>
            </div>
          </div>

          <div class="top-user">

            <div class="avatar">
              ${esc(
                (p.full_name ||
                  p.username ||
                  '?')
                  .slice(0, 1)
                  .toUpperCase()
              )}
            </div>

            <div style="text-align:right">
              <strong
                style="font-size:13px;display:block"
              >
                ${esc(p.full_name || p.username)}
              </strong>

              <span
                style="font-size:11px;color:#77827e"
              >
                ${esc(
                  ROLE_LABEL[p.role] ||
                  p.role
                )}
              </span>
            </div>

            <button
              id="logout"
              class="logout"
            >
              Déconnexion
            </button>

          </div>

        </header>

        <main
          class="content"
          id="app"
        ></main>

      </section>

    </div>
  `;

  qs('#logout').onclick = logout;

  qs('#menu').onclick = () =>
    qs('#sidebar').classList.toggle('open');

  loadUnreadBadge();
}


async function rows(
  table,
  select = '*',
  cfg = {}
) {
  let q = sb.from(table).select(select);

  if (cfg.order) {
    q = q.order(
      cfg.order,
      {
        ascending:
          cfg.ascending ?? true
      }
    );
  }

  if (cfg.limit) {
    q = q.limit(cfg.limit);
  }

  if (cfg.filters) {
    cfg.filters.forEach(f => {
      q = q[
        f.op || 'eq'
      ](
        f.column,
        f.value
      );
    });
  }

  const r = await q;

  if (r.error) {
    throw r.error;
  }

  return r.data || [];
}

async function add(table, row) {
  const r = await sb
    .from(table)
    .insert(row)
    .select()
    .single();

  if (r.error) {
    throw r.error;
  }

  return r.data;
}

async function update(table, id, row) {
  const r = await sb
    .from(table)
    .update(row)
    .eq('id', id)
    .select()
    .single();

  if (r.error) {
    throw r.error;
  }

  return r.data;
}

async function remove(table, id) {
  const r = await sb
    .from(table)
    .delete()
    .eq('id', id);

  if (r.error) {
    throw r.error;
  }
}

async function log(
  action,
  entity,
  entityId = null,
  details = null
) {
  try {
    await sb
      .from('activity_logs')
      .insert({
        actor_profile_id:
          (await currentUser())?.id ||
          null,
        action,
        entity,
        entity_id:
          entityId,
        details:
          details || null
      });
  } catch (_) {}
}


const MESSAGE_BUCKET =
  'midori-messages';

function roleLabel(role) {
  return (
    ROLE_LABEL[role] ||
    role ||
    'Utilisateur'
  );
}

async function messageDirectory() {
  const r = await sb.rpc(
    'list_message_recipients'
  );

  if (r.error) {
    throw r.error;
  }

  return r.data || [];
}

async function loadUnreadBadge() {
  const badge =
    qs('#mailBadge');

  if (!badge) {
    return;
  }

  try {
    const user =
      await currentUser();

    if (!user) {
      return;
    }

    const r = await sb
      .from('messages')
      .select(
        'id',
        {
          count: 'exact',
          head: true
        }
      )
      .eq(
        'recipient_id',
        user.id
      )
      .is(
        'read_at',
        null
      );

    if (r.error) {
      throw r.error;
    }

    const n =
      r.count || 0;

    badge.textContent =
      n > 99
        ? '99+'
        : String(n);

    badge.style.display =
      n
        ? 'inline-flex'
        : 'none';

  } catch (_) {}
}

function safeFileName(name) {
  return String(
    name || 'fichier'
  )
    .replace(
      /[^a-zA-Z0-9._-]/g,
      '_'
    )
    .slice(
      0,
      120
    );
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

      if (file.size > 10 * 1024 * 1024) {
        throw new Error(`Le fichier « ${file.name} » dépasse 10 Mo.`);
      }

      const path =
        `${user.id}/${messageId}/${crypto.randomUUID()}-${safeFileName(file.name)}`;

      const up = await sb.storage
        .from(MESSAGE_BUCKET)
        .upload(
          path,
          file,
          {
            upsert: false,
            contentType:
              file.type ||
              'application/octet-stream'
          }
        );

      if (up.error) throw up.error;

      uploadedPaths.push(path);

      const ar = await sb
        .from('message_attachments')
        .insert({
          message_id: messageId,
          file_name: file.name,
          storage_path: path,
          mime_type:
            file.type ||
            'application/octet-stream',
          size_bytes: file.size
        });

      if (ar.error) throw ar.error;
    }

    return message;

  } catch (er) {

    if (uploadedPaths.length) {
      try {
        await sb.storage
          .from(MESSAGE_BUCKET)
          .remove(uploadedPaths);
      } catch (_) {}
    }

    if (message) {
      try {
        await sb
          .from('messages')
          .delete()
          .eq('id', messageId);
      } catch (_) {}
    }

    throw er;
  }
}


async function deleteInternalMessage(messageId) {
  if (!messageId) {
    throw new Error('Message introuvable.');
  }

  const ar = await sb
    .from('message_attachments')
    .select('id,storage_path')
    .eq('message_id', messageId);

  if (ar.error) throw ar.error;

  const paths =
    (ar.data || [])
      .map(x => x.storage_path)
      .filter(Boolean);

  if (paths.length) {
    const sr = await sb.storage
      .from(MESSAGE_BUCKET)
      .remove(paths);

    if (sr.error) throw sr.error;
  }

  const mr = await sb
    .from('messages')
    .delete()
    .eq('id', messageId);

  if (mr.error) throw mr.error;
}


async function renderMessages(p) {
  const user = await currentUser();
  const directory = await messageDirectory();

  const people =
    new Map(
      directory.map(x => [x.id, x])
    );

  const [inboxR, sentR] =
    await Promise.all([
      sb
        .from('messages')
        .select(
          'id,sender_id,recipient_id,subject,body,homework_id,sent_at,read_at'
        )
        .eq(
          'recipient_id',
          user.id
        )
        .order(
          'sent_at',
          { ascending: false }
        )
        .limit(200),

      sb
        .from('messages')
        .select(
          'id,sender_id,recipient_id,subject,body,homework_id,sent_at,read_at'
        )
        .eq(
          'sender_id',
          user.id
        )
        .order(
          'sent_at',
          { ascending: false }
        )
        .limit(200)
    ]);

  if (inboxR.error) throw inboxR.error;
  if (sentR.error) throw sentR.error;

  const inbox = inboxR.data || [];
  const sent = sentR.data || [];

  const personName = id =>
    people.get(id)?.full_name ||
    people.get(id)?.username ||
    'Utilisateur';

  const displayRows = (
    list,
    mode
  ) => list.map(m => {

    const other =
      mode === 'inbox'
        ? personName(m.sender_id)
        : personName(m.recipient_id);

    return `
      <div
        class="item msg-item ${!m.read_at && mode === 'inbox' ? 'msg-unread' : ''}"
        data-msg="${esc(m.id)}"
        data-mode="${mode}"
        role="button"
        tabindex="0"
      >

        <div
          style="min-width:0;text-align:left;flex:1"
        >
          <strong>
            ${esc(
              m.subject ||
              '(Sans objet)'
            )}
          </strong>

          <span>
            ${mode === 'inbox' ? 'De' : 'À'}
            : ${esc(other)}
            · ${dtFR(m.sent_at)}
          </span>

          <p
            style="margin-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:760px"
          >
            ${esc(m.body || '')}
          </p>
        </div>

        <div
          class="actions"
          style="flex-shrink:0"
        >
          ${
            m.homework_id
              ? '<span class="tag">📓 Devoir</span>'
              : ''
          }

          ${
            !m.read_at &&
            mode === 'inbox'
              ? '<span class="tag red" style="margin-left:5px">Nouveau</span>'
              : ''
          }

          <button
            type="button"
            class="btn danger small"
            data-delete-message="${esc(m.id)}"
          >
            🗑️
          </button>
        </div>

      </div>
    `;
  }).join('')
    ||
    '<div class="card empty">Aucun message.</div>';

  qs('#app').innerHTML =
    head(
      'Messagerie',
      'Messagerie interne de Midori High — uniquement pour le RP.'
    ) +

    `
      <div class="toolbar">
        <div class="actions">

          <button
            id="composeMsg"
            class="btn primary"
          >
            ✉️ Nouveau message
          </button>

          <span class="tag">
            ${inbox.filter(x => !x.read_at).length}
            non lu(s)
          </span>

        </div>
      </div>
    ` +

    `
      <div class="grid g2">

        <div class="card">
          <div class="toolbar">
            <h3>Boîte de réception</h3>
          </div>

          <div class="list">
            ${displayRows(
              inbox,
              'inbox'
            )}
          </div>
        </div>

        <div class="card">
          <div class="toolbar">
            <h3>Messages envoyés</h3>
          </div>

          <div class="list">
            ${displayRows(
              sent,
              'sent'
            )}
          </div>
        </div>

      </div>
    ` +

    modal(
      'msgCompose',
      'Nouveau message',

      `
        <form
          id="msgForm"
          class="form"
        >

          <div class="field full">
            <label>Destinataire</label>

            <select
              name="recipient_id"
              required
            >
              ${
                opts(
                  directory
                    .filter(
                      x => x.id !== user.id
                    )
                    .sort(
                      (a, b) =>
                        String(
                          a.full_name
                        ).localeCompare(
                          String(
                            b.full_name
                          ),
                          'fr'
                        )
                    ),
                  'id',
                  'full_name'
                )
              }
            </select>
          </div>

          <div class="field full">
            <label>Objet</label>

            <input
              name="subject"
              required
              maxlength="180"
            >
          </div>

          <div class="field full">
            <label>Message</label>

            <textarea
              name="body"
              required
              placeholder="Écrivez votre message RP…"
            ></textarea>
          </div>

          <div class="field full">
            <label>
              Pièces jointes

              <span class="muted">
                (3 fichiers max, 10 Mo chacun)
              </span>
            </label>

            <input
              name="files"
              type="file"
              multiple
            >
          </div>

          <div class="field full">
            <button
              class="btn primary"
            >
              Envoyer
            </button>
          </div>

        </form>
      `
    ) +

    `
      <div id="messageModalHost"></div>
    `;


  qs('#composeMsg').onclick =
    () => openModal('msgCompose');

  closeBindings();


  qs('#msgForm').onsubmit =
    async e => {

      e.preventDefault();

      const f =
        new FormData(e.target);

      const files =
        Array.from(
          e.target
            .querySelector(
              '[name="files"]'
            )
            .files || []
        );

      if (files.length > 3) {
        toast(
          'Maximum 3 pièces jointes.',
          'error'
        );
        return;
      }

      const submitBtn =
        e.target.querySelector(
          'button[type="submit"]'
        );

      if (submitBtn?.disabled) {
        return;
      }

      try {

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent =
            'Envoi…';
        }

        const m =
          await sendInternalMessage({
            recipientId:
              f.get('recipient_id'),
            subject:
              f.get('subject'),
            body:
              f.get('body'),
            files
          });

        await log(
          'create',
          'message',
          m.id,
          null
        );

        toast(
          'Message envoyé.'
        );

        closeModal(
          'msgCompose'
        );

        await renderMessages(p);

      } catch (er) {

        toast(
          errMsg(er),
          'error'
        );

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent =
            'Envoyer';
        }
      }
    };


  qsa('[data-msg]').forEach(
    btn =>
      btn.onclick =
        async () => {

          const id =
            btn.dataset.msg;

          const mode =
            btn.dataset.mode;

          try {

            const list =
              mode === 'inbox'
                ? inbox
                : sent;

            const m =
              list.find(
                x => x.id === id
              );

            if (!m) return;

            if (
              mode === 'inbox' &&
              !m.read_at
            ) {

              const ur =
                await sb.rpc(
                  'mark_message_read',
                  {
                    p_message_id:
                      id
                  }
                );

              if (ur.error) {
                throw ur.error;
              }

              m.read_at =
                new Date().toISOString();
            }

            const ar =
              await sb
                .from(
                  'message_attachments'
                )
                .select(
                  'id,file_name,storage_path,mime_type,size_bytes'
                )
                .eq(
                  'message_id',
                  id
                )
                .order('id');

            if (ar.error) {
              throw ar.error;
            }

            const sender =
              people.get(
                m.sender_id
              )?.full_name ||
              'Utilisateur';

            const recipient =
              people.get(
                m.recipient_id
              )?.full_name ||
              'Utilisateur';

            const attachmentHtml =
              (ar.data || [])
                .map(
                  a =>
                    `
                      <button
                        type="button"
                        class="btn secondary small"
                        data-download="${esc(a.id)}"
                        data-path="${esc(a.storage_path)}"
                      >
                        📎 ${esc(a.file_name)}
                      </button>
                    `
                )
                .join(' ')
                ||
                '<span class="muted">Aucune pièce jointe.</span>';

            const canReply =
              mode === 'inbox';

            const host =
              qs(
                '#messageModalHost'
              );

            host.innerHTML =
              modal(
                'msgView',
                'Message',

                `
                  <div
                    class="card"
                    style="box-shadow:none;padding:0;border:0"
                  >

                    <div class="muted">
                      De :
                      ${esc(sender)}
                      <br>

                      À :
                      ${esc(recipient)}
                      <br>

                      ${dtFR(m.sent_at)}
                    </div>

                    <h2
                      style="font-size:21px;margin:15px 0 10px"
                    >
                      ${esc(m.subject)}
                    </h2>

                    <div
                      style="white-space:pre-wrap;line-height:1.6"
                    >
                      ${esc(m.body)}
                    </div>

                    <div
                      style="margin-top:16px"
                    >
                      <strong>
                        Pièces jointes
                      </strong>

                      <div
                        class="actions"
                        style="margin-top:8px"
                      >
                        ${attachmentHtml}
                      </div>
                    </div>

                    <div
                      class="actions"
                      style="margin-top:18px"
                    >

                      ${
                        canReply
                          ? `
                            <button
                              id="replyMsg"
                              class="btn primary"
                            >
                              ↩️ Répondre
                            </button>
                          `
                          : ''
                      }

                      <button
                        id="deleteMsgView"
                        class="btn danger"
                      >
                        🗑️ Supprimer
                      </button>

                      <button
                        class="btn secondary"
                        data-close="msgView"
                      >
                        Fermer
                      </button>

                    </div>

                  </div>
                `
              );

            openModal(
              'msgView'
            );

            closeBindings();


            qsa(
              '[data-download]'
            ).forEach(
              x =>
                x.onclick =
                  async () => {

                    try {

                      const r =
                        await sb.storage
                          .from(
                            MESSAGE_BUCKET
                          )
                          .createSignedUrl(
                            x.dataset.path,
                            60
                          );

                      if (r.error) {
                        throw r.error;
                      }

                      window.open(
                        r.data.signedUrl,
                        '_blank'
                      );

                    } catch (er) {

                      toast(
                        errMsg(er),
                        'error'
                      );
                    }
                  }
            );


            qs('#replyMsg')
              ?.addEventListener(
                'click',
                () => {

                  closeModal(
                    'msgView'
                  );

                  qs(
                    '#msgCompose [name="recipient_id"]'
                  ).value =
                    m.sender_id;

                  qs(
                    '#msgCompose [name="subject"]'
                  ).value =
                    `Re: ${m.subject}`;

                  qs(
                    '#msgCompose [name="body"]'
                  ).value =
                    `\n\n--- Message précédent ---\n${m.body}`;

                  openModal(
                    'msgCompose'
                  );
                }
              );


            qs(
              '#deleteMsgView'
            )?.addEventListener(
              'click',
              async () => {

                if (
                  !confirm(
                    'Supprimer définitivement ce message ?'
                  )
                ) {
                  return;
                }

                const b =
                  qs(
                    '#deleteMsgView'
                  );

                try {

                  b.disabled = true;

                  await deleteInternalMessage(
                    m.id
                  );

                  await log(
                    'delete',
                    'message',
                    m.id,
                    null
                  );

                  closeModal(
                    'msgView'
                  );

                  toast(
                    'Message supprimé.'
                  );

                  await renderMessages(
                    p
                  );

                  await loadUnreadBadge();

                } catch (er) {

                  b.disabled =
                    false;

                  toast(
                    errMsg(er),
                    'error'
                  );
                }
              }
            );

            await loadUnreadBadge();

            btn.classList.remove(
              'msg-unread'
            );

          } catch (er) {

            toast(
              errMsg(er),
              'error'
            );
          }
        }
  );


  qsa(
    '[data-delete-message]'
  ).forEach(
    btn =>
      btn.onclick =
        async e => {

          e.stopPropagation();

          if (
            !confirm(
              'Supprimer définitivement ce message ?'
            )
          ) {
            return;
          }

          try {

            btn.disabled = true;

            await deleteInternalMessage(
              btn.dataset.deleteMessage
            );

            await log(
              'delete',
              'message',
              btn.dataset.deleteMessage,
              null
            );

            toast(
              'Message supprimé.'
            );

            await renderMessages(
              p
            );

            await loadUnreadBadge();

          } catch (er) {

            btn.disabled =
              false;

            toast(
              errMsg(er),
              'error'
            );
          }
        }
  );

}


async function renderHomeworkSubmissions(p) {
  const id =
    new URLSearchParams(
      location.search
    ).get('id');

  if (!id) {
    qs('#app').innerHTML =
      head(
        'Remises de devoirs',
        'Sélectionnez un devoir depuis l’espace devoirs.'
      ) +
      '<div class="card empty">Aucun devoir sélectionné.</div>';

    return;
  }

  const hr =
    await sb
      .from('homework')
      .select(
        'id,title,description,due_date,attachment_url,classes(name),subjects(name),professors(full_name)'
      )
      .eq(
        'id',
        id
      )
      .maybeSingle();

  if (hr.error) {
    throw hr.error;
  }

  if (!hr.data) {
    qs('#app').innerHTML =
      '<div class="notice error">Devoir introuvable ou non accessible.</div>';

    return;
  }

  const homework =
    hr.data;

  const sr =
    await sb
      .from(
        'homework_submissions'
      )
      .select(
        'id,homework_id,student_id,message_id,submitted_at,status,note,students(full_name,username,class_name)'
      )
      .eq(
        'homework_id',
        id
      )
      .order(
        'submitted_at',
        {
          ascending:
            false
        }
      );

  if (sr.error) {
    throw sr.error;
  }

  const list =
    sr.data || [];

  qs('#app').innerHTML =
    head(
      'Remises de devoirs',
      `${esc(homework.title)} · ${esc(homework.classes?.name || '')} · ${esc(homework.subjects?.name || '')}`
    ) +

    `
      <div
        class="card"
        style="margin-bottom:15px"
      >
        <strong>
          Date limite :
        </strong>

        ${dateFR(
          homework.due_date
        )}

        <br>

        <span class="muted">
          ${esc(
            homework.description ||
            ''
          )}
        </span>
      </div>
    ` +

    `
      <div class="card">

        <div class="toolbar">
          <h3>
            ${list.length}
            remise(s)
          </h3>
        </div>

        <div class="table-wrap">

          <table class="table">

            <thead>
              <tr>
                <th>Élève</th>
                <th>Date</th>
                <th>Statut</th>
                <th>Commentaire</th>
                <th>Pièces jointes</th>
              </tr>
            </thead>

            <tbody>

              ${
                list.map(
                  x =>
                    `
                      <tr>

                        <td>
                          <strong>
                            ${esc(
                              x.students?.full_name ||
                              ''
                            )}
                          </strong>

                          <span>
                            ${esc(
                              x.students?.class_name ||
                              x.students?.username ||
                              ''
                            )}
                          </span>
                        </td>

                        <td>
                          ${dtFR(
                            x.submitted_at
                          )}
                        </td>

                        <td>
                          <select
                            class="sub-status"
                            data-sub="${esc(x.id)}"
                          >
                            <option
                              ${
                                x.status ===
                                'Envoyé'
                                  ? 'selected'
                                  : ''
                              }
                            >
                              Envoyé
                            </option>

                            <option
                              ${
                                x.status ===
                                'En retard'
                                  ? 'selected'
                                  : ''
                              }
                            >
                              En retard
                            </option>

                            <option
                              ${
                                x.status ===
                                'Lu'
                                  ? 'selected'
                                  : ''
                              }
                            >
                              Lu
                            </option>

                            <option
                              ${
                                x.status ===
                                'Corrigé'
                                  ? 'selected'
                                  : ''
                              }
                            >
                              Corrigé
                            </option>
                          </select>
                        </td>

                        <td>
                          ${esc(
                            x.note ||
                            '—'
                          )}
                        </td>

                        <td>
                          <div
                            class="actions"
                            data-files="${esc(
                              x.message_id
                            )}"
                          >
                            <span class="muted">
                              Chargement…
                            </span>
                          </div>
                        </td>

                      </tr>
                    `
                ).join('')
                ||
                tableEmpty(
                  5,
                  'Aucune remise pour le moment.'
                )
              }

            </tbody>

          </table>

        </div>

      </div>
    `;

  for (
    const x of list
  ) {

    const fr =
      await sb
        .from(
          'message_attachments'
        )
        .select(
          'file_name,storage_path'
        )
        .eq(
          'message_id',
          x.message_id
        );

    const box =
      qs(
        `[data-files="${x.message_id}"]`
      );

    if (fr.error) {

      if (box) {
        box.innerHTML =
          '<span class="muted">Impossible de charger les fichiers.</span>';
      }

      continue;
    }

    if (box) {
      box.innerHTML =
        (fr.data || [])
          .map(
            a =>
              `
                <button
                  type="button"
                  class="btn secondary small"
                  data-path="${esc(
                    a.storage_path
                  )}"
                >
                  📎 ${esc(
                    a.file_name
                  )}
                </button>
              `
          )
          .join(' ')
          ||
          '<span class="muted">Aucun fichier</span>';
    }
  }

  qsa(
    '[data-path]'
  ).forEach(
    b =>
      b.onclick =
        async () => {

          try {

            const r =
              await sb.storage
                .from(
                  MESSAGE_BUCKET
                )
                .createSignedUrl(
                  b.dataset.path,
                  60
                );

            if (r.error) {
              throw r.error;
            }

            window.open(
              r.data.signedUrl,
              '_blank'
            );

          } catch (er) {

            toast(
              errMsg(er),
              'error'
            );
          }
        }
  );

  qsa(
    '[data-sub]'
  ).forEach(
    sel =>
      sel.onchange =
        async () => {

          try {

            await update(
              'homework_submissions',
              sel.dataset.sub,
              {
                status:
                  sel.value
              }
            );

            await log(
              'update',
              'homework_submission',
              sel.dataset.sub,
              {
                status:
                  sel.value
              }
            );

            toast(
              'Statut mis à jour.'
            );

          } catch (er) {

            toast(
              errMsg(er),
              'error'
            );
          }
        }
  );
}


function reputation(total) {
  const n =
    Number(
      total || 0
    );

  if (n >= 600) {
    return 'Parfait';
  }

  if (n >= 100) {
    return 'Normal';
  }

  if (n <= -100) {
    return 'Délinquant';
  }

  return 'Zone intermédiaire';
}
