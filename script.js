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
            // Perform additional surprises
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
        // Additional surprises
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            // Show a congratulatory message
            alert('Congratulations! You found the hidden surprise! 🎉');
        } else {
            // Launch the forensic quiz
            launchForensicQuiz();
        }
    }

    function launchForensicQuiz() {
        // Questions for the forensic quiz
        const questions = [
            {
                question: "What is the first step in the forensic process?",
                options: ["Identification", "Preservation", "Collection", "Analysis"],
                correctAnswer: "Preservation"
            },
            {
                question: "Which of the following is not a type of forensic evidence?",
                options: ["DNA", "Fingerprints", "Blood type", "Testimony"],
                correctAnswer: "Testimony"
            },
            {
                question: "What does 'LOCARD's principle' state?",
                options: ["Every contact leaves a trace", "Fingerprints are unique", "The body is a crime scene", "Evidence must be preserved"],
                correctAnswer: "Every contact leaves a trace"
            }
        ];

        let score = 0;

        // Present questions to the user
        questions.forEach((questionObj, index) => {
            const userAnswer = prompt(`Question ${index + 1}: ${questionObj.question}\nOptions: ${questionObj.options.join(', ')}`);
            if (userAnswer && userAnswer.trim().toLowerCase() === questionObj.correctAnswer.toLowerCase()) {
                score++;
            }
        });

        // Display quiz results
        alert(`Forensic Quiz Results:\nYou scored ${score} out of ${questions.length}!`);

        // Display gift based on score
        displayGift(score);
    }

    function displayGift(score) {
        const giftContainer = document.createElement('div');
        giftContainer.classList.add('gift-container');
        const giftImage = document.createElement('img');
        switch (score) {
            case 3:
                giftImage.src = 'gift_3_correct.png';
                break;
            case 2:
                giftImage.src = 'gift_2_correct.png';
                break;
            case 1:
                giftImage.src = 'gift_1_correct.png';
                break;
            default:
                giftImage.src = 'gift_0_correct.png';
        }
        giftContainer.appendChild(giftImage);
        document.body.appendChild(giftContainer);
    }
});
