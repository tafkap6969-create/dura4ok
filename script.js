const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const user = tg.initDataUnsafe?.user;

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const userText = document.getElementById('user');
const startBtn = document.getElementById('start-btn');

if (user) {
  userText.innerText = `Привет, ${user.first_name} 👋`;
}

startBtn.onclick = () => {
  startScreen.classList.remove('active');
  gameScreen.classList.add('active');
};

const playerHand = document.querySelector('.player .hand');

const cards = ['6♠', '7♥', '8♦', '9♣', '10♠', 'J♥'];

cards.forEach(card => {
  const el = document.createElement('div');
  el.className = 'card';
  el.innerText = card;

  el.onclick = () => {
    el.style.transform = 'translateY(-10px)';
  };

  playerHand.appendChild(el);
});
