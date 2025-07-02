// 첫번째 조건식이 '참' 일때 && 연산 뒤의 명령문이 실행
// AND 연산에서는 첫 번째 조건이 False로 평가될 경우, 전체 표현식의 결과가 False가 되기 때문에, 두 번째 조건은 평가하지 않습니다.
let x = 20
let result = (x > 10) && console.log('AND 연산 단축평가(1)')

x = 10
result = (x > 10) && console.log('AND 연산 단축평가(2)')

// 첫번째 조건식이 '거짓' 일때 || 연산 뒤의 명령문이 실행
// OR 연산에서는 첫 번째 조건이 True로 평가될 경우, 전체 표현식의 결과가 True가 되므로, 두 번째 조건은 평가하지 않습니다.
x = 20
result = (x > 10) || console.log('OR 연산 단축평가(1)')

x = 10
result = (x > 10) || console.log('OR 연산 단축평가(2)')