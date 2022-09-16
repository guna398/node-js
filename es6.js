// Java script Class
class people {
  constructor(name) {
    this.name = name;
  }
}
const people1 = new people('Guna');

console.log(people1.name); 

// JavaScript Destructuring
const people = {
  name: 'Guna',
  age: 25,
  gender: 'Male'    
}

let { name, age, gender } = people;

console.log(name); 
console.log(age); 
console.log(gender); 

// display set.size
class movie {    //create class
  constructor(name, year) { 
    this.name = name;
    this.year = year;
  }
}
const mymovie = new movie("VIKRAM", 2022);
console.log(mymovie.name + " " + mymovie.year);

// Arrow function
const y2 = (y2, y3) => y2 * y3;
console.log(y2(4,8));

// looping over an array
const Brand = ["Apple", "one plus", "Samsung"];
let text1 = "";
for (let x4 of Brand) {
  text1 += x4 + "<br>";
}
console.log(Brand);

// Java scipt Maps
const fru1 = {name: 'Fruit1'};
const fru2 = {name: 'Fruit2'};
const fru3 = {name: 'Fruit3'};

// Create a new Map
const Fruits = new Map();

// Add the Objects to the Map
Fruits .set(fru1, 78);
Fruits .set(fru2, 92);
Fruits .set(fru3, 66);

// Display Object Type
console.log(Fruits);



//javascript promise
  
  const myPromise = new Promise((resolve, reject) => {    
    let condition=25;    
      
    if(condition>=18) {      
        resolve('Promise: Eligible to vote');    
    } else {      
        reject('Promise: Not Eligible to vote');    
    }  
});  
    
  myPromise.then((message) => {   
    console.log(message);  
}).catch((message) => {   
    console.log(message);  
});  