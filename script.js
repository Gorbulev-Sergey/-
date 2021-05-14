window.addEventListener('scroll', function () {
    if (!document.querySelector('.nav-menu').classList.contains('active')) {
        document.querySelector('.nav').classList.toggle('nav-small', window.scrollY > 0);
    }
});

var toggle_menu = function () {
    document.querySelector('.nav-menu').classList.toggle('active');
    if (window.scrollY == 0) {
        document.querySelector('.nav').classList.toggle('nav-small');
    }
}

var hide_menu = function () {
    document.querySelector('.nav-menu').classList.remove('active');
}