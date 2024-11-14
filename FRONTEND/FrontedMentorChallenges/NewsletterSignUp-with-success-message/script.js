// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Select the form and the email input field
    const form = document.querySelector("#form");
    const emailInput = document.getElementById("email");

    // Select the success message container
    const successMsg = document.getElementById("success_msg");
    const dismissBtn = document.getElementById("dismiss");

    // Function to validate email address
    function isValidEmail(email) {
      // Regular expression for validating email address
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // Function to show success message
    function showSuccessMessage() {
      successMsg.style.display = "block"; // Show the success message
      form.style.display = "none"; // Hide the form
    }

    // Function to hide success message
    function hideSuccessMessage() {
      successMsg.style.display = "none"; // Hide the success message
      form.style.display = "inline-block"; // Show the form
    }

    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault(); // Prevent the default form submission

      const email = emailInput.value.trim(); // Get the value of the email input and remove leading/trailing whitespace

      if (isValidEmail(email)) {
        // If email is valid, show success message
        showSuccessMessage();
      } else {
        // If email is not valid, show error message
        alert("Valid email required");
      }
    }

    // Add event listener for form submission
    form.addEventListener("submit", handleSubmit);

    // Add event listener for dismiss button
    dismissBtn.addEventListener("click", hideSuccessMessage);
  });




// // Wait for the DOM to be ready
// document.addEventListener("DOMContentLoaded", function () {
//     // Select the form and the email input field
//     const form = document.querySelector("form");
//     const emailInput = document.getElementById("email");

//     // Select the success message container
//     const successMsg = document.getElementById("success_msg");

//     // Function to validate email address
//     function isValidEmail(email) {
//       // Regular expression for validating email address
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return emailRegex.test(email);
//     }

//     // Function to show success message
//     function showSuccessMessage() {
//       successMsg.style.display = "block"; // Show the success message
//       setTimeout(function () {
//         // Hide the success message after 5 seconds
//         successMsg.style.display = "none";
//       }, 5000);
//     }

//     // Function to handle form submission
//     function handleSubmit(event) {
//       event.preventDefault(); // Prevent the default form submission

//       const email = emailInput.value.trim(); // Get the value of the email input and remove leading/trailing whitespace

//       if (isValidEmail(email)) {
//         // If email is valid, show success message
//         showSuccessMessage();
//       } else {
//         // If email is not valid, show error message
//         alert("Valid email required");
//       }
//     }

//     // Add event listener for form submission
//     form.addEventListener("submit", handleSubmit);
//   });