const MenuBtn = document.querySelector('#menuOpen')
const Navbar = document.querySelector('.nav-items')
const CloseBtn = document.querySelector('#menuClose')

MenuBtn.addEventListener('click', ()=> {
    Navbar.classList.toggle('openMenu')
    MenuBtn.style.display = "none"
    CloseBtn.style.display = "inline-block"
})

CloseBtn.addEventListener('click', ()=> {
    Navbar.classList.remove('openMenu')
    MenuBtn.style.display = "inline-block"
    CloseBtn.style.display = "none"
})

