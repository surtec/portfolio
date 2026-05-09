/* ================================================================
   Portfolio — main.js
   ================================================================ */

// === INJECT SHARED STYLES (cursor + lang toggle) ===
const _sharedStyle = document.createElement('style');
_sharedStyle.textContent = `
  /* ── Custom Cursor ── */
  html, a, button, label, select, [role="button"],
  .hamburger, .skill-badge, .social-btn, .filter-btn,
  .lang-toggle, .project-card, .feature-card { cursor: none !important; }

  .cursor-dot {
    position: fixed; width: 8px; height: 8px;
    background: #7c3aed; border-radius: 50%;
    pointer-events: none; z-index: 99999;
    left: -20px; top: -20px;
    transform: translate(-50%, -50%);
    transition: transform 0.15s ease, background 0.2s ease, opacity 0.3s ease;
    will-change: left, top;
  }
  .cursor-ring {
    position: fixed; width: 36px; height: 36px;
    border: 1.5px solid rgba(124,58,237,0.5);
    border-radius: 50%; pointer-events: none; z-index: 99998;
    left: -20px; top: -20px;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease,
                border-color 0.3s ease, background 0.3s ease, opacity 0.3s ease;
    will-change: left, top;
  }
  .cursor-dot.is-hover  { transform: translate(-50%,-50%) scale(0); }
  .cursor-ring.is-hover { width: 54px; height: 54px; border-color: #7c3aed; background: rgba(124,58,237,0.07); }
  .cursor-dot.is-click  { transform: translate(-50%,-50%) scale(0.5); background: #a855f7; }
  .cursor-ring.is-click { transform: translate(-50%,-50%) scale(0.85); border-color: #a855f7; }
  body.cursor-out .cursor-dot,
  body.cursor-out .cursor-ring { opacity: 0; }

  @media (pointer: coarse) {
    .cursor-dot, .cursor-ring { display: none; }
    html, a, button, label, select, [role="button"],
    .hamburger, .skill-badge, .social-btn, .filter-btn,
    .lang-toggle, .project-card, .feature-card { cursor: auto !important; }
  }

  /* ── Lang Toggle ── */
  .lang-toggle {
    background: none;
    border: 1px solid rgba(255,255,255,0.15);
    color: #94a3b8;
    font-family: inherit; font-size: 0.78rem; font-weight: 600;
    letter-spacing: 0.06em;
    padding: 0.28rem 0.65rem;
    border-radius: 6px;
    display: flex; align-items: center; gap: 0.3rem;
    transition: border-color 0.2s, background 0.2s;
    flex-shrink: 0;
    line-height: 1;
  }
  .lang-toggle:hover { border-color: #7c3aed; background: rgba(124,58,237,0.08); }
  .lang-toggle .lang-active { color: #7c3aed; }
  .lang-toggle .lang-sep { opacity: 0.3; font-weight: 300; }
`;
document.head.appendChild(_sharedStyle);

// === CUSTOM CURSOR (mouse devices only) ===
if (window.matchMedia('(pointer: fine)').matches) {
  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
    document.body.classList.remove('cursor-out');
  });
  document.addEventListener('mouseleave', () => document.body.classList.add('cursor-out'));
  document.addEventListener('mouseenter', () => document.body.classList.remove('cursor-out'));
  document.addEventListener('mousedown',  () => { dot.classList.add('is-click');  ring.classList.add('is-click'); });
  document.addEventListener('mouseup',    () => { dot.classList.remove('is-click'); ring.classList.remove('is-click'); });

  (function animateRing() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  const hoverSel = 'a, button, [role="button"], label, .hamburger, .skill-badge, .social-btn, .filter-btn, .lang-toggle, .project-card, .feature-card, .exp-card';
  document.querySelectorAll(hoverSel).forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('is-hover');    ring.classList.add('is-hover'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('is-hover'); ring.classList.remove('is-hover'); });
  });
}

// === NAVBAR SCROLL ===
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// === ACTIVE NAV LINK ===
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === page || (page === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// === MOBILE MENU ===
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// === TYPING ANIMATION ===
const typingEl = document.querySelector('.typing-text');
if (typingEl) {
  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Software Engineer',
    'Open Source Contributor',
  ];
  let roleIdx = 0, charIdx = 0, deleting = false;

  function typeWriter() {
    const role = roles[roleIdx];
    typingEl.textContent = deleting
      ? role.substring(0, charIdx - 1)
      : role.substring(0, charIdx + 1);
    deleting ? charIdx-- : charIdx++;

    let delay = deleting ? 45 : 95;
    if (!deleting && charIdx === role.length)  { deleting = true;  delay = 1800; }
    else if (deleting && charIdx === 0)         { deleting = false; roleIdx = (roleIdx + 1) % roles.length; delay = 420; }

    setTimeout(typeWriter, delay);
  }
  setTimeout(typeWriter, 600);
}

// === SCROLL REVEAL ===
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// === SKILL BARS ===
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.width;
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.skill-bar-fill').forEach(b => barObs.observe(b));

// === COUNTER ANIMATION ===
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = parseInt(el.dataset.target, 10), suffix = el.dataset.suffix || '';
    const step = target / (1800 / 16);
    let cur = 0;
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(timer); }
      el.textContent = Math.floor(cur) + suffix;
    }, 16);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));

// === PROJECT FILTER ===
const filterBtns   = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        if (match) {
          card.style.display = 'flex';
          requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; });
        } else {
          card.style.opacity = '0'; card.style.transform = 'translateY(16px)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

// === PARTICLE CANVAS (hero only) ===
const canvas = document.getElementById('particles');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  function mkParticle() {
    return { x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.8+0.4,
             vx: (Math.random()-0.5)*0.45, vy: (Math.random()-0.5)*0.45, a: Math.random()*0.45+0.08 };
  }
  for (let i = 0; i < 90; i++) particles.push(mkParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(124,58,237,${p.a})`; ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i+1; j < particles.length; j++) {
        const dx = particles[i].x-particles[j].x, dy = particles[i].y-particles[j].y;
        const d = Math.sqrt(dx*dx+dy*dy);
        if (d < 130) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,237,${0.12*(1-d/130)})`; ctx.lineWidth = 0.6; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}
