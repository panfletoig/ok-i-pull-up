window.onload = function(){
    const frase = document.querySelector(".frase");
    const audio = document.getElementById("audio");
    
    frase.addEventListener('mouseover', ()=>{
        audio.play();
    })
    frase.addEventListener('mouseout', ()=>{
        audio.pause();
    })
}
