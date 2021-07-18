function computePi(inSides, outSides, inRad, outRad) {
  periIn = inSides * sideLength(inRad, inSides);
  periOut = outSides * sideLength(outRad, outSides);

  piMin = periIn / inRad;
  piMax = periOut / inRad;

  //piValue = (str(piMin) +"  <<<PI>>>  "+str(piMax));
  piValue = str("PI = " + (piMin + piMax) / 2);
  piMin = piMin;
  piMax = piMax;
  return [piValue, piMin, piMax];
}
