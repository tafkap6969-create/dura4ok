function renderHands() {
  renderPlayerHand();
  renderOpponentHand();
  renderTable();

  document.getElementById('trump').innerText =
    'Козырь: ' + gameState.trump.value + gameState.trump.suit;
}

function renderPlayerHand() {
  const hand = document.getElementById('player-hand');
  hand.innerHTML = '';

  gameState.players.player.forEach((card, index) => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerText = card.value + card.suit;

    el.onclick = () => toggleSelect(index, el);

    if (card.selected) el.classList.add('selected');

    hand.appendChild(el);
  });
}

function renderOpponentHand() {
  const hand = document.getElementById('opponent-hand');
  hand.innerHTML = '';

  gameState.players.opponent.forEach(() => {
    const el = document.createElement('div');
    el.className = 'card back';
    hand.appendChild(el);
  });
}

function renderTable() {
  const battle = document.getElementById('battle');
  battle.innerHTML = '';

  gameState.table.forEach(card => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerText = card.value + card.suit;
    battle.appendChild(el);
  });
}

function toggleSelect(index) {
  const card = gameState.players.player[index];
  card.selected = !card.selected;
  renderPlayerHand();
}
