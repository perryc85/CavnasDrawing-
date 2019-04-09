var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');

//second set of line patterns
c.lineWidth = 1;
c.fillStyle = "grey";

c.beginPath();
c.moveTo(315, 200);
c.lineTo(105, 3,000);
c.lineWidth = 3;
c.stroke();
c.closePath();

c.beginPath();
c.moveTo(70, 400);
c.lineTo(315, 200);
c.lineWidth = 3;
c.stroke();
c.closePath();

var x = 115;
var y = 195;
for(var i = 0;i < 16;i++){
    c.beginPath();
    c.moveTo(319, y);
    c.lineTo(x, 3,000);
    x += 10;
    y -= 10;
    c.stroke();
    c.closePath();
}

// add more lines here!
c.beginPath();
c.moveTo(319, 35);
c.lineTo(277, 3,000);
c.stroke();
c.closePath();

c.beginPath();
c.moveTo(319, 25);
c.lineTo(290, 3,000);
c.stroke();
c.closePath();

c.beginPath();
c.moveTo(319, 16);
c.lineTo(301, 3,000);
c.stroke();
c.closePath();


var x = 80;
var y = 205;
for(var i = 0;i < 20;i++){
    c.beginPath();
    c.moveTo(x,400);
    c.lineTo(320,y);
    c.lineWidth = 4;
    x += 10;
    y += 10;
    c.stroke();
    c.closePath();
}

var x = 360;
var y = 220;
for(var i = 0;i < 29; i++){
    c.beginPath();
    c.moveTo(342, y);
    c.lineTo(x, 200);
    c.lineCap = 'round';
    x += 15;
    y += 15;
    c.stroke()
    c.closePath();
}

//first pattern shape
c.lineWidth = 4;
c.beginPath();
c.moveTo(120, 400);
c.quadraticCurveTo(260, 335, 320, 385);
c.lineTo(340, 370);
c.lineTo(340, 300); 
c.quadraticCurveTo(555, 415, 365, 480);
c.closePath();
c.fill();
c.stroke();

var x = 360;
var y = 180;
for(var i = 0;i < 29;i++){
    c.beginPath()
    c.lineCap = ('round');
    c.moveTo(342, y);
    c.lineTo(x, 200);
    x += 15;
    y -= 15;
    c.stroke();
    c.closePath();
}

c.fillStyle = "#D3D3D3";

c.beginPath();
c.moveTo(340, 50);
c.quadraticCurveTo(490, 30, 510, 0);
c.moveTo(510, 0);
c.lineTo(340, 0);
c.lineTo(340, 50);
c.fill();
c.stroke();
c.closePath();



c.beginPath();
c.moveTo(340, 15);
c.lineTo(340, 300);
c.stroke();
c.closePath();


c.beginPath();
c.moveTo(340, 0);
c.lineTo(320, 0);
c.stroke();
c.closePath();


c.beginPath();
c.moveTo(320, 0);
c.lineTo(320, 385);
c.stroke();
c.closePath();


c.beginPath();
c.moveTo(320, 0);
c.lineTo(270, 0);
c.stroke();
c.closePath();

c.fillStyle = "#D3D3D3";
c.beginPath();
c.moveTo(270, 0);
c.quadraticCurveTo(190, 40, 100, 0);
c.fill();
c.closePath();
c.stroke();

var x = 0;
var y = 200;
for(var i = 0; i < 21; i++){
    c.beginPath();
    c.lineWidth = 6;
    c.lineCap = 'round';
    c.moveTo(x, 200);
    c.lineTo(0, y);
    x += 15;
    y -= 14;
    c.stroke();
    c.closePath();
}

var x = 15;
var y = 210;
for(var i = 0; i < 20; i++){
    c.beginPath();
    c.lineCap = 'round';
    c.moveTo(0, y);
    c.lineTo(x, 200);
    x += 15;
    y += 12;
    c.stroke();
    c.closePath();
}