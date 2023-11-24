function updateClock() {
  //Das aktuelle Datum wird im time gespeichert.
  const time = new Date();
  //Es werden jeweils Stunden, Minuten und Sekunden aus der time Variable genommen und in ihre eigene Variabe gespeichert.
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  //Die HTML-Elemente der Zeiger werden in Variablen gespeichert für späteren nutzen.
  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");
  const secHand = document.querySelector(".second-hand");

  //Die Anzahl an Grad die sich der Zeiger bewegen muss wird ausgerechnet.
  const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
  const minDeg = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secDeg = (360 / 60) * seconds;

  //mit der Variable von vorher kann man den Zeiger wählen und dann wird er mit der vorhin angezeigter anzahl rotiert.
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  secHand.style.transform = `rotate(${secDeg}deg)`;
}

//setInterval wird verwendet um die Funktion updateClock alle 1000 Millisekunden aufzurufen.
setInterval(updateClock, 1000);
updateClock();
