// slice, split, join, concat -------------------------------------------

const names = 'BIddut';
// console.log(names.slice(1, 4));
const fruits = [ 'tomato', 'banana', 'orange', 'jackfruit', 'apple'];
// console.log(fruits.slice(2, 4))

const collage = 'habigang polytichnic institute';

// console.log('splite',collage.split(' '))
// console.log('splite',collage.split('a'))

const collage2 = [ 'habigang', 'polytichnic', 'institute' ];

// console.log(collage2.join(' '))
// console.log(collage2.join(' and '))
// console.log(collage2.join(' | '))



// normal string concat----------
const first = "Biddut";
const last = "hosen";
const fullName = first + ' ' + last;
console.log(fullName);

// concat -------------------------------------

const fullName2 = first.concat(' ').concat(last);
console.log(fullName2);

console.log(fullName.includes('x'));