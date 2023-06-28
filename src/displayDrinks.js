import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const section = get(".section-center");

const displayDrinks = async ({ drinks }) => {
  // cache le chargement
  const title = get(".title");
  if (!drinks) {
    hideLoading();
    title.textContent = "Désolé, aucun produit ne correspond à votre recherche";
    section.innerHTML = null;
    return;
  } else {
    hideLoading();
    title.textContent = "";
    const innerDrink = drinks.map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="drink.html" target="_blank">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
          </article>
        </a>
        `;
    });

    // affiche les cocktails
    section.innerHTML = innerDrink.join("");
    return section;
  }
};

export default displayDrinks;
