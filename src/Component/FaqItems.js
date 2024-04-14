import React, { useEffect, useRef, useState } from 'react'

const FaqItem = ({faq}) => {

    const { question, answer } = faq;
    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();
    const handleToggle = () => {
        setClicked((prev) => !prev);
      };

      useEffect(() => {
        if(document.getElementById(question)) {
          document.getElementById(question).innerHTML = `${answer}`
        }
      }, [])


  return (
    <div className=" w-full bg-[#190b30] font-chakra">
    <p
    onClick={handleToggle}

      className="cursor-pointer pointer-events-auto flex justify-between items-center p-7 pl-10"
    >
      <span className=' text-lg'>{question}</span>
      <img src="../Arrow.svg" alt="arrow" className={` h-3 transition-all ${clicked?" -rotate-90":" rotate-90"} `} />
    </p>
    <div
    ref={contentEl}
    style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      className={` accordianBody overflow-hidden md:text-xl transition-[height] duration-300 text-base text-left   `}
    >
      <p id={`${question}`} className=" p-5 text-sm">
        
        
      </p>
    </div>
  </div>
  )
}

export default FaqItem
