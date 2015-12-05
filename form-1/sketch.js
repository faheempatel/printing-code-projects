var r = new Rune({
  container: '#canvas',
  width: 500,
  height: 700,
  debug: true,
});

var centerX = r.width / 2;
var centerY = r.height / 2;

function playful() {
  r.rect(400, 100, 50, 50)
   .rotate(30, 400, 100)
   .fill(0, 0, 0)

  r.draw();
}

function heavy() {
  r.rect(100, r.height - 150, 400, 150)
   .fill(0, 0, 0);

  r.draw();
}

function sharp() {
  r.line(r.width/2, 100, r.width/2, r.height)
  r.draw();
}


// for (var i = 125; i; i*=2) {
//   if (i > 8000) { break; }
//   r.line(0, 0, i, 320);
//   r.line(0, 0, i, 1050);
//   r.line(0, 0, i, 3000);
// }

r.circle(centerX, centerY - 100, 200)
 .stroke(255)
 .fill(225, 141, 58)

var innerRadius = 200 / 1.2;

r.circle(centerX, centerY - 100, innerRadius)
 .stroke(255)
 .strokeWidth(2)
 .fill(198, 69, 33);

 innerRadius /= 1.2;

r.circle(centerX, centerY - 100, innerRadius)
 .stroke(255)
 .strokeWidth(2)
 .fill(162, 44, 39)

 innerRadius /= 1.2;

r.circle(centerX, centerY - 100, innerRadius)
 .stroke(255)
 .strokeWidth(2)
 .fill(67, 22, 20)
 innerRadius /= 1.2;

r.circle(centerX, centerY - 100, innerRadius)
 .stroke(255)
 .fill(255)

r.circle(centerX, centerY - 100, 5)
 .stroke(255)
 .fill(39, 22, 21)


r.text('The Martian', centerX - 200, r.height - 50)
 .fontFamily('georgia')
 .fontSize(72)
 .fill(0)

r.draw();
