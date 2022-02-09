import '../styles/Translator.css'
export function Binary() {
  return (
    <div>
      <div className="setor">
        <h2>Write your text here:</h2>
        <textarea name="inputText" id="inputText" placeholder="Type here..." />
      </div>

      <div className="buttons">
        <button type="submit">Swap</button>
        <button type="submit">Convert</button>
        <button type="submit">Clean</button>
      </div>

      <div className="setor">
        <h2>Converted text:</h2>
        <textarea
          name="outputText"
          id="outputText"
          placeholder="Your translation will appear here."
          readOnly
        />
      </div>
    </div>
  )
}
