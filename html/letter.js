var letter = document.getElementById("letter");
var msg = document.getElementById("msg");

function yes() {
    window.location.href = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NHZvbzBhbGVucG8yMDFtdTlzMTM3cGFtMmMgamFzb25iYWswMkBt&tmsrc=jasonbak02%40gmail.com";
}

document.addEventListener('click', function(e){
    document.getElementById('audio').play();
    msg.style.visibility='hidden';
    letter.style.visibility='visible';
});
