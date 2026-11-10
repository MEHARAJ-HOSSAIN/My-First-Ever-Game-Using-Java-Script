const ball=document.getElementById("ball");
const board=document.getElementById("board");
const play=document.getElementById("play");

let score=0,start,end;
let y=150;
let game=false;

play.onclick=function(){
    if(game==false){
        setTimeout(()=>{play.innerHTML="1";play.style.fontSize="30px";},1000);
        setTimeout(()=>{play.innerHTML="2";play.style.fontSize="30px";},2000);
        setTimeout(()=>{play.innerHTML="3";play.style.fontSize="30px";},3000);
        setTimeout(()=>{play.style.opacity="0";
        play.style.fontSize="25px";
        play.style.top="67%";
        play.style.transition="0s";
        },4000);
        game=true;
        y=150;
        score=0;
        ball.style.bottom=`${y}px`;
        board.innerHTML=String(score).padStart(4,"0");
        clearInterval(start);
        clearInterval(end);
        begain();
    }
};

function scoring(){
        start=setInterval(()=>{
        score++;
        board.innerHTML=String(score).padStart(4,"0");
        },1000);}

function gravity(){
        end=setInterval(()=>{
        if(y>=-120){
            y=y-10;
        }else{
            clearInterval(start);
            clearInterval(end);
            play.style.opacity="1";
            play.style.fontSize="16px";
            play.style.top="50%";
            play.style.transition="2s";
            play.innerHTML="Game Over"
            game=false;
        }
        ball.style.bottom=`${y}px`;
        ball.style.transition=".5s";
    },115);
}
function begain(){
if(game==true){
    document.addEventListener("click",event=>{
        if(y<=150){
            if(y>=-120){
            y=y+10;
            }
        }
    ball.style.bottom=`${y}px`;
    ball.style.transition=".5s";
    });
    setTimeout(()=>{
        gravity();
        scoring();
    },4000);
}}
