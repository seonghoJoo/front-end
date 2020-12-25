
function getShuffle(length) {

    let numbers =[];//자바 스크립트는 이렇게 배열 선언 가능 함. 길이 변동이 가능하기 때문.

    //for문으로 1~length+1까지의 수를 0~length 번지까지 입력
    for(let i=0; i<length; i++){
        //numbers[i] = i+1;
        numbers.push(i+1); //1부터 25까지의 정수가 차례대로 들어가 있을 것.
    }//for end

    //섞음. 중복된 숫자가 있을 수 없음.
    for(let i=0; i<length; i++){

        //해당 번지의 수를 임시 저장
        let tmp = numbers[i];
        let idx = Math.floor(Math.random()*length);

        console.log(idx);//among 0~24

        //랜덤한 번지수를 i번지에 대입
        numbers[i] = numbers[idx];
        //랜덤한 번지수에 i번지의 값을 대입
        numbers[idx] = tmp;


        console.log(numbers);

    }//for end


//1,2,3,4,5,6,.........25
    return numbers;

}


