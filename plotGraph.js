function plotGraph(w, h, piMin, piMax) {
  push();
  translate(-width / 2, -height / 2);
  stroke("green");
  strokeWeight(3);
  line(0, PI * 250, width, PI * 250);
  strokeWeight(1);
  textSize(24);
  fill("green");
  text(str(PI), width - 225, PI * 250 - 25);

  strokeWeight(1);
  noFill();

  beginShape();
  stroke("blue");
  for (let a = 0; a < piMin.length; a++) {
    vertex((w * a) / piMin.length, piMin[a] * 250);
  }
  endShape();

  beginShape();
  stroke("red");
  for (let b = 0; b < piMax.length; b++) {
    vertex((w * b) / piMax.length, piMax[b] * 250);
  }
  endShape();

  pop();
}
