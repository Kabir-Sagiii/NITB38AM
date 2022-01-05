class Emp {
  empId;
  empName;
  empCity;

  constructor(id, name, city) {
    this.empId = id;
    this.empName = name;
    this.empCity = city;
  }

  printEmpDetails() {
    console.log(this.empId, this.empName, this.empCity);
  }
}

var emp1 = new Emp(101, "NIT", "HYD");
emp1.printEmpDetails();

var emp2 = new Emp(102, "NareshIt", "Mumabi");
emp2.printEmpDetails();

var emp3 = new Emp(103, "Kabir", "Delhi");
emp3.printEmpDetails();
