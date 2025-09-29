// script.js

// Get DOM elements
const form = document.getElementById('age-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitButton = document.getElementById('btn');

// Constants
const VOTE_AGE = 18;
const DELAY_MS = 4000; // 4 seconds

/**
 * Creates a promise that resolves or rejects based on the user's age after a 4-second delay.
 * @param {string} name - The user's name.
 * @param {number} age - The user's age.
 * @returns {Promise<string>} A Promise that resolves with a welcome message or rejects with a sorry message.
 */
function checkVotingEligibility(name, age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= VOTE_AGE) {
                // Resolve case (Age >= 18)
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                // Reject case (Age < 18)
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, DELAY_MS);
    });
}

// Event listener for form submission
form.addEventListener('submit', async (event) => {
    // Prevent default form submission
    event.preventDefault();

    const name = nameInput.value.trim();
    // Use parseInt() to ensure age is treated as a number
    const age = parseInt(ageInput.value, 10);

    // 2. Validation: Check for empty inputs or invalid age
    if (name === '' || isNaN(age) || ageInput.value.trim() === '') {
        alert("Please enter valid details.");
        return; // Stop execution if validation fails
    }

    // Disable button to prevent multiple submissions during the delay
    submitButton.disabled = true;
    submitButton.textContent = 'Processing...';

    // 3. Promise Logic: Call the promise function and handle resolution/rejection
    try {
        const successMessage = await checkVotingEligibility(name, age);
        // Success Case (resolve)
        alert(successMessage);
    } catch (errorMessage) {
        // Failure Case (reject)
        alert(errorMessage);
    } finally {
        // Re-enable the button after the promise is settled (resolved or rejected)
        submitButton.disabled = false;
        submitButton.textContent = 'Check Eligibility';
    }
});