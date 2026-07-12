/* ==========================================================================
   YASH JAGARIYA — script.js
   loader, scroll progress, active nav, reveal, cursor glow, mobile nav,
   terminal typewriter effect
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initProgressBar();
  initCursorGlow();
  initActiveNav();
  initRevealAnimations();
  initMobileNav();
  initTerminalTypewriter();
});

/* ---------- Loading Screen ---------- */
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("loaded"), 450);
  });
}

/* ---------- Scroll Progress Bar ---------- */
function initProgressBar() {
  const bar = document.getElementById("progressBar");
  if (!bar) return;
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${docHeight > 0 ? (scrollTop / docHeight) * 100 : 0}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------- Cursor Glow ---------- */
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;
  if (window.matchMedia("(hover: none)").matches) return;

  let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.classList.add("active");
  });

  (function animate() {
    currentX += (mouseX - currentX) * 0.18;
    currentY += (mouseY - currentY) * 0.18;
    glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  })();
}

/* ---------- Active Nav on Scroll ---------- */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => link.classList.toggle("active", link.dataset.nav === id));
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ---------- Reveal on Scroll ---------- */
function initRevealAnimations() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ---------- Mobile Nav ---------- */
function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Terminal Typewriter ---------- */
function initTerminalTypewriter() {
  const body = document.getElementById("terminalBody");
  if (!body) return;

  // Edit these to update what shows in the "now" terminal card.
  const lines = [
    { prompt: "grinding →", value: "Valorant, climbing out of my current rank" },
    { prompt: "editing →", value: "a new AMV, frame by frame" },
    { prompt: "learning →", value: "full-stack dev, one broken build at a time" },
    { prompt: "listening →", value: "whatever's on my Spotify right now" },
  ];

  const section = document.getElementById("now");
  let started = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          typeLines(body, lines);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  if (section) observer.observe(section);
}

function typeLines(container, lines) {
  let lineIndex = 0;

  function typeNextLine() {
    if (lineIndex >= lines.length) return;

    const { prompt, value } = lines[lineIndex];
    const lineEl = document.createElement("div");
    lineEl.className = "terminal-line";

    const promptEl = document.createElement("span");
    promptEl.className = "prompt";
    promptEl.textContent = prompt;
    lineEl.appendChild(promptEl);

    const valEl = document.createElement("span");
    valEl.className = "val";
    lineEl.appendChild(valEl);

    const cursor = document.createElement("span");
    cursor.className = "terminal-cursor-blink";
    lineEl.appendChild(cursor);

    container.appendChild(lineEl);

    let charIndex = 0;
    const interval = setInterval(() => {
      valEl.textContent += value[charIndex];
      charIndex++;
      if (charIndex >= value.length) {
        clearInterval(interval);
        cursor.remove();
        lineIndex++;
        setTimeout(typeNextLine, 200);
      }
    }, 22);
  }

  typeNextLine();
}
