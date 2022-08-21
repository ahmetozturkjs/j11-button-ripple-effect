let btn=document.querySelector(".btn");

btn.addEventListener("mouseover",(e)=>{
    let x=e.pageX-btn.offsetLeft;
    let y=e.pageY-btn.offsetTop;
  
    btn.style.setProperty("--xuzak", x+"px");
    btn.style.setProperty("--yuzak", y+"px")
})