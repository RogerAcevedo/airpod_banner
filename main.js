//INTRO SELECTORS
const intro = document.querySelector('.intro');
const text = intro.querySelector('h1');
const video = intro.querySelector('video');

//SECTION SELECTORS
const section = document.querySelector('section');
const end = section.querySelector('h1');

// SCROLL MAGIC
const controller = new ScrollMagic.Controller();

// animation scenes 
let scene = new ScrollMagic.Scene({
    duration: 11000, //where it ends
    triggerElement: intro, 
    triggerHook: 0 //where it starts
})
// attach scenes to the controler
.addIndicators()
.setPin(intro)
.addTo(controller);

// TEXT ANIMATION
const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);


// VIDEO ANIMATIONS
    //change current frame rate of the video
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000; //divide by a thousand to have seconds
    // console.log(e);
});

// 
setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);
    video.currentTime = delay;

    // 1000 / 60(FPS)
}, 16.6)


