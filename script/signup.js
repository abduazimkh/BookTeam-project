const form = document.querySelector("#signup-form"),
  firstName = form.querySelector("#first-name"),
  lastName = form.querySelector("#last-name"),
  phoneNumber = form.querySelector("#phone-number"),
  emailAddress = form.querySelector("#email-address"),
  userPassword = form.querySelector("#password");

form.addEventListener("submit", userAccount);

const api = `http://localhost:5000/user/register`;

function userAccount(e) {
  e.preventDefault();

  fetch(api, {
    method: "POST",
    body: JSON.stringify({
      first_name: firstName.value,
      last_name: lastName.value,
      phone: phoneNumber.value,
      email: emailAddress.value,
      password: userPassword.value,
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
      
      location.pathname = "../pages/signin.html";
    });
}
