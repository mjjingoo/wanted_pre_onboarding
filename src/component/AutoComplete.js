import React, {useState, useEffect} from 'react';
import './../App.css';
import './AutoComplete.css';

const data = ['refurbished','antique','vintage','중고A급','rustic'];

const AutoComplete = () => {
    const [inputValue, setInputValue] = useState("");
    const [hasText, setHasText] = useState(false);
    const [contents, setContents]=useState(data);

    useEffect(() => {
        if (inputValue === ''){
            setHasText(false);
            setContents([]);
        }
        if(inputValue !== ''){ 
            setContents(data.filter((word) => { 
                return word.includes(inputValue)
            })
        )}
    }, [inputValue]);

    const onChange = (e)=> {
        setInputValue(e.target.value);
        setHasText(true);
    }
    const onSelect = (value) => {
        setInputValue(value);
    }
    const onClear = (e) => {
        setInputValue("");
    }
    
    return (
        <div className="wrapper">
            <h1>AutoComplete</h1>
            <div className="autoComplete_box">
                <input
                    type="text"
                    value={inputValue} 
                    onChange={onChange}
                />
                <div className="clear_btn" onClick={onClear}>&times;</div>
            </div>
            {hasText ? 
            (<DropDown contents={contents} onSelect={onSelect}/>) 
            : ('')}
        </div>
    )
};

export default AutoComplete;

export const DropDown = ({ contents, onSelect }) => {
    return (
        <ul className="dropdown">
            {contents.map((content, index) => {
            return <li
                key={index}
                onClick={() => onSelect(content)}
            >{content}
            </li>
            })}
        </ul>
    );
};