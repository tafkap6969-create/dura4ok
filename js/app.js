document.getElementById('attack-btn').onclick = () => {
  if (gameState.turn !== 'player') return;

  const selected = gameState.players.player.filter(c => c.selected);
  if (!selected.length) return;

  selected.forEach(card => {
    gameState.table.push(card);
  });

  gameState.players.player =
    gameState.players.player.filter(c => !c.selected);

  gameState.turn = 'opponent';

  renderHands();
};
