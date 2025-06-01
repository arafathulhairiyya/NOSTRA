var close = document.getElementById("closeicon")
var offer = document.getElementById("offer")
close.addEventListener("click", function () {
    offer.style.display = "none"
})
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menuicon")
menu.addEventListener("click", function () {
    sidenav.style.left = "0"
})
var closeicon = document.getElementById("closenav")
closeicon.addEventListener("click", function () {
    sidenav.style.left = "-30%"
}
)

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

sliderrightbutton.addEventListener("click",function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)
let hearticon = document.querySelectorAll("i.heart");
hearticon.forEach((hearticon) => {
    hearticon.addEventListener("click", function () {
    if (hearticon.classList.contains("fa-regular")) {
        hearticon.classList.remove("fa-regular");
        hearticon.classList.add("fa-solid");
        hearticon.style.color = "red";
    } else {
        hearticon.classList.remove("fa-solid");
        hearticon.classList.add("fa-regular");
        hearticon.style.color = "black";
    }
});
})



