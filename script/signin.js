const form = document.querySelector("#signin-form"),
  emailAddress = form.querySelector("#email-address"),
  userPassword = form.querySelector("#password");

const TOKEN = localStorage.getItem("token");
const api = `http://localhost:5000/user/login`;


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    fetch(api, {
        method: "POST",
        body: JSON.stringify({
          email: emailAddress.value,
          password: userPassword.value
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((data) => {
            const {token} = data;
            console.log(data);
          localStorage.setItem("token", data.token);
          
          location.pathname = "../index.html";
        });
})