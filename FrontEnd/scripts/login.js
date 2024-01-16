import { formLogin, email, password } from "./domLinker.js";
import { postLogin } from "./api.js";

const login = false;

formLogin.addEventListener("submit", e => {
  e.preventDefault();

  postLogin({ email: email.value, password: password.value })
    .then(data => {
      localStorage.token = data.token
      window.location.replace("index.html");
      const login = true;
    })
    .catch(error => alert(error))
    const login = false;
});
