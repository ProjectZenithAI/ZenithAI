document.getElementById('downloadBtn').addEventListener('click', function () {
    const sparkles = this.querySelector('.sparkles');
    sparkles.style.opacity = '1';

    // Create additional sparkles
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.position = 'absolute';
        sparkle.style.width = '10px';
        sparkle.style.height = '10px';
        sparkle.style.background = 'white';
        sparkle.style.borderRadius = '50%';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = 'sparkle 1s ease-in-out';
        this.appendChild(sparkle);

        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    // Redirect after animation
    setTimeout(() => {
        window.location.href = 'https://your-download-link.com'; // Replace with your actual download link
    }, 1000);
}); 