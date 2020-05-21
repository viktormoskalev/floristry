let navbarToggle = document.querySelector(".navbar-toggle");
let navbarNav = document.querySelector(".navbar-nav");
navbarToggle.onclick = function () {
    if (navbarToggle.className == "navbar-toggle") {
        navbarToggle.className = "navbar-toggle navbar-toggle-cross";
        navbarNav.style.transform = "translateX(0)";
        console.log(1);
    } else {
        navbarToggle.className = "navbar-toggle";
        console.log(2);
        navbarNav.style.transform = "translateY(-100%)";
    }

    console.log(3);
}