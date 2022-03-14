"use strict";
const queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

const id = urlParams.get("id");
const tags = urlParams.get("tags");

const formContent = document.querySelector(".form-content");
const title = document.getElementById("title");
const author = document.getElementById("author");
const content = document.getElementById("content");
// tags
const sports = document.getElementById("sports");
const code = document.getElementById("code");
const skiing = document.getElementById("skiing");
const fishing = document.getElementById("fishing");
const cooking = document.getElementById("cooking");

function checkCheckboxes(tags) {
  if (tags === null) return;
  let tagsArray = tags.split(" ");

  tagsArray.forEach((tag) => {
    if (tag.toLowerCase() === "sport") sports.click();
    if (tag.toLowerCase() === "code") code.click();
    if (tag.toLowerCase() === "skiing") skiing.click();
    if (tag.toLowerCase() === "fishing") fishing.click();
    if (tag.toLowerCase() === "cooking") cooking.click();
  });
}

function updatePost(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const tagsArray = () => {
    let array = [];
    if (sports.checked) array.push("Sports");
    if (code.checked) array.push("Code");
    if (skiing.checked) array.push("Skiing");
    if (fishing.checked) array.push("Fishing");
    if (cooking.checked) array.push("Cooking");
    return array;
  };

  const body = {
    title: formData.get("title"),
    author: formData.get("author"),
    content: formData.get("content"),
    tags: tagsArray(),
  };

  patchPost(id, body);
}

function patchPost(id, body) {
  console.log(id, body);
  try {
    fetch(`https://localhost:5000/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
}

// Add content
if (urlParams.get("author") != null) title.value = urlParams.get("title");
if (urlParams.get("author") != null) author.value = urlParams.get("author");
if (urlParams.get("content") != null)
  content.innerHTML = urlParams.get("content");
checkCheckboxes(tags);

formContent.addEventListener("submit", updatePost);
