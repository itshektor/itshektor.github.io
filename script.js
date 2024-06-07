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

    // Retrieve existing data from local storage
    let contactList = JSON.parse(localStorage.getItem('contactList')) || [];

    // Add new contact data
    contactList.push(contactData);

    // Save updated data back to local storage
    localStorage.setItem('contactList', JSON.stringify(contactList));

    alert('Message saved locally!');

    // Optionally, clear the form
    document.querySelector('.contact-form').reset();
});