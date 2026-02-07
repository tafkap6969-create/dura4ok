const tg = window.Telegram ? window.Telegram.WebApp : null;

if (tg) {
  tg.ready();
  tg.expand();
  tg.setBackgroundColor('#0b6623');
  tg.setHeaderColor('#0b6623');
}

const user = tg?.initDataUnsafe?.user;

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const userText = document.getElementById('user');
const startBtn = document.getElementById('start-btn');

const playerHand = document.getElementById('player-hand');
const opponentHand = document.getElementById('opponent-hand');

if (user) {
  userText.innerText = `Привет, ${user.first_name} 👋`;
}

startBtn.onclick = () => {
  startScreen.classList.remove('active');
  gameScreen.classList.add('active');

  dealPlayerCards();
  dealOpponentCards();
};

function dealPlayerCards() {
  playerHand.innerHTML = '';
  const cards = ['6♠', '7♥', '8♦', '9♣', '10♠', 'J♥'];

  cards.forEach(card => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerText = card;
    playerHand.appendChild(el);
  });
}

playerHand.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;

  // снять выделение со всех
  playerHand
    .querySelectorAll('.card')
    .forEach(c => c.classList.remove('selected'));

  // выбрать текущую
  card.classList.add('selected');
});

function dealOpponentCards() {
  opponentHand.innerHTML = '';

  const count = 6;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'card back';
    opponentHand.appendChild(el);
  }
}
