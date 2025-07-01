// Day2_02 : useState 연습. 조건식 삼항 연산

import { useState } from 'react'
import '../assets/css/LightToggle.css'
import bulbON from '../assets/pic_bulbon.gif'
import bulbOFF from '../assets/pic_bulboff.gif'

function LightToggle() {
  const [isOn, setIsOn] = useState(false)

  // vite 은 이미지를 import 해야함.
  // const bulbON = '../assets/pic_bulbon.gif'
  // const bulbOFF = '../assets/pic_bulboff.gif'

  const handleToggle = () => {
    // setIson(!isOn)     문제 발생 가능성 있음 (비추천)
    setIsOn((prev) => !prev)
    // 현재 isOn 상태 값을 콜백함수 인자로 받아서 prev에 저장.
    // !prev Not 연산 결과를 리턴.   function(prev){ return !prev } 와 동일함
  }

  return (
    <div className='container'>
      <img
        src={isOn ? bulbON : bulbOFF}
        alt={isOn ? 'ON' : 'OFF'}
        className='bulb'
        onClick={handleToggle}
      />
      {/* style 속성으로 OFF 빨강, ON 초록 */}
      <button onClick={handleToggle} style={{ color: isOn ? 'red' : 'green' }}>
        {isOn ? 'OFF' : 'ON'}
      </button>
    </div>
  )
}

export default LightToggle
