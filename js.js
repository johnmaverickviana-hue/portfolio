var height;
console.log("hello world");  //  ->  undefined
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined
var weight = 70;
var height;
console.log(height); // -> undefined
console.log(weight); // -> Uncaught ReferenceError: weight is not defined
let height;
console.log(height);  //  ->  undefined
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined
var height;
var height;
console.log(height);  //  ->  undefined
var height;
var height;
console.log(height);  //  ->  undefined
var height;
var height;
console.log(height);  //  ->  undefined
let height;
let height;  //  ->  Uncaught  SyntaxError:  Identifier  'height'  has  already  been  declared
console.log(height);
let height = 180;
let anotherHeight = height;
let weight;
console.log(height);  //  ->  180
console.log(anotherHeight);  //  ->  180
weight = 70;
console.log(weight);  //  ->  70
let height = 180;
console.log(height);  //  ->  180
console.log("height");  //  ->  height
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// write your code here


let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);

