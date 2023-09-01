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
  // let single=document.getElementById("single");     //since i changed to dropdown i had to comment these
  // let twopart=document.getElementById("twopart");  
  // let bothtype=document.getElementById("bothtype");
  let selectType = document.querySelector('#type');
  let output = selectType.value;
  var selectedCategory=[];
  if(!(programming.checked || misc.checked || dark.checked || spooky.checked || christmas.checked || pun.checked))     //checking if any of the checklist boxes has been selected
    url+="Any";//Adiing Any to url

  if(programming && programming.checked)
    selectedCategory.push("Programming");
  
  if(misc&&misc.checked)
    selectedCategory.push("Miscellaneous");  
  
  if(dark&&dark.checked)
    selectedCategory.push("Dark");
    
  if(spooky & spooky.checked)
    selectedCategory.push("Spooky");    

  if(pun && pun.checked)
    selectedCategory.push("Pun");

  if(christmas & christmas.checked)
    selectedCategory.push("Christmas"); //finished filtering categories 
  url =url + selectedCategory.join(",");
  
  url=url+"?"; //since type will surely be present ? is mandototry so i gave it outside
  if((nsfw.checked||religion.checked||political.checked||racist.checked||sexist.checked||explicit.checked))// single.checked||twopart.checked||bothtype.checked))
  {
      let selectedFlags=[];
      url=url+"?blacklistFlags=";
      if(nsfw&&nsfw.checked) 
         selectedFlags.push("nsfw");

      if(religion&&religion.checked)
        selectedFlags.push("religious");

      if(political&&political.checked)
        selectedFlags.push("political");

      if(racist&&racist.checked)
        selectedFlags.push("racist");

      if(sexist&&sexist.checked)
        selectedFlags.push("sexist");

      if(explicit&&explicit.checked)
        selectedFlags.push("explicit");
     url=url+selectedFlags.join(",");
  
     url=url+"&type=";
     if(output=="Single")
       url=url+"Single";
     if(output=="Twopart")
       url=url+"Twopart";
      if(output=="Both")
       url = url.replace("&type=", "");
  }
  else
  {
    url=url+"type="
    if(output=="Single")
       url=url+"Single";
     if(output=="Twopart")
       url=url+"Twopart";
      if(output=="Both")
       url = url.replace("?type=", "");
  }
   console.log(url);
  
   getJoke()
  
}
button.addEventListener("click",customJokes);