import "./styles/josh_comeau_reset.css";
import "./styles/common-styles.css";
import * as homePage from "./scripts_pages/home_page";
import * as menuPage from "./scripts_pages/menu_page";

console.log("Webpack is working!");

const buttons = Array.from(document.querySelectorAll("button"));
//initial page
homePage.createHomePage();

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (button.textContent.includes("Home")) {
      homePage.createHomePage();
    } else if (button.textContent.includes("Menu")) {
      menuPage.createPage();
    }
  })
});

//homePage.createHomePage();
//menuPage.createPage();