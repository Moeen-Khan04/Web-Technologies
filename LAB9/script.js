    // Task 1 Functions
    function changeColor(el) {
      el.style.backgroundColor = "orange";
    }

    function resize(el) {
      el.style.transform = "scale(1.5)";
    }

    function resetSize(el) {
      el.style.transform = "scale(1)";
    }

    function toggleText(el) {
      el.innerText = el.innerText === "Toggle Text" ? "Changed!" : "Toggle Text";
    }

    // Task 2: Callback Functions
    function changeBackground() {
      document.body.style.backgroundColor = "red";
      showMessage("Background changed!");
    }

    function playSound() {
      const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
      audio.play();
      showMessage("Sound played!");
    }

    function showTime() {
      const now = new Date();
      showMessage("Current time: " + now.toLocaleTimeString());
    }

    // Higher-order function with conditional routing
    function runAction(type) {
      const actions = {
        color: changeBackground,
        sound: playSound,
        data: showTime
      };

      switch (type) {
        case 'color':
        case 'sound':
        case 'data':
          actions[type](); // callback execution
          break;
        default:
          showMessage("Unknown action.");
      }
    }

    function showMessage(msg) {
      document.getElementById("output").innerText = msg;
    }