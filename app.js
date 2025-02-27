let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newbtn=document.querySelector("#msgbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
const winningpattern=[[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]];
let turn=true;
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("clicked");
    
if (turn){
    box.innerText="O";
    turn=false;
    box.style.color="green";
}
else{
    box.innerText="X";
    turn=true;
}
    box.disabled=true;
    checkwinner();
});
});
const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner = (winner) =>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();

}
const resetGame =() =>{
    turn=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}
const checkwinner = () =>{
    for (let pattern of winningpattern){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                showwinner(p1);
            }
        }
        
    }
}
newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);




