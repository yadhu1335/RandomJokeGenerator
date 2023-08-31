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

let customJokes=()=>{
  let url="https://v2.jokeapi.dev/joke/"
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
  if((programming.checked && misc.checked && dark.checked && spooky.checked && christmas.checked && pun.checked)==false){
    console.log("Caregories is not selected so adding ANY");
    url+="Any";//Adiing Any to url
  }
  if(programming.checked==true)
    // url+="Dark";
    selectedCategory.push("Programming");
  
  if(misc.checked==true)
    // url+="misc"
    selectedCategory.push("Miscellaneous");  
  
  if(dark.checked==true)
    selectedCategory.push("Dark");
    
  if(spooky.checked==true)
    selectedCategory.push("Spooky");    

  if(pun.checked==true)
    selectedCategory.push("Pun");
  
  if(christmas.checked==true)
    selectedCategory.push("Christmas"); 
  
  url += selectedCategories.join(",");
  console.log(url);