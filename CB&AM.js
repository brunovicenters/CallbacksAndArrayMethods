const numbers = [1,2,3,4,5,6,7,8,9,10]
const games = [
    {
        name: 'Nioh',
        score: 95
    }, 
    {
        name: 'Euro Truck Simutalor',
        score: 99
    },
    {
        name: 'Fifa 22',
        score: 87
    },
    {
        name: 'Valorant',
        score: 63
    },
    {
        name: 'League of Legends',
        score: 17
    },
    {
        name: 'Overwatch',
        score: 75
    },
    {
        name: 'Bloons TD 6',
        score: 93
    }
]

//forEach -- it's like a for...of

numbers.forEach(function (el){
    console.log(el)
})

console.log('****************');

numbers.forEach(function (el){
    if (el % 2 === 0){
    console.log(el)
    }
})

console.log('****************');

numbers.forEach(function (el){
    if (el % 2 !== 0){
    console.log(el)
    }
})

console.log('****************');

games.forEach(function(game){
    console.log(`${game.name} - ${game.score}/100`)
})

console.log('****************');

//Map - returns you a new array;
const doubles = numbers.map(function(num){
    return num*2;
}) // type doubles -- will return the double of each number in 'numbers';

const gameTitles = games.map(function(gameTitle){
        return gameTitle.name;
}) // type doubles -- will return the names of each game in 'games';



//Arrow functions - compact way to write a function syntax;
const sum = (x,y) => {
    return x+y;
} //when it has more than one input, you need the parentheses;

const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
} //when it doesn't have a input, you still need the parentheses;

const square = num => {
    return num*num;
} //when it has only one input, don't need the parentheses;


  //Shorter ways to do arrow functions (only accepts single expressions) --->
  //1º way 
  const sub = (a,b) => (
    a - b
  ) // - You use the parenthesis, instead of the curly braces;
    // - You don't use 'return';
    // - You don't use the ';' in the end;

  //2º way
  const divide = (a,b) => a/b; 
   // - Only one line
   // - You don't use 'return' neither the parenthesis in the end;



  //Arrow with Map

    //  const newGames = games.map(function(game){
    //     return `${game.name} - ${game.score}/100`;
    // })
    const newGames = games.map(game => (
        `${game.name} - ${game.score}/100`
    ))


 //Arrow with This
    const person = {
        firsName: 'Matheus',
        lastName: 'Vicente',
        fullName: function() {
            return `${this.firstName} ${this.lastName}`
        }, // you can't use '=>', because this will refer to the window;
        shoutName: function () {
            setTimeout(() => {
                console.log(this.fullName())
            }, 3000) // you need to use '=>', so, that way, this will refer to the object;
        }
    }


//setTimeout - set a timeout until it executes
console.log('Hello World!!')
setTimeout(() => {
    console.log('Where are you going?')
    console.log('****************');
}, 3000) //it will run after 3 seconds
console.log('So...') //it will run, even if the timer is running;


//setInterval - it runs every 'x' seconds;
// const id = setInterval(() => (
//     console.log(Math.floor(Math.random() * 7))
// ), 5000); //types on console 'clearInterval(variable name) to stop it;


//Filter Method
const odds = numbers.filter(n =>(
    n % 2 !== 0
)) //it returns a new array, which contains '[1, 3, 5 , 7, 9]';

const greatGames = games.filter(game =>(
    game.score >= 80
)) //it returns a new array with all the games and its scores, if the game's scores is equal or over 80;
const greatNames = greatGames.map(gn => gn.name) //it will return only the names of the 'Great Games';
//Shorter way - const greatNames2 = games.filter(g => g.score >= 80).map(gn => gn.name)
//For really long ones, you can do this -
// const greatNames2 = games
//                         .filter(g => g.score >= 80)
//                         .map(gn => gn.name)


const okGames = games.filter(game =>(
    game.score < 80 && game.score >= 50
)) 
const badGames = games.filter(g => g.score<50)


//Every/Some - will test elements at an array

//Every - if every element passes the test = true
numbers.every(numb => numb > 0); // it returns 'true';
numbers.every(numb => numb > 5); // it returns 'false';
games.every(g => g.score > 20); // it returns 'false';

//Some - if some element pass the test = true
numbers.some(numb => numb > 5); // it returns 'true';
numbers.some(numb => numb > 11); // it returns 'false';
games.some(g => g.score > 95); // it returns 'true';


//Reduce
const total = numbers.reduce((total,number) =>(
    total+number
)) // it returns the sum of every number in the 'numbers' array;
const total2 = numbers.reduce((total,number) =>total+number, 50)
// the third input is settled as the starting point, and it goes from it (ex:50+1=51/51+2=53...);


const max = numbers.reduce((max,numb) =>{
    if (max>numb){
        return max;
    }
    else{
       return numb;
    }
}) // it returns the greater element;

const bestGame = games.reduce((bestRated, currentGame) => {
    if (bestRated.score > currentGame.score){
        return bestRated;
    }
    else {
        return currentGame;
    }
}) // it returns the game with the best score;