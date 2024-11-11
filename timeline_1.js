var car1TL = gsap.timeline();

car1TL
   .from("#car1", { y: -60, rotation: "0deg", repeat: 1, yoyo: true, duration: 3, })
   .to("body", { backgroundColor: "rgb(192, 192, 192)", duration: 2 }, .2)

   .set(".title", { y: -20, opacity: 0 }, 0)
   .to(".title", { y: 0, opacity: 1 }, .5)

   .set(".description", { y: -20, opacity: 0 }, 0)
   .to(".description", { y: 0, opacity: 1 }, .8)

   .set(".info", { y: -20, opacity: 0 }, 0)
   .to(".info", { y: 0, opacity: 1 }, 1)

   ;

document.querySelector("#button1").addEventListener("click", function () {
   car1TL.play(0);

});




var car2TL = gsap.timeline();

car2TL
   .from("#car2", { y: -60, rotation: "0deg", repeat: 1, yoyo: true, duration: 3, })
   .to("body", { backgroundColor: "rgb(100, 178, 237)", duration: 2 }, .2)

   .set(".title", { y: -20, opacity: 0 }, 0)
   .to(".title", { y: 0, opacity: 1 }, .5)

   .set(".description", { y: -20, opacity: 0 }, 0)
   .to(".description", { y: 0, opacity: 1 }, .8)

   .set(".info", { y: -20, opacity: 0 }, 0)
   .to(".info", { y: 0, opacity: 1 }, 1)

   ;

document.querySelector("#button2").addEventListener("click", function () {
   car2TL.play(0);

});











var car3TL = gsap.timeline();

car3TL
   .from("#car3", { y: -60, rotation: "0deg", repeat: 1, yoyo: true, duration: 3, })
   .to("body", { backgroundColor: "rgb(0, 0, 0)", duration: 2 }, .2)

   .set(".title", { y: -20, opacity: 0 }, 0)
   .to(".title", { y: 0, opacity: 1 }, .5)

   .set(".description", { y: -20, opacity: 0 }, 0)
   .to(".description", { y: 0, opacity: 1 }, .8)

   .set(".info", { y: -20, opacity: 0 }, 0)
   .to(".info", { y: 0, opacity: 1 }, 1)

   ;

document.querySelector("#button3").addEventListener("click", function () {
   car3TL.play(0);

});





var car4TL = gsap.timeline();

car4TL
   .from("#car4", { y: -60, rotation: "0deg", repeat: 1, yoyo: true, duration: 3, })
   .to("body", { backgroundColor: "rgb(192, 150, 255)", duration: 2 }, .2)

   .set(".title", { y: -20, opacity: 0 }, 0)
   .to(".title", { y: 0, opacity: 1 }, .5)

   .set(".description", { y: -20, opacity: 0 }, 0)
   .to(".description", { y: 0, opacity: 1 }, .8)

   .set(".info", { y: -20, opacity: 0 }, 0)
   .to(".info", { y: 0, opacity: 1 }, 1)

   ;

document.querySelector("#button4").addEventListener("click", function () {
   car4TL.play(0);

});

var car5TL = gsap.timeline();

car5TL
   .from("#car5", { y: -60, rotation: "0deg", repeat: 1, yoyo: true, duration: 3, })
   .to("body", { backgroundColor: "rgb(128, 203, 196)", duration: 2 }, .2)

   .set(".title", { y: -20, opacity: 0 }, 0)
   .to(".title", { y: 0, opacity: 1 }, .5)

   .set(".description", { y: -20, opacity: 0 }, 0)
   .to(".description", { y: 0, opacity: 1 }, .8)

   .set(".info", { y: -20, opacity: 0 }, 0)
   .to(".info", { y: 0, opacity: 1 }, 1)

   ;

document.querySelector("#button5").addEventListener("click", function () {
   car5TL.play(0);

});