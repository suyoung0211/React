// Day1_07 : TimeTableH 의 부모 컴포넌트
//           자식 컴포넌트 TimeTableH 에게 2개의 배열을 전달해야함
//           index.js 에 import 하기

import TimeTableH from './TimeTableH'
import TimeTableH_2 from './TimeTableH_2'
import TimeTableV from './TimeTableV'

export default function App() {
  const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
  const todo = ['수업', '과제', '점심식사', '주간회의', '조료조사']

  // 객체 배열
  const schedules = [
    { time: '09:00', todo: '수업' },
    { time: '11:00', todo: '과제' },
    { time: '12:30', todo: '점심식사' },
    { time: '14:00', todo: '주간회의' },
    { time: '16:45', todo: '자료조사' }
  ]

  return (
    <div>
      {/* time, todo, title 속성은 객체 형태로 자식 컴포넌트에게 전달 */}
      {/* 자식 1 : 함수 인자로 객체 분해하여 속성 변수로 선언 */}
      <TimeTableH time={time} todo={todo} title={'첫번째 테이블'} />

      {/* 자식 2 : 함수 인자로 객체를 저장할 변수 선언 */}
      <TimeTableH_2 time={time} todo={todo} title={'두째 테이블'} />
      <hr />

      {/* 객체의 배열을 자식 컴포넌트에게 전달. 이 때 props 사용 */}
      <TimeTableV schedules={schedules} />
    </div>
  )
}
