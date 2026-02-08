/* Countdown to today at 12:00 AM */
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const target = new Date();
  target.setHours(0, 0, 0, 0);

  const diff = target - now;

  if (diff <= 0) {
    countdownEl.textContent = "It’s Chocolate Time 🍫💖";
    return;
  }

  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

/* Floating hearts generator */
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 600);

/* Surprise logic */
const btn1 = document.getElementById("btn1");
const cards = document.getElementById("cards");
const secondBtn = document.getElementById("secondBtn");

btn1.addEventListener("click", () => {
  cards.classList.remove("hidden");
  secondBtn.classList.remove("hidden");
  showModal("🍫 Surprise! I wish I could give you a chocolate hug right now 💕");
});

/* Second surprise */
secondBtn.querySelector("button").addEventListener("click", () => {
  showModal("🥰 Fun fact: Every chocolate reminds me of you — sweet, addictive, and impossible to ignore.");
});

/* Modal */
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

function showModal(text) {
  modalText.textContent = text;
  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
