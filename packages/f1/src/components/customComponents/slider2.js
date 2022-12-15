import React from "react";
import {styled} from "frontity";
import Slider from "react-slick";
import { PreviousArrow, NextArrow } from "../../../../../assets/icons";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={className} onClick={onClick} >
        <NextArrow  />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={className}  onClick={onClick}>
      <PreviousArrow />
    </button>
  );
}

const Slider2 = ({images, setSlideState, slideState, setbSlideState, bslideState, sliderRef}) => {
  const settings = {
    dots: false,
    infinite: true,
    // initialSlide: 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setSlideState(next),
    afterChange: (current) => setbSlideState( current ),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode: false,
            centerPadding: '150px',
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: false,centerPadding: '200px',
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            centerPadding: '250px',
          }
        }
      ]
  };
  return (
    <Slidercontainer>
      <Slider ref={sliderRef} {...settings}>
          {images.map((image)=>(
            <div className="inner__div">
          <div style={{
            overflow: "hidden",
            transition: "0.3s",
          }}>
            <div className="img_content">
              <img src={image.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </Slidercontainer>
  );
};

export default Slider2;

const Slidercontainer = styled.div`
h2{
  font-size: 60px;
  width: 543px;
  margin-bottom: 50px !important;
  font-weight: 700;
  margin-left: 40px;
  @media (max-width:768px) {
      font-size: 40px;
      margin-left: 0;
      width: auto;
  }
}
  .slick-list {
    margin: 0 -10px;
  }

  .slick-slide *:focus {
    outline: none;
  }
  .slick-slider {
    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
      z-index: 1;
      @media (max-width:1024px) { 
        @supports (-webkit-touch-callout: none) {
          height: 50px;
          width: 50px;
        }
      }
      svg{
        @supports (-webkit-touch-callout: none) { 
          height: auto;
          width: auto;
          overflow: inherit;
        }
        @media (max-width:1023px) {
          background: rgba(255,255,255, 0.5);
          border-radius: 50%;
          height: 30px;
          width: 30px;
          padding: 5px;
        }
      }
      &::before {
        display: none;
      }
    }
    .slick-prev {
      left: 1%;
      @media (min-width:1024px) {
      left: 0%;
      }
      @media (min-width:1300px) {
      left: -5%;
      }
      @media (max-width:600px) {
      left: 0%;
      }
    }
    .slick-next {
      right: 2%;
      @media (min-width:1024px) {
      right: 0%;
      }
      @media (min-width:1300px) {
      right: -5%;
      }
    }
    .slick-dots{
      bottom: -50px;
      li{
        button:before{
          font-size: 50px;
          color: #4654F6;
        }
      }
    }
  }
`;
