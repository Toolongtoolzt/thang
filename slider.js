
var carData = [
   {
      title: "BMW 3 Series (E21)",
      description: "Power: 55-105 kW / 75-143 hp",
      variants: "Sedan (2-door), Convertible (Baur Topcabriole)",
      released: 1975
   },
   {
      title: "BMW 3 Series (E30)",
      description: "Power: 66-175 kW / 90-238 hp",
      variants: "Sedan (2 and 4-door), Convertible, Baur Topcabriolet, Touring, M3 (as Coupé and Convertible)",
      released: 1982
   },
   {
      title: "BMW 3 Series (E36)",
      description: "Power: 73-236 kW / 99-321 hp",
      variants: "Sedan, Coupé, Convertible, Baur Topcabriolet, Touring, Compact, M3 (as Sedan, Coupé, and Convertible)",
      released: 1990
   },
   {
      title: "BMW 3 Series (E46)",
      description: "Power: 77-265 kW / 105-360 hp",
      variants: "Sedan, Coupé, Convertible, Touring, Compact, M3 (as Coupé and Convertible)",
      released: 1997
   },
   {
      title: "BMW 3 Series (E90)",
      description: "Power: 90-331 kW / 122-450 hp",
      variants: "Sedan, Coupé, Convertible, Touring, M3 (as Sedan, Coupé, and Convertible)",
      released: 2005
   }
];

var currSlide = 0;

function updateUI(car) {
   document.querySelector(".title").innerHTML = car.title;
   document.querySelector(".description").innerHTML = car.description;
   document.querySelector(".info").innerHTML = `Released in ${car.released}, ${car.variants} `;
}


updateUI(carData[currSlide]);

document.querySelectorAll(".year").forEach((item, index) => {
 
   item.addEventListener("click", function () {
      currSlide = index;

      
      var leftPos = (currSlide * -600) + "px";
      document.querySelector(".image_inner").style.transform = `translate(${leftPos}, 0px)`;

      updateUI(carData[currSlide]);
   });
   
});
