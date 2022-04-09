import React from 'react';
import MultiRangeSlider from "multi-range-slider-react";
import { configOptsHeading, rangeSliderTitle, rangeSliderAriaLabel } from '../../constants';

const SliderTemplate = ({ min, max, minValue, maxValue, handleInput }) => {

    return (    
        <div className='sliderContainer'>
          <h5 role="heading" className="headingStyles">{configOptsHeading}</h5>
          <div style={{ width: "20vw", margin: "auto" }} title={rangeSliderTitle} aria-label={rangeSliderAriaLabel}>
            <MultiRangeSlider className="bg-color"
              min={min}
              max={max}
              step={1}
              ruler={true}
              label={true}              
              preventWheel={false}
              minValue={minValue}
              maxValue={maxValue}
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </div>           
        </div>        
  )
}

export default SliderTemplate