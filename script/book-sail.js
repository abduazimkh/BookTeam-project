const bookIdUrl = +new URLSearchParams(window.location.search).get("bookId");

const authorWrapper = document.querySelector(".author__wrapper"),
  authorTitle = document.querySelector(".author__title"),
  wokrCardWrapper = document.querySelector(".works__cards");

const TOKEN = localStorage.getItem("token");

const bookCardIdUrl = `http://localhost:5000/book/bookId/${bookIdUrl}`;

fetch(bookCardIdUrl, {
  headers: {
    Authorization: TOKEN,
  },
})
  .then((response) => response.json())
  .then((data) => {
    renderAuthorsReel(data);
  });

function renderAuthorsReel(data) {
  authorWrapper.innerHTML = `
        <img  src="http://localhost:5000/${data.image}" alt="author image">
    `;
  authorTitle.innerHTML = `
    <h1>${data.title}</h1>
    <ul>
        <li>Sahifalar soni:</li>
        <strong>176 page</strong>
    </ul>
    <ul>
        <li>Chop etilgan:</li>
        <strong>${data.year} years</strong>
    </ul>
    <ul>
        <li>Kitob narxi:</li>
        <strong>$${data.price} price</strong>
    </ul>

    <p class="line">To’liq ma’lumot</p>    
    <p>${data.description}</p>    

    `;
  authorWrapper.appendChild(authorTitle);
}

const works = `http://localhost:5000/book/genreId/${bookIdUrl}`;

fetch(works, {
    headers: {
      Authorization: TOKEN,
    },
}).then(response => response.json())
.then(data => {
    renderAuthorBooksReel(data);
})

function renderAuthorBooksReel(data){
    const documentFragment = document.createDocumentFragment();
    data.forEach(card => {
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