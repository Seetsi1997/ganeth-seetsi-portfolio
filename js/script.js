function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function updateDateTime() {
 var date = new Date();
 var timeDisplay;
   
  document.querySelector('#datetime').textContent = date.toDateString().toString().trim();
  document.querySelector('#year').textContent = date. getUTCFullYear().toString().trim();
  timeDisplay = document.querySelector('#desktop-time');
  timeDisplay.innerText = date.toLocaleTimeString("en-US",{hour12: false}).toString().trim();
  
} 
setInterval(updateDateTime, 1000);
updateDateTime();


function hamburgerTime() {
 var date = new Date();
 var timeDisplay;
   
  timeDisplay = document.querySelector('#hamburger-time');
  timeDisplay.innerText = date.toLocaleTimeString("en-US",{hour12: false}).toString().trim();
  setTimeout(hamburgerTime,100);
} 
hamburgerTime();

