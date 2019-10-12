let btnStart = document.querySelector("#start"),
    bgGame = document.getElementById("game"),
    quantity = 0;

btnStart.addEventListener("click", gameBegin);
bgGame.addEventListener("click", (eventObject)=>{
    if(eventObject.target.dataset.click){
        quantity++;
        circleGenerator();
    };
});

function gameBegin(){
    btnStart.classList.add("hide");
    bgGame.style.backgroundColor = "white";

    circleGenerator();
}

function circleGenerator(){
    let div = document.createElement("div");
    bgGame.innerHTML = "";
    bgGame.insertAdjacentElement('afterbegin', div);
    div.style.width = div.style.height = "70px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = "green";
    div.style.position = "absolute";
    div.style.top = "5px";
    div.style.left = "5px";
    div.style.cursor = "pointer";
    div.setAttribute("data-click", "true");

}