const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  tg.setBackgroundColor('#0b6623');
  tg.setHeaderColor('#0b6623');
}

const user = tg?.initDataUnsafe?.user;
const userText = document.getElementById('user');
const startBtn = document.getElementById('start-btn');

if (user) {
  userText.innerText = `Привет, ${user.first_name} 👋`;
}

startBtn.onclick = () => {
  document.getElementById('start-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');

  startGame();
  renderHands();
};
