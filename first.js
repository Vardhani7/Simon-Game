let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let h2=document.querySelector("h2");
let btn=["red","yellow","green","blue"];




let startBtn=document.querySelector("#start");
startBtn.addEventListener("click",function(){
    if(started==false){
        started=true;
        console.log("Game Start");
        levelUp();
    }
});
function gameFlash(btn){
    btn.classlist.add("flash");
    setTimeout(function(){
        btn.classlist.remove("flash");
    },300);
}

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    let rndmIdx=Math.floor(Math.random()*3);
    let rndclr=btn[rndmIdx];
    let rndBtn=document.querySelector(`#${rndclr}`);
    gameSeq.push(rndclr);
    console.log(gameSeq);
    gameFlash(rndBtn);
}