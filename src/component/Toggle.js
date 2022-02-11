import React, {useState} from 'react';
import './../App.css';
import './Toggle.css';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  const checked = isToggled ? 'ON' : 'OFF';
  console.log(isToggled);
  console.log(checked);
  
  return (
    <div className="wrapper">
      <h1>Toggle</h1>
      <div className="switch_box">
        <input type="checkbox" id={`label`} onClick={() => onToggle()}/>
        <label className="switch" htmlFor={`label`}>
          <span className="inner"></span>
          <span className="slider"></span>
        </label>
        <p className="txt">Toggle Switch {checked}</p>
      </div>
    </div>
  )
};

export default Toggle;