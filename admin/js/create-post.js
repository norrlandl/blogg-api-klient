window.onload = function(){
  const form = document.getElementById("main-div")
  form.addEventListener("submit", postData)
};


function postData(e) {
    e.preventDefault;

    const formData = new FormData(e.target);
    let total = {
      title: formData.get("title"), 
      author: formData.get("author"), 
      content: formData.get("content"), 
      tags: formData.getAll("tags"),
    };
    
    console.log(total);
    
  try {
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers:{ "Content-Type": "application/json",
      },
      body: JSON.stringify(total),
    });

    window.location.replace("../index.html");

  } catch (error) {
  console.log(error);
  }

  
}

