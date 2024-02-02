const phone = {
  brandName: "apple",
  price: 150000,
  color: "black",
  width: "170g",
  "location phone": "dhaka mymensingh",
  "more than phone name": ["iphone- 14", "iphone-15 pro"],
};

// ------------------------------------------------
// for of === array
// for in === object

// for(const prop in phone){
//     console.log(phone[prop])
// }

// ---------------------------------------------------------------
let keys = Object.keys(phone);
// console.log(keys);

for (const prop of keys) {
//   console.log(prop, phone[prop]);
}

let phoneName = phone.brandName;
let phoneName1 = phone["location phone"];
phone["brandName"] = "realme";
phone["more than phone name"] = ["realme 8", "realme 8 pro"];
// console.log(phoneName);
// console.log(phoneName1);
// console.log(phone);
// console.log(Object.keys(phone))
// console.log(Object.values(phone));
// console.log(phone)
// delete phone.width ;
// console.log(phone)


// empty object --
let newObject = new Object();
// console.log(newObject)
const object2 = Object.create({});
// console.log(object2)

const latpot = {
    brand : 'asus',
    color : 'black'
}
const newLaptop = Object.create(latpot);
console.log(newLaptop)