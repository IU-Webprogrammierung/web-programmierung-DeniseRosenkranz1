var clicks = 0;
function add() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}

function sub() {
  if (clicks >= 1) {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
  } else {
    clicks = 0;
  }
}
