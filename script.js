    const form = document.getElementById('feedback-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const msgInput = document.getElementById('msg');
    const responseParagraph = document.getElementById('response');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

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

        form.reset();
    });

    function checkCity() {
        const cityInput = document.getElementById('city').value.trim().toLowerCase();
        const response = document.getElementById('city-response');

        const availableCities = ['lucknow', 'bangalore', 'delhi'];

        if (cityInput === '') {
            response.innerHTML = '<span style="color:red;">Please enter a city.</span>';
        } else if (availableCities.includes(cityInput)) {
            response.innerHTML = `
                <strong>Great news!</strong> We deliver in <b>${cityInput.charAt(0).toUpperCase() + cityInput.slice(1)}</b>! 🚚🌸🍕
            `;
        } else {
            response.innerHTML = `
                <span style="color:orange;">Sorry, we're not available in <b>${cityInput}</b> yet.</span>
            `;
        }
    }

        function addToCart(itemName) {
            alert(`${itemName} added to cart! 🛒`);
        }

