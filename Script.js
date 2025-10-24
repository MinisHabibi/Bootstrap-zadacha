document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("load").addEventListener("click" , (e)=>{
      getData(); 
    } )
});

async function getData() {
  const url = "https://dog.ceo/api/breeds/list/all";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    var message = result.message;
    var breedsArray = (Object.getOwnPropertyNames(message));

    breedsArray.forEach(async (breed) => {
     var div = document.createElement("div");
     div.innerHTML=breed;
     document.getElementById("container").appendChild(div);
    });

  } catch (error) {
    console.error(error.message);
  }
}