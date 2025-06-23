var email = document.querySelector(".email");
var password = document.querySelector(".pass");
var error = document.querySelector(".errorDisplay");
var loginButton = document.querySelector(".loginButton");
var signUpButton = document.querySelector(".signUpButton");
var navbar = document.querySelector(".navbar");
var form = document.querySelector(".form");
var logoutButton = document.querySelector(".logoutButton");

var users = [];
users = JSON.parse(localStorage.getItem("users")) || users;

function login() {
  var emailValue = email.value;
  var passwordValue = password.value;

  if (emailValue === "" || passwordValue === "") {
    error.textContent = "Please fill in all fields.";
    return;
  }

  var userFound = users.find(
    (user) => user.email === emailValue && user.password === passwordValue
  );

  if (userFound) {
    navbar.classList.remove("d-none");
    navbar.classList.add("d-block");
    form.innerHTML = `<h1 style="font-size: 40px; color: white">Hello ${userFound.name}! </h1>`;
  } else {
    error.textContent = "Invalid email or password.";
  }
}

loginButton.addEventListener("click", login);

signUpButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Sign Up button clicked");

  form.innerHTML = `<div
        class="inner-container container d-flex flex-column justify-content-center align-items-center pt-5"
      >
        <h1>Smart Login System</h1>
        <input
          type="text"
          class="name form-control text-white"
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          class="email form-control text-white"
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          class="pass form-control mb-3 text-white"
          placeholder="Enter Your Password"
        />
        <div class="errorDisplay text-danger fs-4"></div>
        <button class="loginButton btn btn-primary mb-3 w-100 p-2 fs-3">
          Sign Up
        </button>
        <p class="text-white fs-4">
          Have an account ?
          <span
            ><a class="signUpButton text-decoration-none" href=""
              >Sign In!</a
            ></span
          >
        </p>
      </div>`;
  email = document.querySelector(".email");
  password = document.querySelector(".pass");
  var name = document.querySelector(".name");
  error = document.querySelector(".errorDisplay");
  loginButton = document.querySelector(".loginButton");
  signUpButton = document.querySelector(".signUpButton");
  loginButton.addEventListener("click", function () {
    var emailValue = email.value;
    var passwordValue = password.value;
    var nameValue = name.value;

    if (emailValue === "" || passwordValue === "" || nameValue === "") {
      error.textContent = "Please fill in all fields.";
      return;
    }

    var userExists = users.some((user) => user.email === emailValue);

    if (userExists) {
      error.textContent = "User already exists. Please log in.";
    } else {
      users.push({
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      });
      localStorage.setItem("users", JSON.stringify(users));
      error.classList.remove("text-danger");
      error.classList.add("text-success");
      error.textContent = "Registration successful! You can now log in.";
    }
  });
});

logoutButton.addEventListener("click", function () {
  navbar.classList.remove("d-block");
  navbar.classList.add("d-none");
  form.innerHTML = `<div
        class="inner-container container d-flex flex-column justify-content-center align-items-center pt-5"
      >
        <h1>Smart Login System</h1>
        <input
          type="email"
          class="email form-control text-white"
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          class="pass form-control mb-3 text-white"
          placeholder="Enter Your Password"
        />
        <div class="errorDisplay text-danger fs-4"></div>
        <button class="loginButton btn btn-primary mb-3 w-100 p-2 fs-3">
          Login
        </button>
        <p class="text-white fs-4">
          Don't have an account ?
          <span
            ><a class="signUpButton text-decoration-none" href=""
              >Sign Up!</a
            ></span
          >
        </p>
      </div>`;
  email = document.querySelector(".email");
  password = document.querySelector(".pass");
  error = document.querySelector(".errorDisplay");
  loginButton = document.querySelector(".loginButton");
  signUpButton = document.querySelector(".signUpButton");
  loginButton.addEventListener("click", login);
});
