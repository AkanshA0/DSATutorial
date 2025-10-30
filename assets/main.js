function enhanceCopyButtons() {
  document.querySelectorAll('.codeblock').forEach((block) => {
    const btn = block.querySelector('.copy-btn');
    const code = block.querySelector('pre');
    const status = block.querySelector('[role="status"]');
    if (!btn || !code || !status) return;
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.innerText);
        status.textContent = 'Copied to clipboard.';
        setTimeout(() => status.textContent = '', 2000);
        btn.focus();
      } catch (e) {
        status.textContent = 'Copy failed. Select and copy manually.';
      }
    });
  });
}

/* modal demo removed for production deployment */

function demoSearch() {
  const input = document.getElementById('q');
  const button = document.getElementById('searchBtn');
  const list = document.getElementById('topicList');
  if (!input || !button || !list) return;
  function run() {
    const term = input.value.toLowerCase().trim();
    list.querySelectorAll('li').forEach(li => {
      const show = li.textContent.toLowerCase().includes(term);
      li.style.display = show ? '' : 'none';
    });
  }
  button.addEventListener('click', run);
  input.addEventListener('input', run);
}

function quiz() {
  const form = document.getElementById('quiz');
  const status = document.getElementById('quizStatus');
  if (!form || !status) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = (new FormData(form)).get('q1');
    status.textContent = (val === 'sorted')
      ? 'Correct: binary search requires a sorted array.'
      : 'Almost: binary search only works on sorted arrays.';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  enhanceCopyButtons();
  demoSearch();
  quiz();
});

function initHomeNavigation() {
  const home = document.getElementById('homeLink');
  if (!home) return;
  home.addEventListener('click', async (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    const href = home.href;

    try {
      let fetchUrl = href;
      if (fetchUrl.endsWith('/')) fetchUrl = fetchUrl + 'index.html';
      const resp = await fetch(fetchUrl, { cache: 'no-store' });
      if (!resp.ok) throw new Error('fetch failed');
      const text = await resp.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const newMain = doc.querySelector('main');
      if (!newMain) throw new Error('no main in fetched document');
      const oldMain = document.querySelector('main');
      oldMain.replaceWith(newMain);

      const mainNow = document.querySelector('main');
      mainNow.setAttribute('tabindex','-1');
      mainNow.focus();

      try { history.pushState({ spa: true }, '', href); } catch (err) { /* ignore */ }

  enhanceCopyButtons();
  demoSearch();
  quiz();
    } catch (err) {
      window.location.href = href;
    }
  });

  window.addEventListener('popstate', (e) => {
    if (!e.state) { location.reload(); }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHomeNavigation();
});
