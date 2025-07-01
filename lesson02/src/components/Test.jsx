// LightToggle 에 적용한 함수 변형 연습

import { useState } from 'react'
import on from '../assets/pic_bulbon.gif'
import off from '../assets/pic_bulboff.gif'

export default function Text() {
  const [isOn, setIsOn] = useState(false)
  return (
    <div>
      <img src={isOn ? on : off} onclick={() => setIsOn((prev) => !prev)} />
      <button onClick={() => setIsOn((prev) => !prev)}>
        {isOn ? 'on' : 'off'}
      </button>
    </div>
  )
}
