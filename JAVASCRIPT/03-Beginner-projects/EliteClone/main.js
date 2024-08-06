// NAVIGATION BAR
const menu = document.querySelector("#openMenu");
const display = document.querySelector(".nav_links");
const close = document.querySelector("#closeMenu");
const acc = document.querySelector('.account_btn');
const navLinks = document.querySelectorAll('.nav_links a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.style.display = "block";
        display.style.display = "none";
        close.style.display = "none";
        acc.style.display = "none";
    });
});

menu.addEventListener('click', ()=> {
    menu.style.display = "none";
    display.style.display = "block";
    close.style.display = "block";
    acc.style.display = "block";
});

close.addEventListener('click', ()=> {
    menu.style.display = "block";
    display.style.display = "none";
    close.style.display = "none";
    acc.style.display = "none";
});


// filter
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