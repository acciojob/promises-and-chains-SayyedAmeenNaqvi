//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const ageInput = document.getElementById("age").value;
  const nameInput = document.getElementById("name").value;


  if (!ageInput || !nameInput) {
    alert("Please enter valid details.");
    return;
  }

  // Create the promise
  const voterPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(ageInput) > 18) {
        resolve(`Welcome, ${nameInput}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput}. You aren't old enough.`);
      }
    }, 4000);
  });

  voterPromise
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
