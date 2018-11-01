var timeLimit, timerStart, currentDot, progress;
var timer = document.getElementById('timer');
var playingField = document.getElementById('playingField');
const maxTimeLimit = 10;
const second_interval = 1000;
const dotsPerLevel = 10;


function play(){
    currentDot = 1;
    timeLimit = maxTimeLimit;
    progress = 100;
    addDots();
    timerStart = setInterval(time, second_interval);
}

function time(){
    timeLimit--;
    if(timeLimit >= 0){
        //updating the progress bar 
        progress = progress - maxTimeLimit;
        $( "#gameBarProgress" ).css('width',(progress+'%'));
        if(progress <= 66 && progress > 33 ){
            $( "#gameBarProgress" ).removeClass('bg-success');
            $( "#gameBarProgress" ).addClass('bg-warning');
        }
        else if( progress <= 33 ){
            $( "#gameBarProgress" ).removeClass('bg-warning');
            $( "#gameBarProgress" ).addClass('bg-danger');
        }
    }
    else{
        alert("You Lost!");
        clearInterval(timerStart);
    }
}

function addDots(){
    for(var num = 1; num <= dotsPerLevel; num++){
        var dot = document.createElement('div');
        dot.className="dot";
        dot.id = "dot"+num;
        dot.innerHTML = num;
        dot.onclick = verify;
        playingField.append(dot);
    }
}

function removeDots(){
    if(playingField.children.length > 0){
        for(var num = 1; num <= dotsPerLevel; num++){
            var dot = document.getElementById("dot"+num);
            playingField.removeChild(dot);
        }
    }
}

function verify(element){
    if(currentDot == element.srcElement.innerHTML){
        element.srcElement.className = "correct-dot";
        if(currentDot === dotsPerLevel && timeLimit !== 0 )
            alert("You Won!");
        currentDot++;
    }
    else
    {
        if(element.srcElement.className !== "correct-dot")
            element.srcElement.className = "incorrect-dot";
    }
}