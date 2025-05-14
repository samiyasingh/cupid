// Get the form and inputs
const form = document.getElementById('feedback-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('msg');
const responseParagraph = document.getElementById('response');  // To display the response

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    const name = nameInput.value;
    const email = emailInput.value;
    const msg = msgInput.value;

    // Display feedback on the page
    responseParagraph.innerHTML = `
        <strong>Thank you for your feedback!</strong><br>
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Message:</strong> ${msg}
    `;

    // Reset form fields after submission
    form.reset();
});
