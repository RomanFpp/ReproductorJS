let sound = new Audio('../ConfeccionYpublicacionDepagunasWeb/SOUND/a.mp3');


let play = document.getElementById("play");
    play.addEventListener('click', () =>{    
    play.classList.toggle("play_griz");
    sound.play();
  });


let pause = document.getElementById("pause");
    pause.addEventListener('click', () =>{
    pause.classList.toggle("pause_griz");
    sound.pause();
   }); 
    

let stop = document.getElementById("stop");
    stop.addEventListener('click', () =>{
    sound.currentTime = 0;
    sound.pause();
    play.classList.toggle("play_griz");
    pause.classList.toggle("pause_griz");
    });
     

let vol_mas = document.getElementById("vol_mas");
    vol_mas.addEventListener('click', () =>{
    sound.volume = sound.volume + 0.1;
    });

let vol_menos = document.getElementById("vol_menos");
    vol_menos.addEventListener('click', () =>{
    sound.volume = sound.volume - 0.1;
    });

