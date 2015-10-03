module.exports = function pointInPolygon(points, poly) {

  var polyY = [];
  var polyX = [];

  for(var i = 0; i+1 < poly.length; i+=2) {
    polyX.push(poly[i]);
    polyY.push(poly[i+1]);
  }

  var constant = [];
  var multiple = [];
  var polyCorners = polyY.length;

  function precalc_values() {

    var i;
    var j = polyCorners - 1;

    for(i=0; i<polyCorners; i++) {
      if(polyY[j]==polyY[i]) {
        constant[i]=polyX[i];
        multiple[i]=0; }
      else {
        constant[i]=polyX[i]-(polyY[i]*polyX[j])/(polyY[j]-polyY[i])+(polyY[i]*polyX[i])/(polyY[j]-polyY[i]);
        multiple[i]=(polyX[j]-polyX[i])/(polyY[j]-polyY[i]); }
      j=i;
    }
  }

  function pointInPolygon(x,y) {

    var i, j=polyCorners-1;
    var oddNodes=0;

    for (i=0; i<polyCorners; i++) {
      if ((polyY[i]< y && polyY[j]>=y
      ||   polyY[j]< y && polyY[i]>=y)) {
        oddNodes^=(y*multiple[i]+constant[i]<x); }
      j=i; }

    return oddNodes;
  }

  var retVal = [];

  precalc_values();

  for(var n = 0; n < points.length; n++) {
    var x = points[n][0];
    var y = points[n][1];

    retVal.push(pointInPolygon(x, y))
  }

  return retVal;
}
