score = 0;
cross = true;

audio = new Audio('bg.mp3');
audiogo = new Audio('girl.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        girl = document.querySelector('.girl');
        girl.classList.add('animateGirl');
        setTimeout(() => {
            girl.classList.remove('animateGirl')
        }, 700);
    }
    if (e.keyCode == 39) {
        girl = document.querySelector('.girl');
        girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
        girl.style.left = girlX + 112 + "px";
    }
    if (e.keyCode == 37) {
        girl = document.querySelector('.girl');
        girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
        girl.style.left = (girlX - 112) + "px";
    }
}

setInterval(() => {
    girl = document.querySelector('.girl');
    gameOver = document.querySelector('.gameOver');
    lion = document.querySelector('.lion');

    dx = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(girl, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(lion, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(lion, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 69 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        lion.classList.remove('lionAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 2000);
    } else if (offsetX < 145 && cross) {
        score += 100;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(lion, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            lion.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 100);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}