import React, { useState } from "react";
import Field from "./Components/Field";
import Language from "./Components/Language";
import Translate from "./Components/Translate";
import './styles.css'

function App() {
  const [language, setLanguage]= useState('es')
  const [text, setText] = useState('')
  return (
    <div>
    <Field onChange={setText}/>
    <Language language={language} onLanguageChange={setLanguage}/>
    <hr/>
    <Translate text={text} language={language}/>
    </div>
  );
}

export default App;
