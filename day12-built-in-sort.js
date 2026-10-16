// let numbers = [10,2,33,4];
// console.log(numbers.sort());
// output : [10,2,33,4]
// .sort() bina kuch bataye kya karta hai

// Default .sort() har element ko STRING maan kar, alphabetically (jaise dictionary me words sort hote hain) sort karta hai, numbers ki tarah nahi.
// [10, 2, 33, 4] ko agar strings samjhe ("10", "2", "33", "4"), to dictionary order me:
// "10" sabse pehle aata hai (kyunki 1 sabse chhota first-character hai)
// "2" uske baad (2 next)
// "33" uske baad (3)
// "4" sabse end me (4 sabse bada first-character)
// Result: [10, 2, 33, 4] — coincidence se ye original jaisa hi dikh gaya, lekin asal reasoning “number value” pe nahi, “pehla character” pe based hai.

// let numbers2 = [100,25,3];
// console.log(numbers2.sort());
// output : [100,25,3] instead of getting [3,25,100] because of same as above reason

let numbers = [10,2,33,4]

numbers.sort(function(a,b){
    return a-b;
});

console.log(numbers);

// a - b ka matlab kya hai (ye thoda abstract lagta hai shuru me)
// .sort() apne andar har do elements ko baar-baar compare karta hai (jaisa bubble/selection sort me hum khud karte the), aur tera diya hua function use batata hai kis element ko pehle rakhna hai. Rule ye hai:
// Agar function negative number return kare → a ko b se pehle rakho
// Agar function positive number return kare → a ko b se baad me rakho
// Agar function 0 return kare → order waisa hi raho
// Jaise a=2, b=10 ho: a - b = 2 - 10 = -8 (negative) → matlab 2 ko 10 se pehle rakho. Yehi sahi hai!
// Jaise a=10, b=2 ho: a - b = 10 - 2 = 8 (positive) → matlab 10 ko 2 ke baad rakho.
// Dekh, a - b khud-ba-khud sahi (negative/positive) number deta hai jab numbers compare karte ho, isliye ye ek standard trick ban gaya hai numbers sort karne ke liye.
// Descending order (bada se chhota) chahiye ho to bas ulta kar do: return b - a;