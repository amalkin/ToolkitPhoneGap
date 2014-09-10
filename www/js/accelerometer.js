document.addEventListener("deviceready",init,false);

function init()
{
    var iW = window.innerWidth;
    var iH = window.innerHeight;
    canvas= document.getElementById('myCanvas');
    cnv = canvas.getContext("2d");
    cnv.canvas.width = iW;
    cnv.canvas.height = iH-40;
    target = new Image();
    target.src = "../img/crosshair.png";
    xPos = (iW-target.width)/2;
    yPos = (iH-target.height)/2;
    target.onload = function()
    {
        cnv.drawImage(target, xPos, yPos);
    }
    watch = navigator.accelerometer.watchAcceleration(success, failure, {frequency: 25});
}

function success(accel)
{
    document.getElementById("xOut").innerHTML = accel.x;
    document.getElementById("yOut").innerHTML = accel.y;
    document.getElementById("zOut").innerHTML = accel.z;
    cnv.clearRect(0, 0, canvas.width, canvas.height);
    xPos += -1*(accel.x * 1.5);
    yPos += (accel.y * 1.5);
    cnv.drawImage(target, xPos, yPos);
}

function failure()
{
    alert("Error");
}