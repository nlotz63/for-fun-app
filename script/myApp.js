var myApp = (function myModule() {
  var count = 0;
  var resultsArray = [];

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
    var ranTopstring = ranTop.toFixed(0).toString();
    var newTop = ranTopstring + "px";
    var ranRight = Math.random() * 750;
    var ranRightstring = ranRight.toFixed(0).toString();
    var newRight = ranRightstring + "px";
    resultsArray.push("Top is " + newTop + " Right is " + newRight);
    console.log(resultsArray);
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
      currentCount ++;
      console.log(currentCount);
    } else {
      message.innerHTML = "How about giving someone else a shot?<br/>";
      currentCount = 0;
      setTimeout(function() {
        message.innerHTML = "";
      }, 2500);
    }
    count = currentCount;
  }

  function showResults() {
    var results = document.getElementById("results");
    var rows = resultsArray.length;
    for (let i = 0; i< rows; i++) {
      var node = document.createElement("P");
      var textnode = document.createTextNode(resultsArray[i]);
  node.appendChild(textnode);
      results.appendChild(node);
      console.log("move it called");
    }
  }

  function reset () {
    var results = document.getElementById("results");
    resultsArray = [];
    count = 0;
    results.innerHTML = "";

  }

  var publicAPI = {
    moveIt: moveIt,
    myShape: myShape,
    showResults: showResults,
    reset: reset
  };

  return publicAPI;
})();
