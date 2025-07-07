import { useState } from "react"
import SandBox from "./component/SandBox"

// 외부에서 사용할 컴포넌트
export default function Box() {
  const [boxwidth, setWidth] = useState(100)
  const [boxheight, setHeight] = useState(100)
  const [posLeft, setLeft] = useState(300)
  const [posTop, setTop] = useState(300)

  const handleResize = {}

  return (
    <>
      <button onClick={handleResize} id='width_inc'>
        가로+
      </button>
      <button onClick={handleResize} id='width_dec'>
        가로-
      </button>
      <button onClick={handleResize} id='height_inc'>
        세로+
      </button>
      <button onClick={handleResize} id='height_dec'>
        세로-
      </button>
      <hr />
      <div id='container'>
        {/* SandBox 렌더링 하기 위해 너비, 높이를 전달해 줍니다. */}
        <SandBox />
      </div>
    </>
  )
}
