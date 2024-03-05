//Light and Dark Mode

let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");

})

//Text Animation  (Typing Effect)
let typingEffect = new Typed("#text",{
    strings:["Developer..","Web Designer..","Full-Stack Developer..","Coder.."],
    loop:true,
    typespeed:5000,
    backspeed:5000,
    backDelay:2000
})


