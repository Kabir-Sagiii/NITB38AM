var student = {
  name: "NIT",
  email: "NIT@gmail.com",
  phone: 99999999,
  address: {
    city: "Hyd",
    state: "TS",
    pincode: 500018,
  },
  getMarks: function () {
    console.log("80 Maarks");
  },
  addNumbers: function (x, y, f) {
    f();
    var results = x + y;
    f();
    console.log(results);
    f();
  },
};

// console.log(student.address.state);
// console.log(student.address.pincode);

console.log(student);
//insert area property
student.address.area = "Ameerpet";
console.log(student);

student.getMarks();
student.addNumbers(100, 100, function () {
  console.log("Callback Function");
});
