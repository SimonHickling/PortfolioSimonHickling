const hamburgerCheckbox = document.getElementById("hamburger-checkbox");
const hamburgerMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("nav-bar")
const overlay = document.getElementById("overlay")
//hamburger sidebar menu
hamburgerCheckbox.onclick = function() {
    navBar.classList.toggle('show')
}

overlay.onclick = function() {
    navBar.classList.toggle('show')
}
//fading on scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
   entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return;}
    else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    }
});
}, appearOptions); 

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

//active link

let barSections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    barSections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active-link');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active-link');
            })
        }
    })
}