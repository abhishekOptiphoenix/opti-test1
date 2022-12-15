import React, {useState, useEffect} from "react";
import {styled} from "frontity";
import ReactPlayer from 'react-player'
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import testiQuote from "../../../../../assets/homepage/testiQuote.png";
import Slider from "react-slick";
import { homeTestimonials } from "../data";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span>
        <IoIosArrowDropright />
      </span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowDropleft />
    </div>
  );
}

const Sliders = ({text}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      },
    ]
  };
  return (
    <Slidercontainer>
      <h2>{text}</h2>
      <Slider {...settings} key={homeTestimonials.id}>
        {homeTestimonials.map((homeTestimonial)=>(
          <div>
          <div className="slider_content"  style={{
            borderRadius: "4px",
            background: "#f5f5f5",
            color: "#666",
            overflow: "hidden",
            boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}>
            <div className="img_content">
              {/* <iframe src={homeTestimonial.img} allow="autoplay"></iframe> */}
              <ReactPlayer className="react_player_main" url={homeTestimonial.img} light={true}  playing
      controls />
            </div>
            <div className="testimonial_content">
              <img src={testiQuote} alt="quote" />
              <p className="testimonials_para">
                {homeTestimonial.para.slice(0, 245)}{homeTestimonial.para.length > 245 ? '...': ""}
                
              </p>
              <p className="name">{homeTestimonial.name}</p>
              <p>{homeTestimonial.role}</p>
            </div>
          </div>
        </div>
            ))}
      </Slider>
    </Slidercontainer>
  );
};

export default Sliders;

const Slidercontainer = styled.div`
h2{
  font-size: 48px;
  max-width: 543px;
  margin-bottom: 80px !important;
  margin-left: 46px !important;
  font-weight: 400;
  font-family: 'Merriweather Sans', sans-serif;
  @media (max-width:768px) {
      font-size: 40px;
      margin-left: 0 !important;
      width: auto;
  }
}
.slick-slide > div {
    margin: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }

  .slick-slide *:focus {
    outline: none;
  }
  .slick-slider {
    .slider_content {
      display: flex;
      padding: 64px 40px;
      justify-content: space-between;
      position: relative;
      @media (max-width:768px) {
        flex-direction : column ;
        padding-bottom: 20px;
      }
      @media (max-width:340px) {
        padding: 21px 10px;
      }
      .img_content {
        flex: 1;
        height: 329px;
        overflow: hidden;
        padding-right: 20px;
        .react_player_main{
          width: auto !important;
        }
        @media (max-width: 768px) {
          width: 100%;
          max-width: inherit;
          padding-right: 0;
        }
        iframe {
          height: 100%;
          width: 100%;
          object-fit: contain;
          border: none;
          @media (max-width: 768px) {
            height: 300px;
          }
        }
      }
      .testimonial_content {
        max-width: 551px;
        flex: 1;
        @media (max-width: 768px) {
            margin-top: 40px;
        }
        img {
          margin-bottom: 15px;
        }
        p {
          font-size: 18px;
          color: #28292d;
          margin-bottom: 30px;
        }
        .name {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 9px;
        }
      }
    }
    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
      font-size: 36px;
      color: black;
      z-index: 1;
      &::before {
        display: none;
      }
    }
    .slick-prev {
      left: 2.5%;
      @media (max-width: 768px) {
        left: 1.5%;
        }
    }
    .slick-next {
      right: 3.8%;
      @media (max-width: 500px) {
        right: 20px;
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
