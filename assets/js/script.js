let hamburgerButton = document.getElementsByClassName("header__hamburger")[0],
    headerMenu = document.getElementsByClassName("header__menu")[0],
    headerMenuItems = document.querySelectorAll(".header__menu > li"),
    headerMenuLinks = document.querySelectorAll(".header__menu a"),
    subheaderMenu = document.querySelectorAll(".header__submenu"),
    subheaderMenuLinks = document.querySelectorAll(".header__submenu li"),
    navbar = document.getElementsByClassName("header__nav")[0],
    on = false;

    hamburgerButton.addEventListener("click", toggleMenu);
    window.addEventListener("scroll", stickyMenuModifier);

function toggleMenu() {
    if (!on) {
        headerMenu.classList.add("element--visible");
        on = true;
    }
    else {
        headerMenu.classList.remove("element--visible");
        on = false;
    }
}


function stickyMenuModifier() {
    if(window.scrollY > 100) {
        navbar.classList.add("light--background");
        subheaderMenu.forEach((el)=>{el.classList.add("light--background")});
        headerMenuLinks.forEach((el)=>{el.classList.add("dark--text")});
    }else {
        navbar.classList.remove("light--background");
        subheaderMenu.forEach((el)=>{el.classList.remove("light--background")});
        headerMenuLinks.forEach((el)=>{el.classList.remove("dark--text")});
    }
}

