import { useEffect, useRef, useState } from 'react'

export default function SandBox(props) {
  //스타일 적용할 객체
  // Box 컴포넌트에서 전해준 너비, 높이를 스타일 객체에 적용합니다.
  const boxstyle = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.left}px`,
    top: `${props.top}px`,
    position: 'absolute',
    background: 'yellow'
  }
  const [container, setContainer] = useState(
    document.getElementById('container')
  )
  const [box, SetBox] = useState(document.getElementById('box'))
  const [parent, SetParent] = useState(document.getElementById('main'))

  // 현재 박스의 위치 변경하기
  useEffect(() => {
    document.body.addEventListener('keydown', (e) => {
      console.log('이벤트정도', e)
    })

    // 현재 box의 위치
    const [currentLeft, SetCurrentLeft] = useState(box.offsetLeft)
    const [currentTop, SetCurrentTop] = useState(box.offsetTop)

    // 현재 box의 크기
    const [currentWidth, SetCurrentWidth] = useState(boxwidth)
    const [currentHeight, SetCurrentHeight] = useState(boxheight)

    // 부모 main 요소의 크기
    const [parentWidth, SetParentWidth] = useRef(parent.offsetWidth)
    const [parentHeight, SetParentHeight] = useRef(parent.offsetHeight)

    switch (
      e.key // 눌려진 키보드 키를 검사
    ) {
      case 'ArrowUp':
        console.log('방향 위를 눌렀습니다.')
        if (currentTop - 10 > 100) {
          box.style.top = SetCurrentTop - 10 + 'px'
        }
        break
      case 'ArrowDown':
        console.log('방향 아래를 눌렀습니다.')
        if (currentTop - 100 + currentHeight + 10 < parentHeight) {
          box.style.top = SetCurrentTop + 10 + 'px'
        }
        break
      case 'ArrowLeft':
        console.log('방향 왼쪽을 눌렀습니다.')
        if (currentLeft - 10 > 0) {
          box.style.left = SetCurrentLeft - 10 + 'px'
        }
        break
      case 'ArrowRight':
        console.log('방향 오른쪽을 눌렀습니다.')
        if (currentLeft + currentWidth + 10 < parentWidth) {
          box.style.left = SetCurrentLeft + 10 + 'px'
        }
        break
    }
  })

  return (
    <div id='main'>
      <div id='box' style={boxstyle}></div>
    </div>
  )
}
