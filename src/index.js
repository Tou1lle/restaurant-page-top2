import "./styles/josh_comeau_reset.css";
import "./styles/common-styles.css";
import * as homePage from "./scripts_pages/home_page";
import * as menuPage from "./scripts_pages/menu_page";

console.log("Webpack is working!");
//homePage.createHomePage();
console.log(menuPage.createListItem())
console.log(menuPage.createListItem("Espresso"));