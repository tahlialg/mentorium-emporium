async function loginFormHandler(event){
  event.preventDefault();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/students/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      const body = await response.json();

      document.location.replace('/dashboardstudent/' + body.id);
    } else {
      alert("Incorrect email or password");
      document.location.reload();
    }
  } else if (!password || !email) {
    alert("You need to provide both: email and password");
  }
}
document.querySelector("#logIn").addEventListener("click", loginFormHandler);


