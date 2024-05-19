const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Strawberry",
    "Watermelon",
    "Pineapple",
    "Mango",
    "Kiwi",
    "Peach",
    "Cherry",
    "Pear",
    "Plum",
    "Blueberry",
    "Raspberry",
    "Apricot",
    "Cantaloupe",
    "Coconut",
    "Fig",
    "Guava",
    "Lemon",
    "Lime",
    "Pomegranate",
    "Tangerine",
    "Papaya",
    "Lychee",
    "Passionfruit",
    "Dragonfruit",
    "Avocado",
    "Kumquat"
  ];
  //it is used to just print element in array
 //foreach use garda arrayname.foreach(elementname=>{console.log(elementname})
//  fruits.forEach(fruit => {
//     console.log(fruit);
    
//  });
//map use garda arrayname.map((elementname)=>{return elementname +"whatever you want to add in elements of array"});
//it is use to modify array and print an array in array format
//  const fruitmap = fruits.map((fruit) =>{
//     return fruit + "one";
//  });
//  console.log(fruitmap);


//  const fruitsmap=fruits.map((fruit)=>{
//     return fruit + "two";
//  });
//  console.log(fruitsmap);


// const sorting=fruitsmap.sort();
// console.log(sorting);
// console.log(sorting.reverse());
// console.log(fruitsmap.reverse());
// console.log((fruitsmap.sort()).reverse());

const input= fruits.indexOf("Pineapple");
console.log(input);
const splice=fruits.splice(fruits.indexOf("Coconut"),0,"sagar");
console.log(fruits);

// console.log(fruits(fruits.splice(fruits.indexOf("Pineapple"),0,"Sagar")));
