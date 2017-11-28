/*
*  Creational Pattern Design
*/

// Create new objects
var newObject = {};
var newObject = Object.create(null);
var newObject = new Object();

// Create new element
var newDiv = document.createElement("div");

// #1 Dot syntax
newObject.someThing1 = '<h4>Dot Syntax</h4>';
newDiv.innerHTML = newObject.someThing1;

// #2 Square bracket syntax
newObject['someThing2'] = '<h4>Square bracket syntax</h4>';
newDiv.innerHTML += newObject.someThing2;

// #3 Object.defineProperty
Object.defineProperty(newObject, 'someThing3', {
    value: "<h4>won't change</h4>",
    writable: false, // not change
    enumerable: true,
    configurable: true
  }
);
newObject.someThing3 = 'changed'
newDiv.innerHTML += newObject.someThing3;

// Define a new Property
// obj:Object, key:Key/Name of the new Property, value:Value of the new Property -> Object
var defineProp = function (obj, key, value){
  Object.defineProperty(obj, key,
    {
      value: value,
      writable: true,
      enumerable: false,
      configurable: true
    }
  );
}

// Create a new empty object
var newObject2 = Object.create(null);
// Define a new property
defineProp(newObject, 'someThing4', '<h4>SomeThing4</h4>')
newDiv.innerHTML += newObject.someThing4;

// Append newDiv to Body
document.body.appendChild(newDiv);
// Console Log
console.log(newObject);
