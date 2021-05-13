var fruits=["lemon","tomato","raspberry"];
console.log(fruits);
document.getElementById("eg1").innerHTML=fruits;
var first="Nalin";
var last="Rana";
var full=first.concat(last);
console.log(full);
document.getElementById("eg2").innerHTML=full;
var numbers=["8763","2794","9457"];
console.log(numbers);
var maxnum=Math.max.apply(Math,numbers);
document.getElementById("eg3").innerHTML="Maximum number out of "+numbers+" is "+maxnum;
var arrayvar="";
for(var i=0;i<fruits.length;i++){
arrayvar=arrayvar+fruits[i]+"<br>";}
document.getElementById("eg4").innerHTML=arrayvar;