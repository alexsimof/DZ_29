
// const vehicle = {
//   start() {
//     console.log('Поехали!')
//   },
//   stop() {
//     console.log('Стоп!')
//   },
// }

// const car = {
//   turnOnLight() {
//     console.log('Свет включен!')
//   },
//   turnOffLight() {
//     console.log('Свет выключен!')
//   },
// }

// const bike = {
//   openFuelTap() {
//     console.log('вжиик')
//   },
//   turnOnEnergy() {
//     console.log('чик..)')
//   },
// }

// const sedan = {}
// const pickUp = {}
// const scooter = {}
// const chopper = {}

// car.__proto__ = vehicle;
// bike.__proto__ = vehicle;
// sedan.__proto__ = car;
// pickUp.__proto__ = car;
// scooter.__proto__ = bike;
// chopper.__proto__ = bike;

// Object.setPrototypeOf(car, vehicle);
// Object.setPrototypeOf(bike, vehicle);
// Object.setPrototypeOf(sedan, car);
// Object.setPrototypeOf(scooter, bike);
// Object.setPrototypeOf(chopper, bike);

//

const vehicle = new Vehicle();
const car = new Car();
const bike = new Bike();
const sedan = new Sedan();
const pickUp = new PickUp();
const scooter = new Scooter();
const chopper = new Chopper();

function Vehicle() {
  this.start = function() {
    console.log('go-go!')
  },
  this.stop = function() {
    console.log('stop!')
  }
}
function Car() {
  this.turnOnLight = function() {
    console.log('Свет включен!')
  },
  this.turnOffLight = function() {
    console.log('Свет выключен!')
  }
}
function Bike() {
  this.openFuelTap = function() {
    console.log('вжиик')
  },
  this.turnOnEnergy = function() {
    console.log('чик..)')
  }
}
