const titreSpans = document.querySelectorAll('h1 span');
const titreSpans2 = document.querySelectorAll('h2 span');
const medias = document.querySelectorAll('.bubble');
const btns = document.querySelectorAll('.button-switch');


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused:true});

    TL
    .staggerFrom(titreSpans2, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.5)
    .staggerFrom(titreSpans, 1, {top: -25, opacity: 0, ease: "power2.out"}, 0.5)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    TL.play();
})