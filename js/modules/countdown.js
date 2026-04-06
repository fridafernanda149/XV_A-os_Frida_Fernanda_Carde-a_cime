function pad(n){ return String(n).padStart(2, "0"); }

export function startCountdown(eventDateISO){
  const $d = document.getElementById("d");
  const $h = document.getElementById("h");
  const $m = document.getElementById("m");
  const $s = document.getElementById("s");

  const target = new Date(eventDateISO).getTime();

  function tick(){
    const now = Date.now();
    let diff = target - now;

    if (!isFinite(target) || target <= 0){
      $d.textContent = "--"; $h.textContent="--"; $m.textContent="--"; $s.textContent="--";
      return;
    }

    if (diff <= 0){
      $d.textContent = "00";
      $h.textContent = "00";
      $m.textContent = "00";
      $s.textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    diff -= days * (1000*60*60*24);

    const hours = Math.floor(diff / (1000*60*60));
    diff -= hours * (1000*60*60);

    const mins = Math.floor(diff / (1000*60));
    diff -= mins * (1000*60);

    const secs = Math.floor(diff / 1000);

    $d.textContent = pad(days);
    $h.textContent = pad(hours);
    $m.textContent = pad(mins);
    $s.textContent = pad(secs);
  }

  tick();
  setInterval(tick, 1000);
}