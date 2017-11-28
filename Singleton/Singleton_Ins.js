/*
*  Singleton Pattern Design
*/

// Create a new div element
var div1 = document.createElement("div");

var Singleton = (function(){
  var instantiated;
  function init(){
    return{
      publicMethod: function(){
        return 'Public Method</br>';
      },
      publicProperty: 'Public Property</br>'
    };
  }

  return {
    getInstance: function () {
      if (!instantiated){
        instantiated = init();
      }
      return instantiated;
    }
  };
})();

// Call getInstance().publicMethod()
div1.innerHTML += Singleton.getInstance().publicMethod();
div1.innerHTML += Singleton.getInstance().publicProperty;
// Append to Body
document.body.appendChild(div1);
