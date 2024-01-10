import { formLogin, email, password } from "./domLinker.js";
import { postLogin } from "./api.js";

formLogin.addEventListener("submit", e => {
  e.preventDefault();

  postLogin({ email: email.value, password: password.value })
    .then(data => {
      localStorage.token = data.token
      window.location.replace("index.html");
    })
    .catch(error => alert(error))
});
