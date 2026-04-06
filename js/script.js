const EVENT_DATE = new Date("2026-04-18T19:00:00-05:00");

const SONG_FILENAME = "I Only Have Eyes For You — The Flamingos (Subtitulado al Español) [rFpCltwi0jA].mp3";
const SONG_PATH = `audio/${SONG_FILENAME}`;

const CAROUSEL_IMAGES = [
  "https://picsum.photos/seed/xvgal1/1800/1000",
  "https://picsum.photos/seed/xvgal2/1800/1000",
  "https://picsum.photos/seed/xvgal3/1800/1000",
  "https://picsum.photos/seed/xvgal4/1800/1000",
  "https://picsum.photos/seed/xvgal5/1800/1000",
];

const AUTOPLAY_MS = 4500;

const $ = (sel) => document.querySelector(sel);
function pad2(n){ return String(n).padStart(2, "0"); }

function setupReveal(){
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries)=>{
    for (const e of entries){
      if (e.isIntersecting){
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.14 });

  els.forEach(el => io.observe(el));
}

function setupCountdown(){
  const dEl = $("#d");
  const hEl = $("#h");
  const mEl = $("#m");
  const sEl = $("#s");

  function tick(){
    const now = new Date();
    let diff = EVENT_DATE.getTime() - now.getTime();
    if (diff < 0) diff = 0;

    const sec = Math.floor(diff / 1000);
    const days = Math.floor(sec / (3600 * 24));
    const hours = Math.floor((sec % (3600 * 24)) / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    dEl.textContent = pad2(days);
    hEl.textContent = pad2(hours);
    mEl.textContent = pad2(mins);
    sEl.textContent = pad2(secs);
  }

  tick();
  setInterval(tick, 1000);
}

function focusCountdownOnLoad(){
  const target = $("#contador");
  const box = $("#countdownBox");
  if (!target || !box) return;

  if (location.hash && location.hash !== "#inicio") return;

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    box.classList.add("countdown--pulse");
    setTimeout(() => box.classList.remove("countdown--pulse"), 1800);
  });
}

function setupDock(){
  const dock = document.querySelector(".dock");
  const toggle = $("#dockToggle");
  if (!dock || !toggle) return;

  const saved = localStorage.getItem("dockCollapsed");
  if (saved === "1") dock.classList.add("is-collapsed");

  toggle.addEventListener("click", ()=>{
    dock.classList.toggle("is-collapsed");
    localStorage.setItem("dockCollapsed", dock.classList.contains("is-collapsed") ? "1" : "0");
  });
}

function setupCarousel(){
  const img = $("#carImage");
  const dotsWrap = $("#carDots");
  const prev = $("#carPrev");
  const next = $("#carNext");

  if (!img || !dotsWrap || !prev || !next) return;

  let idx = 0;
  let timer = null;

  function renderDots(){
    dotsWrap.innerHTML = "";
    CAROUSEL_IMAGES.forEach((_, i)=>{
      const d = document.createElement("div");
      d.className = "dot" + (i === idx ? " is-active" : "");
      d.addEventListener("click", ()=> go(i, true));
      dotsWrap.appendChild(d);
    });
  }

  function go(newIdx, userAction = false){
    idx = (newIdx + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length;

    img.style.opacity = "0";
    setTimeout(()=>{
      img.src = CAROUSEL_IMAGES[idx];
      img.onload = () => { img.style.opacity = "1"; };
      renderDots();
    }, 140);

    if (userAction) restartAuto();
  }

  function restartAuto(){
    if (timer) clearInterval(timer);
    timer = setInterval(()=> go(idx + 1), AUTOPLAY_MS);
  }

  prev.addEventListener("click", ()=> go(idx - 1, true));
  next.addEventListener("click", ()=> go(idx + 1, true));

  window.addEventListener("keydown", (e)=>{
    if (location.hash !== "#fotos") return;
    if (e.key === "ArrowLeft") go(idx - 1, true);
    if (e.key === "ArrowRight") go(idx + 1, true);
  });

  renderDots();
  restartAuto();
}

function setupMusicToggle(){
  const audio = $("#bgMusic");
  const btn = $("#musicToggle");
  if (!audio || !btn) return;

  const src = document.createElement("source");
  src.src = encodeURI(SONG_PATH);
  src.type = "audio/mpeg";
  audio.innerHTML = "";
  audio.appendChild(src);

  const KEY_STOPPED = "musicStoppedByUser";
  const wasStopped = localStorage.getItem(KEY_STOPPED) === "1";

  function setButton(isPlaying){
    btn.textContent = isPlaying ? "⏸ Stop" : "▶ Play";
  }

  async function play(){
    try{
      await audio.play();
      localStorage.setItem(KEY_STOPPED, "0");
      setButton(true);
    }catch(e){
      setButton(false);
    }
  }

  function stop(){
    audio.pause();
    audio.currentTime = 0;
    localStorage.setItem(KEY_STOPPED, "1");
    setButton(false);
  }

  btn.addEventListener("click", ()=>{
    if (audio.paused) play();
    else stop();
  });

  if (!wasStopped){
    setTimeout(()=> play(), 350);
  } else {
    setButton(false);
  }
}

function setupConfetti(){
  const canvas = $("#confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  let w = 0, h = 0, dpr = 1;

  function resize(){
    dpr = Math.max(1, window.devicePixelRatio || 1);
    w = canvas.clientWidth || window.innerWidth;
    h = canvas.clientHeight || window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener("resize", resize);
  resize();

  const pieces = [];
  const COUNT = 70;

  function rand(min, max){ return Math.random() * (max - min) + min; }

  for (let i = 0; i < COUNT; i++){
    pieces.push({
      x: rand(0, w),
      y: rand(-h, 0),
      s: rand(6, 14),
      r: rand(0, Math.PI * 2),
      vr: rand(-0.03, 0.03),
      vy: rand(0.35, 0.95),
      vx: rand(-0.15, 0.15),
      a: rand(0.18, 0.40),
    });
  }

  function drawPiece(p){
    ctx.save();
    ctx.globalAlpha = p.a;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.r);

    const g = ctx.createLinearGradient(-p.s / 2, 0, p.s / 2, 0);
    g.addColorStop(0, "rgba(255,217,179,0.95)");
    g.addColorStop(0.45, "rgba(230,176,126,0.90)");
    g.addColorStop(1, "rgba(199,138,58,0.92)");

    ctx.fillStyle = g;
    ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
    ctx.restore();
  }

  function step(){
    ctx.clearRect(0, 0, w, h);

    for (const p of pieces){
      p.x += p.vx;
      p.y += p.vy;
      p.r += p.vr;

      if (p.y > h + 20){
        p.y = rand(-120, -20);
        p.x = rand(0, w);
      }
      if (p.x < -40) p.x = w + 40;
      if (p.x > w + 40) p.x = -40;

      drawPiece(p);
    }

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

setupReveal();
setupDock();
setupCountdown();
setupCarousel();
setupMusicToggle();
setupConfetti();
window.addEventListener("load", focusCountdownOnLoad);