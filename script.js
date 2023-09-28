const icon = document.querySelector("[dark-theme]");
const text = document.querySelector(".dark-theme__text");
const crawlElement = document.querySelector("[crawl]"); // Находим элемент с классом "crawl"
const backgroundMusic = document.getElementById("background-music"); // Получаем элемент <audio>

icon.onclick = function () {
  document.body.classList.toggle("dark__theme__mode");

  if (document.body.classList.contains("dark__theme__mode")) {
    text.textContent = "Lights On";

    // Добавляем класс "crawl" только к элементу с классом "crawl"
    if (crawlElement) {
      crawlElement.classList.add("crawl");
    }

    // Включаем музыку при включении анимации
    backgroundMusic.play();
  } else {
    text.textContent = "Lights Off";

    // Удаляем класс "crawl" только у элемента с классом "crawl"
    if (crawlElement) {
      crawlElement.classList.remove("crawl");
    }

    // Выключаем музыку при выключении анимации, полностью сбрасывая её
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    backgroundMusic.load(); // Перезагружаем аудио, чтобы сбросить его
  }
};
