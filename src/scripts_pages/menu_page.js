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
const alcoholHeader = document.createElementl("h2");

// Unordered list elements
const caffeeList = document.createElement("ul");
const foodList = document.createElement("ul");
const alcoholList = document.createElement("ul");