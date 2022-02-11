import React, {useState} from 'react';
import './../App.css';
import './Tab.css';

const tabitems = [
    {
      title : 'Tab1',
      content : 'Tab menu ONE'
    },
    {
      title : 'Tab2',
      content : 'Tab menu TWO'
    },
    {
      title : 'Tab3',
      content : 'Tab menu THREE'
    }
]; 

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const selectTab = (index) => {
      console.log(index);
      setActiveTab(index);
  }
  return (
    <div className="wrapper">
      <h1>Tab</h1>
      <div className="tab_box">
        <ul className="tab">
            {tabitems.map((cur, index) => {
                return <li key={index} 
                    onClick={() => selectTab(index)}
                    className={`${index === activeTab ? 'menu active' : 'menu'}`}
                >
                {cur.title}
                </li>
            })}
        </ul>
      <div className="content">{tabitems[activeTab].content}</div>
      </div>
    </div>
  )
};

export default Tab;