function getShuffleNumbers(len){
    let numbers = [];

    // for문으로 1~25까지의 수를 0~24번지까지 입력
    for(let i = 0; i<len;i++){
        numbers.push(i+1);
    }//for end

    //섞음
    for(let i=0;i<len;i++){
        // 해당 번지의 수를 임시저장
        let temp = numbers[i];
        
        // 랜덤한 번지수 생성
        let randomIndex = Math.floor(Math.random()*len);

        // numbers[i]에다가 numbers[Math.floor(Math.random()*length)];
        numbers[i] = numbers[randomIndex];
        
        // 랜덤한 번지수에 i번지의 값을 대입
        numbers[randomIndex] = temp;
    }

    return numbers;
}// getshufflenumbers() end

console.log(numbers);