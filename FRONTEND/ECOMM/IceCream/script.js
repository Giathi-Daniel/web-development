let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//PAGINATION ANIMATION
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});

//ICE TOP 
document.querySelector('.top-image').forEach(image_1 => {
    image_1.addEventListener('click',() => {
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image').src = src;
    })
});
