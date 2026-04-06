:root{
  --canvas-1:#2a0a12;
  --canvas-2:#5c0b1e;
  --canvas-3:#b11235;
  --canvas-4:#ff5f7e;
  --canvas-5:#f6c1cc;

  --card-top:#12060a;
  --card-mid:#3b0a18;
  --card-bot:#8c1430;

  --gold-1:#ffd9b3;
  --gold-2:#e6b07e;
  --gold-3:#c78a3a;

  --text: rgba(255,255,255,.94);
  --muted: rgba(255,255,255,.80);

  --radius: 26px;
  --shadow: 0 30px 90px rgba(0,0,0,.45);
}

*{ box-sizing:border-box; }
html,body{ height:100%; }
html{ scroll-behavior:smooth; }
body{
  margin:0;
  color: var(--text);
  background:#0b0507;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}

/* Fondo */
.bg-canvas{
  position:fixed;
  inset:0;
  background:
    radial-gradient(1200px 800px at 12% 18%, rgba(255,95,126,.45), transparent 55%),
    radial-gradient(1100px 800px at 85% 30%, rgba(246,193,204,.35), transparent 60%),
    radial-gradient(1000px 700px at 50% 85%, rgba(177,18,53,.30), transparent 62%),
    linear-gradient(135deg, var(--canvas-1), var(--canvas-2), var(--canvas-3));
  filter: saturate(1.2) contrast(1.1);
  z-index: 0;
}
.bg-canvas::after{
  content:"";
  position:absolute; inset:0;
  background:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,.08), transparent 35%),
    radial-gradient(circle at 80% 30%, rgba(255,255,255,.06), transparent 38%),
    radial-gradient(circle at 40% 80%, rgba(255,255,255,.05), transparent 42%);
  opacity:.35;
  mix-blend-mode: overlay;
  pointer-events:none;
}

/* Confeti */
.confetti{
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  opacity: .28;
  mix-blend-mode: screen;
}

/* Capas */
.stage, .section, .section__inner, .invite{
  position: relative;
  z-index: 2;
}

/* Dock */
.dock{
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  display:flex;
  gap: 8px;
  padding: 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,217,179,.16);
  background: rgba(10,4,6,.45);
  backdrop-filter: blur(10px);
  z-index: 50;
  box-shadow: 0 18px 60px rgba(0,0,0,.35);
}
.dock__btn{
  text-decoration:none;
  color: rgba(255,255,255,.86);
  padding: 8px 10px;
  border-radius: 999px;
  font-weight: 900;
  font-size: 12px;
  border: 1px solid rgba(255,217,179,.10);
  background: rgba(255,255,255,.05);
}
.dock__btn--gold{
  color:#1b070b;
  background: linear-gradient(180deg, rgba(255,217,179,.98), rgba(230,176,126,.98));
  border-color: rgba(255,217,179,.30);
}

/* Reveal */
.reveal{ opacity:1; transform:none; filter:none; }
.js .reveal{
  opacity: 0;
  transform: translateY(18px);
  filter: blur(2px);
  transition: opacity .65s ease, transform .65s ease, filter .65s ease;
}
.js .reveal.is-visible{
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* ✅ STAGE: ahora centra más (antes se veía muy arriba) */
.stage{
  min-height:100vh;
  padding: 44px 16px 96px;     /* ✅ un poquito más de aire arriba */
  display:grid;
  place-items:center;
}

/* Tarjeta */
.invite{
  width: min(900px, 94vw);
  aspect-ratio: 12 / 15;
  border-radius: var(--radius);
  position:relative;
  box-shadow: var(--shadow);
  overflow:hidden;
  background:
    radial-gradient(760px 520px at 30% 20%, rgba(255,95,126,.22), transparent 62%),
    radial-gradient(640px 460px at 80% 40%, rgba(255,217,179,.18), transparent 60%),
    linear-gradient(180deg, var(--card-top), var(--card-mid), var(--card-bot));
  border: 1px solid rgba(255,217,179,.22);
}
.invite::before{
  content:"";
  position:absolute;
  inset: 16px;
  border-radius: calc(var(--radius) - 10px);
  border: 1px solid rgba(255,217,179,.28);
  pointer-events:none;
}
.invite::after{
  content:"";
  position:absolute;
  inset: 26px;
  border-radius: calc(var(--radius) - 16px);
  border: 1px dashed rgba(230,176,126,.35);
  opacity:.75;
  pointer-events:none;
}

/* ✅ INNER: lo bajamos un poquito y centramos mejor */
.invite__inner{
  position:relative;
  height:100%;
  padding: 52px 44px 46px; /* ✅ más centrado visual */
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  gap: 12px;
}

/* Ornamentos */
.orn{
  position:absolute;
  width: 300px;
  height: 210px;
  pointer-events:none;
  opacity: .95;
  filter: drop-shadow(0 18px 30px rgba(0,0,0,.25));
}
.orn--top{ top:-50px; left:-44px; transform: rotate(-8deg); }
.orn--bottom{ bottom:-70px; right:-50px; transform: rotate(10deg); opacity:.9; }
.orn::before{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 18% 40%, rgba(255,217,179,.95) 0 3px, transparent 4px),
    radial-gradient(circle at 28% 46%, rgba(230,176,126,.95) 0 4px, transparent 5px),
    radial-gradient(circle at 40% 38%, rgba(199,138,58,.95) 0 3px, transparent 4px),
    radial-gradient(circle at 55% 46%, rgba(255,217,179,.9) 0 4px, transparent 5px),
    radial-gradient(circle at 68% 40%, rgba(230,176,126,.9) 0 3px, transparent 4px),
    radial-gradient(circle at 82% 48%, rgba(199,138,58,.9) 0 4px, transparent 5px),
    conic-gradient(from 180deg, rgba(255,217,179,.0), rgba(255,217,179,.35), rgba(255,217,179,.0));
  border-radius: 999px;
  mask:
    radial-gradient(circle at 30% 40%, #000 0 55%, transparent 56%),
    radial-gradient(circle at 70% 55%, #000 0 55%, transparent 56%);
}

/* Textos */
.kicker{
  margin: 0;
  letter-spacing:.14em;
  text-transform:uppercase;
  font-weight:900;
  font-size: 11px;
  color: rgba(255,217,179,.88);
}
.title{
  margin: 0;
  font-family: "Great Vibes", cursive;
  font-weight: 400;
  font-size: clamp(48px, 5.2vw, 78px);
  line-height: 1;
  color: var(--gold-1);
  text-shadow: 0 16px 34px rgba(0,0,0,.35);
}
.name{
  margin: -10px 0 2px;
  font-family: "Great Vibes", cursive;
  font-weight: 400;
  font-size: clamp(34px, 3.8vw, 56px);
  line-height: 1.05;
  color: #fff;
  text-shadow: 0 12px 28px rgba(177,18,53,.45);
}
.subtitle{
  margin: 0;
  max-width: 62ch;
  font-size: 14px;
  line-height: 1.75;
  color: var(--muted);
}

/* Línea */
.line{
  width: min(560px, 78%);
  height: 1px;
  margin: 12px 0 8px;
  background: linear-gradient(90deg, transparent, rgba(255,217,179,.65), transparent);
}

/* Meta */
.meta{
  width: min(720px, 100%);
  margin-top: 2px;
  padding: 12px 18px;
  border-radius: 18px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,217,179,.15);
}
.meta__row{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap: 16px;
  padding: 10px 2px;
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.meta__row:last-child{ border-bottom:0; }
.meta__label{
  font-size: 11px;
  letter-spacing:.14em;
  text-transform: uppercase;
  color: rgba(255,217,179,.86);
  font-weight: 900;
}
.meta__value{
  font-family: Cinzel, serif;
  font-weight: 600;
  font-size: 13px;
  color: rgba(255,255,255,.92);
  text-align:right;
}

/* Botones */
.actions{
  margin-top: 12px;
  display:flex;
  gap: 12px;
  justify-content:center;
  flex-wrap: wrap;
}
.btn{
  text-decoration:none;
  border-radius: 999px;
  padding: 13px 18px;
  font-weight: 900;
  font-size: 12.5px;
  border: 1px solid transparent;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  transition: transform .15s ease, filter .15s ease;
}
.btn:hover{ transform: translateY(-1px); filter: brightness(1.03); }
.btn--primary{
  color: #1b070b;
  background: linear-gradient(180deg, rgba(255,217,179,.98), rgba(230,176,126,.98));
  border-color: rgba(255,217,179,.35);
}
.btn--ghost{
  color: rgba(255,255,255,.92);
  background: rgba(255,255,255,.07);
  border-color: rgba(255,217,179,.18);
}
.btn--sm{ padding: 10px 14px; font-size: 12px; }

.fineprint{
  margin: 6px 0 0;
  font-size: 12px;
  color: rgba(255,255,255,.78);
}

/* ✅ Countdown ABAJO + enfoque */
.countLabel{
  margin: 10px 0 0;
  font-family: Cinzel, serif;
  font-size: 12px;
  letter-spacing:.18em;
  text-transform: uppercase;
  color: rgba(255,217,179,.88);
  font-weight: 900;
}
.countdown{
  margin-top: 10px;
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content:center;
}
.countdown--focus{
  scroll-margin-top: 120px;
  padding: 10px 10px 4px;
  border-radius: 22px;
}
.countdown--focus.is-spotlight{
  box-shadow:
    0 0 0 6px rgba(255,217,179,.10),
    0 26px 70px rgba(0,0,0,.26);
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,217,179,.16);
}
.pill{
  width: 120px;
  padding: 16px 12px;
  border-radius: 22px;
  background:
    radial-gradient(80px 60px at 30% 20%, rgba(255,255,255,.18), transparent 60%),
    linear-gradient(180deg, #c3163f, #6a0f26);
  border: 1px solid rgba(255,217,179,.28);
  box-shadow: 0 18px 34px rgba(0,0,0,.28);
}
.pill__num{
  font-family: Cinzel, serif;
  font-weight: 900;
  font-size: 26px;
  color:#fff;
  line-height: 1.1;
}
.pill__lbl{
  margin-top: 6px;
  font-size: 10px;
  letter-spacing:.18em;
  text-transform: uppercase;
  color: rgba(255,217,179,.88);
  font-weight: 900;
}

/* Secciones */
.section{ padding: 74px 16px 90px; }
.section__inner{ width: min(1200px, 94vw); margin: 0 auto; }
.section--alt{
  background:
    radial-gradient(900px 520px at 80% 30%, rgba(255,217,179,.06), transparent 60%),
    radial-gradient(900px 520px at 20% 70%, rgba(255,95,126,.08), transparent 60%);
}
.eyebrow{
  margin: 0 0 6px;
  font-size: 12px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255,217,179,.86);
  font-weight: 900;
}
.h3{
  margin:0 0 14px;
  font-family: Cinzel, serif;
  font-weight: 900;
  font-size: 28px;
  color: rgba(255,255,255,.96);
}

/* Grids */
.grid-2{
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
.grid-2--bigcards{
  gap: 16px;
}

/* Cards */
.card{
  border-radius: 22px;
  border: 1px solid rgba(255,217,179,.14);
  background: rgba(255,255,255,.05);
  box-shadow: 0 18px 60px rgba(0,0,0,.18);
  overflow:hidden;
}
.card__body{ padding: 16px 16px 18px; }
.card__title{ margin:0; font-family: Cinzel, serif; font-size: 16px; font-weight: 900; }
.card__text{ margin: 10px 0 0; color: rgba(255,255,255,.82); line-height: 1.75; }

/* ✅ Cards con imagen GRANDE */
.card--imgBig .card__imgBig{
  width:100%;
  height: 260px;          /* ✅ más grande */
  object-fit: cover;
  display:block;
  filter: saturate(1.10) contrast(1.05);
}

/* Panel */
.panel{
  border-radius: 22px;
  overflow:hidden;
  border: 1px solid rgba(255,217,179,.16);
  background:
    radial-gradient(900px 420px at 20% 0%, rgba(255,95,126,.14), transparent 60%),
    linear-gradient(180deg, rgba(18,6,10,.80), rgba(59,10,24,.70));
  box-shadow: 0 26px 70px rgba(0,0,0,.28);
}
.panel__body{ padding: 16px 18px 18px; }

.row{ display:flex; gap: 12px; align-items:center; justify-content:space-between; flex-wrap: wrap; }
.row--end{ justify-content:flex-end; }

.cardline{
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255,217,179,.14);
  background: rgba(255,255,255,.05);
}
.cardline__label{ font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,217,179,.85); font-weight: 900; }
.cardline__value{ margin-top: 6px; font-family: Cinzel, serif; font-size: 13px; color: rgba(255,255,255,.92); }

.tiprow{ margin-top: 12px; display:grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.tip{
  border-radius: 22px;
  padding: 14px;
  border: 1px solid rgba(255,217,179,.14);
  background: rgba(255,255,255,.05);
  display:flex;
  gap: 12px;
  align-items:flex-start;
}
.tip__icon{
  width: 44px; height: 44px;
  border-radius: 14px;
  display:grid;
  place-items:center;
  background: rgba(255,217,179,.10);
  border: 1px solid rgba(255,217,179,.18);
}
.tip__title{ font-family: Cinzel, serif; font-weight: 900; }
.tip__text{ margin-top: 6px; color: rgba(255,255,255,.78); line-height: 1.6; font-size: 13px; }

.timeline{ display:grid; gap: 12px; }
.titem{ display:grid; grid-template-columns: 90px 20px 1fr; gap: 12px; align-items:start; }
.titem__time{ font-family: Cinzel, serif; font-weight: 900; font-size: 13px; color: rgba(255,217,179,.92); padding-top: 12px; }
.titem__dot{
  width: 14px; height: 14px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(255,217,179,.95), rgba(230,176,126,.25));
  box-shadow: 0 0 0 6px rgba(255,217,179,.10);
  margin-top: 14px;
}
.titem__card{ border-radius: 22px; padding: 14px; border: 1px solid rgba(255,217,179,.14); background: rgba(255,255,255,.05); }
.titem__title{ font-family: Cinzel, serif; font-weight: 900; }
.titem__text{ margin-top: 6px; color: rgba(255,255,255,.78); line-height: 1.6; }

.quote{
  border-radius: 18px;
  padding: 16px;
  border: 1px solid rgba(255,217,179,.16);
  background: rgba(255,255,255,.04);
}
.quote__text{ margin:0; font-size:14px; line-height:1.8; color: rgba(255,255,255,.92); }
.quote__by{ margin: 10px 0 0; font-size:12.5px; color: rgba(255,255,255,.78); }

.stackphotos{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.stackphotos img{
  width:100%;
  height: 170px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid rgba(255,217,179,.14);
}

/* ✅ Carrusel Fotos */
.carousel{
  display:grid;
  grid-template-columns: 56px 1fr 56px;
  align-items:center;
  gap: 12px;
}
.carViewport{
  width:100%;
  border-radius: 22px;
  overflow:hidden;
  border: 1px solid rgba(255,217,179,.16);
  box-shadow: 0 26px 70px rgba(0,0,0,.25);
  background: rgba(255,255,255,.03);
}
.carImage{
  width: 100%;
  height: min(560px, 62vh);
  object-fit: cover;
  display:block;
  transform: scale(1.01);
}
.carBtn{
  width: 56px;
  height: 56px;
  border-radius: 18px;
  border: 1px solid rgba(255,217,179,.18);
  background: rgba(0,0,0,.25);
  color: rgba(255,255,255,.92);
  font-size: 34px;
  font-weight: 900;
  cursor: pointer;
  display:grid;
  place-items:center;
  transition: transform .15s ease, filter .15s ease, background .15s ease;
}
.carBtn:hover{ transform: translateY(-1px); filter: brightness(1.05); background: rgba(0,0,0,.35); }
.carDots{
  margin-top: 12px;
  display:flex;
  gap: 8px;
  justify-content:center;
}
.dot{
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,217,179,.35);
  background: rgba(255,255,255,.12);
}
.dot.is-active{
  background: linear-gradient(180deg, rgba(255,217,179,.92), rgba(230,176,126,.65));
  border-color: rgba(255,217,179,.55);
}

/* Form */
.form__grid{ display:grid; grid-template-columns: 1fr 220px; gap: 12px; }
.field__label{
  display:block;
  margin: 0 0 8px;
  font-size: 11px;
  letter-spacing:.14em;
  text-transform: uppercase;
  color: rgba(255,217,179,.85);
  font-weight: 900;
}
.field__input{
  width:100%;
  border-radius: 16px;
  padding: 12px 12px;
  border: 1px solid rgba(255,217,179,.14);
  background: rgba(255,255,255,.05);
  color: rgba(255,255,255,.92);
  outline: none;
}
.field__textarea{ resize: vertical; min-height: 90px; }
.field__input:focus{
  border-color: rgba(255,217,179,.30);
  box-shadow: 0 0 0 6px rgba(255,217,179,.10);
}

.tiny{ margin: 10px 0 0; font-size:12px; color: rgba(255,255,255,.72); }

/* Ubicación */
.grid-2--loc{ align-items: start; }
.locImg{
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid rgba(255,217,179,.16);
  box-shadow: 0 22px 60px rgba(0,0,0,.30);
}
.locMedia{ display:flex; flex-direction:column; gap: 10px; }

/* Responsive */
@media (max-width: 980px){
  .carousel{ grid-template-columns: 48px 1fr 48px; }
  .carBtn{ width: 48px; height: 48px; border-radius: 16px; font-size: 30px; }
  .carImage{ height: min(520px, 56vh); }
}
@media (max-width: 720px){
  .dock{ display:none; }
  .invite{ width: min(560px, 94vw); aspect-ratio: 10 / 15; }
  .invite__inner{ padding: 48px 22px 38px; }
  .grid-2{ grid-template-columns: 1fr; }
  .tiprow{ grid-template-columns: 1fr; }
  .form__grid{ grid-template-columns: 1fr; }
  .stackphotos{ grid-template-columns: 1fr; }
  .stackphotos img{ height: 220px; }
  .locImg{ height: 260px; }

  .carousel{ grid-template-columns: 44px 1fr 44px; gap: 10px; }
  .carBtn{ width: 44px; height: 44px; border-radius: 14px; font-size: 28px; }
  .carImage{ height: min(460px, 52vh); }
}