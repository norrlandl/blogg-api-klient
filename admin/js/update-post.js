"use strict";
const queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

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
  // break if no tags
  if (tags === null) return;
  let tagsArray = tags.split(" ");

  tagsArray.forEach((tag) => {
    if (tag.toLowerCase() === "sports") sports.click();
    if (tag.toLowerCase() === "code") code.click();
    if (tag.toLowerCase() === "skiing") skiing.click();
    if (tag.toLowerCase() === "fishing") fishing.click();
    if (tag.toLowerCase() === "cooking") cooking.click();
  });
}

function updatePost() {
  formContent.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const body = {
      title: formData.get("title"),
      author: formData.get("author"),
      content: formData.get("content"),
      tags: formData.getAll("tags"),
    };

    patchPost(urlParams.get("id"), body);
  });
}

async function patchPost(id, body) {
  try {
    // får SSL error med https ??
    const response = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Something went wrong with the API");
    }
    window.location.replace("index.html");
  } catch (error) {
    console.log(error);
  }
}

// Add content
title.value = urlParams.get("title");
author.value = urlParams.get("author");
content.innerHTML = urlParams.get("content");

checkCheckboxes(tags);
updatePost(urlParams);
