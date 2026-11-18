const ball=document.getElementById("ball");
const board=document.getElementById("board");
const play=document.getElementById("play");
const number=document.getElementById("number");
const swap=document.getElementById("swap");
const label=document.getElementById("back");
const easy=document.getElementById("easy");
const hard=document.getElementById("hard");

let score=0,start,end;
let y=150;
let game=false;

play.onclick=function(){
    if(game==false){
        clearInterval(start);
        clearInterval(end);
        setTimeout(()=>{number.innerHTML="3";number.style.opacity="1";},1000);
        setTimeout(()=>{number.innerHTML="2";
        number.style.opacity="1";
        },2000);
        setTimeout(()=>{number.innerHTML="1";
        number.style.opacity="1";
        },3000);
        setTimeout(()=>{number.style.opacity="0";
        play.style.opacity="0";
        play.style.fontSize="8px";
        play.style.transition="0s";
        play.style.pointerEvents="none";
        },4000);
        game=true;
        y=150;
        score=0;
        ball.style.bottom=`${y}px`;
        board.innerHTML=String(score).padStart(4,"0");
        label.style.pointerEvents="none";
        begain();
    }
};

function holding(){
    document.addEventListener("click",event=>{
        if(y<=150 && y>=-130){
            y=y+10;
            ball.style.bottom=`${y}px`;
            ball.style.transition=".5s";
            }
    });
}
holding();
function scoring(){
        start=setInterval(()=>{
        score+=10;
        board.innerHTML=String(score).padStart(4,"0");
        },500);}

function gravity(){
        end=setInterval(()=>{
        if(y>=-130){
            y=y-10;
            ball.style.bottom=`${y}px`;
            ball.style.transition=".5s";
        }else{
            clearInterval(start);
            play.style.opacity="1";
            play.style.fontSize="25px";
            play.style.transition="2s";
            play.innerHTML="Game Over";
            play.style.pointerEvents="unset";
            clearInterval(end);
            game=false;
            label.style.pointerEvents="unset";
        }
    },115);
}
function gravity1(){
        end=setInterval(()=>{
        if(y>=-130){
            y=y-10;
            ball.style.bottom=`${y}px`;
            ball.style.transition=".5s";
        }else{
            clearInterval(start);
            play.style.opacity="1";
            play.style.fontSize="25px";
            play.style.transition="2s";
            play.innerHTML="Game Over";
            play.style.pointerEvents="unset";
            clearInterval(end);
            game=false;
            label.style.pointerEvents="unset";
        }
    },150);
}

function begain(){
if(game==true){
    setTimeout(()=>{
        if(swap.checked===true){
        hard.style.textShadow="0px 0px 10px rgb(196, 58, 58)";
        easy.style.textShadow="none";
        gravity();
        scoring();
        }
        else if(swap.checked===false){
        hard.style.textShadow="none";
        easy.style.textShadow="0px 0px 10px green";
        gravity1();
        scoring();
        }
    },4000);
}}

