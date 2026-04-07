// ============================
// CONFIG
// ============================
const EVENT_DATE = new Date("2026-04-18T20:00:00-05:00");

const SONG_FILENAME = "I Only Have Eyes For You — The Flamingos (Subtitulado al Español) [rFpCltwi0jA].mp3";
const SONG_PATH = `audio/${SONG_FILENAME}`;

const WHATSAPP_NUMBER = "52 1 998 131 8100";
const WHATSAPP_MESSAGE = "Hola, quiero confirmar mi asistencia a los XV de Frida Fernanda Cardeña Cime.";

const CAROUSEL_IMAGES = [
  "./css/components/assets/imagen/1.jpg",
  "./css/components/assets/imagen/2.jpg",
  "./css/components/assets/imagen/3.jpg",
  "./css/components/assets/imagen/4.jpg",
  "./css/components/assets/imagen/5.jpg",
  "./css/components/assets/imagen/6.jpg",
  "./css/components/assets/imagen/7.jpg",
  "./css/components/assets/imagen/8.jpg",
  "./css/components/assets/imagen/9.jpg",
  "./css/components/assets/imagen/10.jpg",
  "./css/components/assets/imagen/11.jpg",
  "./css/components/assets/imagen/12.jpg",
  "./css/components/assets/imagen/13.jpg",
  "./css/components/assets/imagen/14.jpg"
];

const AUTOPLAY_MS = 4500;

// ============================
// HELPERS
// ============================
const $ = (sel) => document.querySelector(sel);
function pad2(n){ return String(n).padStart(2, "0"); }

// ============================
// REVEAL
// ============================
function setupReveal(){
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries)=>{
    for (const e of entries){
      if (e.isIntersecting){
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

// ============================
// COUNTDOWN
// ============================
function setupCountdown(){
  const dEl = $("#d");
  const hEl = $("#h");
  const mEl = $("#m");
  const sEl = $("#s");

  if(!dEl || !hEl || !mEl || !sEl) return;

  function tick(){
    const now = new Date();
    let diff = EVENT_DATE.getTime() - now.getTime();

    if (diff < 0) diff = 0;

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    dEl.textContent = pad2(days);
    hEl.textContent = pad2(hours);
    mEl.textContent = pad2(mins);
    sEl.textContent = pad2(secs);
  }

  tick();
  setInterval(tick, 1000);
}

// ============================
// DOCK
// ============================
function setupDock(){
  const dock = document.querySelector(".dock");
  const toggle = $("#dockToggle");
  const items = $("#dockItems");

  if (!dock || !toggle || !items) return;

  const saved = localStorage.getItem("dockCollapsed");
  if (saved === "1") dock.classList.add("is-collapsed");

  function setToggleIcon(){
    toggle.textContent = dock.classList.contains("is-collapsed") ? "▸" : "◂";
  }

  setToggleIcon();

  toggle.addEventListener("click", ()=>{
    dock.classList.toggle("is-collapsed");
    localStorage.setItem(
      "dockCollapsed",
      dock.classList.contains("is-collapsed") ? "1" : "0"
    );
    setToggleIcon();
  });

  const links = [...document.querySelectorAll('.dock__btn[href^="#"]')];
  const sections = links
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function setActiveLink(currentId){
    links.forEach(link => {
      const isActive = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("is-active", isActive);
    });
  }

  function updateActiveLink(){
    let current = sections[0];

    for (const section of sections){
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.35){
        current = section;
      }
    }

    if (current) setActiveLink(current.id);
  }

  links.forEach(link => {
    link.addEventListener("click", ()=>{
      const targetId = link.getAttribute("href").replace("#", "");
      setActiveLink(targetId);
    });
  });

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive:true });
}

// ============================
// CAROUSEL + LIGHTBOX
// ============================
function setupCarousel(){
  const img = $("#carImage");
  const dotsWrap = $("#carDots");
  const prev = $("#carPrev");
  const next = $("#carNext");

  const lightbox = $("#lightbox");
  const lightboxImage = $("#lightboxImage");
  const lightboxClose = $("#lightboxClose");
  const lightboxPrev = $("#lightboxPrev");
  const lightboxNext = $("#lightboxNext");

  if (!img || !dotsWrap || !prev || !next) return;

  let idx = 0;
  let timer = null;
  let lastTap = 0;

  function renderDots(){
    dotsWrap.innerHTML = "";
    CAROUSEL_IMAGES.forEach((_, i)=>{
      const d = document.createElement("button");
      d.type = "button";
      d.className = "dot" + (i === idx ? " is-active" : "");
      d.setAttribute("aria-label", `Ir a foto ${i + 1}`);
      d.addEventListener("click", ()=> go(i, true));
      dotsWrap.appendChild(d);
    });
  }

  function renderImage(){
    img.style.opacity = "0";
    const nextSrc = CAROUSEL_IMAGES[idx];
    const pre = new Image();
    pre.src = nextSrc;

    pre.onload = ()=>{
      img.src = nextSrc;
      img.style.opacity = "1";
    };

    if (lightboxImage && lightbox.classList.contains("is-open")){
      lightboxImage.src = nextSrc;
    }

    renderDots();
  }

  function go(newIdx, userAction = false){
    idx = (newIdx + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length;
    renderImage();
    if (userAction) restartAuto();
  }

  function restartAuto(){
    if (timer) clearInterval(timer);
    timer = setInterval(()=> go(idx + 1), AUTOPLAY_MS);
  }

  function openLightbox(){
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = CAROUSEL_IMAGES[idx];
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox(){
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  prev.addEventListener("click", ()=> go(idx - 1, true));
  next.addEventListener("click", ()=> go(idx + 1, true));

  img.addEventListener("dblclick", openLightbox);

  img.addEventListener("touchend", (e)=>{
    const now = Date.now();
    if (now - lastTap < 320){
      openLightbox();
      e.preventDefault();
    }
    lastTap = now;
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", ()=> go(idx - 1, true));
  if (lightboxNext) lightboxNext.addEventListener("click", ()=> go(idx + 1, true));

  if (lightbox){
    lightbox.addEventListener("click", (e)=>{
      if (e.target === lightbox) closeLightbox();
    });
  }

  window.addEventListener("keydown", (e)=>{
    if (e.key === "ArrowLeft") go(idx - 1, true);
    if (e.key === "ArrowRight") go(idx + 1, true);
    if (e.key === "Escape") closeLightbox();
  });

  renderImage();
  restartAuto();
}

// ============================
// MUSIC
// ============================
function setupMusicToggle(){
  const audio = $("#bgMusic");
  const btn = $("#musicToggle");

  if (!audio || !btn) return;

  audio.src = encodeURI(SONG_PATH);
  audio.loop = true;
  audio.preload = "auto";

  const KEY_STOPPED = "musicStoppedByUser";
  const wasStopped = localStorage.getItem(KEY_STOPPED) === "1";

  let hasTriedAuto = false;

  function setButton(isPlaying){
    btn.classList.toggle("is-paused", !isPlaying);
  }

  async function playAudio(fromUser = false){
    try{
      await audio.play();
      localStorage.setItem(KEY_STOPPED, "0");
      setButton(true);
      removeUnlockListeners();
    }catch(err){
      setButton(false);
      if (!fromUser){
        addUnlockListeners();
      }
    }
  }

  function stopAudio(){
    audio.pause();
    audio.currentTime = 0;
    localStorage.setItem(KEY_STOPPED, "1");
    setButton(false);
    removeUnlockListeners();
  }

  async function unlockAndPlay(){
    if (localStorage.getItem(KEY_STOPPED) === "1") {
      removeUnlockListeners();
      return;
    }

    try{
      await audio.play();
      localStorage.setItem(KEY_STOPPED, "0");
      setButton(true);
    }catch(_){}
    removeUnlockListeners();
  }

  function addUnlockListeners(){
    window.addEventListener("click", unlockAndPlay, { once:true });
    window.addEventListener("touchstart", unlockAndPlay, { once:true });
    window.addEventListener("keydown", unlockAndPlay, { once:true });
  }

  function removeUnlockListeners(){
    window.removeEventListener("click", unlockAndPlay);
    window.removeEventListener("touchstart", unlockAndPlay);
    window.removeEventListener("keydown", unlockAndPlay);
  }

  btn.addEventListener("click", async ()=>{
    if (audio.paused){
      await playAudio(true);
    } else {
      stopAudio();
    }
  });

  if (!wasStopped && !hasTriedAuto){
    hasTriedAuto = true;
    playAudio(false);
  } else {
    setButton(false);
  }
}

// ============================
// WHATSAPP CONFIRM BUTTON
// ============================
function setupConfirmButton(){
  const confirmBtn = $("#confirmBtn");
  if (!confirmBtn) return;

  const cleaned = String(WHATSAPP_NUMBER).replace(/\D/g, "");
  const message = encodeURIComponent(WHATSAPP_MESSAGE);

  confirmBtn.href = `https://wa.me/${cleaned}?text=${message}`;
  confirmBtn.target = "_blank";
  confirmBtn.rel = "noopener";
}

// ============================
// CONFETTI
// ============================
function setupConfetti(){
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha:true });
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let animationId = null;
  const pieces = [];

  function rand(min, max){
    return Math.random() * (max - min) + min;
  }

  function resize(){
    w = window.innerWidth;
    h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    pieces.length = 0;

    const count = Math.max(14, Math.floor((w * h) / 52000));

    for(let i = 0; i < count; i++){
      pieces.push({
        x: rand(0, w),
        y: rand(-h, h),
        width: rand(5, 10),
        height: rand(10, 18),
        speedY: rand(0.12, 0.35),
        speedX: rand(-0.35, 0.35),
        rotation: rand(0, Math.PI * 2),
        rotationSpeed: rand(-0.03, 0.03),
        alpha: rand(0.35, 0.85),
        sway: rand(0.01, 0.04)
      });
    }
  }

  function drawPiece(p){
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    const gradient = ctx.createLinearGradient(-p.width / 2, 0, p.width / 2, 0);
    gradient.addColorStop(0, `rgba(255, 217, 179, ${p.alpha})`);
    gradient.addColorStop(0.5, `rgba(230, 176, 126, ${p.alpha})`);
    gradient.addColorStop(1, `rgba(199, 138, 58, ${p.alpha})`);

    ctx.fillStyle = gradient;
    ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);

    ctx.restore();
  }

  function animate(){
    ctx.clearRect(0, 0, w, h);

    for(const p of pieces){
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y * p.sway) * 0.25;
      p.rotation += p.rotationSpeed;

      if (p.y > h + 30){
        p.y = -30;
        p.x = rand(0, w);
      }

      if (p.x < -30) p.x = w + 30;
      if (p.x > w + 30) p.x = -30;

      drawPiece(p);
    }

    animationId = requestAnimationFrame(animate);
  }

  resize();
  animate();

  window.addEventListener("resize", resize);

  document.addEventListener("visibilitychange", ()=>{
    if(document.hidden){
      cancelAnimationFrame(animationId);
    }else{
      animate();
    }
  });
}

// ============================
// ARRANCAR EN INVITACIÓN
// ============================
function goTopOnLoad(){
  window.scrollTo({ top:0, left:0, behavior:"auto" });

  if ("scrollRestoration" in history){
    history.scrollRestoration = "manual";
  }

  if (location.hash){
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

// ============================
// INIT
// ============================
window.addEventListener("load", ()=>{
  goTopOnLoad();
  setupReveal();
  setupDock();
  setupCountdown();
  setupCarousel();
  setupMusicToggle();
  setupConfirmButton();
  setupConfetti();
});