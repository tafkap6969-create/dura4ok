const gameState = {
  deck: [],
  trump: null,
  players: {
    player: [],
    opponent: []
  }
};

function startGame() {
  gameState.deck = createDeck();

  gameState.players.player = gameState.deck.splice(0, 6);
  gameState.players.opponent = gameState.deck.splice(0, 6);

  gameState.trump = gameState.deck[gameState.deck.length - 1];
}
