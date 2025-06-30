// Day1_05 : KPopUL 컴포넌트의 부모 컴포넌트

import KPopUL from './KPopUL'

export default function App() {
  const twice = ['나나a', '모모', '다현', '지효']
  return (
    <div>
      <KPopUL members={twice} title={'트와이스'} />
      <KPopUL members={['슈가', '지민', '제이홉', '뷔']} title={'BTS'} />
    </div>
  )
}
