import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// 최종
import App from './App.jsx'

// 테스트
// import App from './App_V1.jsx'

// ArryTest
// import ArrayTest from './ArrayTest.jsx'

// RefHookTest
import { EffectAndRef, FocusInput, PreviousValue } from './RefHoolTest.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMod 주석 처리하면 렌더링 카운트 1씩 오름

  <StrictMode>
    <App />
    {/* <ArrayTest /> */}
    {/* <FocusInput /> */}
    {/* <EffectAndRef /> */}
    {/* <PreviousValue /> */}
  </StrictMode>
)
