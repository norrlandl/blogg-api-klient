"use strict";

window.onload = function () {
  fetchData();
};

const table = document.querySelector("#table");

async function fetchData() {
  try {
    const response = await fetch("http://localhost:5000/posts");
    const data = await response.json();

    console.log(data);
    console.log(data[3]._id);

    let blogContent = "";

    for (let post of data) {
      let tags = "";
      if (post.tags != null) {
        for (let tag of post.tags) {
          tags += `${tag} `;
        }
      }
      blogContent += `
      <tr>
      <td>${post.title}</td>
      <td>${post.author}</td>
      <td>${post.date}</td>
      <td>${tags}</td>
      <td>
      <a href="update-post.html?id=${post._id}&content=${post.content}&title=${post.title}&author=${post.author}&date=${post.date}&tags=${tags}">Update</a> |
      <br>
      <a class="delete-pun" data-id="${post._id}" href="#">Delete</a>
      </td>
      </tr>`;
    }
    table.innerHTML += blogContent;
  } catch (error) {
    console.log(error);
  }

  // DELETE PUN

  const deletePun = document.getElementsByClassName("delete-pun");
  // console.log(deletePun);

  for (let link of deletePun) {
    link.addEventListener("click", async function (e) {
      e.preventDefault();
      try {
        await fetch(`http://localhost:5000/posts/${e.target.dataset.id}`, {
          method: "DELETE",
        });

        e.target.parentNode.parentNode.remove();
      } catch (error) {
        console.log(error);
      }
    });
  }
}
