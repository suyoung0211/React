// 비구조화, 구조 분해
//    ㄴ 배열 또는 객체를 분해 - 함수 등 값을 전달할 때 사용

const sana = { name: '사나', age: 23, address: '경기' }

function print1(objValue) {
  console.log('print1 함수 실행----')
  console.log(objValue.name)
  console.log(objValue.age)
  console.log(objValue.address)
}
print1(sana)

// { 속성이름1, 속성이름2, ... } => 순서 무관
function print2({ name, age, addr }) {
  console.log('print2 함수 실행----')
  console.log(age)
  console.log(name)
  console.log(addr)     // 없는 속성이름 : undefined (address 면 출력 가능)
}
print2(sana)

// 필요한 속성만 가져오기 {adress: address}
function print3({address}) {
  console.log('print3 함수 실행----')
  console.log(address)
}
print3(sana)

// address 속성값을 addr 변수에 저장
function print4({ address: addr }) {
  console.log('print4 함수 실행----')
  console.log(addr)
  console.log(address)  // address 변수 선언 없으므로 오류. (없는 속성은 undefined)
}
print4(sana)
