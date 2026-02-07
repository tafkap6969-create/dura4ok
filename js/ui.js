function renderHands() {
  const playerHand = document.getElementById('player-hand');
  const opponentHand = document.getElementById('opponent-hand');

  playerHand.innerHTML = '';
  opponentHand.innerHTML = '';

  gameState.players.player.forEach(card => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerText = card.value + card.suit;
    playerHand.appendChild(el);
  });

  gameState.players.opponent.forEach(() => {
    const el = document.createElement('div');
    el.className = 'card back';
    opponentHand.appendChild(el);
  });

  document.getElementById('trump').innerText =
    'Козырь: ' + gameState.trump.value + gameState.trump.suit;
}
