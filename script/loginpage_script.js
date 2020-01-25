function togglePasswordVisibility() {
  let passwordElement = document.getElementById("passwordField");
  if (passwordElement.type === "password") {
    passwordElement.type = "text";
  } else {
    passwordElement.type = "password";
  }
}

function validateCredentials() {
  let redirect = false;
  let usernameElement = document.getElementById("usernameField");
  let passwordElement = document.getElementById("passwordField");
  let inputUsername = usernameElement.value;
  let inputPassword = passwordElement.value;
  if (inputUsername === "admin" && inputPassword === "admin") {
    console.log("validated");
    window.location = "./homepage.html";
  } else {
    alert("Wrong Username or Password");
  }
}
