// 자바스크립트 데이터 타입
// 기본 타입
// const , let
let n1 = 10;             // 정수
let n2 = 10.5;          // 실수
let s1 = "안녕하세요."; // 문자열

console.log("정수 : ", n1);
console.log("실수 : ", n2);
console.log("문자열 : ", s1);


for(let i in s1){ // key 값 나옴 : index
  console.log("문자열 :", s1[i]);
}

for(let c of s1){
  console.log("문자열 :", c);
}



// 컬렉션 자료 : 여러 묶음을 배열 이름으로
// 배열
// tailing 쉼표 사용가능
let arr = ['🍓',1,'🍒',2,]; // { [ 기호 구분  // python에서 dictionary 같은 느낌
console.log(arr);
console.log("배열의 요소 접근 : ", arr[1]);
// arr2 = arr.map((v)=>{ // map 하면 그냥 iterator만 하구나
//   let s = v + '❤'

//   return s;   // 받는 사람 있어야 해

// });

// 배열 순회
for(let i in arr){ // index  나옴 : index
  console.log("배열 :", arr[i]);
}


for(let c of arr){  // 배열 순회해서 하나씩 출력
  console.log("배열 :", c);
}

// 오브젝트
let obj = {'🍓':1,'🍒':2,};
console.log(obj);
console.log("오브젝트 요소의 접근",obj['🍓']);




// 오브젝트 순회
for(let i in obj){ // key 값 나옴 : index
  console.log("오브젝트 :", obj[i]);
}


for(let [k, v] of Object.entries(obj)){ // 파이썬의 for in 개념
  console.log("오브젝트키 :", k);
  console.log("오브젝트값:", v);  
}





// 배열 map 함수
// 콜백 함수 들어감 : 인수로 들어가는 함수
// 한개씩 접근함
const arr2 = arr.map((v,i)=>{
  console.log("map -> ", v,"map -> ", i);
  return v+"😀";
});

console.log("콜백함수:");

// 콜백 인수가 1개인 경우는 () 생략 가능
// 콜백의 바디에 실행문이 없고 
// return문만 있으면 {}와 return 생략 가능
const arr3 = arr.map(v=>v+"😀");

console.log(2 == '2');

/** 반복문으로
 *  for(let item of arr){
 *    arr2.push(item) ;
 *
 * }
 * console.log("반복문으로 arr2= ", arr2)
 * 
 * 
 */

// filter
let arr21 = [];
for(let item of arr){
  if (!isNaN(item)) arr21.push(item);

}

console.log("Filter arr21 = ", arr21);

arr21 = arr.filter((v) => isNaN(v));

// --------------------------------
// map()과 filter()는 배열에만 사용가능
// --------------------------------


// 전개 연산자 ... 전개해서 해체한다
let arr22 = [...arr];
console.log("전개연산자 : ", arr22);





