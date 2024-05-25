function toggleForm() {
  const form = document.getElementById('purchaseForm');
  form.classList.toggle('active');
}

document
  .querySelector('.internal-purchase-button')
  .addEventListener('click', toggleForm);

document
  .querySelector('.internal-purchase-button')
  .addEventListener('click', function () {
    document.getElementById('dimOverlay').style.display = 'block';
  });

function toggleForm() {
  document.getElementById('dimOverlay').style.display = 'none';
  const form = document.getElementById('purchaseForm');
  form.classList.toggle('active');
}
function validateForm() {
  var name = document.getElementById('name').value;
  var nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    alert('Please enter a valid name.');
    return false;
  }

  var idNumber = document.getElementById('id-number').value;
  var idNumberRegex = /^\d+$/;
  if (!idNumberRegex.test(idNumber)) {
    alert('Please enter a valid ID number.');
    return false;
  }

  var contactNumber = document.getElementById('contact-number').value;
  if (!idNumberRegex.test(contactNumber)) {
    alert('Please enter a valid contact number.');
    return false;
  }

  var bankAccountNumber = document.getElementById('bank-account-number').value;
  var bankAccountRegex = /^[A-Z0-9]+$/;
  if (!bankAccountRegex.test(bankAccountNumber)) {
    alert('Please enter a valid bank account number.');
    return false;
  }

  alert('Form submitted successfully!');
}
