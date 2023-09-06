function Car(speed) {
   this.speed = speed;
}

Car.prototype.currentSpeed = function () {
   console.log(`Current Speed ${this.speed}`);
};

Car.prototype.accelerate = function () {
   this.speed += 10;
   this.currentSpeed();
};

Car.prototype.brake = function () {
   this.speed = this.speed - 5;
   this.currentSpeed();
};

const bmw = new Car(120);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
