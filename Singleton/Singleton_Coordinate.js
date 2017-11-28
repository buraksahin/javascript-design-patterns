/*
*  Singleton Pattern Design
*/

// Create a new div element
var div1 = document.createElement("div");

var SingletonTester = (function(){
  function Singleton(options) {
    options = options || {};
    this.name = 'dc';
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
    this.deneme = {name: 'at', name2: 'sik'};
  }
  var instance;
  var _static = {
    name: 'SingletjjjonTester',
    // This is a method for getting an instance
    // It returns a singleton instance of a singleton object
    getInstance: function(options){
      if (instance === undefined){
        instance = new Singleton(options);
      }
      return instance;
    },
  };
  return _static;
})();
//var singletonTest = SingletonTester.getInstance({pointX: 1, pointerY: 2});
console.log(SingletonTester); // outputs 5

// Call getInstance().publicMethod()
div1.innerHTML += Singleton.getInstance().publicMethod();
div1.innerHTML += Singleton.getInstance().publicProperty;
// Append to Body
document.body.appendChild(div1);
