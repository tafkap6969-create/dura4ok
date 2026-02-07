const SUITS = ['♠', '♥', '♦', '♣'];
const VALUES = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
  const deck = [];
  SUITS.forEach(suit => {
    VALUES.forEach(value => {
      deck.push({ value, suit });
    });
  });
  return shuffle(deck);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
