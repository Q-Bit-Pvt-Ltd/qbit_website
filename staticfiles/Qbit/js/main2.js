document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const failureMessage = document.getElementById('failureMessage');

    // Hide success and failure messages initially
    successMessage.style.display = 'none';
    failureMessage.style.display = 'none';

    // Form submit handler
    form.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevent default form submission

        const formData = new FormData(form);

        // Send the form data using Fetch API (AJAX)
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'  // Ensure it is recognized as AJAX
            }
        })
        .then(response => response.json())  // Parse response as JSON
        .then(data => {
            console.log(data);  // For debugging purposes
            if (data.success) {
                successMessage.style.display = 'block';
                failureMessage.style.display = 'none';
                form.style.display = 'none';  // Hide the form after submission

                // Optionally, redirect after a delay
                setTimeout(() => {
                    window.location.href = '/';  // Redirect to the homepage
                }, 3000);
            } else {
                failureMessage.style.display = 'block';
                successMessage.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            failureMessage.style.display = 'block';
            successMessage.style.display = 'none';
        });
    });
});
const form = document.getElementById("contactForm");
        const successMessage = document.getElementById("successMessage");
        const failureMessage = document.getElementById("failureMessage");
        const submitButton = document.getElementById("submitBtn");
        const loadingIndicator = document.getElementById("loading");

        form.onsubmit = (e) => {
    e.preventDefault();
    loadingIndicator.classList.add("active"); // Show loading indicator

    // Simulate a form submission outcome (replace with actual submission logic)
    setTimeout(() => {
        const formIsValid = true; // Simulate success or failure

        if (formIsValid) {
            successMessage.classList.add("animate__fadeIn");
            successMessage.style.display = "block";
            document.querySelector('.thumbs-up').style.opacity = 1; // Show thumbs-up icon
            setTimeout(() => {
                successMessage.style.display = "none";
                document.querySelector('.thumbs-up').style.opacity = 0; // Hide thumbs-up icon
            }, 5000); // Hide after 5 seconds
        } else {
            failureMessage.classList.add("animate__fadeIn");
            failureMessage.style.display = "block";
            setTimeout(() => {
                failureMessage.style.display = "none";
            }, 5000);
        }

        loadingIndicator.classList.remove("active"); // Hide loading indicator
    }, 2000); // Simulating a delay of 2 seconds
}
