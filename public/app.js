document.addEventListener('DOMContentLoaded', function() {
  // Find the form element
  const form = document.querySelector('form');

  // Add event listener to the form's submit event
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const email = document.querySelector('#emaill').value;
    const subject = document.querySelector('#sub').value;
    const message = document.querySelector('#mssg').value;

    // Create an object with the form data
    const formData = {
      email: email,
      subject: subject,
      message: message
    };

    // Send the form data to the server
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(function(response) {
        if (response.ok) {
          // Email sent successfully
          console.log('Email sent successfully');
          
          // Redirect the user to a success page
          window.location.href ="./success.html";
        } else {
          // Error sending email
          console.error('Error sending email');
        }
      })
      .catch(function(error) {
        console.error('Error sending email:', error);
      });
  });
});
