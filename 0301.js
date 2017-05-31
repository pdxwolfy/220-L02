"use strict";

/* eslint-disable no-magic-numbers */

function makeCar(accelerationRate) {
  return {
    speed: 0,
    rate: accelerationRate,

    accelerate: function () {
      this.speed += this.rate;
    },
  };
}

var sedan = makeCar(8);
sedan.accelerate();
sedan.accelerate();
sedan.accelerate();
console.log(sedan);

var coupe = makeCar(12);
coupe.accelerate();
coupe.accelerate();
coupe.accelerate();
coupe.accelerate();
console.log(coupe);
