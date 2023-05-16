let userName = "admin";
let pass = "1234";

function login() {
  let user, password;

  user = document.getElementById("user").value;
  password = document.getElementById("password").value;

  if (user === userName && password === pass) {
    window.location.href =
      "https://pablocharamello.github.io/landingpage_trabajo_integrador1_codo_a_codo/";
  } else {
    alert("Credenciales incorrectas");
  }
}
