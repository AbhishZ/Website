/* ============================================================
   KOASH TECHNOLOGIES — main.js
   ============================================================ */

// ── NAV SCROLL BEHAVIOUR ──────────────────────────────────
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── MOBILE NAV TOGGLE ─────────────────────────────────────
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── SCROLL REVEAL ─────────────────────────────────────────
const revealEls = document.querySelectorAll('.service-card, .why-card, .process__step, .contact__grid > *');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── RADAR CANVAS ANIMATION ────────────────────────────────
const canvas = document.getElementById('radarCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let raf;
  let angle = 0;
  const dots = Array.from({ length: 12 }, () => ({
    r: Math.random() * 0.38 + 0.08,
    theta: Math.random() * Math.PI * 2,
    size: Math.random() * 2.5 + 1,
    opacity: Math.random() * 0.6 + 0.2,
    speed: (Math.random() - 0.5) * 0.001,
  }));

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
  }

  function draw() {
    const W = canvas.getBoundingClientRect().width;
    const H = canvas.getBoundingClientRect().height;
    const cx = W / 2;
    const cy = H / 2;
    const r = Math.min(W, H) * 0.46;

    ctx.clearRect(0, 0, W, H);

    const cyan = '#00D4FF';
    const cyanFaint = 'rgba(0,212,255,';

    // Rings
    [0.28, 0.52, 0.76, 1].forEach(scale => {
      ctx.beginPath();
      ctx.arc(cx, cy, r * scale, 0, Math.PI * 2);
      ctx.strokeStyle = cyanFaint + '0.18)';
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Cross-hairs
    ctx.strokeStyle = cyanFaint + '0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(cx - r, cy); ctx.lineTo(cx + r, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy + r); ctx.stroke();

    // Sweep gradient arc
    const sweepGrad = ctx.createConicalGradient
      ? null // not widely supported; use manual
      : null;

    // Manual sweep with layered arcs
    const sweepSteps = 40;
    for (let i = 0; i < sweepSteps; i++) {
      const t = i / sweepSteps;
      const startA = angle - Math.PI * 2 * 0.3 * t;
      const endA = angle - Math.PI * 2 * 0.3 * (t + 1 / sweepSteps);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, startA, endA);
      ctx.closePath();
      ctx.fillStyle = `rgba(0,212,255,${(1 - t) * 0.08})`;
      ctx.fill();
    }

    // Sweep line
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
    ctx.strokeStyle = cyanFaint + '0.7)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Blip dots — light up when sweep passes
    dots.forEach(d => {
      const dx = Math.cos(d.theta) * d.r * r;
      const dy = Math.sin(d.theta) * d.r * r;
      let diff = (angle - d.theta) % (Math.PI * 2);
      if (diff < 0) diff += Math.PI * 2;
      const lit = diff < 0.5 ? 1 - diff / 0.5 : 0;

      ctx.beginPath();
      ctx.arc(cx + dx, cy + dy, d.size + lit * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${d.opacity + lit * 0.5})`;
      ctx.fill();

      if (lit > 0.3) {
        ctx.beginPath();
        ctx.arc(cx + dx, cy + dy, d.size + lit * 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${lit * 0.15})`;
        ctx.fill();
      }

      d.theta += d.speed;
    });

    // Centre dot
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fillStyle = cyan;
    ctx.fill();

    angle = (angle + 0.012) % (Math.PI * 2);
    raf = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', () => { resize(); });

  // Pause when off-screen
  const canvasObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!raf) { raf = requestAnimationFrame(draw); }
      } else {
        cancelAnimationFrame(raf);
        raf = null;
      }
    });
  });
  canvasObserver.observe(canvas);
}

// ── FORM SUBMIT (Formspree / static fallback) ─────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    const action = form.getAttribute('action') || '';
    // If Formspree ID not configured, show placeholder alert
    if (action.includes('your-form-id')) {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      const orig = btn.textContent;
      btn.textContent = '✓ Message received (configure Formspree to enable)';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3500);
    }
    // Otherwise let Formspree handle it naturally
  });
}

// ── SERVICE TABS ──────────────────────────────────────────
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const panel = document.getElementById('tab-' + target);
    if (panel) {
      panel.classList.add('active');
      // Re-run reveal for newly visible cards
      panel.querySelectorAll('.service-card').forEach((el, i) => {
        el.classList.remove('visible');
        setTimeout(() => el.classList.add('visible'), i * 55);
      });
    }
  });
});

// Activate first tab cards on load
(function() {
  const first = document.querySelector('.tab-panel.active');
  if (first) {
    first.querySelectorAll('.service-card').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 200 + i * 60);
    });
  }
})();
