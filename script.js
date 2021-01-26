var barmenu=document.getElementById("barmenu");
var menu=document.getElementById("menu");
var nav=document.getElementById("nav");
var black=document.getElementById("black");
menu.addEventListener("click",()=>{
    if(barmenu.style.display=="none"){
        barmenu.style.display="inline-block";
        menu.setAttribute("src","images/icon-close.svg")
        black.classList.add("black");
    }
    else{
        barmenu.style.display="none";
        menu.setAttribute("src","images/icon-hamburger.svg")
        black.classList.remove("black");
    }
})