
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  
  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(formData).toString()
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => console.error('Error:', error));
});
