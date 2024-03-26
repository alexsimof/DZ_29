
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

const vehicle = {
  start() {
    console.log('go-go!')
  },
  stop() {
    console.log('stop!')
  },
}
function Car(brand, type, year) {
  this.brand = brand;
  this.type = type;
  this.year = year;
  this.turnOnLight = function() {
    console.log('Свет включен!')
  },
  this.turnOffLight = function() {
    console.log('Свет выключен!')
  }
}
function Bike(brand, type, year) {
  this.brand = brand;
  this.type = type;
  this.year = year;
  this.openFuelTap = function() {
    console.log('вжиик')
  },
  this.turnOnEnergy = function() {
    console.log('чик..)')
  }
}


Car.prototype = vehicle;
const audi = new Car('audi', 'hatchback', 2020);
const bike = new Bike('bmv', 'scooter', 2015);

audi.start = Car.prototype.stop;
console.log(audi)
audi.start()


// admin


function User(username, email) {

  this.username = username;
  this.email = email;

  this.login = function() {
    if (system.users.includes(this)) {
      
      this.id = Math.round(Math.random()*10)
      console.log('Вы вошли в систему!')
    } else {
      console.log('Вы не зарегистрированы в системе!')
    }
  },
  this.logout = function() {
    system.removeUser(this)
    console.log('Вы вышли из системы!')
  }
}

function System() {
  this.users = [];

  this.addUser = function(user) {
    this.users.push(user)
  }
  this.removeUser = function(user) {
    let usr = system.users.indexOf(user)
    if (usr !== -1) { this.users.splice(usr, 1) }
  }
  this.getOnLineUsers = function() {
    let id = this.users.map(user => user.id) 
    console.log(id)
  }
  
  this.getUser = function(id) {
    console.log(id)
  }

}

const system = new System()
const alex = new User('alex', 'alex@uk.ua')
const den = new User('den', 'den@gmail.com')

system.addUser(alex)
system.addUser(den)

alex.login()
den.login()

system.removeUser(alex)

console.log(system)

system.getOnLineUsers()