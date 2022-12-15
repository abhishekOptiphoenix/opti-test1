import React from 'react';
import {styled } from "frontity";
import Lottie from 'react-lottie';
import animationData from '../../../../../assets/lotties/wave.json'
 
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const Loader = () => {
  return <LoaderImage className='onLoad_loader'>
       <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
  </LoaderImage>;
};

export default Loader;

const LoaderImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
