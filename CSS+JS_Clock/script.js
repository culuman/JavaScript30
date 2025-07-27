const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const digitalTime = document.getElementById('digital-time');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360);
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const secondsFormatted = String(seconds).padStart(2, '0');
  const minutesFormatted = String(minutes).padStart(2, '0');
  const hoursFormatted = String(hours).padStart(2, '0');
  digitalTime.textContent = `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
}

setInterval(setDate, 1000);