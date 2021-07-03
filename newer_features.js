// function rollDie(numSides) {
//     if(numSides === undefined) {
//         numSides =6;
//     }
// return Math.floor(Math.random()*numSides)+1;
// }

//default  params
function rollDie(numSides = 6){
    return Math.floor(Math.random()*numSides)+1;
}
function greet(msg = "Hey, there",person) {
    console.log `${msg}, ${person}!`
}

//Spread in Function Calls
const nums = [13,4,3,5,7,8,6,89,65,43,22,8];
console.log(Math.max(...nums));
console.log(Math.min(...nums));
console.log(...nums);
console.log(...'hello');

const cats = ['Blue','Scout','Rocket'];
const dogs = ['Rusty','Wyatt'];
const allPets = [...cats, ...dogs];
const allPets_1 = [...cats, ...dogs, "Speedy"]
console.log(allPets_1)
console.log(allPets);
console.log([..."hello"]);

//Spread in Object Literals
const feline = {legs:4, family:'Felidae'};
const canine = {isFurry:true, family:'Caninae'};
console.log ({...feline, color:'black'});
const catDog = {...feline, ...canine};
console.log(catDog);
console.log({...[2,4,6,8]});
console.log({..."HIIIII"});
const dataFromFOrm = {
    email:'blueeman@gmail.com',
    password:'tobias123!',
    username:'tfunke'
}
const newForm = {...dataFromFOrm, id:2345, isAdmin: false};
console.log(newForm);

//Rest Params

// function sum() {
//     return arguments.reduce((total,el) => total+el)
// }
// sum(34,65,77);
function sum(...nums){
return nums.reduce((total,el) => total+el)
}
console.log(sum(36,56,78));
function raceResults(gold,silver,...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`ONE MORE MEDAL GOES TO: ${everyoneElse}`)
}
console.log(raceResults('Tammy','Todd','Tina','Trevor','Travis'));

//Destructuring

const scores = [923454,899766,444773,998667,223667,4567234,6789432,678432];
const bestScore = scores[0];
const secondHighScore = scores[1];
const [gold, silver,bronze,...everyoneElse] = scores;
console.log(scores);
console.log(silver);
console.log(gold);
console.log(everyoneElse);

//Object Destructuring

const user = {
    email:'harvey@gmail.com',
    password: 'sCot35672647MiTi',
    firstName:'Harvey',
    lastName: 'Milk',
    born:1930,
    died:1978,
    bio:'Harvey Bernand Milk was an american politician',
    city:'San Francisco',
    state: 'California'
}
const user2 = {
    email:'Stacy@gmail.com',
    password: 'djgsgjh7878375',
    firstName:'Stacy',
    lastName: 'Gonzalens',
    born:2015,
    city:'Tulsa',
    state: 'Oklahoma'
}
// const firstName = user.firstName;
// const lastName = user.lastName;

const{email,bio,city, state} = user;
console.log(email);
console.log(bio);
const{born: birthYear, died:deathYear} = user;
console.log(birthYear);

//Param Destructuring

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`

// }
// function fullName(user) {
//     const{ firstName, lastName } = user;
//     return `${firstName} ${lastName}`

// }
// console.log(fullName(user));
function fullName({firstName,lastName}) {
return `${firstName} ${lastName}`;
}
console.log(fullName(user));

const movies = [
    {
        title:'Amadeus',
        score:99,
        year:1999
    },
    {
        title:'Stand By Me',
        score:85,
        year:2005
    },
    {
        title:'Parasite',
        score:95,
        year:2000
    },
    {
        title:'Alien',
        score:90,
        year:2020
    }
]
// movies.filter(({score}) => score >= 90);
// movies.map((movie) => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })
movies.map(({title,score,year})=> {
    return `${title} (${year}) is rated ${score}`
})





