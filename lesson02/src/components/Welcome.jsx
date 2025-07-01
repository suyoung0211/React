// Day2_01 : 이벤트 연습, useState 연습

import { useState } from 'react'

export default function Welcome() {
  // 호출 시 배열을 반환: [현재 상태 값, 상태를 변경하는 함수]
  //     ㄴ message 변수는 값을 변경하기 위해 반드시 setMessage 메소드 사용해야 함.
  //     ㄴ useState 로 선언된 변수는 상태변수 : getElementByid('').textContent='값' 코드의 비효율성 개선

  const [message, setMessage] = useState('Welcome!!')
  const [h3Color, setH3Cololr] = useState('green')
  // useState(상태변수의 초기값)

  // setMessage 가 message 변수값 변경
  function handleWelcome() {
    setMessage('환영합니다')
    setH3Cololr('blue')
  }

  function handleEnter() {
    setMessage('입장합니다')
    setH3Cololr('orange')
  }

  function handleOut() {
    setMessage('퇴장합니다')
    setH3Cololr('pink')
  }

  const h3Sytle = {
    color: h3Color
  }

  return (
    <div>
      {/* onClick : 해당 이벤트핸들러 함수를 저장 */}
      <button onClick={handleWelcome}>환영합니다.</button>
      <button onClick={handleEnter}>입장</button>
      <button onClick={handleOut}>퇴장</button>
      <h2>{message}</h2>
      <h3 style={{ color: h3Color }}>{message}</h3>
      <h4 style={h3Sytle}>{message}</h4>
    </div>
  )
}
