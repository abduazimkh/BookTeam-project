const mainWrapper = document.querySelector(".all-categories"),
  mainCards = mainWrapper.querySelector(".categories__items2"),
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
    `http://localhost:5000/book/genreId/1`,
    `http://localhost:5000/book/genreId/2`,
    `http://localhost:5000/book/genreId/3`,
    `http://localhost:5000/book/genreId/4`,
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
    console.log(allAuthorReel);
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
      data[0].forEach((card, i) => {
        console.log(card);
        const div = document.createElement("div");
        div.className = "category_item2";
        div.innerHTML = `
            <a href="">
                <img src="http://localhost:5000/${card.image}"  alt="author image" />
            </a>
            <div>
                <p>${card.title}</p>
            </div>
            `;
        documentFragment.appendChild(div);
      });
      mainCards.appendChild(documentFragment);
    }
    // if (+e.target.closest("[data-index-li]").dataset.indexLi == 1) {
    //   const documentFragment = document.createDocumentFragment();
    //   data[1].forEach((card) => {
    //     console.log(card);
    //     const div = document.createElement("div");
    //     div.className = "category_item2";
    //     div.innerHTML = `
    //           <a href="#">
    //               <img src="http://localhost:5000/${card.image}"  alt="author image" />
    //           </a>
    //           <div>
    //               <p>${card.title}</p>
    //           </div>
    //           `;
    //     documentFragment.appendChild(div);
    //   });
    //   mainCards.appendChild(documentFragment);
    // }
    // if (+e.target.closest("[data-index-li]").dataset.indexLi == 2) {
    //   const documentFragment = document.createDocumentFragment();
    //   data[2].forEach((card) => {
    //     console.log(card);
    //     const div = document.createElement("div");
    //     div.className = "category_item2";
    //     div.innerHTML = `
    //           <a href="#">
    //               <img src="http://localhost:5000/${card.image}"  alt="author image" />
    //           </a>
    //           <div>
    //               <p>${card.title}</p>
    //           </div>
    //           `;
    //     documentFragment.appendChild(div);
    //   });
    //   mainCards.appendChild(documentFragment);
    // }
    // if (+e.target.closest("[data-index-li]").dataset.indexLi == 3) {
    //   const documentFragment = document.createDocumentFragment();
    //   data[3].forEach((card) => {
    //     console.log(card);
    //     const div = document.createElement("div");
    //     div.className = "category_item2";
    //     div.innerHTML = `
    //           <a href="#">
    //               <img src="http://localhost:5000/${card.image}"  alt="author image" />
    //           </a>
    //           <div>
    //               <p>${card.title}</p>
    //           </div>
    //           `;
    //     documentFragment.appendChild(div);
    //   });
    //   mainCards.appendChild(documentFragment);
    // }
  });
}
