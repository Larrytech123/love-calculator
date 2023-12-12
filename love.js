function click(){
    var n = Math.random();
    n = n * 100;
   n = Math.floor(n) + 1;
   if (n <=50 ){
       document.getElementById("loveValue").innerHTML = "your love score is " + n + " dont get too gased up computers lie too";
   }else if (n < 30 ){
    document.getElementById("loveValue").innerHTML = "your love score is " + n + "% omor your relationship dey shoulder";
   }else if(n >75 ) {
    document.getElementById("loveValue").innerHTML = "your love score is " + n + " dont get too gased up computers lie too";
   }

}
console.log("n")


