function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Add leading zeros to hours, minutes, and seconds if needed
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    // Construct the time string
    let time = `${hours}:${minutes}:${seconds}`;

    // Update the content of the h1 element
    let p = document.querySelector(".digitaltime p");
    p.innerHTML = time;
}

// Call updateTime every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();


// loop to turning color red of hours dot
function updateDotcolor() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let Minutes = currentTime.getMinutes();
    let alldots = document.querySelectorAll('.dot');
    alldots.forEach(dot => dot.style.backgroundColor = "red");
    let allDots = document.querySelectorAll('.Dot');
    allDots.forEach(Dot => Dot.style.backgroundColor = "black");
    for (let b = 1; b <= Minutes; b++) {
        let dot = document.querySelector(`.dot${b}`);
        if (dot) {
            dot.style.backgroundColor = "green";
        }
    }
    for (let a = 1; a <= hours; a++) {
        let Dot = document.querySelector(`.Dot${a}`);
        if (Dot) {
            Dot.style.backgroundColor = "red";
        }
    }
}
setInterval(updateDotcolor, 4000);
updateDotcolor();
