class Student {
  name = "NIT"; //property
  city = "HYD";

  printDetails() {
    console.log(this.name, this.city); //s1.name,s1.city  // s2.name
  }

  changeData() {
    this.name = "NareshIT";
    this.city = "Chennai";
  }
}

var s1 = new Student();
var s2 = new Student();

s1.printDetails();
s1.changeData();
s1.printDetails();

s2.name = "Kabir";
s2.city = "Delhi";

s2.printDetails();
s1.printDetails();
