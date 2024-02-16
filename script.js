window.onload = function () {
  var img = document.querySelector("img");
  var yesButton = document.getElementById("yes");
  var noButton = document.getElementById("no");
  var h1 = document.getElementById("h1");

  var scale = 1;
  var messages = [
    "Нет????",
    "Нет, не делай этого!",
    "Если ты скажешь нет, мне будет грустно",
    "Мне будет очень грустно",
    "Мне будет очень, очень, очень грустно",
    "Мне будет очень, очень, очень грустно",
    "Пожалуйста",
    "Ты уверена?",
    "Действительно уверена??",
    "Дашуль, не делай этого",
    "Я убью твоего кота",
    "Ты разбиваешь мне сердце",
    "Хорошо, я перестану спрашивать...",
    "Просто шучу",
    "Пожалуйста",
    "Мне будет очень, очень, очень грустно",
    "Пожалуйста",
    "Нет",
    "Пускай",
    "Ты будешь моей, хе-хе",
  ];
  var currentIndex = 0;

  yesButton.addEventListener("click", function () {
    if (this.textContent === "Да") {
      this.textContent = "Реально?";
      img.src = "Yes.png";
    } else if (this.textContent === "Реально?") {
      this.textContent = "Ура!";
      img.src = "Yes2.png";
    } else if (this.textContent === "Ура!") {
      this.textContent = "Я люблю тебя!";
    } else {
      document.body.innerHTML =
        "<div style='text-align: center; color: black;'><img src='Yes3.gif' alt='Love Image' style='max-width: 100%; height: auto;'><h1>Я люблю тебя , Дашуль!</h1></div>";
    }
  });

  noButton.addEventListener("click", function () {
    // Update "No" button text
    this.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;

    // Resize "Yes" button
    var newWidth =
      parseInt(yesButton.style.width || yesButton.offsetWidth) + 40; // Increase by 40px
    var newHeight =
      parseInt(yesButton.style.height || yesButton.offsetHeight) + 25; // Increase by 25px
    yesButton.style.width = newWidth + "px";
    yesButton.style.height = newHeight + "px";

    // Resize button text
    var fontSize = parseInt(window.getComputedStyle(yesButton).fontSize) + 2; // Increase by 2px
    yesButton.style.fontSize = fontSize + "px";

    // Check if "Yes" button occupies 75% of the screen
    if (
      newWidth >= window.innerWidth * 0.75 ||
      newHeight >= window.innerHeight * 0.75
    ) {
      yesButton.style.width = "100vw";
      yesButton.style.height = "100vh";
      yesButton.style.fontSize = "5em"; // Adjust font size for full screen
      yesButton.textContent = "Да";
      noButton.style.display = "none";
      img.style.display = "none";
      h1.style.display = "none";

      // Change content on "Yes" button click when full screen
      yesButton.onclick = function () {
        document.body.innerHTML =
          "<div style='text-align: center; color: black;'><h1>Я люблю тебя , Дашуль!</h1><img src='Yes2.png' alt='Love Image' style='max-width: 100%; height: auto;'></div>";
      };
    }
  });
};
