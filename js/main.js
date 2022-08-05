const navbar = document.querySelector(".header__hamburger");

var list = document.querySelector(".header__navbar");
navbar.addEventListener("click" , function(){
    list.classList.toggle("sitenav__list-on")});