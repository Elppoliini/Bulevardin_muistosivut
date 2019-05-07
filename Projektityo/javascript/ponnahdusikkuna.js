function customAlert() {
    this.render = function(dialog) {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = windowHeight + "px";
        dialogbox.style.left = (windowWidth/2) - (550 * .5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Itkuvaroitus!"
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">Selvä on, nyyh</button>';
    }
    this.ok = function() {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
        video.play();
    }
}
var Alert = new customAlert();
var video = document.getElementById('video');