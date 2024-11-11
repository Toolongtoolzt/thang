
function createcarTimeline(carId, bgColor) {
   var tl = gsap.timeline({ paused: true });

   tl.from(carId, { y: -40, rotation: "0deg", repeat: -1, yoyo: true, duration: 3 })
     .to("body", { backgroundColor: bgColor, duration: 2 }, 0.2)
     .set(".title", { y: -20, opacity: 0 }, 0)
     .to(".title", { y: 0, opacity: 1 }, 0.5)
     .set(".description", { y: -20, opacity: 0 }, 0)
     .to(".description", { y: 0, opacity: 1 }, 0.8)
     .set(".info", { y: -20, opacity: 0 }, 0)
     .to(".info", { y: 0, opacity: 1 }, 1);

   return tl;
}


var car1TL = createcarTimeline("#car1", "rgb(192, 192, 192)");
var car2TL = createcarTimeline("#car2", "rgb(100, 178, 237)");
var car3TL = createcarTimeline("#car3", "rgb(0, 0,0 )");
var car4TL = createcarTimeline("#car4", "rgb(192, 150, 255 )");
var car5TL = createcarTimeline("#car5", "rgb(128, 203, 196 )");


document.querySelector("#button1").addEventListener("click", function () {
   car1TL.play(0);
});

document.querySelector("#button2").addEventListener("click", function () {
   car2TL.play(0);
});

document.querySelector("#button3").addEventListener("click", function () {
   car3TL.play(0);
});

document.querySelector("#button4").addEventListener("click", function () {
   car4TL.play(0);
});

document.querySelector("#button5").addEventListener("click", function () {
   car5TL.play(0);
});