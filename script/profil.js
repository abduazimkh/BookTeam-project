const profilForm = document.querySelector("#profil-form"),
    firstName = profilForm.querySelector("#first-name"),
    lastName = profilForm.querySelector("#last-name"),
    phoneNumber = profilForm.querySelector("#phone-number");


const TOKEN = localStorage.getItem("token");
const user = `http://localhost:5000/user/account`;

fetch('http://localhost:5000/user/me',{
    headers: {
        Authorization: TOKEN,
      }
})
.then(response => response.json())
.then(data => {
    console.log(data);

    let formdata = new FormData();
    formdata.append("first_name", data.first_name)
    formdata.append("last_name", data.last_name)
    formdata.append("phone", data.phone)


    firstName.value = data.first_name
    lastName.value = data.last_name
    phoneNumber.value = data.phone

})


profilForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formdata = new FormData();                                    

    fetch(user, {   
        method: "PUT",
        body: formdata,
          headers: {
            Authorization: TOKEN,
          }
    }).then(response => response.json())
    .then(data => {
        console.log(data);
    })
});
