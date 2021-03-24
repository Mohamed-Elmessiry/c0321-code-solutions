var contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function () {
  event.preventDefault();
  var values = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value

  };

  console.log('values object:', values);
  contactForm.reset();
});
