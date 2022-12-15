// import { Tab, Tabs } from 'react-bootstrap';
import React, {useState, useEffect, useRef} from 'react'
import Slider2 from '../slider2';
import { Tabs, Tab, Content } from "./Tab";
import VisibilitySensor from 'react-visibility-sensor';
import { galleryImages} from '../../data';


const CommonSlider = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [slideState, setSlideState] = useState(0)
  const [bslideState, setbSlideState] = useState(0)
  const [active, setActive] = useState(0);

  const sliderRef = useRef();
  const handleOnClickCulture = index => {
    sliderRef.current.slickGoTo(0);
  };
  const handleOnClickTrips = index => {
    sliderRef.current.slickGoTo(3);
  };
  const handleOnClickOffsite = index => {
    sliderRef.current.slickGoTo(8);
  };
  const handleOnClickEvents = index => {
    sliderRef.current.slickGoTo(10);
  };

  return (
    <div className='commonSlider'>
       <div className="heading">Life@Optiphoenix</div>
     <VisibilitySensor  active={!viewPortEntered}  onChange={isVisible => {
      if (isVisible) {
        setViewPortEntered(true);
      }
    }}
    delayedCall>
    <Tabs className={`${viewPortEntered ? "bottom__container": ""}`}>
        <Tab className="botton__slide"  active={bslideState < 3 ? true : false} onClick={handleOnClickCulture}>
          CULTURE
        </Tab>
        <Tab className="botton__slide"  active={bslideState >=3 && bslideState < 8 ? true : false} onClick={handleOnClickTrips}>
          TRIPS
        </Tab>
        <Tab className="botton__slide"  active={bslideState >= 8 && bslideState < 10 ? true : false} onClick={handleOnClickOffsite}>
          OFFSITE
        </Tab>
        <Tab className="botton__slide"  active={bslideState >= 10 ? true : false} onClick={handleOnClickEvents}>
          EVENTS
        </Tab>
      </Tabs>
        </VisibilitySensor>
      <>
        <Content active={active === 0}>
          <Slider2 images={galleryImages} sliderRef={sliderRef} setSlideState={setSlideState} slideState={slideState} setbSlideState={setbSlideState} bslideState={bslideState} />
        </Content>
      </>
   </div>
  )
}

export default CommonSlider;