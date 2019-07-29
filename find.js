var box = document.getElementById('box');
var boxHei = box.offsetHeight;
var boxWid = box.offsetWidth;

// Math.random()[0,1)
//  choosing random coordinates
var tarX = Math.random() * boxWid;
var tarY = Math.random() * boxHei;


// console.log(`tarX: ${tarX}`);
// console.log(`tarY: ${tarY}`);


// var x = event.clientX;     // Get the horizontal coordinate
// var y = event.clientY;     // Get the vertical coordinate
// var coor = "X coords: " + x + ", Y coords: " + y
// document.getElementById("demo").innerHTML = coor;

function position(e){
  console.log(`tarX: ${tarX}`);
  console.log(`tarY: ${tarY}`);
  // ${event.clientY`}
}

function loc(e){
  console.log(`mousex:
    ${e.clientX} \n mousey:
    ${e.clientY}`);
  }

function distance ( varA,VarB,VarC){
  var a = x1 - x2;
  var b = y1 - y2;

  var c = Math.sqrt( a*a + b*b );
}



    // function distance(tarX, tarY,clientX,clientY){
    //   var dx = clientX - tarX;
    //   var dy = clientY - tarY;
    //   return
    //   Math.floor(Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2)));
    // };

box.addEventListener("mousemove",loc);

// var dist = document.getElementById('distance');
// function distance(tarX,tarY,mousex,mousey,unit){
//   // var dist = 0;
//   if ((tarX == clientX) && (tarY == clientY)){
//     return 0;
//   }
//   else {
//     var radtarX1 = Math.PI * tarX/180;
//     var radtarX2 = Math.PI * tarY/180;
//     var theta = tarY-clientY;
//     var radtheta = Math.sin(radtarX1) * Math.sin(radtarX2) + Math.cos(radtarX1) * Math.cos(radtheta);
//     if (dist > 1){
//       dist = 1;
//     }
//     dist = Math.acos(dist);
//     dist = dist * 180/Math.PI;
//     dist = dist * 60 * 1.515;
//     if (unit =="K") { dist = dist * 1.609344 }
//     if (unit =="N") {dist = dist * 0.8684}
//     return dist;
//   }
// }
//
// function distance(x0,y0,x1,y1){
//   var dx = x1 - x0;
//   var dy = y1 -x0;
//   return
//   Math.floor(Math,sqrt(Math.pow(dx,2) + Math.pow(dy,2)));
// };
