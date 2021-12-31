var arr = [50, 60, 70, 90]; // 500,600,700,900

var newData = arr.map((e, i) => {
  return e * 10; // DOM Manipulation
});

// console.log(newData);

var mobiles = [
  {
    brand: "Apple",
    model: "Iphone 11 ",
    price: 70000,
  },
  {
    brand: "oneplus",
    model: "oneplus9 pro",
    price: 60000,
  },
  {
    brand: "Apple",
    model: "Iphone 13",
    price: 100000,
  },
  {
    brand: "Apple",
    model: "Iphone 7",
    price: 40000,
  },
  {
    brand: "oneplus",
    model: "oneplus7",
    price: 30000,
  },
];

var updatedData = mobiles.map((element, index) => {
  return element.model + " " + "Mobile";
});

console.log(updatedData);
