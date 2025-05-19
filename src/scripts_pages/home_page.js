/**
 * Get the content element from HTML
 * 
 * Main methods:
 *  - generate page
 *  - reset page? (For every page X Just the index.js)
 */

// Get the Div for appending content
const contentDOM = document.querySelector("#content");

// Create elements for Home Page
const mainHeader = document.createElement("h1");
const divTextsContainer = document.createElement("div");
const pText1 = document.createElement("p");
const pText2 = document.createElement("p");
const pText3 = document.createElement("p");

// Add classes to appropriate elements
divTextsContainer.classList.add("home-page-info");

// Add textContent to appropriate elements
mainHeader.textContent = "Coffee House";
pText1.textContent = "Welcome to our coffee house where you can relax and enjoy your free time.";
pText2.textContent = "Unfortunately, this is a fake coffee house 😔.";
pText3.textContent = "But you can use your imagination to make this a real place 🤑!";

const clearPage = () => {
  contentDOM.textContent = "";
}

const createHomePage = () => {
  clearPage();

  contentDOM.appendChild(mainHeader)
  contentDOM.appendChild(divTextsContainer);

  divTextsContainer.append(pText1, pText2, pText3)
}

export {createHomePage};