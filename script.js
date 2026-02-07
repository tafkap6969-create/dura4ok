const tg = window.Telegram ? window.Telegram.WebApp : null;

if (tg) {
  tg.setBackgroundColor('#0b6623');
  tg.setHeaderColor('#0b6623');
}

const user = tg?.initDataUnsafe?.user;

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const userText = document.getElementById('user');
const startBtn = document.getElementById('start-btn');

if (!startScreen || !gameScreen || !startBtn) {
  console.error('❌ Не найдены элементы экрана');
  throw new Error('Screen elements missing');
}

if (user && userText) {
  userText.innerText = `Привет, ${user.first_name} 👋`;
}

startBtn.onclick = () => {
  startScreen.classList.remove('active');
  gameScreen.classList.add('active');

  dealCards(); // ⬅️ ВАЖНО
};

function dealCards() {
  const playerHand = document.querySelector('.player .hand');
  playerHand.innerHTML = '';

  const cards = ['6♠', '7♥', '8♦', '9♣', '10♠', 'J♥'];

  cards.forEach(card => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerText = card;

    el.onclick = () => {
      el.classList.toggle('selected');
    };

    playerHand.appendChild(el);
  });
}
