/*
*  Singleton Pattern Design
*/

// Create a new div element
var newDiv = document.createElement("div");

var basicSingleton = function () {
  var privateVar = 'private variable';
  function privateMethod(){
    return privateVar;
  }
  return {
    showVariable: function (){
      return privateMethod();
    },
    publicVar: 'public variable'
  };
};

// Create a new basicSingleton
var bSingleton = basicSingleton();
newDiv.innerHTML += bSingleton.showVariable();

// Append to Body
document.body.appendChild(newDiv);
