const jokeContainer = document.getElementById("jokeinhtml");
const btn = document.getElementById("button-17");
let customFiltersApplied=false;
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let currentJoke;
let getJoke = () => {
  fetch(url)
    .then(data => data.json())
    .then(item => {
    currentJoke = item;
    console.log("error="+item.error+"categorie="+item.category);
    if(item.error==true){
      jokeContainer.textContent = "No matching jokes found";
    }
    if (item.type === "twopart")
    {
      jokeContainer.innerHTML = `${item.setup}<br>${item.delivery}`;
 
      console.log("two type="+item.setup+item.delivery);
    } 
    else if (item.type === "single")
    {
       jokeContainer.textContent = `${item.joke}`;
       console.log(item.joke);
    }
    });
}
btn.addEventListener("click", getJoke);
 getJoke();//ITH CLICK AKKUMBOL ANU FIRST JOKE LOAD AKUKA.



let customJokes=()=>{
  customFiltersApplied = true; 
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
  let selectType = document.querySelector('#type');
  let output = selectType.value;
  let selectLan = document.querySelector('#lan');
  let lanOutput = selectLan.value;

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
  
  if(lanOutput=="en"){
    console.log("lanoutput="+lanOutput);
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
    url=url+"?type="
    if(output=="Single")
       url=url+"Single";
     if(output=="Twopart")
       url=url+"Twopart";
      if(output=="Both")
       url = url.replace("?type=", "");
  }
}

if(lanOutput=="pt"||lanOutput=="cs"||lanOutput=="de"||lanOutput=="es"||lanOutput=="fr"){
  console.log("lanoutput="+lanOutput);

   url=url+"?lang="+lanOutput; //since type will surely be present ? is mandototry so i gave it outside
  if((nsfw.checked||religion.checked||political.checked||racist.checked||sexist.checked||explicit.checked))// single.checked||twopart.checked||bothtype.checked))
  {
      let selectedFlags=[];
      url=url+"&blacklistFlags=";
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
    url=url+"&type="
    if(output=="Single")
       url=url+"Single";
     if(output=="Twopart")
       url=url+"Twopart";
      if(output=="Both")
       url = url.replace("&type=", "");
  }
}
   console.log(url);
};

const amuseMe = () => {
  if (customFiltersApplied) {
    // Fetch jokes with custom filters
    customJokes();
    console.log("Fetching jokes with custom filters.");
  } else {
    // Fetch random jokes
    getJoke();
    console.log("Fetching random jokes.");
  }
};

const resetFilters = () => {
  customFiltersApplied = false; // Reset custom filters
  url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"; // Reset the URL
  console.log("Filters reset.");
};

let button= document.getElementById("button_applyfilter");
button.addEventListener("click",customJokes);
document.getElementById("button_applyfilter").addEventListener("click", customJokes);
btn.addEventListener("click", amuseMe);
document.getElementById("button_reset").addEventListener("click", resetFilters);