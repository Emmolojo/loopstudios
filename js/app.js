let menuToggle = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.menu_links_mobile')
let fullNav = document.querySelector('.navigation')
menuToggle.onclick = () => {
    mobileMenu.classList.toggle('open')
    fullNav.classList.toggle('fix')
}
window.onresize = function () {
    let trol = window.innerHeight
    let total = `this is height ${trol}. and Trol * 2 = ${trol * 2}`;
    console.log(total)
}

