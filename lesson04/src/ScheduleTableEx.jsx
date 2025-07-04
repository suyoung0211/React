import { useState } from 'react'
import schedules from './schedules.json'
// schedules.json 문자열이 JS 객체로 import 됩니다. 변수명은 

export default function ScheduleTableEx() {
  // schedule 는 상태 변수.
  const [schedule, setSchedule] = useState(schedules[0])
  const handleSelected = (idx) => {
    setSchedule(schedules[idx])
  }

  return (
    <div
      className='container'
      style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}
    >
      <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        {/* sch 객체는 date, time(배열), todo(배열) */}
        {schedules.map((sch, idx) => (
          <button
            key={idx}
            onClick={() => handleSelected(idx)}
            disabled={schedule.date === sch.date}
            style={{
              margin: '0 5px',
              padding: '8px 16px',
              backgroundColor: schedule.date === sch.date ? '#ccc' : '#007bff',
              color: schedule.date === sch.date ? '#666' : 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: schedule.date === sch.date ? 'not-allowed' : 'pointer'
            }}
          >
            {sch.date}
          </button>
        ))}
      </div>
      <hr />
      <h3 style={{ color: '#333', marginBottom: '1rem' }}>{schedule.date}</h3>
      <table border='1' style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: '#f8f9fa',
                padding: '10px',
                textAlign: 'center'
              }}
            >
              TIME
            </th>
            {schedule.todos.map((t, idx) => (
              <th
                key={`time-${idx}`}
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '10px',
                  textAlign: 'center'
                }}
              >
                {t.time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: '#f8f9fa',
                padding: '10px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
            >
              TODO
            </td>
            {schedule.todos.map((t, idx) => (
              <td
                key={`todo-${idx}`}
                style={{ padding: '10px', textAlign: 'center' }}
              >
                {t.text}
              </td>
            ))}
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: '#f8f9fa',
                padding: '10px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
            >
              CHECKBOX
            </td>
            {schedule.todos.map((t, idx) => (
              <td
                key={`todo-${idx}`}
                style={{ padding: '10px', textAlign: 'center' }}
              >
                {t.text}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
