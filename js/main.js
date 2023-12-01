// Add Class Active To Navbar When Scrolling
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("mainNavbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            navbar.classList.add("active");
        } else {
            navbar.classList.remove("active");
        }
    });
});