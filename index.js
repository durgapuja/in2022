/*let screen= document.getElementById('screen');

buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e){
        buttontext=e.target.innertext;
        
    })
}

alert('button text is ',buttontext )*/
const btn = document.getElementById("myBtn");

myBtn.addEventListener("click", ()=>{

    if(btn.value === "505"){
        btn.value = "606";
    }else{
        btn.value= "606";
    }
})
let ck ="";
function myFunction() {
    
   ck = document.getElementById("myBtn").value;
   if( ck == 606 ){
    location.href = "https://www.w3schools.com";
  }
 
  else{
    alert("please share 10 friends");
}
}
function myFunction2() {
    
    ck = document.getElementById("myBtn").value;
    if( ck == 606 ){
     location.href = "https://www.w3schools.com";
   }
  
   else{
     alert("please share 10 friends");
 }
 }