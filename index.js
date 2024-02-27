var al = ["w","a", "s", "d","j","k","l"];

// button press
for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        btnAnimation(this.innerHTML);
        // playSoundAuto(this.innerHTML);

    });
}
// function playSoundAuto(alpha) {
//     for (var i = 0; i < al.length; i++) {
//         if (al[i] === alpha) {
//             for (var j = i + 1; j < al.length; j++) {
//                 setTimeout(makeSound.bind(null, al[j]), (j - i) * 700);
//             }
//         }
//     }
// }

    
// key press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    btnAnimation(event.key);
    // playSoundAuto(event.key);

});


function makeSound(alpha){
    switch (alpha) {
        case "w": 
           var crash = new Audio("./sounds/crash.mp3");
           crash.play();            
            break;
        case "a": 
           var kick = new Audio("./sounds/kick-bass.mp3");
           kick.play();            
            break;
        case "s": 
           var snare = new Audio("./sounds/snare.mp3");
           snare.play();            
            break;
        case "d": 
           var tom1 = new Audio("./sounds/tom-1.mp3");
           tom1.play();            
            break;
        case "j": 
           var tom2 = new Audio("./sounds/tom-2.mp3");
           tom2.play();            
            break;
        case "k": 
           var tom3 = new Audio("./sounds/tom-3.mp3");
           tom3.play();            
            break;
        case "l": 
           var tom4 = new Audio("./sounds/tom-4.mp3");
           tom4.play();            
            break;    
}
}
function btnAnimation(currentKey){
   var activeBtn = document.querySelector("." + currentKey);
   activeBtn.classList.add("pressed");
   setTimeout(function (){
    activeBtn.classList.remove("pressed");
   } , 100);
}



// if(alpha==="w"){
//     setTimeout(function(){
//         makeSound("a");
//     }, 500);
// }
