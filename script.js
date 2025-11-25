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

// Visitor Counter Animation
var visitorCount = 478;
function updateCounter() {
    visitorCount++;
    var counterStr = String(visitorCount).padStart(6, '0');
    document.getElementById('counter').innerHTML = counterStr;
    document.getElementById('visitorNum').innerHTML = visitorCount;
}

setInterval(updateCounter, 30000);

// Form Validation
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    
    if (name == "") {
        alert("Please enter your name!");
        return false;
    }
    
    if (email == "") {
        alert("Please enter your email!");
        return false;
    }
    
    //Email validation
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Please enter a valid email address!");
        return false;
    }
    
    if (message == "") {
        alert("Please enter a message!");
        return false;
    }
    
    alert("Thank you for your message! I will get back to you soon.");
    return false;
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function addToFavorites() {
    if (window.external && ('AddFavorite' in window.external)) {
        window.external.AddFavorite(location.href, document.title);
    } else {
        alert('Press Ctrl+D to bookmark this page!');
    }
}
