const addAuthForm = document.querySelector("#add-auth-form"),
    bookImage = document.querySelector("#avatar"),
    title = addAuthForm.querySelector("#title"),
    page = addAuthForm.querySelector("#pages"),
    year = addAuthForm.querySelector("#year"),
    price = addAuthForm.querySelector("#price"),
    genreId = addAuthForm.querySelector("#genre"),
    authorId = addAuthForm.querySelector("#author-id"),
    bio = addAuthForm.querySelector("#bio");


addAuthForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append("title", title.value)
    formdata.append("page", page.value)
    formdata.append("year", year.value)
    formdata.append("price", price.value)
    formdata.append("genre_id",genreId.value)
    formdata.append("author_id ", authorId.value)
    formdata.append("description",bio.value);
    formdata.append("image",bookImage.value);

    fetch("http://localhost:5000/book", {
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