// Day1_06 : 부모 컴포넌트가 자식에게 전달하는 데이터(프로퍼티) 연습
//           부모 컴포넌트는 App4

import '../css/TimeTableH.css'
export default function TimeTableH({ time, todo }) {
  return (
    <div>
      <h3 className='title'>오늘의 시간표</h3>
      <table>
        {/* 리액트에서는 tr 을 tbody, thead 부모요소 아래에 포함합니다. */}
        <tbody>
          <tr>
            <th className='theading'>TIME</th>
            {/* time 배열의 값들로 td 태그 요소 만들기 */}
            {time.map((item, idx) => (
              <td key={idx} className='tdata'>
                {item}
              </td>
            ))}
          </tr>
          <tr>
            <th className='theading'>TODO</th>
            {/* todo 배열의 값들로 td 태그 요소 만들기 */}
            {todo.map((item, idx) => (
              <td key={idx} className='tdata'>
                {item}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
