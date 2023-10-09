// 1. 현재 날짜, 시간을 변수에 받은 후 달만 출력하시오. (달은 왜 1이 적은지 설명하시오.)

let date = new Date(); 
let month = date.getMonth(); 
console.log(month+1);

// 달은 0~11까지 있기 때문에 1이 적다. 


// 2. 프로미스 객체를 생성할 때 , “성공”하게 만들기 위한 2가지 빈칸을 채우시오.
const promise = new Promise(
	function (resolve, reject) {
		setTimeout(() => {
			// _____(1)____("성공");
            resolve("성공")
		}, 500);
	}
);

// promise.___(2)___(function (res) {
// 	console.log(res);
// });
promise.then(function (res) {
	console.log(res);
});