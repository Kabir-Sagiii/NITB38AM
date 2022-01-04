var obj1 = {
  name: "NIT",
};

function fnName(password, email) {
  console.log(this.name, password, email);
}

// var fnName = fnName.bind(obj1, "s1", "S1@gmail.com");
// fnName();

//var fnName = fnName.bind(obj1);
// fnName("s2","s2@gmail.com")

fnName.bind(obj1)("s3", "s3@gmail.com");
