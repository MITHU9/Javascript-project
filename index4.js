  for(i=0 ; i<3 ;i++){

    var x = document.querySelectorAll(".btn");
    x[i].addEventListener("click", function(){

        var text = this.innerHTML;
       document.querySelector("h1").innerHTML = text + " is clicked";
    });


  }

    
    /*var x = document.querySelectorAll(".btn");
    x[1].addEventListener("click", function(){

        var text = this.innerHTML;
       document.querySelector("h1").innerHTML = text + " is clicked";
    });

    var x = document.querySelectorAll(".btn");
    x[2].addEventListener("click", function(){

        var text = this.innerHTML;
       document.querySelector("h1").innerHTML = text + " is clicked";
    });*/
