import { useState } from "react"
import SandBox from "./component/SandBox"

// 외부에서 사용할 컴포넌트
export default function Box() {
  // 박스의 크기 상태 관리
  const [boxwidth, setWidth] = useState(100)
  const [boxheight, setHeight] = useState(100)
  const [posLeft, setLeft] = useState(300)
  const [posTop, setTop] = useState(300)

  // 버튼 클릭시 크기 조절 핸들러
  const handleResize = (event) => {
    const { id } = event.target;
    if (id === 'width_inc') {
      setWidth((w) => w + 10);
    } else if (id === 'width_dec') {
      setWidth((w) => Math.max(10, w - 10));
    } else if (id === 'height_inc') {
      setHeight((h) => h + 10);
    } else if (id === 'height_dec') {
      setHeight((h) => Math.max(10, h - 10));
    }
  }
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
      <div id='container'>
        {/* SandBox 렌더링 하기 위해 너비, 높이를 전달해 줍니다. */}
        <SandBox width={boxwidth} height={boxheight} />
      </div>
