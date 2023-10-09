// [React.js 3] 2장. 자바스크립트 실전 
// ============================================= // 


// 배열 구조 분해 할당 
let arr = [1,2,3]; 
let [one, two, three] = arr; // 배열 arr의 값을 순서대로 할당 
console.log(one, two, three); 
console.log("\n"); 
// 변수의 개수보다 배열의 크기가 적거나 많아도 상관없음
// 변수가 적을 경우는 순서대로, 많을 경우에는 undefined로 할당 


// ============================================= // 


// 함수 구조 분해 할당 
// key 값으로 구분 
// key이름 그대로도, key값에 이름 할당도 가능
function funstruct({ name: n, age: a, location: l}) {
    console.log(n,a,l);
}

let person = {
    name: "롱롱",
    age: 23, 
    location: "경기도"
}

funstruct(person);
console.log("\n"); 


// ============================================= // 


// 스프레드 연산자 (...)
// 반복가능한 객체에서 값을 개별 요소로 분리 

let arrA = [1,2,3]; 
let arrB = [...arrA, 4, 5, 6]

console.log(arrB); // [1,2,3,4,5,6]
// 만약 ...이 없었다면 [[1,2,3],4,5,6]
console.log("\n"); 

// 객체에도 동일하게 적용 가능 
// 함수의 호출에도 사용 
// 구조 분해 할당 vs 스프레드 연산자: 전자는 전달하는 인수가 1개 


// ============================================= // 


// rest 매개변수 (...)
// 개별 요소를 배열로 묶음 
// 함수에 전달된 인자를 순차적으로 배열에 저장 
// 먼저 선언되어 다른 매개변수에 할당된 인수를 제외하고 나머지를 모두 배열에 저장 
// 따라서 rest는 반드시 마지막에 선언 
function funrest(...rest) {
    console.log(rest);
}

funrest(1,2,3,4); 


// ============================================= // 


// 순회 메서드(forEach)
const arr1  = [1,2,3]; 
arr1.forEach(each);

function each(item, idx) {
    console.log(`${idx}의 값은 ${item}이다.`)
}


// ============================================= // 


// indexOf (탐색 메서드)
let arr2 = [1,3,5,7,1];

console.log(arr2.indexOf(1,4)); // 인덱스 1을 찾고, 0부터 탐색해라.


// ============================================= // 


// findIndex 메서드 
// true를 반환하는 첫 번째 요소의 인덱스를 반환
function determine(item, idx, arr) { //2. 6이 참이면 탐색 stop!
	if(item % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

let arr3 = [1,3,5,6,8];
let index1 = arr3.findIndex(determine); //1. determine의 참인지 판단

console.log(index1); //3. index 값에 6의 인덱스 번호인 3 출력!


// ============================================= // 


// 화살표 함수 
let arr4 = [1,3,5,6,8];
let index2 = arr.findIndex((item) =>
	item % 2 === 0 ? true : false
);

console.log(index2);


// ============================================= // 


// find 메서드: 요소 반환 
let arr5 = [
	{ name: "이종원", hobby: "축구" },
	{ name: "이정환", hobby: "영화" },
	{ name: "신다민", hobby: "축구" },
	{ name: "김효빈", hobby: "노래" }
];

let filteredArr = arr5.filter(
	(item) => item.hobby === "축구"
);

console.log(filteredArr);


// ============================================= // 


// reduce 메서드 
let arr6 = [1, 2, 3, 4, 5];
let result = arr6.reduce((acc, item) => acc + item);
console.log(result); // 15


// ============================================= // 


// sort 메서드 
let arr7 = [10, 5, 3];

arr7.sort(function(a, b) {
  return a - b; // 오름차순 정렬
}); 

// 음수를 반환하면 a를 b보다 앞으로 정렬합니다.
// 양수를 반환하면 b를 a보다 앞으로 정렬합니다.
// 0을 반환하면 a와 b의 순서를 변경하지 않습니다.

console.log(arr); // [3, 5, 10]


// ============================================= // 


// Date 객체 
function filterThisMonth(pivotDate, dateArray) {
    const year = pivotDate.getFullYear();
    const month = pivotDate.getMonth();

    // 이번달에 가장 빠른 시간인 10월 1일 0시 0분 0초로 설정한다.
    const startDay = new Date(year, month, 1, 0, 0, 0, 0);

    // 이번달에 가장 마지막인 다음달 0일 23시 59분 59초로 설정한다.
    const endDay = new Date(year, month + 1, 0, 23, 59, 59);

    const resArr = dateArray.filter((it) =>
        startDay.getTime() <= it.getTime() && it.getTime() <= endDay.getTime()
    );
    return resArr;
}


const dateArray = [
    new Date("2000-10-1"),
    new Date("2000-10-31"),
    new Date("2000-11-1"),
    new Date("2000-9-3"),
    new Date("1900-10-11")
];

// 오늘이 2000년 10월 10일이라고 가정
const today = new Date("2000-10-10/00:00:00");
const filterArray = filterThisMonth(today, dateArray);

console.log(filterArray);


