var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var begin = 0;
var end = 2;

function circle() {

    requestAnimationFrame(circle);

    c.clearRect(0, 0, canvas.width, canvas.height);

    c.beginPath();
    c.arc(250, 250, 50, begin, end * Math.PI);
    c.strokeStyle = "blue";
    c.lineWidth = "5";
    c.stroke();

    if (begin >= 2) {
      begin = 0;
    } else {
      begin += 0.03;
    }

   if (end >= 2) {
      end = 0;
    } else {
      end += 0.03;
    }
}
