var response = {
  results: [
    {
      name: "Sneha",
      address: {
        city: "Hyd",
        state: "TS",
      },
    }, // response.results[2].address.city
    {
      name: "Raj",
      address: {
        city: "Vizag",
        state: "AP",
      },
    },
    {
      name: "Riya",
      address: {
        city: "Kolkata",
        state: "WB",
        pincode: [98, 23, 45, [{ numb1: 111 }]],
      },
    },
  ],
};
console.log(response.results[2].address.pincode[3][0].numb1);
