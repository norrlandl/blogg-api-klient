 window.onload = function () {
const queryString = window.location.search;  
let urlParams = new URLSearchParams(queryString);

// console.log(urlParams.get("title"));
// console.log(urlParams.get("author"));
// console.log(urlParams.get("id"));

// ALT 1
// document.querySelector("#post-content").innerHTML = `
// <h1>${urlParams.get("title")}</h1>
// <i>${urlParams.get("author")}</i> | ${urlParams.get("date").substring(0, 10)}</i>
// <p><b>Tags:</b> ${urlParams.get("tags")}</p>
// <h3>${urlParams.get("content")}</h3>
// `

// ALT 2

fetchData();

  async function fetchData() {
    try {
      const response = await fetch(
        `http://localhost:5000/posts/${urlParams.get("id")}`
      );
      const data = await response.json();

      let dateTime = data.date.substring(0, 10);

      let tags = "";
      if (data.tags != null) {
        for (let tag of data.tags) {
          tags += `${tag}, `;
        }
      }
      document.querySelector("#post-content").innerHTML = `
      <h1>${data.title}</h1>
      <i>${data.author} | ${dateTime}</i>
      <p><b>tags:</b> ${tags.slice(0, tags.length - 2)}</p>
      <p> ${data.content}</p>
      `;
    } catch (error) {
      console.log(error);
    }
  }

} 