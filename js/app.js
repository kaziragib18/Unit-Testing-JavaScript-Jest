const {
  createElement,
  generateResult,
  getUserInputs,
  validateInput

} = require("./lib.js");

// const postToServer = require('./postToServer');

const init = () => {
  // initiate the app & register button click listener
  const newPostButton = document.querySelector("#addNewPostBtn");
  newPostButton.addEventListener("click", addPost);
};

const addPost = () => {
  // get user input fields
  const { useridInput, titleInput, articleInput } = getUserInputs();

  if (
    !validateInput(useridInput.value, true, true) ||
    !validateInput(titleInput.value, true, false) ||
    !validateInput(articleInput.value, true, false)
  ) {
    return;
  }



  // check and generate
  const resultText = generateResult(useridInput.value, titleInput.value);

  // create single article container
  const element = createElement("p", resultText);

  // append new article container to article list
  const articleList = document.querySelector(".article-list");
  articleList.appendChild(element);
};

// launch the app!
init();