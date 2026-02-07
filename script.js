const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const user = tg.initDataUnsafe?.user;

if (user) {
  document.getElementById('user').innerText =
    `Привет, ${user.first_name} 👋`;
}

document.getElementById('play').onclick = () => {
  tg.showAlert("Скоро начнём играть 🎴");
};
