import React, { useState, useEffect } from "react";
import { connect, styled} from "frontity";
import {Dahsed} from "../../../../../../assets/icons/index"


const Progress = () => {
    const [animate, setAnimate] = useState(false)
    const [animate1, setAnimate1] = useState(false)
    const [animate2, setAnimate2] = useState(false)
    const [animate3, setAnimate3] = useState(false)
    const [animate4, setAnimate4] = useState(false)
    const [bgDot, setbgDot] = useState(false)
    const [bgDot1, setbgDot1] = useState(false)
    const [bgDot2, setbgDot2] = useState(false)
    const [bgDot3, setbgDot3] = useState(false)
    const [bgDot4, setbgDot4] = useState(false)

useEffect(()=>{
    setAnimate(true)
    setbgDot(true)
    setTimeout(function() {
        setAnimate1(true)
        setbgDot(false)
        setbgDot1(true)
    },1000);
    setTimeout(function() {
        setAnimate2(true)
        setbgDot1(false)
        setbgDot(false)
        setbgDot2(true)
    },2000);
    setTimeout(function() {
        setAnimate3(true)
        setbgDot1(false)
        setbgDot(false)
        setbgDot2(false)
        setbgDot3(true)
    },3000);
    setTimeout(function() {
       setAnimate4(true)
       setbgDot1(false)
       setbgDot(false)
       setbgDot2(false)
       setbgDot3(false)
       setbgDot4(true)
    },4000);
    setTimeout(function() {
       setbgDot4(false)
    },4500);
},[])


  return (
    <Timelinebar>
   <div className="timeline__container">
       <div className="timeline__content">
           <div className="main__content dot1">
               <Dot>
           <div className="dot__container">
                <div className={`dot ${animate && "active"} ${bgDot ? "bg": null}`}></div>
                <div className={`dash__container  ${animate && "active"}`}>
                <Dahsed />
                </div>
                <div className="para">Experimentation</div>
               </div>
               </Dot>
           </div>
           <div className="main__content dot2">
           <Dot>
               <div className="dot__container">
                <div className={`dot  ${animate1 && "active"} ${bgDot1 ? "bg1": null}`}></div>
                <div className={`dash__container  ${animate1 && "active"}`}>
                <Dahsed />
                </div>
                <div className="para">AB Testing</div>
               </div>
               </Dot>
           </div>
           <div className="main__content dot3">
           <Dot>
           <div className="dot__container">
                <div className={`dot  ${animate2 && "active"} ${bgDot2 ? "bg2": null}`}></div>
                <div className={`dash__container  ${animate2 && "active"}`}>
                <Dahsed />
                </div>
                <div className="para">CRO</div>
               </div>
               </Dot>
           </div>
           <div className="main__content dot4">
           <Dot>
           <div className="dot__container">
                <div className={`dot  ${animate3 && "active"} ${bgDot3 ? "bg3": null}`}></div>
                <div className={`dash__container  ${animate3 && "active"}`}>
                <Dahsed />
                </div>
                <div className="para">Visitor Analysis</div>
               </div>
               </Dot>
           </div>
           <div className="main__content dot5">
           <Dot>
           <div className="dot__container">
                <div className={`dot  ${animate4 && "active"} ${bgDot4 ? "bg4": null}`}></div>
                <div className="para">Data Driven Growth</div>
               </div>
               </Dot>
           </div>
       </div>
   </div>
</Timelinebar>
  );
}

export default Progress;

const Timelinebar = styled.div`
    .timeline__content{
        display: flex;
            align-items: flex-start;
            justify-content: space-between;
            max-width: 772px;
            margin: 0 auto;
            .main__content{
            width: 20%;
            .dot__container{
                display: flex;
                flex-direction: column;
                position: relative;
                .para{
                font-weight: 600;
                font-size: 16px;
                }
            }
            .dash__container{
                position: absolute;
                top: -5px;
                left: 61%;
            }
            .dot{
                position: relative;
                background:#D8D8D8; 
                box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.14);
                border-radius: 50%;
                height: 16px;
                width: 16px;
                margin: 0 auto 16px;
                &.active{
                	animation-name: fillCircle;
                    animation-duration: 1s;
                    animation-direction: alternate;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                    animation-delay: 0s;
                &.bg::before, &.bg1::before, &.bg2::before, &.bg3::before, &.bg4::before{
                    animation-name: fillBg;
                    animation-duration: 1s;
                    animation-direction: alternate;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                    animation-delay: 0s;

                    content: '';
                    position: absolute;
                    left: 0;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    top: 0;
                    transform: translate(-7px, -7px);
                    z-index: -1;
                  }
                }
            }
        }
    }


@keyframes fillCircle {
    0%    { background: #ffffff;}
    100%  { background: radial-gradient(50% 50% at 50% 50%, #ffb900 0%, #ea5b00 99.48%);}
  }

@keyframes fillBg {
    0%    { background:transparent}
    100%  { background: rgba(221,221,221,0.41);}
    
  }
`

const Dot = styled.div`
    .dot__container{
            .dash__container.active{
                svg{
                    line{
                        animation-name: movingBar1;
                        animation-duration: 1s;
                        animation-direction: alternate;
                        animation-timing-function: linear;
                        animation-fill-mode: forwards;
                        animation-delay: 0s;
                    }
                }
            }
    }

    @keyframes movingBar1 {
      from    { 
            stroke: #fff;
            stroke-dashoffset: 40;
      }
      to  { 
            stroke-dashoffset: 0;
            stroke: #EEAD46; 
      }
  }
`

