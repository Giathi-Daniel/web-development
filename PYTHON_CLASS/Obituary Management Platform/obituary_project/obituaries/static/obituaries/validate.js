// validate.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('obituary-form'); // Assuming your form has an id of 'obituary-form'
    
    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Get form fields
        const name = document.getElementById('id_name').value;
        const dateOfBirth = document.getElementById('id_date_of_birth').value;
        const dateOfDeath = document.getElementById('id_date_of_death').value;
        const content = document.getElementById('id_content').value;
        const author = document.getElementById('id_author').value;

        // Clear previous error messages
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        // Validate Name
        if (!name.trim()) {
            displayError('id_name', 'Name is required.');
            isValid = false;
        }

        // Validate Date of Birth
        if (!dateOfBirth) {
            displayError('id_date_of_birth', 'Date of Birth is required.');
            isValid = false;
        } else if (!isValidDate(dateOfBirth)) {
            displayError('id_date_of_birth', 'Invalid Date of Birth.');
            isValid = false;
        }

        // Validate Date of Death
        if (!dateOfDeath) {
            displayError('id_date_of_death', 'Date of Death is required.');
            isValid = false;
        } else if (!isValidDate(dateOfDeath)) {
            displayError('id_date_of_death', 'Invalid Date of Death.');
            isValid = false;
        }

        // Validate Content
        if (!content.trim()) {
            displayError('id_content', 'Content is required.');
            isValid = false;
        }

        // Validate Author
        if (!author.trim()) {
            displayError('id_author', 'Author is required.');
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Function to display error messages
    function displayError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        field.parentElement.appendChild(error);
    }

    // Function to check if the date is valid
    function isValidDate(dateString) {
        const regex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
        if (!dateString.match(regex)) return false;
        const date = new Date(dateString);
        return date.toISOString().slice(0, 10) === dateString;
    }
});
