
function even (x){
    if (x % 2 == 0){
        return true;
    }
}

function cuantosCumplen (e,c){
var i=0;
  for(var k of c){
    if(e(k)=== true){
      i++;
    }
  }
  console.log(i);
}

console.log(cuantosCumplen(even,[7,9,25,42]));

