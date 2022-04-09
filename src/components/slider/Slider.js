import React, { useEffect, useState } from 'react';
import SliderTemplate from './SliderTemplate';

  const Slider = ({ min, max, onChange }) => {

  const [minValue, set_minValue] = useState(min);
  const [maxValue, set_maxValue] = useState(max);
  
  const handleInput = (e) => {        
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);        
  };

 // Get min and max values on state change
  useEffect(() => {
    onChange(minValue, maxValue);   
  }, [minValue, maxValue, onChange]);
  
  return (    
       <SliderTemplate 
        min={min}
        max={max}
        minValue={minValue}
        maxValue={maxValue}
        handleInput={handleInput}
        />
  )
}

export default Slider