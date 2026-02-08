// Navigation Logic
function nextSection(id) {
    // Hide all sections
    document.querySelectorAll('section').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    
    // Show the target section
    const target = document.getElementById(id);
    target.classList.remove('hidden');
    target.classList.add('active');
    
    // Trigger heart explosion
    createHearts();
}

function resetGame() {
    nextSection('hero');
}

// Heart Animation Logic
function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        heart.style.opacity = Math.random();
        document.getElementById('heart-container').appendChild(heart);
        
        // Cleanup memory
        setTimeout(() => heart.remove(), 4000);
    }
}
