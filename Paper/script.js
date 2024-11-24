
var input=prompt("Please Enter anyOne(paper,scissors,stone)");
if(input){
var computer=['stone','paper','scissors'];
if(computer.length){
    var random=Math.floor(Math.random()*computer.length);
    if(input == computer[random]){
        alert("You win!!!")
    }
    else
    {
        alert("Computer wins!!!")
    } 
   }
   var playagain=confirm("Do you want to play again?")
   if(playagain)
   {
    location.reload();
   }
   else{
    alert("Thanking you!!!")
   }
}
else{
    alert("Thank you for coming , Have a nice day")
}