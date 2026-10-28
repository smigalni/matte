/* Kopier-knapp for Python-kode i programmeringskapitlene. */
(() => {
  const copyIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"></path></svg>';
  const checkIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="m5 12 4 4L19 6"></path></svg>';

  function addCopyButtons() {
    document.querySelectorAll('.md-typeset .highlight pre').forEach((pre) => {
      const code = pre.querySelector('code');
      if (!code || !/language-python/.test(code.className)) return;

      const container = pre.closest('.highlight');
      if (!container || container.querySelector('.code-copy-button')) return;
      container.classList.add('has-copy-button');

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'code-copy-button';
      button.setAttribute('aria-label', 'Kopier Python-kode');
      button.title = 'Kopier kode';
      button.innerHTML = copyIcon + '<span>Kopier kode</span>';

      button.addEventListener('click', async () => {
        const text = code.innerText.replace(/\n$/, '');
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          const copied = document.execCommand('copy');
          textarea.remove();
          if (!copied) {
            button.querySelector('span').textContent = 'Kopiering feilet';
            return;
          }
        }

        button.innerHTML = checkIcon + '<span>Kopiert!</span>';
        button.classList.add('is-copied');
        window.setTimeout(() => {
          button.innerHTML = copyIcon + '<span>Kopier kode</span>';
          button.classList.remove('is-copied');
        }, 1800);
      });

      container.appendChild(button);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCopyButtons);
  } else {
    addCopyButtons();
  }

  if (window.document$?.subscribe) {
    document$.subscribe(addCopyButtons);
  }
})();
