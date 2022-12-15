import React, {useEffect} from "react";
import { benefits } from "../data";
import CommonSlider from "./commonSlider";
import ContactMap from "./contactMap";

const JobBottom = () => {

  useEffect(()=>{
  var wpcf7Form = document.querySelector( '.wpcf7-submit' );
    if(wpcf7Form){
      setTimeout(()=>{
        const errorMessage  = document.querySelector(".css-1v5tu5l-ErrorMessage")
        if(errorMessage){
          errorMessage.classList.add("hide")
        }
        const successMessage = document.querySelector(".css-xwf3m5-SuccessMessage");
        if(successMessage){
          successMessage.classList.add("hide")
        }
      }, 1);
    }
  },[])

  return (
    <div className="job_bottom_culture_container">
      <div className="reason_to_join">
        <div className="heading">
          <h1>We're a Family</h1>
          <p>
            We have a work environment that is fulfilling & fun. It’s important
            that you grow as we grow & you enjoy the journey as much as we do.
          </p>
        </div>
        <div className="joining_benefits">
          <div className="benefit_container">
              {benefits.map((benefit)=>(
                  <div className="benefit_content" key={benefit.id}>
              <div className="img_container">
                <img src={benefit.img} alt="" />
              </div>
              <div className="benefits_para">
                <p>{benefit.heading}</p>
              </div>
            </div>
            ))
            }
          </div>
        </div>
      </div>

      <div className="culture_content">
        <CommonSlider />
      </div>

      <div className="current_location">
        <ContactMap />
      </div>
    </div>
  );
};

export default JobBottom;
