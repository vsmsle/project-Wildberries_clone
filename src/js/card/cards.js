// Функция для создания карточки товара
function createProductCard(product) {
    const card = document.createElement("li");
    card.className = "product_card";
  
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.className = "product_card__image";
    card.appendChild(image);
  
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "product_card__content";
  
    const name = document.createElement("h3");
    name.textContent = product.name;
    name.className = "product_card__name";
    contentWrapper.appendChild(name);
  
    const price = document.createElement("p");
    price.textContent = `${product.price} руб.`;
    price.className = "product_card__price";
    contentWrapper.appendChild(price);
  
    card.appendChild(contentWrapper);
  
    const addButton = document.createElement("button");
    addButton.textContent = "Добавить в корзину";
    addButton.className = "product_card__button";
    addButton.addEventListener("click", () => {
      addToCart(product);
    });
  
    // Прикрепляем кнопку Добавить в корзину к нижней границе карточки товара
    card.appendChild(addButton);
  
    return card;
  }
  
  // Функция для обработки добавления товара в корзину
  function addToCart(product) {
    console.log("Товар добавлен в корзину:", product.name);
  }
  // Функция для получения данных из API и создания карточек товаров
  async function fetchAndDisplayProducts() {
    const apiUrl = "https://64cbf67e2eafdcdc85198661.mockapi.io/wbapi/catalog";
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      const productCardsContainer = document.getElementById("productCards");
      data.forEach((product) => {
        const card = createProductCard(product);
        productCardsContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  }
  
  // Вызываем функцию для получения и отображения карточек товаров
  fetchAndDisplayProducts();