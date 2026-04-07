export function applyConfig(cfg){
  const name = document.getElementById("qName");
  const phrase = document.getElementById("qPhrase");
  const date = document.getElementById("qDateText");
  const time = document.getElementById("qTimeText");
  const place = document.getElementById("qPlaceText");

  if (name) name.textContent = cfg.quinceName ?? "";
  if (phrase) phrase.textContent = cfg.phrase ?? "";

  if (date) date.textContent = cfg.dateText ?? "";
  if (time) time.textContent = cfg.timeText ?? "";
  if (place) place.textContent = cfg.placeText ?? "";

  const locText = document.getElementById("locText");
  if (locText) locText.textContent = cfg.placeText ?? "";

  const hash1 = document.getElementById("hash1");
  const hash2 = document.getElementById("hash2");
  if (hash1) hash1.textContent = cfg.hashtag ?? "#XV";
  if (hash2) hash2.textContent = cfg.hashtag ?? "#XV";

  const famText = document.getElementById("familyText");
  const famBy = document.getElementById("familyBy");
  if (famText) famText.textContent = cfg.familyText ?? "";
  if (famBy) famBy.textContent = cfg.familyBy ?? "";

  const btnMaps = document.getElementById("btnMaps");
  const btnMaps2 = document.getElementById("btnMaps2");

  // btnMaps en hero manda a sección ubicación; si quieres que abra Maps directo, cámbialo
  if (btnMaps && cfg.mapsUrl) {
    // opcional: btnMaps.href = cfg.mapsUrl;
  }
  if (btnMaps2 && cfg.mapsUrl) btnMaps2.href = cfg.mapsUrl;

  // embed opcional
  const mapWrap = document.getElementById("mapWrap");
  const mapFrame = document.getElementById("mapFrame");
  if (cfg.mapsEmbedUrl && mapWrap && mapFrame){
    mapFrame.src = cfg.mapsEmbedUrl;
    mapWrap.hidden = false;
  }

  // contacto Whats
  const contactWhats = document.getElementById("contactWhats");
  if (contactWhats && cfg.whatsappNumber){
    const cleaned = String(cfg.whatsappNumber).replace(/\D/g, "");
    if (cleaned.length >= 12 && cleaned.startsWith("52")){
      const n = cleaned.slice(2);
      contactWhats.textContent = `+52 ${n.slice(0,3)} ${n.slice(3,6)} ${n.slice(6)}`;
    } else {
      contactWhats.textContent = `+${cleaned}`;
    }
  }
}
