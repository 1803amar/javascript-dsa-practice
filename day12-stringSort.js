// let names = ["Charlie", "Alice", "Bob"];
// console.log(names.sort());

// Strings ke liye default .sort() sahi kaam karta hai (alphabetically), kyunki strings already “string” hi hote hain, 
// JS ko convert nahi karna padta. Iska output hoga= ["Alice", "Bob", "Charlie"]

// array of objects:

let users = [
    {name:"Amit" , age : 25},
    {name:"Priya" , age : 19},
    {name:"Rahul" , age : 30}
];
// sort by age
// users.sort(function(a,b){
//     return a.age - b.age;
// });

// sort by name using if, else if, else
// users.sort(function(a,b){
//     if(a.name < b.name){
//         return -1;
//     }else if(a.name > b.name){
//         return 1;
//     }else{
//         return 0;
//     }
// })

// sort by name using .localeCompare() (without using if, else if, else)

    users.sort(function(a,b){
        return a.name.localeCompare(b.name);
    })

console.log(users);