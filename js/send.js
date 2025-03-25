document.getElementById('form').addEventListener('submit', function (event) {
  var submitButton = document.getElementById('submitBtn');

  if (submitButton.disabled) {
    event.preventDefault();
    return;
  }

  submitButton.disabled = true;
  submitButton.innerText = 'Отправка...';

  setTimeout(() => {
    submitButton.disabled = false;
    submitButton.innerText = 'Отправить';
  }, 5000);
});
