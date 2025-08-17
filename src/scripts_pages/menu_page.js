import "./../styles/menu_page.css";

/**
 * Create 3 main containers for Coffee, Food, Alcohol
 * 
 * have a function that creates specific Item
 *  - it will take arguments for Name and Prize
 * 
 * have a functions that creates the list of items
 *  - arguments will be name of html class for the list
 */

const contentDOM = document.querySelector("#content");

// Main divs for homePage
const caffeeListContainer = document.createElement("div");
const foodListContainer = document.createElement("div");
const alcoholListContainer = document.createElement("div");

// Headers for lists
const caffeeHeader = document.createElement("h2");
const foodHeader = document.createElement("h2");
const alcoholHeader = document.createElement("h2");

caffeeHeader.textContent = "Coffee List";
foodHeader.textContent = "Food List";
alcoholHeader.textContent = "Alcohol List";

// Unordered list elements
const caffeeList = document.createElement("ul");
const foodList = document.createElement("ul");
const alcoholList = document.createElement("ul");
const lists = [caffeeList, foodList, alcoholList];

caffeeListContainer.append(caffeeHeader, caffeeList);
foodListContainer.append(foodHeader, foodList);
alcoholListContainer.append(alcoholHeader, alcoholList);

function createListItem(name = "Some good Item", prize = "### $") {
  const listItem = document.createElement("li");
  const itemName = document.createElement("h3");
  const itemPrize = document.createElement("div");

  itemName.textContent = name;
  itemPrize.textContent = prize;

  itemPrize.classList.add("item-prize");

  listItem.append(itemName, itemPrize);

  return listItem;
}

function clearPage() {
  contentDOM.textContent = "";
  caffeeList.textContent = "";
  foodList.textContent = "";
  alcoholList.textContent = "";
}

function createPage() {
  clearPage();

  const items = [];
  for (let i = 1; i <= 12; i++) {
    items.push(createListItem(`Item number ${i}`));
  }

  for (let i = 0; i < items.length; i++) {
    if (i < 4) {
      caffeeList.appendChild(items[i]);
    } else if (i < 8) {
      foodList.appendChild(items[i]);
    } else if (i < 12) {
      alcoholList.appendChild(items[i]);
    }
  }
  contentDOM.append(caffeeListContainer, foodListContainer, alcoholListContainer);
}

export {createPage};