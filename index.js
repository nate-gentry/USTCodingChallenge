window.onload = function () {
  var elements = document.getElementsByTagName("li");
  var screen = document.querySelectorAll(" p")[0];
  var screenInput = document.querySelectorAll(" p")[1];
  var clear = document.getElementsByClassName("clear")[0];
  var undo = document.getElementsByClassName("undo")[0];

  window.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      screenInput.innerHTML = eval(screen.innerHTML);
    }
  });
  window.addEventListener("keydown", (event) => {
    if (event.key == "Backspace") {
      screenInput.innerHTML = "";
    }
  });

  for (var i = 0; i < elements.length; i += 1) {
    if (elements[i].innerHTML === "enter") {
      elements[i].addEventListener("click", calculate(i));
    } else if (elements[i].innerHTML === "=") {
      elements[i].addEventListener("click", calculate(i));
    } else if (elements[i].innerHTML === "enter") {
      screenInput.innerHTML = eval(screen.innerHTML);
    } else {
      elements[i].addEventListener("click", addtocurrentvalue(i));
    }
  }

  function addtocurrentvalue(i) {
    return function () {
      if (elements[i].innerHTML === "/") {
        screen.innerHTML += "/ ";
      } else if (elements[i].innerHTML === "x") {
        screen.innerHTML += "*";
      } else {
        screen.innerHTML += elements[i].innerHTML;
      }
    };
  }

  clear.onclick = function () {
    screen.innerHTML = "";
  };

  undo.onclick = function () {
    screen.innerHTML = "";
  };

  function calculate(i) {
    return function () {
      screen.innerHTML = eval(screen.innerHTML);
    };
  }
};
