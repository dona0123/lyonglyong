// 1. 반지름이 3인 원의 넓이를 구하는 함수를 작성하라. 매개변수로 반지름을 전달하고 원주율은 3.14로 상수 선언하여 프로그램을 작성하여라.

const PI = 3.14; 

function CircleArea(radius) {
    return radius * radius * PI
}

let result = CircleArea(1); 
console.log(result);



// 2. 책 이름, 저자, 가격을 key값으로 하는 프로퍼티를 가진 book이라는 객체를 만들고, value값을 순회하는 코드를 작성하여라 (value값은 아무거나 상관없음, for...of문 이용)
const book = {
    name: "js", 
    writer: "dona",
    price: 10000
};

let values = Object.values(book); 

for (let value of values) {
    console.log(value); 
}



