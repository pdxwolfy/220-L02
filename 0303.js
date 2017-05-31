"use strict";

/* eslint-disable no-magic-numbers */

function makeCar(accelerationRate) {
  return {
    speed: 0,
    rate: accelerationRate,

    accelerate: function () {
      this.speed += this.rate;
    },

    brake: function () {
      this.speed = (this.speed <= this.rate) ? 0 : (this.speed - this.rate);
    },
  };
}

var sedan = makeCar(8);
sedan.accelerate();
sedan.accelerate();
sedan.accelerate();
sedan.brake();
console.log(sedan);

var coupe = makeCar(12);
coupe.accelerate();
coupe.accelerate();
coupe.accelerate();
coupe.accelerate();
coupe.brake();
coupe.brake();
coupe.brake();
console.log(coupe);

var hatchback = makeCar(9);
hatchback.accelerate();
hatchback.accelerate();
hatchback.brake();
hatchback.brake();
console.log(hatchback);
hatchback.brake();
hatchback.brake();
console.log(hatchback);
