"use strict";

// NAVIGATION BAR
var menu = document.querySelector("#openMenu");
var display = document.querySelector(".nav_links");
var close = document.querySelector("#closeMenu");
var acc = document.querySelector('.account_btn');
var navLinks = document.querySelectorAll('.nav_links a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    menu.style.display = "block";
    display.style.display = "none";
    close.style.display = "none";
    acc.style.display = "none";
  });
});
menu.addEventListener('click', function () {
  menu.style.display = "none";
  display.style.display = "block";
  close.style.display = "block";
  acc.style.display = "block";
});
close.addEventListener('click', function () {
  menu.style.display = "block";
  display.style.display = "none";
  close.style.display = "none";
  acc.style.display = "none";
}); // filter
// const filter = document.querySelector('.options');
// const buttonClicked = document.querySelector('.select');
// buttonClicked.addEventListener('click', () => { 
//     // filter.style.display = 'flex';
//     filter.style.display = filter.style.display === 'flex' ? 'none' : 'flex';
// });
// window.addEventListener('click', (event) => { element
//     if (event.target !== buttonClicked && !filter.contains(event.target)) {
//         filter.style.display = 'none';
//     }
// });