var obj1 = {
  y: 1000,
};

var obj2 = {
  y: 20,
};

function fnCall(z, a) {
  var x = 100;
  //   var y = 300;
  //   this.y = 300;
  var result = x + this.y + z + a;
  //   console.log(this.y);
  console.log(result);
}
// fnCall();  //8am
fnCall.call(obj2, 50, 90);
fnCall.apply(obj1, [500, 500]);
fnCall();
