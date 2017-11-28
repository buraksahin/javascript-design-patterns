/*
*  Constructors Pattern Design
*/

// Create a new div element
var newDiv = document.createElement("div");

// Basic Constructor
function Car(model, year, miles){
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.toString = function(){
    return "<b>" + this.model + "</b> used <b>" + this.miles + "</b> miles and it was manufactured in <b>" + this.year + "</b>.</br>";
  };

  newDiv.innerHTML += this.toString();
}

var car1 = new Car("BMW X5", 2012, 65000);
var car2 = new Car("Mercedes-Benz E220", 2012, 55000);
var car3 = new Car("Audi A1", 2012, 50000);

// Constructors With Prototypes
function Car2(model, year, miles, color){
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.color = color;
  newDiv.innerHTML += this.toString();
}

Car2.prototype.toString = function(){
  return "<b>" + this.model + "</b> used <b>" + this.miles + "</b> miles and it was manufactured in <b>" + this.year + "</b> color is <b>" + this.color + "</b>.</br>"
};

var car4 = new Car2("Seat Leon", 2014, 20000, "White");

// Append to Body
document.body.appendChild(newDiv);
