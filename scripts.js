const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


// Handle contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target;

    // Proceed with the form submission using Fetch API
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Hide the form and show the success message
          document.getElementById("contact-form").style.display = "none";
          const successMessage = document.getElementById("success-message");
          successMessage.style.display = "block";

          // Hide the success message after 5 seconds
          setTimeout(() => {
            successMessage.style.display = "none";
          }, 5000);

          console.log("Form submitted successfully");
        } else {
          console.error("Form submission error");
        }
      })
      .catch((error) => {
        console.error("Form submission failed:", error);
      });

    // Clear the form fields after clicking the submit button
    form.reset();
  });
