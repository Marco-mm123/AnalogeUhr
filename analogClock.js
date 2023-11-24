function updateClock() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");
  const secHand = document.querySelector(".second-hand");

  const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
  const minDeg = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secDeg = (360 / 60) * seconds;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  secHand.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(updateClock, 1000);

updateClock();
