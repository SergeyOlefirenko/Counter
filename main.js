var button = document.getElementById("like-count"),
  count = 0;
button.onclick = function() {
  count += 1;
  if (count%10!=1||count==11){
    button.innerHTML = "Likes " + count;
  }
  
  else{
    button.innerHTML = "Like " + count;
  }
  
};
var button = document.getElementById("minus-count"),
  count = 0;
button.onclick = function() {
  count -= 1;
  if (count%10!=1||count==11){
    button.innerHTML = "Dislikes " + count;
  }
  
  else{
    button.innerHTML = "Dislike " + count;
  }
  
};

var button = document.getElementById("reset-count")
button.onclick = function() {
  count = 0;
  button.innerHTML = "Reset" 
};

