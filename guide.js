// Inject minimal compact styles once
if (!document.getElementById('tv-guide-styles')) {
  const style = document.createElement('style');
  style.id = 'tv-guide-styles';
  style.textContent = `
    .card {
      background-color: rgba(34, 34, 34, 0.9);
      padding: 0.4rem 0.6rem;
      border-radius: 6px;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      color: white;
      font-family: 'Segoe UI', sans-serif;
      margin-bottom: 0.4rem;
      font-size: 0.62rem;
      line-height: 1.1;
      border: 1px solid rgba(255,255,255,0.1);
      backdrop-filter: blur(2px);
    }
    h2 {
      margin: 0 0 0.15rem 0;
      font-size: 0.68rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .progress-labels {
      display: flex;
      justify-content: space-between;
      font-size: 0.58rem;
      color: #bbb;
      margin-top: 0.15rem;
    }
    .progress-container {
      background-color: rgba(0,0,0,0.3);
      height: 5px;
      border-radius: 3px;
      margin-top: 3px;
      overflow: hidden;
      position: relative;
    }
    .progress-bar {
      height: 100%;
      width: 0%;
      background: linear-gradient(to right, #4fd1c5, #38b2ac);
      transition: width linear;
      box-shadow: 0 0 5px rgba(79, 209, 197, 0.5);
    }
    .up-next {
      margin-top: 0.2rem;
      font-size: 0.58rem;
      color: #ccc;
      font-weight: 500;
      user-select: none;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;
  document.head.appendChild(style);
}

let progressBarTimers = {};

function getEPGUrl(channelId) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `https://epg.pw/api/epg.xml?lang=en&timezone=VVMvRWFzdGVybg%3D%3D&date=${yyyy}${mm}${dd}&channel_id=${channelId}`;
}

async function loadEPG(channelId, targetId) {
  const url = getEPGUrl(channelId);
  try {
    const res = await fetch(url);
    const xmlText = await res.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, 'application/xml');
    const programs = [...xml.querySelectorAll('programme')];

    const now = new Date();
    let nowProgram = null;
    let nextProgram = null;

    for (let i = 0; i < programs.length; i++) {
      const prog = programs[i];
      const start = parseDate(prog.getAttribute('start'));
      const stop = parseDate(prog.getAttribute('stop'));

      if (now >= start && now <= stop) {
        nowProgram = prog;
        if (i + 1 < programs.length) {
          nextProgram = programs[i + 1];
        }
        break;
      }
    }

    const targetElem = document.getElementById(targetId);
    if (!nowProgram) {
      targetElem.innerHTML = `<p>No show now.</p>`;
      clearTimeout(progressBarTimers[targetId]);
      return;
    }

    const nowID = nowProgram.getAttribute('start') + nowProgram.getAttribute('stop');
    if (targetElem.getAttribute('data-now-id') !== nowID) {
      targetElem.setAttribute('data-now-id', nowID);
      renderCard(nowProgram, nextProgram, targetId);
    }

    targetElem.setAttribute('data-channel-id', channelId);
    animateProgressBar(nowProgram, targetId);
  } catch (error) {
    console.error('EPG load failed:', error);
    const targetElem = document.getElementById(targetId);
    if (targetElem) targetElem.innerHTML = `<p>Failed to load.</p>`;
    clearTimeout(progressBarTimers[targetId]);
  }
}

function renderCard(nowProg, nextProg, targetId) {
  const nowTitle = nowProg.querySelector('title')?.textContent || 'No title';
  const start = parseDate(nowProg.getAttribute('start'));
  const stop = parseDate(nowProg.getAttribute('stop'));
  const nextTitle = nextProg?.querySelector('title')?.textContent || '';

  let html = `
    <div>
      <h2>${nowTitle}</h2>
      <div class="progress-container">
        <div class="progress-bar" id="progressBar-${targetId}"></div>
      </div>
      <div class="progress-labels">
        <span>${formatTime(start)}</span>
        <span>${formatTime(stop)}</span>
      </div>
  `;

  if (nextTitle) {
    html += `<div class="up-next">Up Next: <strong>${nextTitle}</strong></div>`;
  }

  html += `</div>`;
  document.getElementById(targetId).innerHTML = html;
}

function animateProgressBar(nowProg, targetId) {
  const bar = document.getElementById(`progressBar-${targetId}`);
  if (!bar) return;

  const start = parseDate(nowProg.getAttribute('start'));
  const stop = parseDate(nowProg.getAttribute('stop'));
  const now = new Date();

  const total = stop - start;
  const elapsed = now - start;
  const remaining = stop - now;

  if (remaining <= 0) {
    bar.style.width = '100%';
    return;
  }

  const percent = Math.min(100, Math.max(0, (elapsed / total) * 100));
  bar.style.transition = 'none';
  bar.style.width = `${percent}%`;
  bar.offsetWidth;
  bar.style.transition = `width ${remaining / 1000}s linear`;
  bar.style.width = '100%';

  clearTimeout(progressBarTimers[targetId]);
  progressBarTimers[targetId] = setTimeout(() => {
    const elem = document.getElementById(targetId);
    if (!elem) return;
    const channelId = elem.getAttribute('data-channel-id');
    loadEPG(channelId, targetId);
  }, remaining + 1000);
}

function parseDate(str) {
  const year = str.slice(0, 4);
  const month = str.slice(4, 6) - 1;
  const day = str.slice(6, 8);
  const hour = str.slice(8, 10);
  const min = str.slice(10, 12);
  const sec = str.slice(12, 14);
  return new Date(year, month, day, hour, min, sec);
}

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function initAllTvGuideCards() {
  const cards = document.querySelectorAll('.tv-guide-card[data-channel-id]');
  cards.forEach((el, i) => {
    if (!el.id) el.id = `tv-guide-card-${i + 1}`;
    const channelId = el.getAttribute('data-channel-id');
    loadEPG(channelId, el.id);
    setInterval(() => loadEPG(channelId, el.id), 30000);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllTvGuideCards);
} else {
  initAllTvGuideCards();
}
