var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const contactData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        date: new Date().toISOString()
    };

    // Send the data to your server
    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
    }).then(response => response.text())
    .then(data => {
        alert(data);
    }).catch(error => {
        alert('Data saved successfully');
        console.error('Error:', error);
    });

    // Optionally, clear the form
    document.querySelector('.contact-form').reset();
});
