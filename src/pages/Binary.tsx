import '../styles/Translator.css'

import { useState } from 'react'

import { toBinary } from '../utils/Translator'

export function Binary() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  // Clean Texts
  function cleanTexts() {
    setInputText('')
    setOutputText('')
  }

  return (
    <body>
      <div>
        {/* Input */}
        <div className="setor">
          <h2 className="setorTxt">Write your text here:</h2>
          <h2 className="languageType"> Text </h2>
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
          <button>Swap</button>
          <button
            onClick={() => {
              setOutputText(toBinary(inputText))
            }}
          >
            Convert
          </button>

          <button onClick={cleanTexts}>Clean</button>
        </div>

        {/* Output */}
        <div className="setor">
          <h2 className="setorTxt">Converted text:</h2>
          <h2 className="languageType"> Binary </h2>
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
