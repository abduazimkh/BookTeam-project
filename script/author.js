const authorIdUrl = +new URLSearchParams(window.location.search).get("authorId");
// console.log(authorIdUrl);

const authorWrapper = document.querySelector(".author__wrapper"),
 authorTitle = document.querySelector(".author__title"),
 wokrCardWrapper = document.querySelector(".works__cards");


const TOKEN = localStorage.getItem("token");

const authorCardIdUrl = `http://localhost:5000/author/authorId/${authorIdUrl}`

// console.log(authorCardIdUrl);

fetch(authorCardIdUrl, {
    headers: {
      Authorization: TOKEN,
    },
}).then(response => response.json())
.then(data => {
    renderAuthorsReel(data);
})

function renderAuthorsReel(data){
    console.log(data);
    authorWrapper.innerHTML = `
        <img  src="http://localhost:5000/${data.image}" alt="author image">
    `;
    authorTitle.innerHTML = `
    <h1>${data.first_name} ${data.last_name}</h1>
    <p>${data.bio}</p>
    
    <ul class="first-ul">
        <ul>
            <li style="margin-bottom: 10px">Tavallud sanasi</li>
            <strong>${data.date_of_birth}</strong>
            <li>${data.country}</li>
        </ul>
        <ul>
            <li>-</li>
        </ul>
        <ul>
            <li style="margin-bottom: 10px">Vafot etgan sana</li>
            <strong>${data.date_of_death}</strong>
            <li>${data.country}</li>
        </ul>
    </ul>
    
    `;
    authorWrapper.appendChild(authorTitle)
}

const works = `http://localhost:5000/book/genreId/${authorIdUrl-1}`;
// console.log(works);

fetch(works, {
    headers: {
      Authorization: TOKEN,
    },
}).then(response => response.json())
.then(data => {
    // console.log(data);
    renderAuthorBooksReel(data);
})

function renderAuthorBooksReel(data){
    console.log(data);
    const documentFragment = document.createDocumentFragment();
    data.forEach(card => {
        console.log(card);
        const div = document.createElement("div");
        div.className = "work__card";
        div.innerHTML = `
        <img src="http://localhost:5000/${card.image}" alt="image book">
        <div>
            <h3>${card.title}</h3>
            <p>Shayx Muhammad Sodiq Muhammad Yusuf</p>
        </div>
        `;
        documentFragment.appendChild(div);
    })
    wokrCardWrapper.appendChild(documentFragment)
}