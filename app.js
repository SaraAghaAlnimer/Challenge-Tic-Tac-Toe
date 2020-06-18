document.getElementById("a1").addEventListener("click", function(){
  if (user1) {
      document.getElementById("a1").innerHTML = "&#11093";
  }
  if(user2) {
      document.getElementById("a1").innerHTML = "&#10062";
  }
})
// two players each with
// function to pass in id argument when