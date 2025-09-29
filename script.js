const form = document.getElementById("userForm");
const btn = document.getElementById("btn");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page refresh

  const nameInput = document.getElementById("name").value.trim();
  const ageInput = parseInt(document.getElementById("age").value.trim(), 10);

  // Validation: empty, non-number, negative age
  if (!nameInput || isNaN(ageInput) || ageInput <= 0) {
    alert("Please enter valid details.");
    return;
  }

  btn.disabled = true; // disable submit while promise is pending

  const votingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageInput >= 18) {
        resolve(`Welcome, ${nameInput}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput}. You aren't old enough.`);
      }
    }, 4000);
  });

  votingPromise
    .then((message) => alert(message))
    .catch((error) => alert(error))
    .finally(() => btn.disabled = false);
});
