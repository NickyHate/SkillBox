class Transport {
  constructor(speed, weight, size) {
    this.speed = "Скорость транспортного средства: " + speed + "км/ч";
    this.weight = "Вес транспортного средства: " + weight + "т";
    this.size = "Размер транспортного средства: " + size + "м";
  }
  getOptions = function() {
    return this.speed + " " + this.weight + " " + this.size;
  };
  runEngine = function() {
    return alert("пшпш врум врум");
  };
  getMove = function() {
    document.querySelector(".car").classList.toggle("move");
    alert("Едет по дороге");
  };
}

class Car extends Transport {}

var car = new Car(200, 4, 7);

class Plain extends Transport {
  getMove = function() {
    document.querySelector(".plain").classList.add("move");
    alert("Летит по воздуху");
  };
}

var plain = new Plain(500, 30, 70);

class Ship extends Transport {
  getMove = function() {
    document.querySelector(".ship").classList.add("move");
    alert("Плывёт по воде");
  };
}

var ship = new Ship(150, 60, 200);
