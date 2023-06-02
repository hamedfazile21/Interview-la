//var

const clock = document.querySelector("#clock")

//Function
setInterval( function(){
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    clock.textContent = `${hours}:${minutes}:${seconds}`

    clock.classList = ("clock")
},1000)