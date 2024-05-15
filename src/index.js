const init = () => {
  const inputForm = document.querySelector("form")

  inputForm.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const userInput = (event.target.querySelector("#searchByID").value)

    fetch(`http://localhost:3000/movies/${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary
      });   
  })
}

document.addEventListener('DOMContentLoaded', init);

//add event listenrs to capture form


//fetch data base on what user types
//deplay on the page
