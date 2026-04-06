:root{
  --canvas-1:#2a0a12;
  --canvas-2:#5c0b1e;
  --canvas-3:#b11235;

  --card-top:#12060a;
  --card-mid:#3b0a18;
  --card-bot:#8c1430;

  --gold-1:#ffd9b3;
  --gold-2:#e6b07e;
  --gold-3:#c78a3a;

  --text:rgba(255,255,255,.94);
  --muted:rgba(255,255,255,.82);

  --radius:26px;
  --shadow:0 30px 90px rgba(0,0,0,.45);

  --panel:rgba(255,255,255,.06);
  --panel-border:rgba(255,217,179,.15);
}

*{ box-sizing:border-box; }
html{ scroll-behavior:smooth; }
body{
  margin:0;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  color:var(--text);
  background:#12060a;
  overflow-x:hidden;
}

.bg-canvas{
  position:fixed;
  inset:0;
  background:
    radial-gradient(1200px 800px at 12% 18%, rgba(255,95,126,.45), transparent 55%),
    radial-gradient(1100px 800px at 85% 30%, rgba(246,193,204,.35), transparent 60%),
    radial-gradient(1000px 700px at 50% 85%, rgba(177,18,53,.30), transparent 62%),
    linear-gradient(135deg, var(--canvas-1), var(--canvas-2), var(--canvas-3));
  filter:saturate(1.2) contrast(1.1);
  z-index:-3;
}
.bg-canvas::after{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,.08), transparent 35%),
    radial-gradient(circle at 80% 30%, rgba(255,255,255,.06), transparent 38%),
    radial-gradient(circle at 40% 80%, rgba(255,255,255,.05), transparent 42%);
  opacity:.35;
  mix-blend-mode:overlay;
  pointer-events:none;
}

.confetti{
  position:fixed;
  inset:0;
  width:100%;
  height:100%;
  pointer-events:none;
  z-index:-2;
}

.dock{
  position:fixed;
  left:50%;
  bottom:14px;
  transform:translateX(-50%);
  z-index:50;
  display:flex;
  align-items:center;
  gap:10px;
  padding:10px 12px;
  border-radius:999px;
  background:rgba(0,0,0,.28);
  border:1px solid rgba(255,217,179,.14);
  backdrop-filter:blur(10px);
  box-shadow:0 24px 60px rgba(0,0,0,.35);
  max-width:min(96vw, 1100px);
}
.dock__toggle{
  width:46px;
  height:46px;
  border-radius:999px;
  border:1px solid rgba(255,217,179,.18);
  background:rgba(255,255,255,.06);
  color:rgba(255,255,255,.92);
  font-weight:900;
  font-size:18px;
  cursor:pointer;
  flex:0 0 auto;
}
.dock__items{
  display:flex;
  gap:8px;
  align-items:center;
  transition:max-width .28s ease, opacity .28s ease, transform .28s ease;
  max-width:900px;
  opacity:1;
  transform:translateX(0);
  overflow:hidden;
}
.dock.is-collapsed .dock__items{
  max-width:0;
  opacity:0;
  transform:translateX(-8px);
}
.dock__btn{
  text-decoration:none;
  color:rgba(255,255,255,.92);
  padding:10px 14px;
  border-radius:999px;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,217,179,.12);
  font-weight:800;
  font-size:12.5px;
  cursor:pointer;
  white-space:nowrap;
}
.dock__btn--gold{
  color:#1b070b;
  background:linear-gradient(180deg, rgba(255,217,179,.98), rgba(230,176,126,.98));
  border-color:rgba(255,217,179,.35);
}

.stage{
  min-height:100vh;
  padding:34px 16px 110px;
  display:grid;
  place-items:start center;
}

.invite{
  width:min(760px,94vw);
  min-height:1450px;
  border-radius:var(--radius);
  position:relative;
  box-shadow:var(--shadow);
  overflow:hidden;
  background:
    radial-gradient(760px 520px at 30% 20%, rgba(255,95,126,.22), transparent 62%),
    radial-gradient(640px 460px at 80% 40%, rgba(255,217,179,.18), transparent 60%),
    linear-gradient(180deg, var(--card-top), var(--card-mid), var(--card-bot));
  border:1px solid rgba(255,217,179,.22);
}
.invite::before{
  content:"";
  position:absolute;
  inset:16px;
  border-radius:calc(var(--radius) - 10px);
  border:1px solid rgba(255,217,179,.28);
  pointer-events:none;
}
.invite::after{
  content:"";
  position:absolute;
  inset:26px;
  border-radius:calc(var(--radius) - 16px);
  border:1px dashed rgba(230,176,126,.35);
  opacity:.75;
  pointer-events:none;
}

.orn{
  position:absolute;
  width:260px;
  height:190px;
  pointer-events:none;
  opacity:.95;
  filter:drop-shadow(0 18px 30px rgba(0,0,0,.25));
}
.orn--top{
  top:-8px;
  left:-18px;
  transform:rotate(-8deg);
}
.orn--bottom{
  bottom:-56px;
  right:-36px;
  transform:rotate(10deg);
  opacity:.9;
}
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
    radial-gradient(12px 8px at 18% 58%, rgba(255,217,179,.95), transparent 70%),
    radial-gradient(14px 9px at 32% 62%, rgba(230,176,126,.95), transparent 72%),
    radial-gradient(16px 10px at 48% 56%, rgba(199,138,58,.95), transparent 70%),
    radial-gradient(14px 9px at 64% 62%, rgba(255,217,179,.92), transparent 72%),
    radial-gradient(16px 10px at 80% 58%, rgba(230,176,126,.92), transparent 70%),
    conic-gradient(from 180deg, rgba(255,217,179,.0), rgba(255,217,179,.35), rgba(255,217,179,.0));
  border-radius:999px;
  mask:
    radial-gradient(circle at 30% 40%, #000 0 55%, transparent 56%),
    radial-gradient(circle at 70% 55%, #000 0 55%, transparent 56%);
}

.invite__inner{
  position:relative;
  min-height:100%;
  padding:150px 34px 180px;
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  gap:10px;
}
.invite__inner--hero{
  padding-top:150px;
}

.kicker{
  margin:0 0 20px;
  letter-spacing:.16em;
  text-transform:uppercase;
  font-weight:700;
  font-size:12px;
  color:rgba(255,217,179,.90);
}

.title{
  margin:22px 0 10px;
  font-family:"Great Vibes", cursive;
  font-weight:400;
  font-size:clamp(54px, 6.4vw, 86px);
  color:var(--gold-1);
  line-height:1.06;
  text-shadow:0 12px 26px rgba(0,0,0,.25);
}

.name{
  margin:24px 0 24px;
  font-family:"Great Vibes", cursive;
  font-weight:400;
  font-size:clamp(42px, 4.8vw, 66px);
  line-height:1.08;
  color:#fff;
  text-shadow:
    0 12px 28px rgba(177,18,53,.45),
    0 0 18px rgba(255,95,126,.35);
}

.heroTextBlock{
  width:min(620px,95%);
  margin-top:34px;
  margin-bottom:34px;
  display:flex;
  flex-direction:column;
  gap:24px;
}
.heroBlock{
  width:min(620px,95%);
  margin-top:20px;
}

.subtitle{
  margin:0;
  max-width:50ch;
  font-size:13.5px;
  line-height:1.65;
  color:var(--muted);
}
.subtitle--formal{
  max-width:100%;
  margin:0;
  font-size:clamp(20px, 2.4vw, 26px);
  line-height:1.82;
  color:rgba(255,255,255,.95);
  font-weight:500;
  text-shadow:0 8px 20px rgba(0,0,0,.20);
}

.eventCard{
  width:100%;
  margin-top:18px;
  padding:22px 20px 24px;
  border-radius:24px;
  background:rgba(255,255,255,.045);
  border:1px solid rgba(255,217,179,.14);
  box-shadow:0 16px 42px rgba(0,0,0,.18);
}
.eventCard--reception{
  margin-top:36px;
}
.eventCard__title{
  margin:0 0 18px;
  text-align:center;
  font-family:"Great Vibes", cursive;
  font-size:clamp(34px, 3.8vw, 48px);
  font-weight:400;
  line-height:1.08;
  color:var(--gold-1);
  text-shadow:
    0 10px 22px rgba(0,0,0,.26),
    0 0 12px rgba(230,176,126,.16);
}

.meta{
  width:100%;
  margin-top:8px;
  padding:14px 18px;
  border-radius:20px;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,217,179,.15);
}
.meta--event{ margin-top:0; }
.meta__row{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:14px;
  padding:12px 2px;
  border-bottom:1px solid rgba(255,255,255,.06);
}
.meta__row:last-child{ border-bottom:0; }
.meta__label{
  font-size:13px;
  letter-spacing:.15em;
  text-transform:uppercase;
  color:rgba(255,217,179,.88);
  font-weight:800;
}
.meta__value{
  font-family:Cinzel, serif;
  font-weight:600;
  font-size:14px;
  color:rgba(255,255,255,.94);
  text-align:right;
}

.actions{
  margin-top:16px;
  display:flex;
  gap:10px;
  justify-content:center;
  flex-wrap:wrap;
}
.actions--event{
  margin-top:20px;
}

.btn{
  text-decoration:none;
  border-radius:999px;
  padding:13px 20px;
  font-weight:800;
  font-size:13px;
  letter-spacing:.02em;
  border:1px solid transparent;
  transition:transform .15s ease, box-shadow .15s ease, background .15s ease;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
}
.btn--sm{ padding:10px 14px; font-size:12px; }
.btn--primary{
  color:#1b070b;
  background:linear-gradient(180deg, rgba(255,217,179,.98), rgba(230,176,126,.98));
  border-color:rgba(255,217,179,.35);
  box-shadow:0 16px 28px rgba(0,0,0,.22);
}
.btn:hover{ transform:translateY(-1px); }

.fineprint{
  margin:18px 0 0;
  font-size:13px;
  color:rgba(255,255,255,.82);
}

.line{
  width:min(410px,82%);
  height:1px;
  margin:18px auto 8px;
  background:linear-gradient(90deg, transparent, rgba(255,217,179,.65), transparent);
  position:relative;
}
.line::after{
  content:"";
  position:absolute;
  left:50%;
  top:50%;
  width:10px;
  height:10px;
  transform:translate(-50%,-50%);
  border-radius:50%;
  background:radial-gradient(circle, rgba(255,217,179,.95), rgba(230,176,126,.2));
  box-shadow:0 0 0 6px rgba(255,217,179,.12);
}

.countLabel{
  margin:14px 0 0;
  font-family:Cinzel, serif;
  font-size:12px;
  letter-spacing:.20em;
  text-transform:uppercase;
  color:rgba(255,217,179,.90);
}

.countdown{
  margin-top:12px;
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  justify-content:center;
}
.countdown--focus{
  padding:10px 8px;
  border-radius:18px;
  transition:box-shadow .25s ease, transform .25s ease;
}
.countdown--pulse{
  box-shadow:0 0 0 8px rgba(255,217,179,.10), 0 22px 50px rgba(0,0,0,.25);
  transform:translateY(-1px);
}

.pill{
  width:108px;
  padding:14px 12px;
  border-radius:20px;
  background:
    radial-gradient(80px 60px at 30% 20%, rgba(255,255,255,.18), transparent 60%),
    linear-gradient(180deg, #c3163f, #6a0f26);
  border:1px solid rgba(255,217,179,.28);
  box-shadow:0 18px 34px rgba(0,0,0,.28);
}
.pill__num{
  font-family:Cinzel, serif;
  font-weight:700;
  font-size:26px;
  color:#fff;
  line-height:1.1;
}
.pill__lbl{
  margin-top:6px;
  font-size:10px;
  letter-spacing:.18em;
  text-transform:uppercase;
  color:rgba(255,217,179,.88);
  font-weight:800;
}

.section{ padding:54px 16px 70px; }
.section--alt{ padding:54px 16px 70px; }
.section__inner{ width:min(1100px,94vw); margin:0 auto; }

.eyebrow{
  margin:0;
  letter-spacing:.16em;
  text-transform:uppercase;
  font-weight:800;
  font-size:12px;
  color:rgba(255,217,179,.88);
}
.h3{
  margin:8px 0 14px;
  font-family:Cinzel, serif;
  font-size:clamp(26px, 2.8vw, 36px);
  color:rgba(255,255,255,.95);
}
.section__lead{
  margin:0 0 18px;
  max-width:70ch;
  color:rgba(255,255,255,.82);
  line-height:1.6;
}

.panel{
  border-radius:22px;
  background:rgba(0,0,0,.18);
  border:1px solid rgba(255,217,179,.14);
  box-shadow:0 22px 60px rgba(0,0,0,.25);
  overflow:hidden;
}
.panel__body{ padding:18px; }

.panel--locationBlock{
  overflow:visible;
}

.locationStack{
  display:grid;
  gap:22px;
}

.locationSectionTitle{
  margin:0 0 16px;
  font-family:"Great Vibes", cursive;
  font-size:clamp(34px, 3.8vw, 48px);
  line-height:1.05;
  color:var(--gold-1);
  text-align:center;
  text-shadow:
    0 10px 22px rgba(0,0,0,.26),
    0 0 12px rgba(230,176,126,.16);
}

.grid-2{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
}
.grid-2--bigcards{
  grid-template-columns:1fr 1fr;
  gap:14px;
  align-items:stretch;
}

.card{
  border-radius:22px;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,217,179,.14);
  overflow:hidden;
  box-shadow:0 18px 50px rgba(0,0,0,.22);
}

.card--infoFeatured{
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
}

.card__imgBig{
  width:100%;
  height:240px;
  object-fit:contain;
  object-position:center;
  display:block;
  padding:6px;
  filter:saturate(1.02) contrast(1.01);
  background:rgba(255,255,255,.06);
}

.card__body{
  padding:16px 16px 18px;
}

.card__body--infoSimple{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  text-align:left;
  gap:10px;
  padding:14px 18px 18px;
}

.card__title{
  margin:0 0 8px;
  font-family:Cinzel, serif;
  font-size:16px;
}

.card__title--gift{
  margin:0;
  font-size:18px;
  color:rgba(255,255,255,.96);
}

.card__text{
  margin:0;
  color:rgba(255,255,255,.82);
  line-height:1.65;
}

.card__text--gift{
  max-width:100%;
  font-size:16px;
  line-height:1.5;
  color:rgba(255,255,255,.92);
  font-weight:600;
}

.infoBadge{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:0;
  border-radius:0;
  background:transparent;
  color:rgba(255,255,255,.96);
  font-family:Cinzel, serif;
  font-size:18px;
  font-weight:800;
  box-shadow:none;
}

.infoBigText{
  margin:0;
  font-family:Cinzel, serif;
  font-size:30px;
  line-height:1.08;
  font-weight:900;
  color:#ffffff;
  text-align:left;
}

.infoBigText--gift{
  font-size:28px;
}

.giftHeading{
  display:flex;
  align-items:center;
  gap:8px;
}

.giftEmoji{
  font-size:18px;
  line-height:1;
}

.giftThanks{
  margin:2px 0 0;
  font-size:15px;
  line-height:1.45;
  color:rgba(255,255,255,.88);
}

.grid-2--loc{
  grid-template-columns:1.05fr .95fr;
  align-items:start;
}
.locMedia{
  border-radius:18px;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,217,179,.12);
  overflow:hidden;
}
.locImg{
  width:100%;
  height:380px;
  object-fit:cover;
  display:block;
}

.cardline{
  padding:14px 14px;
  border-radius:16px;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,217,179,.12);
}
.cardline__label{
  font-size:11px;
  letter-spacing:.14em;
  text-transform:uppercase;
  font-weight:900;
  color:rgba(255,217,179,.88);
}
.cardline__value{
  margin-top:6px;
  font-family:Cinzel, serif;
  color:rgba(255,255,255,.92);
  font-weight:600;
}

.row{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  align-items:center;
}
.tiprow{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
  margin-top:12px;
}
.tiprow--location{
  margin-top:18px !important;
  gap:16px;
}
.tip{
  display:flex;
  gap:10px;
  padding:12px 12px;
  border-radius:16px;
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,217,179,.12);
}
.tip__icon{
  width:34px;
  height:34px;
  display:grid;
  place-items:center;
  border-radius:12px;
  background:rgba(0,0,0,.22);
}
.tip__title{ font-family:Cinzel, serif; }
.tip__text{
  font-size:13px;
  color:rgba(255,255,255,.78);
  margin-top:4px;
}

.timeline{
  display:grid;
  gap:16px;
}
.titem{
  display:grid;
  grid-template-columns:100px 24px 1fr;
  gap:16px;
  align-items:start;
}
.titem__time{
  font-family:Cinzel, serif;
  font-weight:700;
  font-size:16px;
  color:rgba(255,217,179,.96);
  padding-top:12px;
}
.titem__dot{
  width:16px;
  height:16px;
  border-radius:999px;
  background:radial-gradient(circle, rgba(255,217,179,.95), rgba(199,138,58,.25));
  box-shadow:0 0 0 8px rgba(255,217,179,.10);
  margin-top:14px;
}
.titem__card{
  border-radius:22px;
  padding:18px 18px 16px;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,217,179,.12);
}
.titem__title{
  font-family:Cinzel, serif;
  font-weight:800;
  font-size:20px;
}
.titem__text{
  color:rgba(255,255,255,.86);
  margin-top:8px;
  font-size:16px;
  line-height:1.5;
}

.panel--gallery{
  overflow:visible;
}
.panel__body--gallery{
  padding:18px 18px 20px;
}

.carousel{
  position:relative;
  display:grid;
  grid-template-columns:70px 1fr 70px;
  align-items:center;
  gap:18px;
}
.carViewport{
  width:100%;
  border-radius:24px;
  overflow:hidden;
  border:1px solid rgba(255,217,179,.12);
  background:rgba(0,0,0,.18);
  height:min(72vh, 760px);
  min-height:360px;
  cursor:zoom-in;
}
.carImage{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  filter:saturate(1.05) contrast(1.02);
  transition:opacity .18s ease, transform .18s ease;
}
.carImage:hover{
  transform:scale(1.01);
}
.carBtn{
  width:58px;
  height:58px;
  border-radius:18px;
  border:1px solid rgba(255,217,179,.14);
  background:rgba(0,0,0,.22);
  color:rgba(255,255,255,.92);
  font-size:36px;
  font-weight:900;
  cursor:pointer;
  display:grid;
  place-items:center;
}
.carBtn:hover{ transform:translateY(-1px); }

.carDots{
  margin-top:14px;
  display:flex;
  gap:8px;
  justify-content:center;
}
.dot{
  width:10px;
  height:10px;
  border-radius:999px;
  background:rgba(255,255,255,.18);
  border:1px solid rgba(255,217,179,.18);
  cursor:pointer;
}
.dot.is-active{
  background:rgba(255,217,179,.92);
}

.lightbox{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.90);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:30px;
  opacity:0;
  visibility:hidden;
  transition:opacity .22s ease, visibility .22s ease;
  z-index:200;
}
.lightbox.is-open{
  opacity:1;
  visibility:visible;
}
.lightbox__content{
  width:min(92vw, 1400px);
  height:min(88vh, 900px);
  display:flex;
  align-items:center;
  justify-content:center;
}
.lightbox__image{
  max-width:100%;
  max-height:100%;
  width:auto;
  height:auto;
  object-fit:contain;
  border-radius:18px;
  box-shadow:0 24px 70px rgba(0,0,0,.45);
}
.lightbox__close{
  position:absolute;
  top:18px;
  right:18px;
  width:48px;
  height:48px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.20);
  background:rgba(255,255,255,.08);
  color:#fff;
  font-size:22px;
  cursor:pointer;
}
.lightbox__nav{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  width:54px;
  height:54px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.20);
  background:rgba(255,255,255,.08);
  color:#fff;
  font-size:34px;
  cursor:pointer;
}
.lightbox__nav--prev{ left:18px; }
.lightbox__nav--next{ right:18px; }

.quote{ padding:10px 6px; }
.quote__text{
  margin:0;
  font-size:16px;
  line-height:1.7;
  color:rgba(255,255,255,.86);
}
.quote__by{
  margin:12px 0 0;
  color:rgba(255,217,179,.86);
  font-family:Cinzel, serif;
}

.stackphotos{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:10px;
}
.stackphotos img{
  width:100%;
  height:150px;
  object-fit:cover;
  border-radius:16px;
  border:1px solid rgba(255,217,179,.10);
}

.tiny{
  margin:10px 0 0;
  font-size:12px;
  color:rgba(255,255,255,.70);
}

.reveal{
  opacity:0;
  transform:translateY(10px);
  transition:opacity .45s ease, transform .45s ease;
}
.reveal.is-visible{
  opacity:1;
  transform:translateY(0);
}

@media (max-width: 1100px){
  .section__inner{
    width:min(96vw, 1000px);
  }

  .carousel{
    grid-template-columns:60px 1fr 60px;
    gap:14px;
  }

  .carViewport{
    height:min(68vh, 640px);
  }
}

@media (max-width: 900px){
  .grid-2{ grid-template-columns:1fr; }
  .grid-2--bigcards{ grid-template-columns:1fr; }
  .grid-2--loc{ grid-template-columns:1fr; }
  .locImg{ height:320px; }
  .tiprow{ grid-template-columns:1fr; }
  .stackphotos{ grid-template-columns:1fr 1fr; }

  .titem{
    grid-template-columns:90px 20px 1fr;
    gap:12px;
  }

  .carousel{
    grid-template-columns:52px 1fr 52px;
    gap:12px;
  }

  .carBtn{
    width:52px;
    height:52px;
    font-size:32px;
  }

  .carViewport{
    height:min(62vh, 560px);
    min-height:300px;
  }

  .dock{
    max-width:calc(100vw - 20px);
  }
}

@media (max-width: 700px){
  .dock{
    width:calc(100% - 20px);
    left:10px;
    transform:none;
    justify-content:flex-start;
    overflow-x:auto;
    padding:10px;
  }

  .dock__items{
    max-width:none;
  }

  .dock.is-collapsed .dock__items{
    max-width:0;
  }

  .section{
    padding:48px 14px 76px;
  }

  .section--alt{
    padding:48px 14px 76px;
  }
}

@media (max-width: 520px){
  .stage{
    padding:24px 12px 100px;
  }

  .invite{
    width:min(500px,95vw);
    min-height:auto;
  }

  .orn--top{
    top:8px;
    left:-10px;
  }

  .invite__inner{
    padding:150px 18px 120px;
  }

  .invite__inner--hero{
    padding-top:150px;
  }

  .kicker{
    margin-bottom:18px;
  }

  .title{
    font-size:clamp(44px, 10vw, 62px);
    line-height:1.08;
    margin-top:18px;
    margin-bottom:10px;
  }

  .name{
    font-size:clamp(32px, 7.2vw, 46px);
    line-height:1.12;
    margin-top:18px;
    margin-bottom:22px;
  }

  .heroTextBlock{
    width:100%;
    gap:18px;
    margin-top:24px;
    margin-bottom:22px;
  }

  .subtitle--formal{
    font-size:18px;
    line-height:1.75;
  }

  .heroBlock{
    width:100%;
    margin-top:14px;
  }

  .eventCard{
    padding:18px 14px 20px;
  }

  .eventCard--reception{
    margin-top:30px;
  }

  .eventCard__title{
    font-size:34px;
  }

  .meta{
    padding:12px 14px;
  }

  .meta__row{
    flex-direction:column;
    align-items:flex-start;
    gap:6px;
  }

  .meta__value{
    text-align:left;
    font-size:13px;
  }

  .fineprint{
    margin-top:16px;
  }

  .card__imgBig{
    height:170px;
    padding:4px;
  }

  .infoBadge{
    font-size:16px;
  }

  .infoBigText{
    font-size:24px;
  }

  .infoBigText--gift{
    font-size:22px;
  }

  .card__text--gift{
    font-size:15px;
    max-width:100%;
  }

  .giftThanks{
    font-size:14px;
  }

  .locationSectionTitle{
    font-size:34px;
  }

  .locImg{
    height:260px;
  }

  .tiprow--location{
    gap:12px;
  }

  .titem{
    grid-template-columns:72px 16px 1fr;
    gap:10px;
  }

  .titem__time{
    font-size:14px;
    padding-top:10px;
  }

  .titem__dot{
    width:14px;
    height:14px;
    margin-top:13px;
    box-shadow:0 0 0 6px rgba(255,217,179,.10);
  }

  .titem__card{
    padding:14px 14px 12px;
    border-radius:18px;
  }

  .titem__title{
    font-size:16px;
  }

  .titem__text{
    font-size:14px;
  }

  .carousel{
    grid-template-columns:44px 1fr 44px;
    gap:10px;
  }

  .carBtn{
    width:44px;
    height:44px;
    border-radius:14px;
    font-size:28px;
  }

  .carViewport{
    min-height:240px;
    height:min(52vh, 380px);
    border-radius:18px;
  }

  .lightbox{
    padding:14px;
  }

  .lightbox__content{
    width:100%;
    height:auto;
    max-height:82vh;
  }

  .lightbox__close{
    top:10px;
    right:10px;
    width:42px;
    height:42px;
  }

  .lightbox__nav{
    width:42px;
    height:42px;
    font-size:28px;
  }

  .lightbox__nav--prev{ left:10px; }
  .lightbox__nav--next{ right:10px; }
}