window.onload = function(){
}

let tagList = document.getElementById("tag-list")
let back = document.getElementById("back")
let total = {
  title: "", author: "", content: "",
}


let createBtn = document.getElementById("createBtn").addEventListener("click", function(e){
    e.preventDefault;
    alert("Updated");

    total.title = document.getElementById("title-input").value 
      
    total.author = document.getElementById("author-input").value
  
    total.content = document.getElementById("content-box").value
  

console.log(total);
postData();
})

async function postData() {

  try {
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers:{ "Content-Type": "application/json",
      },
      body: JSON.stringify(total),
    })

    // console.log(data);

    // let listOfTags = "";

    // for (let post of data) {
    //   let tags = "";
    //   if (post.tags != null) {
    //     for (let tag of post.tags) {
    //       tags += `${tag} `;
    //     }
    //   }
    //   listOfTags += `<li>${tags}</li>
    //   `
    // }
    // tagList.innerHTML += listOfTags;
          } catch (error) {
        console.log(error);
      }
}


