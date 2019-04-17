var myApp = (function myModule() {
  var count = 0;
  //show chosen shape
  function myShape(myChoice) {
    var myShape = document.getElementById("myShape");
    var currentShape = myShape.classList.value;
    if (myChoice === "circle") {
      myShape.classList.replace(currentShape, "circle");
    } else if (myChoice === "square") {
      myShape.classList.replace(currentShape, "square");
    } else {
      myShape.classList.replace(currentShape, "triangle");
    }

    console.log(myChoice);
  }

  function moveIt() {
    var ranTop = Math.random() * 550;
    var ranTopstring = ranTop.toString();
    var newTop = ranTopstring + "px";
    var ranRight = Math.random() * 750;
    var ranRightstring = ranRight.toString();
    var newRight = ranRightstring + "px";
    console.log(newTop);
    var myShape = document.getElementById("myShape");
    myShape.style.top = newTop;
    myShape.style.right = newRight;
    console.log(myShape);
    myCount(count);
  }

  function myCount(currentCount) {
    var message = document.getElementById("message");
    console.log(currentCount);
    if (currentCount < 8) {
      currentCount = currentCount + 1;
      console.log(currentCount);
    } else {
      message.innerHTML = "How about giving someone else a shot?";
      currentCount = 0;
      setTimeout(function() {
        message.innerHTML = "";
      }, 2500);
    }
    count = currentCount;
  }

  var publicAPI = {
    moveIt: moveIt,
    myShape: myShape
  };

  return publicAPI;
})();
