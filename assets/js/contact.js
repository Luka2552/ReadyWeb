document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('contact-form-name').value.trim();
    let email = document.getElementById('contact-form-email').value.trim();
    let message = document.getElementById('contact-form-message').value.trim();
    let template = document.getElementById('contact-form-template').value;
    let notRobot = document.getElementById('contact-form-not-robot').checked;

    let nameRegex = /^[a-zA-Z\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      alert('Please enter a valid name.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email.');
      return;
    }

    if (message === '') {
      alert('Please enter a message.');
      return;
    }

    if (!template) {
      alert('Please select a template.');
      return;
    }

    if (!notRobot) {
      alert('Please confirm you are not a robot.');
      return;
    }

    // ამას ალბათ შეცვლი ხომ ბექისთვის?
    let formData = {
      name: name,
      email: email,
      message: message,
      template: template,
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://GiorgiBackEndPhp.com'); // გიორგი, აქ თუ არ მეშლება შენ უნდა დაამატო მისამართი.
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
      } else if (xhr.readyState === XMLHttpRequest.DONE) {
        alert('An error occurred. Please try again later.');
      }
    };
    xhr.send(JSON.stringify(formData));
  });
