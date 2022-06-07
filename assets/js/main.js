(function() {
const clock = document.getElementById('clock');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const zero = document.getElementById('zero');
let seconds = 0;
let timer;

start.addEventListener('click', function(event) {
    clearInterval(timer)
    startTimer();
    clock.classList.add('continue');
    clock.classList.remove('paused');
});

pause.addEventListener('click', function(event){
    pauseTimer();
});

zero.addEventListener('click',function(){
    zeroTimer();
});

//Take seconds and format in hours
function getTime(seconds) {
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
};

function startTimer() {
    timer = setInterval(function() {
        seconds++
        clock.innerHTML = getTime(seconds);
    }, 1000);    
};

function pauseTimer() {
    clearInterval(timer);
    clock.classList.add('paused');
    clock.classList.remove('continue');
};

function zeroTimer() {
    seconds = 0;
    clock.classList.remove('paused');
    clock.classList.add('continue');
    clock.innerHTML = getTime(0);
};

})();
