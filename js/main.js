/*
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
*/

function myfunction(){
    const register = document.getElementById("register");
    const login = document.querySelector("log");
    if(login.click()) return;
    const ishide = register.style.display === "none";
    const isvisible = login.style.display === "block";
}

