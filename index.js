function Clock(){

    const CurrentTime  =  new Date;
    const localTime = CurrentTime.toLocaleTimeString();
    // console.log( CurrentTime, localTime); 


    const timeDiv = document.getElementById('timeDiv');
    timeDiv.innerHTML = localTime;
    
} 
setInterval(Clock, 1000);