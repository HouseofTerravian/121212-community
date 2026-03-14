/* ============================================
   121212.community — script.js
   ============================================ */

/* ── Scroll Progress ── */
(function () {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const doc  = document.documentElement;
    const scrollTop  = doc.scrollTop  || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    bar.style.width = scrollHeight > 0
      ? (scrollTop / scrollHeight * 100) + '%'
      : '0';
  }, { passive: true });
})();

/* ── Nav Scroll Shadow ── */
(function () {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();

/* ── Mobile Hamburger ── */
(function () {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
    const isOpen = links.classList.contains('open');
    btn.setAttribute('aria-expanded', isOpen);
  });
  // close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
    }
  });
})();

/* ── Animated Stat Counters ── */
(function () {
  const items = document.querySelectorAll('.stat-number[data-target]');
  if (!items.length) return;

  const format = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
    if (n >= 1000)    return (n / 1000).toFixed(0) + 'K+';
    return n.toString() + '+';
  };

  const animateCounter = (el) => {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start    = performance.now();

    const step = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current  = Math.round(ease * target);
      el.textContent = format(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.4 });

  items.forEach((el) => observer.observe(el));
})();

/* ── Marketplace Filters ── */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.listing-card');
  const countEl    = document.getElementById('listingCount');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // update active state
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visible  = 0;

      cards.forEach((card) => {
        const region = card.dataset.region || '';
        const status = card.dataset.status || '';
        const show   =
          filter === 'all' ||
          filter === region ||
          filter === status;

        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });

      if (countEl) countEl.textContent = visible;
    });
  });
})();

/* ── Scroll Reveal ── */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.55s ease, transform 0.55s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  const targets = document.querySelectorAll(
    '.what-point, .how-card, .city-card, .listing-card, .model-item, .hiw-step, .eco-card, .contact-channel'
  );

  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((el) => observer.observe(el));
})();

/* ── Contact Form ── */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Pre-fill city from query param
  const params = new URLSearchParams(window.location.search);
  const cityParam = params.get('city');
  const cityInput = document.getElementById('city');
  const subjectSel = document.getElementById('subject');

  if (cityParam && cityInput) {
    const cityMap = {
      atlanta: 'Atlanta', chicago: 'Chicago', houston: 'Houston',
      dc: 'Washington D.C.', detroit: 'Detroit', nola: 'New Orleans',
      miami: 'Miami', baltimore: 'Baltimore', philly: 'Philadelphia',
      memphis: 'Memphis', charlotte: 'Charlotte', nashville: 'Nashville',
      la: 'Los Angeles', oakland: 'Oakland', cleveland: 'Cleveland', seattle: 'Seattle'
    };
    cityInput.value = cityMap[cityParam] || cityParam;
  }

  if (params.get('waitlist') === 'true' && subjectSel) {
    subjectSel.value = 'bid';
  } else if (cityParam && subjectSel) {
    subjectSel.value = 'bid';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate send (no backend yet)
    setTimeout(() => {
      btn.textContent = 'Message Sent!';
      btn.style.background = 'var(--success)';
      form.reset();

      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
})();

/* ── Active Nav Link ── */
(function () {
  const path  = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a:not(.nav-cta)');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.style.color = 'var(--text)';
    }
  });
})();
