// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  // Код тут.
  this.driver = driver;
  this.speed = 0;
  this.drive = function (kmh) {
    // Код тут.
    this.speed = kmh;
    return `${this.driver} driving at ${this.speed} kilometers per hour`;
  };
  this.stop = function () {
    // Код тут.
    this.speed = 0;
    return `${this.driver} has stopped`;
  };
}
function Train(driver) {
  // Код тут.
  Vehicle.call(this, driver);
}
Train.prototype = Object.create(Vehicle.prototype);
Train.prototype.constructor = Train;

function Truck(driver) {
  // Код тут.
  Vehicle.call(this, driver);
  this.cargo = [];
}
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.loadCargo = function (cargo) {
  // Код тут.
  this.cargo.push(cargo);
  return this.cargo;
};
Truck.prototype.unloadCargo = function () {
  // Код тут.
  const lastCargo = this.cargo.at(-1);
  this.cargo.pop();
  return lastCargo;
};
// экспорт Vehicle, Train, Truc в файл с тестами
module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
