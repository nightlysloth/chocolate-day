// 1. Countdown Logic
const targetDate = new Date("February 9, 2026 00:00:00").getTime();

const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "IT'S CHOCOLATE DAY! 🍫";
        document.getElementById("start-btn").classList.remove("hidden");
    }
}, 1000);

// For testing: Uncomment the line below to skip countdown
// document.getElementById("start-btn").classList.remove("hidden");

// 2. Navigation Logic
function nextSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('active');
    createHearts();
}

function resetGame() {
    nextSection('hero');
}

// 3. Eye-Candy: Floating Hearts
function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.getElementById('heart-container').appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
}
