var data = {
  name: "NIT",
  city: "HYd",
  state: "Ts",
};

console.log(data);

//Insert new Property in Object
data.email = "NIT@gmail.com"; // Inserted ne Property in the Object
data.phn = 9898989897;
console.log(data);

//Access the Properties in Object
console.log(data.city);
console.log(data.phn);

//update the Property
data.city = "Mumbai";
console.log(data);

//delete the property
delete data.state;

console.log(data);
