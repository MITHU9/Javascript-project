
for(i=0 ; i < 3 ; i++){

    var x = document.querySelectorAll(".btn");
    x[i].addEventListener("click", function () {
        var text = this.innerHTML;
        console.log(text);
        audioplay(text);
        animation(text);
    });

}

document.addEventListener("keypress",function(event){
     var text = event.key;
     audioplay(text);
     animation(text);
});



function  audioplay(text){
    switch(text){
        case "A":
            var audio = new Audio("sounds/a.mp3.mp3");
            audio.play();
            break;
        case "B":
            var audio = new Audio("sounds/b.mp3.mp3");
            audio.play();
            break;
        case "C":
             var audio = new Audio("sounds/c.mp3.mp3");
             audio.play();
             break;    
    }
}

function  animation(text){
    var button = document.querySelector("." + text);
    button.classList.add("anim");

    setTimeout(function(){
        button.classList.remove("anim"); 
     
    },1000);
}

