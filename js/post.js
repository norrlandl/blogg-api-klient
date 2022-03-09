"use strict";

window.onload = function () {
  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);

  document.querySelector(".content").innerHTML = `
  <h1>${urlParams.get("title")}</h1>
  <i>${urlParams.get("author")} | ${urlParams.get("date")}</i>
  <p><b>tags:</b> ${urlParams.get("tags")}</p>
  <p>${urlParams.get("content")}</p>`;
};
