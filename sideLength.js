function sideLength(radius, npoints) {
  let angle = 360 / npoints;
  return radius * sin(angle / 2);
}
