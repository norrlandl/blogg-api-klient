"use strict";

const content = document.querySelector(".posts");

async function fetchData() {
  try {
    const response = await fetch("http://localhost:5000/posts");
    const data = await response.json();

    let blogContent = "";

    for (let post of data.reverse()) {
      let tags = "";
      if (post.tags != null) {
        for (let tag of post.tags) {
          tags += `${tag}, `;
        }
      }
      blogContent += `
      <div class="post">
        <h1>${post.title}</h1>
        <h4>${post.author}</h4>
        <i>${post.date.substring(0, 10)} | ${post.date.substring(11, 16)}</i>
        <p>${post.content.substring(0, 100)}
        <a href="post.html?id=${post._id}&content=${post.content}&title=${
        post.title
      }&author=${post.author}&date=${
        post.date
      }&tags=${tags}"><br><br><b>Read more...</b></a></p>
        <p><b>Tags:</b> ${tags.slice(0, tags.length - 2)}</p>
      </div>`;
    }
    content.innerHTML = blogContent;
  } catch (error) {
    console.log(error);
  }
}

fetchData();

// <i>${post.date.replace("T", " | ").slice(0, post.date.length - 6)}</i>
