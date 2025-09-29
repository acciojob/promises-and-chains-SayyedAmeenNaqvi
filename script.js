// Get form element
const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form refresh

  const nameInput = document.getElementById("name").value.trim();
  const ageInput = document.getElementById("age").value.trim();


  if (!nameInput || !ageInput) {
    alert("Please enter valid details.");
    return;
  }


  const votingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(ageInput) > 18) {
        resolve(`Welcome, ${nameInput}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput}. You aren't old enough.`);
      }
    }, 4000);
  });

 
  votingPromise
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
