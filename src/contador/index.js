var start = new Date("April 4, 2021 22:36:00");

function updateHour() {
    var horas = document.getElementById('hor')
    var minutos = document.getElementById('min')
    var segundos = document.getElementById('seg')
    
    var currentdate = new Date(); 
    var delta = Math.abs(currentdate - start) / 1000;

    var hours = Math.floor(delta / 3600);
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = delta % 60;
    
    horas.innerHTML = `${hours}`
    minutos.innerHTML = `${minutes}`
    segundos.innerHTML = `${seconds.toFixed(0)}`
}

setInterval(updateHour, 1000);
