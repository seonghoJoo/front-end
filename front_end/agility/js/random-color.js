function getRandomColor(){
    const r = Math.floor(Math.random()*240);
    const g = Math.floor(Math.random()*240);
    const b = Math.floor(Math.random()*240);
    return "rgb("+r + ", " +g + ", " + b+ ")";
}//getColor 함수 종료