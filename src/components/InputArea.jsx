import React, {useState} from "react";

function InputArea(props) {
    const [inputText, setInputText] = useState("");
    function handleText(event) {
        const newValue = event.target.value;
        setInputText(newValue);
      }
    
    return (
        <div className="form">
        <input type="text" onChange={handleText} value={inputText}/>
        <button onClick={() => {
            props.addClick(inputText);
            setInputText("");
        }}>
          <span>Add</span>
        </button>
      </div>
    )
}


export default InputArea;



