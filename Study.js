// [React.js 3] 1장. 자바스크립트 기초
// ============================================= // 


// * 비교 연산자는 =이 3개
console.log(1 === 3);
console.log("\n");


// ============================================= //


// falsy한 값으로는 undefined, null, 0, -0, NaN, '', 0n
// truthy한 값은 falsy를 제외한 모든 값

const line = ""; // 빈 문자열은 falsy한 값
if (line) {
    console.log("공백 아님");
} else {
    console.log("공백임"); // "공백임" 출력
}
console.log("\n");


// ============================================= //


// parseInt 함수: 문자열을 정수로 변환 (변수, 몇진수)
var str = "123";
var num = parseInt(str); // num은 123이 됨

var hexStr = "1A";
var decimalNum = parseInt(hexStr, 16); // decimalNum은 26이 됨 (다른 진수 체계로 변환)


// ============================================= //


// ?? 연산자: 변수나 표현식이 null 또는 undefined일 때 대체 값을 제공하는 데 사용
var user = null;
var defaultUser = "Guest";

var displayName = user ?? defaultUser;
console.log(displayName); // 만약 user가 null 또는 undefined이면 "Guest"가 출력됨
console.log("\n");


// ============================================= //


// typeof 연산자: 피연산자의 데이터 유형을 확인
var x;
console.log(typeof x); // "undefined"

var y = 5;
console.log(typeof y); // "number"

var z = "Hello";
console.log(typeof z); // "string"

var obj = { name: "John" };
console.log(typeof obj); // "object"

var func = function() {};
console.log(typeof func); // "function"
console.log("\n");


// ============================================= //


// Symbol: 고유하고 변경 불가능한 (immutable) 원시 데이터 유형
// 객체 속성 (property)의 키 (key)로 사용
// Symbol은 항상 다르며, 변경할 수 없음

const mySymbol = Symbol();
const anotherSymbol = Symbol();
console.log(mySymbol === anotherSymbol); // false
console.log("\n");


// ============================================= //


// 배열 생성

// 1. 리터럴 문법 (권장)
let arrA = []; // 빈 배열 생성
let arrB = [1, 2, 3]; // 초기 원소가 있는 배열
let arrC = ["apple", "banana", "cherry"]; // 문자열로 구성된 배열

// 2. 생성자 문법
let arrD = new Array(); // 빈 배열 생성
let arrE = new Array(3); // 길이가 3이고 초기값이 undefined인 배열 생성
let arrF = new Array("apple", "banana", "cherry"); // 원소가 문자열로 구성된 배열 생성

// length 프로퍼티
let fruits1 = ["apple", "banana", "cherry"];
console.log(fruits1.length); // 3

let numbers1 = [1, 2, 3, 4, 5];
numbers1.length = 3; // 배열 길이를 3으로 설정
console.log(numbers1); // [1, 2, 3]

// push() 메서드
let fruits2 = ["apple", "banana"];
fruits2.push("cherry"); // 배열 끝에 "cherry" 요소 추가
console.log(fruits2); // ["apple", "banana", "cherry"]

let numbers2 = [1, 2, 3];
numbers2.push(4, 5); // 여러 요소를 배열 끝에 추가
console.log(numbers2); // [1, 2, 3, 4, 5]

// unshift() 메서드
let numbers3 = [2, 3, 4];
numbers3.unshift(1); // 배열의 처음에 요소 추가
console.log(numbers3); // [1, 2, 3, 4]

// splice() 메서드
let fruits3 = ["apple", "banana", "cherry"];
fruits3.splice(1, 0, "orange"); // 배열의 1번 인덱스부터 0개의 요소를 제거하고 "orange"를 추가
console.log(fruits3); // ["apple", "orange", "banana", "cherry"]
console.log("\n");


// ============================================= //


// 객체 생성

// 1. 리터럴 문법 (권장)
let objA = {}; // 빈 객체 생성
let person1 = {
    name: "John",
    age: 30,
    isStudent: false
}; // 초기값을 가진 객체 생성

// 2. 생성자 문법
let objB = new Object(); // 빈 객체 생성

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person2 = new Person("Alice", 25); // Person 생성자 함수를 사용하여 객체 생성

// 객체 접근
const person2Name = person2.name; // 점 표기법
const person2Age = person2["age"]; // 괄호 표기법

// 프로퍼티 존재 확인
let isNameExist = "name" in person2;
console.log(isNameExist); // true 출력
console.log("\n");


// ============================================= //


// 함수
// 호이스팅: 함수를 선언하기 전에 호출

sayHello1(); // "Hello, World!"

function sayHello1() {
    console.log("Hello, World!");
} // 함수 선언이 호이스팅되고 함수가 코드 위쪽으로 끌어올려짐


sayHello2(); // 오류 발생!

var sayHello2 = function () {
    console.log("Hello, World!");
}; // 함수 표현식은 호이스팅되지 않음, 소괄호 사용하지 않음 


// 콜백함수
// 함수의 매개변수로 전달되고, 특정 이벤트나 조건이 발생하면 실행되는 함수
function fetchData(callback) {
    setTimeout(function() {
        const data = "This is the fetched data";
        callback(data); // 콜백 함수 호출
    }, 1000);
}

function processData(data) {
    console.log("Data received: " + data);
}

fetchData(processData); // fetchData 함수에 processData 함수를 콜백으로 전달
console.log("\n");


// ============================================= //


// 배열과 반복문
let food = ["짜장면", "피자", "치킨"];

for (let item of food) {      
    console.log(item);
} // of 뒤 배열에서 요소를 하나씩 꺼내 item에 저장
console.log("\n");


// ============================================= //


// 객체와 반복문 1
// Object.keys 매서드는 객체 프로퍼티의 key를 배열로 반환, Object.values는 value를 배열로 반환
// 배열로 반환되면 for...of로 순회

// Object.keys 매서드 사용 
let person3 = {
    name: "John",
    age: 30,
    gender: "male"
};

let keys = Object.keys(person3); // ["name", "age", "gender"]

for (let key of keys) {
    console.log(key); // key에는 "name", "age", "gender"가 차례로 들어감
    console.log(person3[key]); // 객체의 해당 프로퍼티 값에 접근
}

// Object.values 메서드 사용 
let person4 = {
    name: "John",
    age: 30,
    gender: "male"
};

let values = Object.values(person4); // ["John", 30, "male"]

for (let value of values) {
    console.log(value); // "John", 30, "male"가 차례로 출력됨
}
console.log("\n");


// ============================================= //


// 객체와 반복문 2
// for...in문 

let person5 = {
    name: "John",
    age: 30,
    gender: "male"
};

for (let key in person5) {
    console.log(key); // key에는 "name", "age", "gender"가 차례로 들어감
    console.log(person5[key]); // 객체의 해당 프로퍼티 값에 접근
}
console.log("\n");



