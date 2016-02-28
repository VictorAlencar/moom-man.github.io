setInterval(function() {
    var current = new Date();
    var hora = (current.getHours())*30;
    var minuto = (current.getMinutes()+1)*6;
    var segundo = (current.getSeconds()+1)*6;

    document.querySelector("#hora").style.transform = "rotate("+hora+"deg)";
    document.querySelector("#minuto").style.transform = "rotate("+minuto+"deg)";
    document.querySelector("#segundo").style.transform = "rotate("+segundo+"deg)";
},1000);