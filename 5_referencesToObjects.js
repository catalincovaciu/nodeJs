// Even though you think person is another instance, it is just a reference to the object Cata
var Cata5 = {
    favFood: 'chicken',
    favMovie: 'Braveheart'
};

var person = Cata5;
person.favFood = 'salad';
console.log(Cata5.favFood);

// Difference between == and ===
console.log(19 == '19'); // true
console.log(19 === '19'); // false
console.log(19 === 19); // true