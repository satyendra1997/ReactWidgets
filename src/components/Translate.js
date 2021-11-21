import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";


const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arbian",
        value: "ar"
    },

    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Punjabi",
        value: "pa"
    },
    {
        label:"Farsi",
        value:"fa"

    }

];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (<div>
        <div className="ui form">
          <div className="field">
          <label> Enter The Text Which You Want to Convert Into Selected Language</label>
            <input value={text} onChange={(e) => { setText(e.target.value) }} />
            </div>
        </div>
        <Dropdown options={options} selected={language} label="Select a Language" onSelectChange={setLanguage} />
         <hr/>
         <h3 className="ui header">Output</h3>
         <Convert language={language} text={text}/>
      
    </div>);

}

export default Translate;