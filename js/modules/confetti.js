export function startGoldFoilConfetti(canvasId = "confettiCanvas"){
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  const prefersReduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  let w = 0, h = 0, dpr = 1;
  let rafId = null;
  const flakes = [];

  function rand(min, max){ return Math.random() * (max - min) + min; }
  function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

  function resize(){
    dpr = clamp(window.devicePixelRatio || 1, 1, 2);
    w = Math.floor(window.innerWidth);
    h = Math.floor(window.innerHeight);

    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const target = clamp(Math.floor((w * h) / 52000), 22, 70);
    while (flakes.length < target) flakes.push(makeFlake(true));
    while (flakes.length > target) flakes.pop();
  }

  function makeFlake(randomY = false){
    const fw = rand(4, 11);
    const fh = rand(6, 18);

    const vy = rand(0.25, 0.85);
    const vx = rand(-0.18, 0.18);
    const sway = rand(0.10, 0.55);

    return {
      x: rand(0, w),
      y: randomY ? rand(0, h) : rand(-120, -20),
      w: fw,
      h: fh,
      vy,
      vx,
      sway,
      a: rand(0, Math.PI * 2),
      va: rand(0.004, 0.012),
      rot: rand(0, Math.PI * 2),
      vrot: rand(-0.02, 0.02),
      tw: rand(0, Math.PI * 2),
      vtw: rand(0.03, 0.08),
      tone: Math.random() < 0.5 ? 0 : (Math.random() < 0.5 ? 1 : 2),
    };
  }

  function foilGradient(f){
    const tw = (Math.sin(f.tw) + 1) / 2;

    const palettes = [
      { a:[255,217,179], b:[230,176,126], c:[199,138,58] },
      { a:[255,236,190], b:[255,205,120], c:[215,145,45] },
      { a:[255,225,165], b:[238,189,102], c:[205,140,40] },
    ];
    const p = palettes[f.tone];

    const g = ctx.createLinearGradient(-f.w/2, -f.h/2, f.w/2, f.h/2);

    const alphaBase = 0.34;
    const alphaPeak = 0.62;
    const a1 = alphaBase + (alphaPeak - alphaBase) * tw;

    g.addColorStop(0.00, `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${alphaBase})`);
    g.addColorStop(0.25, `rgba(${p.b[0]},${p.b[1]},${p.b[2]},${a1})`);
    g.addColorStop(0.55, `rgba(${p.a[0]},${p.a[1]},${p.a[2]},${a1})`);
    g.addColorStop(1.00, `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${alphaBase})`);

    return g;
  }

  function drawFlake(f){
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.rotate(f.rot);

    ctx.shadowColor = "rgba(0,0,0,0.10)";
    ctx.shadowBlur = 6;

    ctx.fillStyle = foilGradient(f);

    const r = Math.min(3, f.w/2, f.h/2);
    const x = -f.w/2, y = -f.h/2, w0 = f.w, h0 = f.h;

    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w0 - r, y);
    ctx.quadraticCurveTo(x + w0, y, x + w0, y + r);
    ctx.lineTo(x + w0, y + h0 - r);
    ctx.quadraticCurveTo(x + w0, y + h0, x + w0 - r, y + h0);
    ctx.lineTo(x + r, y + h0);
    ctx.quadraticCurveTo(x, y + h0, x, y + h0 - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  function step(){
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < flakes.length; i++){
      const f = flakes[i];

      f.y += f.vy;
      f.a += f.va;
      f.x += Math.sin(f.a) * f.sway + f.vx;

      f.rot += f.vrot;
      f.tw += f.vtw;

      if (f.y > h + 80){
        flakes[i] = makeFlake(false);
        flakes[i].x = rand(0, w);
      }

      if (f.x < -120) f.x = w + 120;
      if (f.x > w + 120) f.x = -120;

      drawFlake(f);
    }

    rafId = requestAnimationFrame(step);
  }

  function stop(){
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  function onVis(){
    if (document.hidden) stop();
    else if (!rafId) rafId = requestAnimationFrame(step);
  }

  resize();
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", onVis);

  if (!prefersReduce){
    rafId = requestAnimationFrame(step);
  } else {
    ctx.clearRect(0, 0, w, h);
    flakes.forEach(drawFlake);
  }
}