document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');
    const progressBar = document.getElementById('progressBar');
    const progressBarContainer = document.getElementById('progressBarContainer');

    let progress = 0;

    startButton.addEventListener('click', function() {
        if (progress < 100) {
            progress += 15;
            progressBar.style.width = `${progress}%`;
        }

        if (progress >= 100) {
            restartButton.style.display = 'block';
        }
    });

    restartButton.addEventListener('click', function() {
        progress = 0;
        progressBar.style.width = '0%';
        restartButton.style.display = 'none';
    });
});
