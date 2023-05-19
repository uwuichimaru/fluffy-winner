const titles = document.querySelectorAll(".category__title");
if (titles) {
  titles.forEach((title) => {
    if (title.textContent === "Свитшоты") {
      const productsList = document.querySelector(".products__list");

      sweetShirt.map((shirt) => {
        const sweatshirtHTML = `
          <div id=${shirt.id} class="products__item">
          <div class="products__img">
              <img src=${shirt.image} alt="">
          </div>
          <div class="products__title">
              <h3>${shirt.title}</h3>
          </div>
          <div class="products__date-added">
              <h3>${shirt.date}</h3>
          </div>
          <div class="products__button">
              <button>Купить</button>
          </div>
      </div>
        `;
        productsList.insertAdjacentHTML("beforeend", sweatshirtHTML);
        shirt.title;
      });
    }
    if (title.textContent === "Футболки") {
      const productsList = document.querySelectorAll(".products__list")[1];

      tShirt.map((shirt) => {
        const shirtHTML = `
            <div id=${shirt.id} class="products__item">
               <div class="products__img">
                   <img src=${shirt.image} alt="">
                </div>
                <div class="products__title">
                    <h3>${shirt.title}</h3>
                </div>
               <div class="products__date-added">
                   <h3>${shirt.date}</h3>
               </div>
               <div class="products__button">
                   <button>Купить</button>
                </div>
            </div>`;

        productsList.insertAdjacentHTML("beforeend", shirtHTML);
      });
    }

    if (title.textContent === "Брюки") {
      const productsList = document.querySelectorAll(".products__list")[2];

      trousers.map((trouser) => {
        const trouserHTML = `
              <div class="products__item">
                <div class="products__img">
                    <img src=${trouser.image} alt="">
                </div>
                <div class="products__title">
                    <h3>${trouser.title}</h3>
                </div>
                <div class="products__date-added">
                    <h3>${trouser.date}</h3>
                </div>
                <div class="products__button">
                    <button>Купить</button>
                </div>
            </div>
          `;

        productsList.insertAdjacentHTML("beforeend", trouserHTML);
      });
    }
  });
}

document.querySelectorAll(".navigate__item").forEach((item) => {
  const moveToCategory = (clickCategory, categoryName) => {
    if (item.textContent === `${clickCategory}`) {
      item.addEventListener("click", () => {
        const scroll = document.querySelector(`${categoryName}`);
        scroll.scrollIntoView({ behavior: "smooth" });
      });
    }
  };

  moveToCategory("Свитшоты", "#sweatshirt");
  moveToCategory("Футболки", "#t-shirt");
  moveToCategory("Брюки", "#trouser");
});

const backBtn = document.querySelector(".back-to");

backBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;

  if (scrollTop >= 500) {
    backBtn.style.display = "block";
  } else {
    backBtn.style.display = "none";
  }
});

// change theme
const switchBtn = document.querySelector(".switch__theme");
switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("dark");

  if (switchBtn.classList == "switch__theme dark") {
    const navigateItems = document.querySelectorAll(".navigate__item");

    navigateItems.forEach((item) => {
      item.style.color = "#000";
    });

    const body = document.body;
    body.style.background = "#1c1c1c";
    body.style.color = "#fff";

    const categoryTitles = document.querySelectorAll(".category__title");

    categoryTitles.forEach((title) => {
      title.style.color = "#fff";
    });

    const backTo = document.querySelector(".back-to");

    backTo.style.background = "#fefefe";
    backTo.style.color = "#2c2c2c";

    // FORM
    document.querySelector(".form").style.background = "#2c2c2c";
  } else {
    const navigateItems = document.querySelectorAll(".navigate__item");

    navigateItems.forEach((item) => {
      item.style.color = "#fff";
    });

    document.body.style.background = "#ffffff";
    document.body.style.color = "#000";

    const categoryTitles = document.querySelectorAll(".category__title");

    categoryTitles.forEach((title) => {
      title.style.color = "#000";
    });

    const backTo = document.querySelector(".back-to");

    backTo.style.background = "#2c2c2c";
    backTo.style.color = "#fefefe";

    // FORM
    document.querySelector(".form").style.background = "#fff";
  }

});



const form = document.querySelector(".form");
const backgroundForModal = document.querySelector(".background-for-modal");

// close Btn
document.querySelector(".form__close").addEventListener("click", () => {
  form.style.display = "none";
  document.body.style.overflowY = "scroll";
  backgroundForModal.style.display = "none";
});

document.querySelector('.form__btn-red').addEventListener('click', (event) => {
  event.preventDefault();
  form.style.display = "none";
  document.body.style.overflowY = "scroll";
  backgroundForModal.style.display = "none";
})

backgroundForModal.addEventListener('click', () => {
  form.style.display = "none";
  document.body.style.overflowY = "scroll";
  backgroundForModal.style.display = "none";
})

document.querySelector(".form__btn").addEventListener("click", (event) => {
  event.preventDefault(); // Передаем объект event и вызываем preventDefault()
  validateForm();
});

function validateForm() {
  let colorSelected = false;
  let textareaValue = document.getElementById("textarea").value.trim();

  // Проверка выбора цвета
  const radioButtons = document.querySelectorAll(".radio-btn");
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      colorSelected = true;
      break;
    }
  }

  if (!colorSelected) {
    alert("Пожалуйста, выберите цвет.");
    return; // Добавляем return, чтобы функция прекращала выполнение здесь
  }

  if (textareaValue === "") {
    alert("Пожалуйста, введите комментарий.");
    return; // Добавляем return, чтобы функция прекращала выполнение здесь
  }

  // Если выполнение дошло до этой точки, значит валидация прошла успешно
  form.style.display = "none";
  alert('Вы успешно купили товар.');
  document.body.style.overflowY = "scroll";
  backgroundForModal.style.display = "none";
}

const productsBtn = document.querySelectorAll(".products__button");

productsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    form.style.display = "flex";
    document.body.style.overflowY = "hidden";
    backgroundForModal.style.display = "block";
  });
});
