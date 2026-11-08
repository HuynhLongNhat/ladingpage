
(() => {
  const nav = document.querySelector('#main-nav');
  const toggle = document.querySelector('.menu-toggle');

  toggle?.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(opened));
    toggle.setAttribute('aria-label', opened ? 'Đóng menu' : 'Mở menu');
  });

  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Mở menu');
  }));

  document.querySelector('#year').textContent =
    String(new Date().getFullYear());

  if (
    'IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    document.body.classList.add('js-reveal');

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }),
      {
        threshold: 0.09,
        rootMargin: '0px 0px 40px 0px'
      }
    );

    document.querySelectorAll('.reveal').forEach(
      el => observer.observe(el)
    );
  }

  const form = document.querySelector('#contact-form');
  const message = document.querySelector('#form-message');

  form?.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    message.textContent =
      'Đây là biểu mẫu demo, thông tin chưa được gửi. Hãy thử nhắn cho chatbot ở góc màn hình khi đã tích hợp.';
  });

  // CHATBOT INTEGRATION:
  // Paste the EXACT embed snippet from
  // MarketingSystemAI > Widget Customization
  // into index.html just above </body>.
  //
  // Do not guess a script URL or widget token.
  //
  // IMPORTANT:
  // The public API URL must be HTTPS and
  // the domain must be allowed in widget configuration.
  //
  // A localhost API cannot serve visitors on the internet.
})();
