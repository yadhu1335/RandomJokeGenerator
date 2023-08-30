const jokeContainer = document.getElementById("jokeinhtml");
const btn = document.getElementById("button-17");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  fetch(url)
    .then(data => data.json())
    console.log(data.json)
    .then(item => {
      jokeContainer.textContent = `${item.joke}`;
      console.log(item.joke)
    });
}
btn.addEventListener("click", getJoke);
// getJoke();//ITH CLICK AKKUMBOL ANU FIRST JOKE LOAD AKUKA.