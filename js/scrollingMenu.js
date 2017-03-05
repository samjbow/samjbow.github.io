(function () {
    var navbox = document.getElementById("nav-box");
    var headerHeight = document.getElementsByClassName("site-header")[0].offsetHeight;

    window.addEventListener("scroll", function(event) {
        if (window.scrollY > headerHeight) {
            navbox.classList.remove("fixed");
        } else {
            navbox.classList.add("fixed");
        }
    }, false);
})();
