// script.js
document.addEventListener('DOMContentLoaded', function () {
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseImage = document.getElementById('surpriseImage');

    surpriseButton.addEventListener('click', function () {
        // Show surprise image
        surpriseImage.src = 'surprise_image.jpg.jpeg';
        surpriseImage.style.display = 'block';

        // Play surprise song
        playHiddenAudio();

        // Hide button after the first click
        surpriseButton.style.display = 'none';

        // Create new button for additional surprises
        const newButton = document.createElement('button');
        newButton.textContent = 'Click for More Surprises!';
        newButton.id = 'moreSurprisesButton';
        newButton.addEventListener('click', function () {
            // Perform additional surprises here
            performAdditionalSurprises();
        });

        // Append new button to the birthday card
        const birthdayCard = document.querySelector('.birthday-card');
        birthdayCard.appendChild(newButton);
    });

    function playHiddenAudio() {
        const audio = new Audio('happy_birthday_song.mp3.mp3');
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    }

    function performAdditionalSurprises() {
        // Additional surprises here
        alert('Wow! More surprises coming soon...');
    }
});
