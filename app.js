const Timer = document.getElementById('timer');
const startWatch = document.getElementById('start');
const stopWatch = document.getElementById('stop');
const resetWatch = document.getElementById('reset');

let startTime=0;
let elaspedTime=0;
let timerInterval;


function startTimer () {
  startTime = Date.now() - elaspedTime;
  timerInterval = setInterval(()=>{
    elaspedTime = Date.now()-startTime;
    Timer.textContent = formateTime(elaspedTime);
  }, 10)
  startWatch.disabled = true;
  stopWatch.disabled = false;
  resetWatch.disabled = false;
}
function formateTime (elaspedTime){
  const milliseconds = Math.floor((elaspedTime % 1000) / 10);
  const seconds = Math.floor((elaspedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elaspedTime % (1000 * 60 * 60)) / (60 * 1000));
  const hours = Math.floor(elaspedTime / (1000 * 60 * 60));
  return (
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") + 
      ":" +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" +
      (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
      ":" +
      (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  
  )
}
function stopTimer(){
  clearInterval(timerInterval);
  startWatch.disabled=false;
  stopWatch.disabled=true;
  resetWatch.disabled=false;

}

function resetTimer (){
  clearInterval(timerInterval);

  elaspedTime=0;
  Timer.textContent= "00:00:00";
  startWatch.disabled=false;
  stopWatch.disabled=false;
  resetWatch.disabled=true;
}
startWatch.addEventListener('click', startTimer);
stopWatch.addEventListener('click', stopTimer);
resetWatch.addEventListener('click',resetTimer);