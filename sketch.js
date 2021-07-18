var rad = 450;
var inSides = 3;
var outSides = 3;
var piMin, piMax;
let minPi = [];
let maxPi = [];

function setup() {
  createCanvas(900, 900);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  textSize(24);
}

function draw() {
  background("#b5fbff");
  translate(width / 2, height / 2);
  noFill();

  var inRad = rad / 2;
  var outRad = rad / 2 / cos(180 / outSides);

  strokeWeight(2);
  stroke("green");
  ellipse(0, 0, rad);
  stroke("blue");
  polygon(0, 0, inRad, inSides);
  stroke("red");
  polygon(0, 0, outRad, outSides);

  [piValue, piMin, piMax] = computePi(inSides, outSides, inRad, outRad);

  minPi.push(piMin);
  maxPi.push(piMax);

  fill(0);
  stroke(0);
  strokeWeight(1);
  text("Pi_Min = " + str(piMin), -width / 2 + 25, -height / 2 + 25);
  text("Pi_Max = " + str(piMax), -width / 2 + 25, -height / 2 + 50);
  text("No. of sides = " + inSides, -width / 2 + 25, -height / 2 + 75);
  text("Pi = " + str((piMax + piMin) / 2), width / 2 - 365, -height / 2 + 25);
  text(
    "Delta = " + str(abs((piMax + piMin) / 2 - PI)),
    width / 2 - 365,
    -height / 2 + 50
  );

  plotGraph(width, height, minPi, maxPi);

  if (frameCount % 50 === 0) {
    if (frameCount === 1400) {
      noLoop();
    }
    inSides += 1;
    outSides += 1;
  }
}
