function checkChar(character){
    switch(character){
        case "w":
            var tom=new Audio("sounds/tom-1.mp3");
            tom.play();
            break;
        case "a":
            var tom=new Audio("sounds/tom-2.mp3");
            tom.play();
            break; 
        case "s":
            var tom=new Audio("sounds/tom-3.mp3");
            tom.play();
            break;
        case "d":
            var tom=new Audio("sounds/tom-4.mp3");
            tom.play();
            break;
        case "j":
            var tom=new Audio("sounds/snare.mp3");
            tom.play();
            break;
        case "k":
            var tom=new Audio("sounds/crash.mp3");
            tom.play();
            break;
        case "l":
            var tom=new Audio("sounds/kick-bass.mp3");
            tom.play();
            break;
        default:
            console.log(character);
            break;
       }

}
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonClicked=this.innerHTML;
        checkChar(buttonClicked);
    });
}
document.addEventListener("keydown",function(event){
    checkChar(event.key);
});