function fn(f) {
  // hyd hyd NIT hyd hyd
  f();
  var a = "NIT";
  f();
  console.log(a);
  f();
  f();
}

fn(function () {
  var b = "HYD";
  console.log(b);
});
