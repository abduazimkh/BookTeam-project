const mainWrapper = document.querySelector(".all-categories"),
  mainCards = mainWrapper.querySelector(".categories__items"),
  category = mainWrapper.querySelector(".category");

const api = `http://localhost:5000/genre`;

fetch(api)
  .then((response) => response.json())
  .then((data) => renderData(data));

function renderData(data) {
  console.log(data);
  const documentFragment = document.createDocumentFragment();
  data.forEach((el, i) => {
    const li = document.createElement("li");
    li.setAttribute("data-index-li", i);
    li.innerHTML = el.name;
    documentFragment.appendChild(li);
  });
  category.appendChild(documentFragment);
}

const TOKEN = localStorage.getItem("token");

const authorsCtegory = async () => {
  const authors = [
    `http://localhost:5000/author/genreId/1`,
    `http://localhost:5000/author/genreId/2`,
    `http://localhost:5000/author/genreId/3`,
    `http://localhost:5000/author/genreId/4`,
  ];

  try {
    const allAuthorsResponse = await Promise.all(
      authors.map((url) =>
        fetch(url, {
          headers: {
            Authorization: TOKEN,
          },
        })
      )
    );
    const allAuthorReel = await Promise.all(
      allAuthorsResponse.map((response) => {
        return response.json();
      })
    );
    renderAuthorsReel(allAuthorReel);
  } catch (err) {
    console.log(err);
  }
};
authorsCtegory();

function renderAuthorsReel(data) {
  mainWrapper.addEventListener("click", (e) => {
    if (+e.target.closest("[data-index-li]").dataset.indexLi == 0) {
      const documentFragment = document.createDocumentFragment();
      data[0].slice(0, 6).forEach((card) => {
        console.log(card);
        const div = document.createElement("div");
        div.className = "category_item";
        div.innerHTML = `
            <a href="#">
                <img src="http://localhost:5000/${card.image}"  alt="author image" />
            </a>
            <div>
                <h3>${card.first_name} ${card.last_name}</h3>
                <p>${card.date_of_birth}-${card.date_of_death}</p>
            </div>
            `;
        documentFragment.appendChild(div);
      });
      mainCards.appendChild(documentFragment);
    }
    if (+e.target.closest("[data-index-li]").dataset.indexLi == 1) {
        const documentFragment = document.createDocumentFragment();
        data[1].forEach((card) => {
          console.log(card);
          const div = document.createElement("div");
          div.className = "category_item";
          div.innerHTML = `
              <a href="#">
                  <img src="${'http://localhost:5000/'+card.image}"  alt="author image" />
              </a>
              <div>
                  <h3>${card.first_name} ${card.last_name}</h3>
                  <p>${card.date_of_birth}-${card.date_of_death}</p>
              </div>
              `;
          documentFragment.appendChild(div);
        });
        
        mainCards.appendChild(documentFragment);
    }
    if (+e.target.closest("[data-index-li]").dataset.indexLi == 2) {
        const documentFragment = document.createDocumentFragment();
        data[2].forEach((card) => {
          console.log(card);
          const div = document.createElement("div");
          div.className = "category_item";
          div.innerHTML = `
              <a href="#">
                  <img src="http://localhost:5000/${card.image}"  alt="author image" />
              </a>
              <div>
                  <h3>${card.first_name} ${card.last_name}</h3>
                  <p>${card.date_of_birth}-${card.date_of_death}</p>
              </div>
              `;
          documentFragment.appendChild(div);
        });
        
        mainCards.appendChild(documentFragment);
    }
    if (+e.target.closest("[data-index-li]").dataset.indexLi == 3) {
        const documentFragment = document.createDocumentFragment();
        data[3].forEach((card) => {
          console.log(card);
          const div = document.createElement("div");
          div.className = "category_item";
          div.innerHTML = `
              <a href="#">
                  <img src="http://localhost:5000/${card.image}"  alt="author image" />
              </a>
              <div>
                  <h3>${card.first_name} ${card.last_name}</h3>
                  <p>${card.date_of_birth}-${card.date_of_death}</p>
              </div>
              `;
          documentFragment.appendChild(div);
        });
        
        mainCards.appendChild(documentFragment);
    }
  });
}
