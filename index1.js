var photos = ["mithu.jpg", "2019-02-16-15-35-05.jpg", "FB_20150514_18_21_48_Saved_Picture.jpg"];
var imgTag = document.querySelector("img");

count=0;

function next(){
    count++;
    if(count>=photos.length){
        count=0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
   
}

function prev(){
    count--;
    if(count<0){
        count=photos.length - 1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
   
}