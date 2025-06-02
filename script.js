const levels = [
  { question: "Рівень 1: Ти знаходиш першу підказку. Куди підеш?", options: ["Кімната", "Коридор", "Кухня"], answer: "Кімната" },
  { question: "Рівень 2: Ти опитуєш свідка. Що запитаєш?", options: ["Де був?", "Що бачив?", "Чи чув щось?"], answer: "Що бачив?" },
  { question: "Рівень 3: Злочинець залишив слід. Який це слід?", options: ["Відбиток взуття", "Волосся", "Пляма крові"], answer: "Відбиток взуття" },
  { question: "Рівень 4: Ти оглядаєш кімнату. Що знайдеш?", options: ["Лист", "Ніж", "Записку"], answer: "Лист" },
  { question: "Рівень 5: Хто підозрюваний?", options: ["Садівник", "Домробітниця", "Власник"], answer: "Власник" },
  { question: "Рівень 6: Знайдено ключ. Куди він веде?", options: ["Підвал", "Гараж", "Кімната на горі"], answer: "Підвал" },
  { question: "Рівень 7: Ти отримуєш дзвінок. Що скажеш?", options: ["Хто дзвонить?", "Що трапилось?", "Чекай мене там"], answer: "Хто дзвонить?" },
  { question: "Рівень 8: Потрібно вибрати інструмент для злому. Який вибереш?", options: ["Відмичка", "Молоток", "Шпилька"], answer: "Відмичка" },
  { question: "Рівень 9: Злочинець намагається втекти. Що робиш?", options: ["Погоня", "Виклик поліції", "Блокувати вихід"], answer: "Виклик поліції" },
  { question: "Рівень 10: Фінальне рішення. Кого звинувати?", options: ["Садівник", "Домробітниця", "Власник"], answer: "Власник" }
];

let currentLevel = 0;
let score = 0;

const levelText = document.getElementById("level-text");
const optionsDiv = document.getElementById("options");
const startBtn = document.getElementById("start-btn");
const resultDiv = document.getElementById("result");

startBtn.addEventListener("click", () => {
  currentLevel = 0;
  score = 0;
  startBtn.style.display = "none";
  resultDiv.innerText = "";
  showLevel();
});

function showLevel() {
  if (currentLevel >= levels.length) {
    finishGame();
    return;
  }

  const level = levels[currentLevel];
  levelText.innerText = level.question;
  optionsDiv.innerHTML = "";

  level.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => handleChoice(option);
    optionsDiv.appendChild(btn);
  });
}

function handleChoice(choice) {
  const correct = choice === levels[currentLevel].answer;
  if (correct) score++;
  currentLevel++;
  showLevel();
}

function finishGame() {
  levelText.innerText = "Гру завершено!";
  optionsDiv.innerHTML = "";
  startBtn.style.display = "block";

  if (score >= 8) {
    resultDiv.innerText = `🔚 Фінал: Ви – геніальний детектив! (${score}/10)`;
  } else if (score >= 5) {
    resultDiv.innerText = `🔚 Фінал: Добра робота. Майже все розкрито. (${score}/10)`;
  } else {
    resultDiv.innerText = `🔚 Фінал: Справу не розкрито. (${score}/10)`;
  }
}
