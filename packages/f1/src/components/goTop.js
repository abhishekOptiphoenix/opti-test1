import React,{useEffect, useState} from 'react'
import {IoIosArrowUp} from 'react-icons/io'

const opacity1={
    opacity: '1',
    transition:'all 0.3s ease-in-out',
    lineHeight: '0',
    padding: '0.7rem',
    borderRadius: '5px',
    border: 'none',
    background: "linear-gradient(140.53deg, #6800F9 15.74%, #A92FFB 78.32%)",
    color: '#ffffff',
    outline:'none',
    zIndex: 98,
}
const opacity0={
    opacity: '0'
}

const GoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility=()=>{
        if(window.pageYOffset > 300){
            setIsVisible(true)
        }else{
            setIsVisible(false);
        }
    }

    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    }

    useEffect(()=>{
        window.addEventListener('scroll', toggleVisibility);

        return ()=>{
            window.removeEventListener('scroll', toggleVisibility);
        }
    },[]);

    return (
        <div className='scroll_btn_container'>
            <button
            type='button'
            onClick={scrollToTop}
            className="scrollToTop"
            style={isVisible ? opacity1 : opacity0}
            >
            <IoIosArrowUp />
            </button>
        </div>
    )
}

export default GoTop
