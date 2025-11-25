// Clock Function
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM';
    
    h = h % 12;
    h = h ? h : 12;
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById('clock').innerHTML = 
        h + ":" + m + ":" + s + " " + ampm;
    
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.onscroll = function() {
    var scrollBtn = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
