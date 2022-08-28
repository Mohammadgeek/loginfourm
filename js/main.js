/*
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
*/

function myclick(e){
    const signin = document.querySelector("#register");
    const logo = document.getElementById("logo_img");
    const login = document.getElementById("login");
    if (signin.style.display === "none") {
        signin.style.display = "flex";
        login.style.visibility = "hidden";
    }
       else {
        signin.style.display = "none";
        login.style.visibility = "visible";
        login.scrollIntoView({behavior:"smooth"})
        logo.style.right = "34rem";
        login.style.marginLeft = "12rem";

      }
      
    };

function backpage(){
  login.style.visibility = "hidden";
  const signin = document.querySelector("#register");
  const logo = document.getElementById("logo_img");
  signin.style.display = "flex";
  logo.style.right = "1rem";
  signin.scrollIntoView({behavior:"smooth"})

};

const signup =  document.getElementById("signup");
const count = document.getElementsByName("valid");

signup.addEventListener('click',function(){
  const count = document.getElementsByName("valid");
  for(const x of count){
    x.style.left = "6rem";
    alert("testing eventlistner")
  }
});