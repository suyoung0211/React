import { MdAdd } from 'react-icons/md'
import '../assets/css/TodoInsert.scss'
import { useState } from 'react'

export default function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('')

  // ✅이벤트 함수
  const handleSubmit = (e) => {
    e.preventDefault()
    onInsert(value)
    setValue('')
  }
  return (
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
  )
}
