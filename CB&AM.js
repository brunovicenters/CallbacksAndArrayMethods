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
        score: '87'
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
   }) // type doubles -- will return de double of each number in 'numbers';

   const gameTitles = games.map(function(gameTitle){
        return gameTitle.name;
   })