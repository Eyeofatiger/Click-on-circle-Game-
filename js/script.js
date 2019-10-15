let btnStart = document.querySelector("#start"),
    bgGame = document.getElementById("game"),
    quantity = 0,
    gameTime = document.getElementById("time"),
    timeHeader = document.getElementById("time-header"),
    resultHeader = document.getElementById("result-header"),
    result = document.getElementById("result")
    playTime = document.getElementById("game-time");

playTime.addEventListener("input", setGameTime);

btnStart.addEventListener("click", gameBegin);
bgGame.addEventListener("click", (eventObject)=>{
    if(eventObject.target.dataset.click){
        quantity++;
        circleGenerator();
    }
});

function gameBegin(){
    quantity = 0;
    setGameTime();
    playTime.setAttribute("disabled", "true");
    btnStart.classList.add("hide");
    bgGame.style.backgroundColor = "white";
        
    let gameInterval = setInterval(()=>{
        let time = parseFloat(gameTime.textContent);

        if(time>0 && time<=3){
            gameTime.style.color = "tomato";
            gameTime.textContent = (time - 0.1).toFixed(1);
        }
        else if (time<=0){
            clearInterval(gameInterval);
            endGame();
        } else {
            gameTime.textContent = (time - 0.1).toFixed(1);
        }

    }, 100);

    circleGenerator();
}

function circleGenerator(){
    let div = document.createElement("div"),
        circle = randomNumber(25, 100);
        playGroundSize = bgGame.getBoundingClientRect(),
        maxTop = playGroundSize.height - circle,
        maxLeft = playGroundSize.width - circle,
        colorRed = Math.floor(Math.random()*255),
        colorGreen = Math.floor(Math.random()*255),
        colorBlue = Math.floor(Math.random()*255);

    bgGame.innerHTML = "";
    bgGame.insertAdjacentElement('afterbegin', div);
    div.style.width = div.style.height = circle +"px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = "rgb("+colorRed+","+ colorGreen+","+ colorBlue+")";
    div.style.position = "absolute";
    div.style.top = randomNumber(0, maxTop)+"px";
    div.style.left = randomNumber(0, maxLeft)+"px";
    div.style.cursor = "pointer";
    div.setAttribute("data-click", "true");

}

function randomNumber(min, max){
    return Math.floor(Math.random() * (max-min) +min);
}

function endGame(){
    bgGame.innerHTML = "";
    playTime.removeAttribute("disabled");
    showGameResult();
    timeHeader.classList.add("hide");
    resultHeader.classList.remove("hide");
    btnStart.classList.remove("hide");
    bgGame.style.backgroundColor = "lightyellow";
    
}

function showGameResult(){
    result.textContent = quantity.toString();
}

function setGameTime(){
    let plGame = parseInt(playTime.value);

    if(isNaN(plGame)){
        alert("Please enter valid number!");
    } else{
    gameTime.textContent = plGame.toFixed(1);
    timeHeader.classList.remove("hide");
    resultHeader.classList.add("hide");
    gameTime.style.color = "black";
    }
}