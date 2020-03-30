function startTime() {
    const today = new Date();
    const y=today.getFullYear();
    const mon=today.getMonth();
    const day=today.getDay()
    const h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timer').innerHTML = y+"-"+mon+"-"+day +" "+h + ":" + m + ":" + s;
    const t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
window.onload=startTime;