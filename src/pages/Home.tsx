import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()

  function goMorse() {
    return () => navigate('/morse', { replace: true })
  }

  function goBinary() {
    return () => navigate('/binary', { replace: true })
  }

  return (
    <body>
      <header className="header">
        <h1>Max Conversion</h1>
      </header>

      <div className="options">
        <h2 onClick={goMorse()}>
          Morse <br /> --. --- -..
        </h2>
        <h2 onClick={goBinary()}>
          Binary <br /> 01100001
        </h2>
      </div>
    </body>
  )
}
