// https://www.thecocktaildb.com/api.php
import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

const url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=a";

console.log(url);

// récupère et affiche les cocktails
presentDrinks(url);
window.addEventListener("DOMContentLoaded", () => {});
