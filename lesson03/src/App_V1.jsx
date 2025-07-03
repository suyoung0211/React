// Day3_02 : 배열 상태값 변경을 UI로 구현
// Day3_03 : components 폴더에 컴포넌트로 만들어서 리팩토링

import { useRef, useState } from 'react'
import './assets/css/TodoInsert.scss'
import './assets/css/TodoList.scss'
import './assets/css/TodoListItem.scss'
import './assets/css/TodoTemplate.scss'
import {
  MdAdd,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline
} from 'react-icons/md'

// 추가 패키지 설치 명령어 : npm i sass react-icons

function App() {
  const renderCount = useRef(0) // useRef 는 리액트 함수(훅)
  renderCount.current += 1

  // 할일 목록 배열
  const initVal = [
    {
      id: 1,
      text: '리액트 수업 복습',
      checked: true
    },
    {
      id: 2,
      text: '리액트 프로젝트 기획',
      checked: false
    },
    {
      id: 3,
      text: '데이터베이스 테스트',
      checked: true
    }
  ]
  const [todos, setTodos] = useState(initVal)
  const maxid = useRef(todos.length + 1)

  console.log('todos:', todos)
  const [value, setValue] = useState('')

  // 🌟 상태변수 todos 변경
  function handleChecked(id) {
    // 배열 자체를 바꿔야 상태 변경됩니다.
    // 배열 특정 요소의 checked 값만 변경한 것을 새로운 배열로 하여 todos 변경
    // ! 연산자는 참은 거짓, 거짓은 참으로 변경
    const newtodos = todos.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    // 상태가 바뀝니다.
    setTodos(newtodos)
  }

  // 🌟 상태변수 todos 변경
  // todos  할 일 객체 목록 중 삭제하기
  function handleRemove(id) {
    // 인자로 전달받은 id값을 갖는 요소 삭제하기
    // 인자 id값이 아닌 요소로만 새로운 배열 만들기
    const newtodos = todos.filter((item) => item.id !== id)
    setTodos(newtodos)
  }

  // 🌟 상태변수 todos 변경
  // 🔥 화살표 함수 사용해보기
  // todos 에 할일 객체를 추가
  const handleInsert = (text) => {
    const todo = {
      id: maxid.current,
      text,
      checked: false
    }

    // todos 에 새로운 todo를 추가해서 변경합니다.
    // 배열 요소 추가 push() 는 리턴이 없고 todos 배열에 추가합니다.
    // => todos 배열 자체가 바뀌는 것은 아닙니다.state 변화 없음.
    setTodos([...todos, todo])
    // todos.concat(todo) 과 동일. 새로운 배열로 바꿔서 state 변화. 재렌더링

    maxid.current += 1
  }

  // ✅이벤트 함수
  const handleSubmit = (e) => {
    e.preventDefault() // form 제출 기본 동작을 못하게 막음.
    // 입력값을 할일 목록(배열)에 추가시키는 함수 실행하기
    // 새로운 할일 입력값 value는 상태변수
    handleInsert(value)
    setValue('')
  }

  // ✅이벤트 함수
  const handleButton = (id, text) => {
    // 리액트 객체이름 window 생략 못함
    const yn = window.confirm(`일정 ${id}:${text}를 삭제하십니까?`)
    if (yn) handleRemove(id)
  }

  return (
    <div className='container'>
      <div className='TodoTemplate'>
        <div className='app-title'>일정관리</div>
        <div className='content'>
          {/* {children} */}

          {/* TodoInsert.jsx */}
          <form className='TodoInsert' onSubmit={handleSubmit}>
            <input
              placeholder='할 일을 입력하세요.'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {/* type="submit" 이면 onSubmit 이벤트 발생 => form 태그에서 함수 지정 */}
            {/* type="button" 이면 onClick 이벤트 발생 */}
            <button type='submit'>
              <MdAdd />
            </button>
          </form>

          {/* TodoList.jsx */}
          <div className='TodoList'>
            {/* ListItem을 반복해서 표시 */}
            {/* 항목 삭제 아이콘 TodoListItem 컴포넌트에 있음. */}
            {todos.map((item, idx) => (
              // TodoListItem.jsx
              <div className='TodoListItem' key={idx}>
                <div
                  className={`checkbox ${item.checked ? 'checked' : ''}`}
                  onClick={() => handleChecked(item.id)}
                >
                  {item.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                  <div className='text'>{item.text}</div>
                </div>
                <div
                  className='remove'
                  onClick={() => handleButton(item.id, item.text)}
                >
                  {/*  ()=> onRemove(id)  대신에 handleButton 함수 호출합니다.*/}
                  <MdRemoveCircleOutline />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div> 렌더링 카운트 : {renderCount.current}</div>
    </div>
  )
}

export default App
