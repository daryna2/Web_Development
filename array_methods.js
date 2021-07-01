const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
numbers.forEach (function(el) {
    if( el % 2 ===0){
console.log(el);
    }
})
const doubles = numbers.map(function(num){
    return num*2;
})

for (let el of numbers){
    if(el % 2 === 0){
    console.log(el);
}
}
numbers.filter(n =>{
    return n<10
})
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
const highestRated = movies.reduce((best_Movie,currMovie) =>{
if(currMovie.score > best_Movie.score){
return currMovie;
}
return best_Movie;
})

movies.some(movie =>movie.year<1990);
const goodMovies = movies.filter(m => m.score>80);
const goodTitles = goodMovies.map(m => m.title);
movies.filter(m => m.score>80).map(m => m.title);
const badMovies = movies.filter(m => m.score<70);
const recentMovies = movies.filter(m => m.year>1990);
movies.forEach(function(movies){
    console.log(`${movies.title} - ${movies.score} /100` );
})
const newMovies = movies.map(function(movie){
    return `${movie.title} - ${movie.score/10}`
})
const newMovies_1 = movies.map(movie =>{
    return `${movie.title} - ${movie.score/10}`
})
const movieTitle = movies.map(function(movies){
    return movies.title.toUpperCase();
})
const add = function(x,y){
    return x+y;
}
const add_1 = (x,y) =>{
    return x+y;
}
const square = num =>{
    return num*num;
}
// const rollDie = () =>{
//     return Math.floor(Math.random() *6 )+1;
// }
const rollDie = () => (
    Math.floor(Math.random()*8)+1
) 
const add_2 = (a,b) =>a+b;

const greet = name => {
    console.log(`Hey ${name}!`);
};
greet("Hagrid");
console.log("HELLOOOO!!!!....")
setTimeout(() =>{
    console.log("Are you still there?")
},3000)
console.log("GOODBYE!")

const id = setInterval(() =>{
    console.log(Math.random());
},2000)
clearInterval(id);
const userName  = ['mark','staceyshdfgshgfshfg', 'qjfhsgjhsfgjhsgf','Sasha','Katja','Svetlana'];
function validUserName(userName){
    return userName.filter(name => name.length <10);
}

const exams = [80,98,92,78,77,90,89,84,81,77];
exams.every(score => score>=75);
exams.some(score => score>=75);
const num= [2,5,8,10];
const allEvents_1 = num.every(numb => ((numb%2) === 0));
num.reduce((sum,num)=>sum+num, 100);

const prices = [9.99,1.50,19.99,49.99,30.50];
let total = 0;
for(let price of prices) {
    total+=price;
}
console.log(total);

const total_1 = prices.reduce((total,price)=> total+price);
const minprice = prices.reduce((min,price) =>{
if(price < min) {
    return price;
}
return min;
})

const person = {
    firstName:'Viggo',
    lastName:'Mortensen',
    fullName: function() {
       return  `${this.firstName} ${this.lastName}`
    },
   shoutName: function() {
       setTimeout(() => {
           console.log(this);
console.log(this.fullName())
       },3000)
   } 
}

