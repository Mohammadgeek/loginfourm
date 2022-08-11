/*
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
*/

const btn = document.getElementById("log");
const signup = document.getElementById("signup");


function backpage(){
    document.documentElement.style.scrollBehavior = "smooth";
}

function myclick(e){
    const signin = document.querySelector("#register");
    const logo = document.getElementById("logo_img");
    const login = document.getElementById("login");
    if (signin.style.display === "none") {
        signin.style.display = "block";
        login.style.visibility = "hidden";

      } else {
        signin.style.display = "none";
        login.style.visibility = "visible";
        logo.style.right = "34rem";
        login.style.marginLeft = "12rem";

      }
    }


