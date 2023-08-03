function searchProducts() {
    const searchInput = document.querySelector(".header__search");
    const searchText = searchInput.value.toLowerCase();
  
    const productCardsContainer = document.getElementById("productCards");
    const allProductCards = productCardsContainer.querySelectorAll(".product_card");
  
    allProductCards.forEach((card) => {
      const cardName = card.querySelector(".product_card__name").textContent.toLowerCase();
      if (cardName.includes(searchText)) {
        card.style.display = "block"; // Показываем карточку, если название содержит нужный запрос
      } else {
        card.style.display = "none"; // Скрываем карточку, если название не содержит запрос
      }
    });
  }
  
  // Обработчик события для поля поиска
  const searchInput = document.querySelector(".header__search");
  searchInput.addEventListener("input", searchProducts);


      
      
      