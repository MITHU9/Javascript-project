
document.querySelector("#check").addEventListener("click", function (){
 
      var x = document.querySelector("#throw").value;
     
      try{
        if(x<5)
        {
           throw "input is low of range";
        }else if(x>10)
        {
          throw "input is high of range";
        }

      }catch(err){
        
        alert(err);
      }
});
