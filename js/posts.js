"use strict";

const content = document.querySelector(".content");

async function fetchData() {
  try {
    const response = await fetch("http://localhost:5000/posts");
    const data = await response.json();

    let blogContent = "";

    for (let post of data.reverse()) {
      let tags = "";
      if (post.tags != null) {
        for (let tag of post.tags) {
          tags += `${tag} `;
        }
      }
      blogContent += `
      <h1>${post.title}</h1>
      <h4>${post.author}</h4>
      <i>${post.date}</i>
      <p>${post.content.substring(0, 100)}
      <a href="post.html?id=${post._id}&content=${post.content}&title=${
        post.title
      }&author=${post.author}&date=${
        post.date
      }&tags=${tags}">Read more...</a></p>
      <p><b>tags:</b> ${tags}</p>`;
    }
    content.innerHTML = blogContent;
  } catch (error) {
    console.log(error);
  }
}

fetchData();
