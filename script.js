// Параметры персонажа
let stats = {
  hunger: 50,
  mood: 50,
  energy: 50
};

// Обновляем статистику
function updateStats() {
  // Прогресс-бары
  document.querySelector(".hunger-bar").style.width = `${stats.hunger}%`;
  document.querySelector(".mood-bar").style.width = `${stats.mood}%`;
  document.querySelector(".energy-bar").style.width = `${stats.energy}%`;
  
  // Числовые значения
  document.getElementById("hunger-value").textContent = stats.hunger;
  document.getElementById("mood-value").textContent = stats.mood;
  document.getElementById("energy-value").textContent = stats.energy;
  
  // Персонаж
  const characterImg = document.getElementById("character-img");
  if (stats.mood < 30) {
    characterImg.src = "images/character_sad.png";
  } else if (stats.hunger < 30) {
    characterImg.src = "images/character_hungry.png";
  } else {
    characterImg.src = "images/character_happy.png";
  }
}

// Действия игрока
function feed() {
  stats.hunger = Math.min(stats.hunger + 20, 100);
  stats.energy = Math.min(stats.energy + 10, 100); // Энергия ВОССТАНАВЛИВАЕТСЯ
  showMessage("Ням-ням! (+20 к сытости, +10 к энергии) 🍙");
  document.getElementById("eat-sound").play(); // Звук еды
  updateStats();
}

function pet() {
  stats.mood = Math.min(stats.mood + 15, 100);
  showMessage("Мур-мур~ (+15 к настроению) 💖");
  document.getElementById("meow-sound").play(); // Звук мурчания
  updateStats();
}

function play() {
  stats.mood = Math.min(stats.mood + 10, 100);
  stats.energy = Math.max(stats.energy - 10, 0);
  showMessage("Ура! Играем! (+10 к настроению, -10 к энергии) 🎲");
  document.getElementById("play-sound").play(); // Звук игры
  updateStats();
}

// Сообщения
function showMessage(text) {
  const messageBox = document.getElementById("message");
  messageBox.textContent = text;
  messageBox.classList.add("show");
  setTimeout(() => {
    messageBox.classList.remove("show");
  }, 2000);
}

// Игровой цикл (уменьшение параметров)
setInterval(() => {
  stats.hunger = Math.max(stats.hunger - 2, 0);
  stats.mood = Math.max(stats.mood - 1, 0);
  stats.energy = Math.max(stats.energy - 1, 0);
  updateStats();
}, 3000);

// Инициализация
updateStats();