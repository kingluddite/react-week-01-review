// // console.log('hello world');
// let myTest;
// console.log(myTest);
// // string
// const myName = 'Phil';
// // number
// const age = 24;
// // boolean
// const likesSoccer = true;
// undefined
// null
// Symbol
// BigInt
// object
const person = {
    firstName: 'phil',
    lastName: 'howley'
}

// console.log(person);
// array?????

// if (age) {
//     console.log('this is true')
// } else {
//     console.log('this is false');
// }

const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
// console.log(states);
// filter 
// console.log(states.length)
for (let i = 0; i < states.length; i++) {
    if (states[i] === 'Alaska' || states[i] === 'Maine') {
        console.log('Did not visit ' + states[i]);
    } else {
        console.log(states[i]);
    }  
}
