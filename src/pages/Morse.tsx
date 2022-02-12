import '../styles/Translator.css'

import { useState } from 'react'

import { toMorse } from '../utils/Translator'

import { useNavigate } from 'react-router-dom'

export function Morse() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [inputType, setInputType] = useState('Text')
  const [outputType, setOutputType] = useState('Morse')
  const [changed, setChanged] = useState(false)

  const navigate = useNavigate()

  function goHome() {
    navigate('/home', { replace: true })
  }

  // Clean Texts
  function cleanTexts() {
    setInputText('')
    setOutputText('')
  }

  function changeLanguage() {
    if (changed) {
      setInputType(' Morse')
      setOutputType(' Text')
    } else {
      setInputType(' Text')
      setOutputType(' Morse ')
    }
    setChanged(!changed)
  }

  return (
    <body>
      <div>
        <button className="backButton" onClick={goHome}>
          Voltar
        </button>
        {/* Input */}

        <div className="setor">
          <h2 className="setorTxt">Write your text here:</h2>
          <h2 className="languageType"> {inputType} </h2>
          <textarea
            name="inputText"
            id="inputText"
            placeholder="Type here..."
            value={inputText}
            onChange={event => setInputText(event.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button
            onClick={() => {
              changeLanguage()
            }}
          >
            Swap
          </button>

          <button
            onClick={() => {
              setOutputText(toMorse(inputText))
            }}
          >
            Convert
          </button>

          <button onClick={cleanTexts}>Clean</button>
        </div>

        {/* Output */}
        <div className="setor">
          <h2 className="setorTxt">Converted text:</h2>
          <h2 className="languageType"> {outputType} </h2>
          <textarea
            name="outputText"
            id="outputText"
            placeholder="Your translation will appear here."
            readOnly
            value={outputText}
          />
        </div>
      </div>
    </body>
  )
}
