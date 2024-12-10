import React, { useState } from 'react';
import * as styles1600 from '../assets/css/style-1600.css';

import * as styles700 from '../assets/css/style-700.css';
import * as styles900 from '../assets/css/style-900.css';
import * as styles1300 from '../assets/css/style-1300.css';

const ResizableComponent = () => {
    const [width, setWidth] = useState(700);
    const [style, setStyle] = useState(styles700.style700);
    const [square, setSquare] = useState("square");
    const [sText, setsText] = useState("sText");
   
    const handleButtonClick = (newWidth) => {
        setWidth(newWidth);
        switch (newWidth) {
          case 1600:
            setStyle(styles1600.style1600);
            setSquare("square-3");
            setsText("sText-3");
            break;
          case 1300:
            setStyle(styles1300.style1300);
            setSquare("square-2");
            setsText("sText-2");

            break;
          case 900:
            setStyle(styles900.style900);
            setSquare("square-1");
            setsText("sText-1");
            
            break;
          case 700:
          default:
            setStyle(styles700.style700);
            setSquare("square");
            setsText("sText");

            break;
        }
      };
  
      return (
        <div>
   <div>
    <button className=" transition-all duration-300 ease-in-out bg-white text-black rounded-lg p-2 m-2 mb-6 shadow-md hover:bg-gray-200 transition " onClick={() => handleButtonClick(900)}>900px</button>
    <button className=" transition-all duration-300 ease-in-out bg-white text-black rounded-lg p-2 m-2 mb-6 shadow-md hover:bg-gray-200 transition " onClick={() => handleButtonClick(700)}>700px</button>
    <button className=" transition-all duration-300 ease-in-out bg-white text-black rounded-lg p-2 m-2 mb-6 shadow-md hover:bg-gray-200 transition " onClick={() => handleButtonClick(1300)}>1300px</button>
    <button className=" transition-all duration-300 ease-in-out bg-white text-black rounded-lg p-2 m-2 mb-6 shadow-md hover:bg-gray-200 transition " onClick={() => handleButtonClick(1600)}>1600px</button>
  </div>
  <div id="resize-element" className={`w-full sm:w-[700px] md:w-[900px] lg:w-[1300px] xl:w-[1600px] ${style}`}>
    
  
    <div className={square}><span className={sText}>Text 1</span></div>
    <div className={square}><span className={sText}>Text 2</span></div>
    <div className={square}><span className={sText}>Text 3</span></div>
    <div className={square}><span className={sText}>Text 4</span></div>
  </div>
 
</div>
     
      );
    };
    
    export default ResizableComponent;
