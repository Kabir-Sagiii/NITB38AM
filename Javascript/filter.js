var mobiles = [
  {
    brand: "Apple",
    model: "Iphone 11",
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

var filteredData = mobiles.filter((element, index) => {
  return element.price < 50000;
});

console.log(filteredData);
