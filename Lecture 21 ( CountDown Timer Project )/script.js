const endDate = new Date("12 Feb 2025, 23:15").getTime();// ye woh time hai jis time pr ye timer end hoga
const startDate = new Date().getTime(); // ye current date hai

let x = setInterval(function updateTimer(){
    const now = new Date().getTime(); // Ye current time ka batata hai...
    const distanceCovered = now - startDate; // Ye covered distance ko show karta hai...
    const distancePending = endDate - now; // Ye pending distance hai...
    //Calculate Days, Hours, Mins, Secs
    //1 Day = ( 24 * 60 * 60 * 1000 )
    const oneDayInMillis = (24 * 60 * 60 * 1000); //yahan pr isse milli seconds main convert kr liya
    const oneHourInMillis = (60 * 60 * 1000); //yahan pr isse milli seconds main convert kr liya
    const oneMinuteInMillis = (60 * 1000); //yahan pr isse milli seconds main convert kr liya
    const oneSecondInMillis = (1000); //yahan pr isse milli seconds main convert kr liya
    
    const days = Math.floor(distancePending / oneDayInMillis);// is se days aagaye
    const hrs = Math.floor(distancePending % oneDayInMillis / oneHourInMillis);// is se hours aagaye
    const mins = Math.floor(distancePending % oneHourInMillis / oneMinuteInMillis);// is se mins aagaye
    const secs = Math.floor(distancePending % oneMinuteInMillis / oneSecondInMillis);// is se secs aajayenge

    // Populate In UI 
    document.getElementById("days").innerHTML = days; //yahan pr is ko UI ke sath connect kr diya 
    document.getElementById("hours").innerHTML = hrs; //yahan pr is ko UI ke sath connect kr diya 
    document.getElementById("minutes").innerHTML = mins; //yahan pr is ko UI ke sath connect kr diya 
    document.getElementById("seconds").innerHTML = secs; //yahan pr is ko UI ke sath connect kr diya 

    //Calculate Width Percentage For Progress Bar:
    const totalDistance = endDate - startDate; //yahan pr total distance count kr liya
    const percentageDistance = (distanceCovered / totalDistance) * 100;// yahan pr distance ko percentage mai convert kr diya

    //Set Width For Progress Bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";// yahan pr ham ne isse UI pr connect kr diya

    //Timer Is Not For Show Negative Time
    if(distancePending < 0){
       clearInterval(x);//jo cheezen ham ne set interval se set ki hain, clear interval se remove ho jayen gi
       document.getElementById("countdown").innerHTML = "Expired";//is line se expired likha aaye ga, complete hone pr
       document.getElementById("progress-bar").style.width = "100%";//is line se progress bar ki width complete hoo jaye gi
    } 
}, 1000);