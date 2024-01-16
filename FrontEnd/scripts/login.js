import { formLogin, email, password } from "./domLinker.js";
import { postLogin } from "./api.js";


//const login = false;

formLogin.addEventListener("submit", e => {
  e.preventDefault();

  postLogin({ email: email.value, password: password.value })
    .then(data => {
      localStorage.token = data.token
      window.location.replace("index.html");
      //const login = true;
      const element = document.getElementsByClassName
      element.remove()
    })
    .catch(error => alert(error))
    //const login = false;
});


function getConnexion() {
  const token = JSON.parse(localStorage.getItem('auth')).token;
  return 'Bearer ' + token;
}

function Connected() {
  const connecting = getConnexion() ? true : false;
  return connecting;
}

if (Connected()) {
  modifier.style.display = "flex";
}