const array = [1,2,3,4,5,6,7,8];

const square = n=>n*n;
let squared=[];

// 방법 1
array.forEach(n=>{
    squared.push(n*n);
});

squared = array.map(square);
console.log(squaredq);

const items = [
    {
        id : 1,
        text : 'hello'
    },
    {
        id : 2,
        text : 'bye'
    }
];

const texts = items.map(item=>item.text);
console.log(texts);