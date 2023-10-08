const profilForm = document.querySelector("#profil-form"),
    email = profilForm.querySelector("#email"),
    password = profilForm.querySelector("#password"),
    newPassword = profilForm.querySelector("#new-password");
    

const TOKEN = localStorage.getItem("token");
const user = `http://localhost:5000/user/account`;

profilForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formdata = new FormData();                                    

    fetch(user, {   
        method: "PUT",
        body: JSON.stringify({
            email: email.value,
            currentPassword: password.value,
            newPassword: newPassword.value
        }),
          headers: {
            Authorization: TOKEN,
          }
    }).then(response => response.json())
    .then(data => {
        console.log(data);
    })
});
