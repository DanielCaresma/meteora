var botaoMenuBar = document.querySelector(".fa-bars")
var botaoFechar = document.querySelector(".fa-xmark")
var menuDropdown = document.querySelector(".header__nav")

botaoMenuBar.addEventListener("click", () => {
    menuDropdown.classList.add("header__nav--ativo")
})

botaoFechar.addEventListener("click", () => {
    menuDropdown.classList.remove("header__nav--ativo")
})