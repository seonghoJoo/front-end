const objects=[
    {
        id : 1,
        text : '객체',
        done : true
    },
    {
        id : 2,
        text : '함수',
        done : false
    },
    {
        id : 3,
        text : '배열',
        done : true
    },
    {
        id : 4,
        text : '필터',
        done : true
    },
]
const taskNotDone = objects.filter(todo => todo.done === true);
console.log(taskNotDone);