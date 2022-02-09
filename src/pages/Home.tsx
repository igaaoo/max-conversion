import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'
import BinaryImg from '../images/binaryImage.png'
import MorseImg from '../images/morseImage.png'

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

      <section>
        {/* Botões opções */}
        <div className="options">
          <img
            src={BinaryImg}
            alt="Binary Button Image"
            title="Binary Button"
            onClick={goBinary()}
          />
          <img
            src={MorseImg}
            alt="Morse Button Image"
            title="Morse Button"
            onClick={goMorse()}
          />
        </div>
      </section>

      <footer>
        <p>1.0.0</p>
      </footer>
    </body>
  )
}
