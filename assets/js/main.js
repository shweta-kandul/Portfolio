function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
  // Dark and light mode 

  const btn=document.getElementById("modeToggle");
  const btn2=document.getElementById("modeToggle2");
  const themeIcons=document.querySelectorAll(".icon");
  const currentTheme=localStorage.getItem("theme");

  if(currentTheme === "dark"){
    setDarkMode();
  }

  btn.addEventListener("click", function () {
    setTheme();
  });


  btn2.addEventListener("click", function () {
    setTheme();
  });

  function setTheme(){
    let currentTheme = document.body.getAttribute("theme");


    if(currentTheme === "dark"){
      setLightMode();
    }
    else{
      setDarkMode();
    }
  }

  function setDarkMode(){
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");

    themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-dark");
    });
  }

  function setLightMode(){
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");

    themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-light");
    });
  }



// about js 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
 for(tablink of tablinks){
   tablink.classList.remove("active-link");
 }
 for(tabcontent of tabcontents){
   tabcontent.classList.remove("active-tab");
 }

 event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab");

 
}