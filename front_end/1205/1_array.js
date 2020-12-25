const superheroes=[
    '아이언맨',
    '토르',
    '닥터 스트레인지'
];

function print(hero){
    console.log(hero);
}

// 방법1
superheroes.forEach(print);

// 방법2
superheroes.forEach(function (hero){
    console.log(hero);
})

// 방법3
superheroes.forEach(hero=>{
   console.log(hero);
});

const index = superheroes.indexOf('닥터 스트레인지');
console.log(index);

const findIndex = superheroes.findIndex(todo => todo ==='토르');
console.log(findIndex);