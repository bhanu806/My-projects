
  function Roll(){
  [...document.getElementsByClassName("visible2")].forEach((el) => {
    el.classList.remove("visible2");
  });
   [...document.getElementsByClassName("visible")].forEach((el) => {
    el.classList.remove("visible");
  });
  var selectDiv=document.getElementsByClassName("exouter")
  var dice1 = Math.floor(Math.random()*6) + 1;
  var dice2 = Math.floor(Math.random()*6) + 1;
  var classArr = ["one", "two", "three", "four", "five", "six"];
  var dice1Class = classArr[dice1 - 1];
  var dice2Class = classArr[dice2 - 1];
  if(dice1>dice2){
    document.getElementsByClassName("mainHead")[0].innerHTML="Player 1 is the winner";
  }
  else if(dice1===dice2){
    document.getElementsByClassName("mainHead")[0].innerHTML="Roll again brooo";
  }
  else{
    document.getElementsByClassName("mainHead")[0].innerHTML="Player 2 is the winner";
  }
  if(dice1==5)
  {
    selectDiv[0].getElementsByClassName(dice1Class)[0].classList.add("visible")
  }
  else{
  
    selectDiv[0].getElementsByClassName(dice1Class)[0].classList.add("visible2")
  }
  if(dice2==5)
  {
   selectDiv[1].getElementsByClassName(dice2Class)[0].classList.add("visible")
  }
  else{
    selectDiv[1].getElementsByClassName(dice2Class)[0].classList.add("visible2")
  }
}