const addAuthForm = document.querySelector("#add-auth-form"),
    authImage = document.querySelector("#avatar"),
    firstName = addAuthForm.querySelector("#first-name"),
    lastName = addAuthForm.querySelector("#last-name"),
    birth = addAuthForm.querySelector("#birth"),
    death = addAuthForm.querySelector("#death"),
    country = addAuthForm.querySelector("#country"),
    genre = addAuthForm.querySelector("#genre"),
    bio = addAuthForm.querySelector("#bio");


addAuthForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append("first_name", firstName.value)
    formdata.append("last_name", lastName.value)
    formdata.append("date_of_birth", birth.value)
    formdata.append("date_of_death", death.value)
    formdata.append("country",country.value)
    formdata.append("genre_id ", genre.value)
    formdata.append("bio",bio.value);
    formdata.append("image",authImage.value);

    fetch("http://localhost:5000/author", {
        method: "POST",
        body: formdata,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())
    .then(data => {
        console.log(data);
    })


})