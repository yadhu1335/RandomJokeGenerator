const jokeContainer = document.getElementById("jokeinhtml");
const btn = document.getElementById("button-17");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  fetch(url)
    .then(data => data.json())
    .then(item => {
      jokeContainer.textContent = `${item.joke}`;
      console.log(item.joke)
    });
}
btn.addEventListener("click", getJoke);
// getJoke();//ITH CLICK AKKUMBOL ANU FIRST JOKE LOAD AKUKA.

let button= document.getElementById("button_applyfilter");

let customJokes=()=>{
  console.log("inside customJokes()");
  url="https://v2.jokeapi.dev/joke/";
  let programming=document.getElementById("programming");
  let misc=document.getElementById("misc");
  let dark=document.getElementById("dark");
  let spooky=document.getElementById("spooky");
  let christmas=document.getElementById("christmas");
  let pun=document.getElementById("pun");
  let nsfw=document.getElementById("nsfw");
  let religion=document.getElementById("religion");
  let political=document.getElementById("political");
  let racist=document.getElementById("racist");
  let sexist=document.getElementById("sexist");
  let explicit=document.getElementById("explicit");
  let single=document.getElementById("single");
  let twopart=document.getElementById("twopart");  
  let bothtype=document.getElementById("bothtype");
  var selectedCategory=[];
  if(!(
    programming.checked ||
    misc.checked ||
    dark.checked ||
    spooky.checked ||
    christmas.checked ||
    pun.checked
  ))     //checking if any of the checklist boxes has been selected
  {
    console.log("Caregories is not selected so adding ANY");
    url+="Any";//Adiing Any to url
  }

  if(programming && programming.checked)
  {
    console.log("programming=true");
    selectedCategory.push("Programming");
  }
  
  if(misc&&misc.checked)
  {  console.log("misc=true");
    selectedCategory.push("Miscellaneous");  }
  
  if(dark&&dark.checked)
  {    console.log("dark=true");
    selectedCategory.push("Dark");}
    
  if(spooky & spooky.checked)
  {console.log("spooky=true");
    selectedCategory.push("Spooky"); }   

  if(pun && pun.checked)
  { console.log("pun=true");
    selectedCategory.push("Pun");
  }
  
  if(christmas & christmas.checked)
  { console.log("christmas=true");
    selectedCategory.push("Christmas"); 
  }
  url =url + selectedCategory.join(",");
  
  console.log("url="+url);
  getJoke()

  // fetch(url1)
  //   .then(data => data.json())
  //   .then(item => {
  //     jokeContainer.textContent = `${item.joke}`;
  //     console.log(item)
  //   });
  // button.addEventListener("click", customJokes);
}
button.addEventListener("click",customJokes);