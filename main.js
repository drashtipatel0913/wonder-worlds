const menuHamburger = document.querySelector("#nav-menu")
const navLinks = document.querySelector(".navigation")

menuHamburger.addEventListener('click', () => {
   navLinks.classList.toggle('mobile-menu')
})