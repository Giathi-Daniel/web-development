const menuBtn = document.querySelector('#menuOpen')
const navItems = document.querySelector('.nav_list')
const closeBtn = document.querySelector('#menuClose')
const cartBtn = document.querySelector('.cart')

menuBtn.addEventListener('click', ()=> {
    menuBtn.style.display = "none"
    navItems.classList.add("active")
    closeBtn.style.display = "inline-block"
})

closeBtn.addEventListener('click', ()=> {
    menuBtn.style.display = "inline-block"
    navItems.classList.remove("active")
    closeBtn.style.display = "none"
})

cartBtn.addEventListener("mouseover", ()=> {
    let msg = document.createElement("div")

    msg.innerHTML = `<div class="cart_body">Hello World</div>`
})