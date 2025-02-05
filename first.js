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

function userFlash(btn){
    btn.classlist.add("userflash");
    setTimeout(function(){
        btn.classlist.remove("userflash");
    },300);
}

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    let rndIdx=Math.floor(Math.random()*4);
    let rndclr=btn[rndIdx];
    let rndBtn=document.querySelector(`#${rndclr}`);
    gameSeq.push(rndclr);
    console.log(gameSeq);
    gameFlash(rndBtn);
}

function pressBtn(){
let btn=this;
let btnClr = btn.getAttribute("id");
userFlash();

}

let allBtns =document.querySelectorAll(".box");
for(let btn of allBtns){
    btn.addEventListener("click",pressBtn);

}

