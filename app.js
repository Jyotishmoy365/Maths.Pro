var first = document.getElementById("ele1").innerHTML = Math.floor(Math.random() * 20);
var second = document.getElementById("ele3").innerHTML = Math.floor(Math.random() * 20);
var final = first * second;

document.getElementById("mybutton").onclick = function() {

 var result = document.getElementById("answer").value;
   if (result == final) {
    //if the answer is right!
   let x = document.getElementById("Right");
   x.style.display = "block"


   } else {
    //if the answer is wrong!
    let y = document.getElementById("Wrong");
    y.style.display = "block";
   
   }


}


//close alert
document.getElementById("spanBTN1").addEventListener("click", close);
function close() {
    document.getElementById("Wrong").style.display = "none";
}
//close alert
document.getElementById("spanBTN2").addEventListener("click", close1);
function close1() {
    document.getElementById("Right").style.display = "none";
}
