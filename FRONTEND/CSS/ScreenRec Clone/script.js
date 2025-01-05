const menuToggle = document.getElementById("hamburger-menu")
const menuList = document.getElementsByClassName(".menu-list")

menuToggle.addEventListener("click", {
    document.classList.add("active"),
})

menuList.addEventListener("click"= () => {
    document.classList.remove("active")
})