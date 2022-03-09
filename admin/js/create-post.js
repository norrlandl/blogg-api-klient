
let tagList = document.getElementById("tag-list")
let back = document.querySelector("back")
let inputs = document.querySelector("#input")

let createBtn = document.getElementById("createBtn").addEventListener("click", function(e){
    e.preventDefault;

})
async function fetchData() {
  try {
    const response = await fetch("http://localhost:5000/posts");
    const data = await response.json();

    console.log(data);



    let listOfTags = "";

    for (let post of data) {
      let tags = "";
      if (post.tags != null) {
        for (let tag of post.tags) {
          tags += `${tag} `;
        }
      }
      listOfTags += `<li>${tags}</li>
      `

      console.log(listOfTags);
    
    }
    tagList.innerHTML += listOfTags;
          } catch (error) {
        console.log(error);
      }
}
fetchData();
