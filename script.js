var barmenu=document.getElementById("barmenu");
var menu=document.getElementById("menu");
var nav=document.getElementById("nav");
var black=document.getElementById("black");
menu.addEventListener("click",()=>{
    if(barmenu.style.display=="none"){
        barmenu.style.display="inline-block";
        menu.setAttribute("src","images/icon-close.svg")
        nav.style.backgroundColor="#000";
        black.classList.add("black");
    }
    else{
        barmenu.style.display="none";
        menu.setAttribute("src","images/icon-hamburger.svg")
        nav.style.backgroundColor="transparent";
        black.classList.remove("black");
    }
})