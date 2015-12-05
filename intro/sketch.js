var r = new Rune({
  container: '#canvas',
  width: 1920,
  height: 1200,
  debug: true,
});

r.rect(0, 0, 1920, 1200)
 .fill(0, 0, 0);

for (var i = -3; i < 15; i++) {
  for (var y = 0; y < 15; y++) {
    r.triangle(0 + (i * 120), 0 + (y * 120), 30 + (i * 120), 85 + (y * 120), 60 + (i * 120), 0 + (y * 120))
     .fill(255, 255, 255)
     .strokeWidth(5)
     .rotate(335);

    r.circle(10 + (i * 120), 20 + (y * 120), 20)
     .fill(255, 255, 255)
     .stroke(0, 0, 0)
     .strokeWidth(5)
     .rotate(335);

    r.circle(50 + (i * 120), 20 + (y * 120), 20)
     .fill(255, 255, 255)
     .stroke(0, 0, 0)
     .strokeWidth(5)
     .rotate(335);

    r.circle(30 + (i * 120), 0 + (y * 120), 30)
     .fill(255, 255, 255)
     .stroke(0, 0, 0)
     .strokeWidth(5)
     .rotate(335);
  }
}

r.draw();
