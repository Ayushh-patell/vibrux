import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import "../App.css";
import { FaqData, FaqData2 } from "./FaqData";
import FaqItem from "./FaqItems";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Overlay() {
  const [Slide, setSlide] = useState(1);
  const [joined, setjoined] = useState(false);
  const appRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      document.querySelectorAll(".blurText").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 1 },
          {
            opacity: 0.5,
            scrollTrigger: {
              trigger: el,
              start: "top 10%",
              end: "top 0%",
              scrub: true,
            },
          }
        );
      });
      document.querySelectorAll(".blurTextI").forEach((el) => {
        gsap.to(el, {
          filter: "blur(0px)",
          scale: 1,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            end: "top 30%",
          },
        });
      });

      gsap.to(".SlideInner", {
        transform: window.innerWidth<1024?"translateX(-67%)":"translateX(-50%)",
        ease: "none",
        scrollTrigger: {
          trigger: ".Slide",
          start: "top 40%",
          end: window.innerWidth<1024?"1300% 20%":"800% 20%",
          scrub: true,
          pin: true,
        },
      });

      gsap.to(".SlideMainText1", {
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".First",
          start: "top 50%",
          end: "30% 10%",
          toggleActions: "play reverse play reverse",
          onEnter: () => gsap.to(".SlideBar", { width: "33%" }),
          onEnterBack: () => {
            gsap.to(".SlideBar", { width: "33%" });
            setSlide(1);
          },
        },
      });
      gsap.to(".SlideMainText2", {
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".First",
          start: window.innerWidth<1024?"20% 10%":"30% 10%",
          end: "63% 10%",
          toggleActions: "play reverse play reverse",
          onEnter: () => {
            gsap.to(".SlideBar", { width: "66%" });
            setSlide(2);
          },
          onEnterBack: () => {
            gsap.to(".SlideBar", { width: "66%" });
            setSlide(2);
          },
        },
      });
      gsap.to(".SlideMainText3", {
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".First",
          start: window.innerWidth<1024?"54% 10%":"63% 10%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          onEnter: () => {
            gsap.to(".SlideBar", { width: "100%" });
            setSlide(3);
          },
        },
      });
      gsap.to(".SlideText1", {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".First",
          start: "-10% 10%",
          end: "30% 10%",
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to(".SlideText2", {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".First",
          start: window.innerWidth<1024?"20% 10%":"30% 10%",
          end: "63% 10%",
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to(".SlideText3", {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".First",
          start: window.innerWidth<1024?"54% 10%":"63% 10%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });


      gsap.to(".slideLeftBars", {width:"100%", stagger:-0.1, scrollTrigger:{
        trigger:".slideLeftBars",
        start:"-50% 80%",
        end:"top 20%",
        scrub:true
      }})
      gsap.to(".slideLeftBarsF", {width:"100%", stagger:-0.1, scrollTrigger:{
        trigger:".slideLeftBarsF",
        start:"-50% 80%",
        end:"top 20%",
        scrub:true
      }})

      gsap.to(".slideRightBars", {scaleX:"0", stagger:-0.1, scrollTrigger:{
        trigger:".slideRightBars",
        start:"-50% 80%",
        end:"top 20%",
        scrub:true
      }})

      gsap.from(".SecImgL", {filter:"blur(3px)", opacity:0, x:-20, duration:0.2, scrollTrigger:{
        trigger:".SecImgL",
        start:"top 50%",
        end:"top 30%",
        
      }})

      gsap.from(".SecImgR", {filter:"blur(3px)", opacity:0, x:20, duration:0.2, scrollTrigger:{
        trigger:".SecImgR",
        start:"top 50%",
        end:"top 30%",
        
      }})
      gsap.to(".glowScreen", { opacity:0, duration:0.2, scrollTrigger:{
        trigger:"#newsletter",
        start:"top 100%",
        end:"top 70%",
        scrub:true
        
      }})
    },
    { scope: appRef }
  );


  const JoinHover = () => {
        gsap.to(".joinBG", {scaleY:0, duration:0.3, ease:"power.out"})
        gsap.to(".joinbar1", {top:'-6px', duration:0.3, ease:"power.out"})
        gsap.to(".joinbar2", {bottom:"-6px", duration:0.3, ease:"power.out"})
        gsap.to(".joinText", {color:"white", duration:0.3, ease:"power.out"})

}
const JoinHoverC = () => {
        gsap.to(".joinBG", {scaleY:1, duration:0.3, ease:"power.out"})
        gsap.to(".joinbar1", {top:'0px', duration:0.3, ease:"power.out"})
        gsap.to(".joinbar2", {bottom:"0px", duration:0.3, ease:"power.out"})
        gsap.to(".joinText", {color:"black", duration:0.3, ease:"power.out"})
}

const handleEmail = (e) => {
  let email = e.target.value
  let valid = document.getElementById("valid")
  let join = document.getElementById("join")
  if(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email)){
    valid.innerText = "";
    join.style.pointerEvents = "all"
  }
  else {
    valid.innerText = "Invalid Email"
    join.style.pointerEvents = "none"
  }

}
const handleJoin = () => {  
  let email = document.getElementById("email").value
  document.getElementById("joined").innerText = `Thank you for subscribing to our newsletter. We'll keep you posted on our status. Thank you for your support! ${email}`
  document.getElementById("newsletter").innerText = `THANKS FOR JOINING`
  setjoined(true)
}
  return (
    <div ref={appRef} id="App" className="App text-center relative z-10">
      <NavBar />
      <main className=" text-white w-screen overflow-hidden">
        <section className=" h-dvh w-full flex flex-col justify-center items-center font-chakra">
          <div className=" blurText">
            <div className=" blurTextI scale-125 blur-sm opacity-0">
              <h1 className=" max-w-6xl lg:text-8xl text-4xl px-10 text-center">
                DECENTRALIZING STRUCTURED FINANCE
              </h1>
              <p className=" my-3 lg:text-lg text-base tracking-widest">
                Predictable and Enhanced Returns at Your Fingertips
              </p>
              <Link to={"/market"}>
              <button className=" pointer-events-auto px-7 py-3 bg-[#0901eb] rounded-sm text-white group/btn hover:text-black font-semibold transition-[color] duration-100 ease-out tracking-[6px] my-5 relative">
                <span className=" relative z-10">LAUNCH APP</span>{" "}
                <div className=" transition-all duration-200 ease-[cubic-bezier(.19,1,.22,1)] absolute top-0 left-0 w-full h-full scale-y-0 bg-white group-hover/btn:scale-y-100"></div>
              </button>
              </Link>
            </div>
          </div>
        </section>

        <section className=" h-dvh w-full flex flex-col justify-center items-center font-chakra">
          <div className=" blurText">
            <div className=" blurTextI scale-125 blur-sm opacity-0">
              <h1 id="resource" className=" max-w-6xl lg:text-8xl text-4xl px-10 text-center">
                CHOOSE FIXED OR ENHANCED RETURNS
              </h1>
              <p className=" my-3 lg:text-lg text-base tracking-widest w-2/4 mx-auto">
                Our Interest Rate Products divide yield-bearing assets into
                vaults with varying levels of risk
              </p>
            </div>
          </div>
        </section>

        <section className=" h-dvh w-full flex justify-center items-center font-chakra">
          <div className=" blurText lg:w-1/2 lg:pl-[150px]">
            <div className=" blurTextI scale-125 blur-sm opacity-0 text-left lg:p-0 p-5">
              <h1 className=" max-w-6xl lg:text-8xl text-4xl lg:w-1/2">FIXED RETURNS</h1>
              <p className=" my-3 lg:text-lg text-base tracking-widestw-2/4 mx-auto">
                Select a fixed return option to obtain a predictable source of
                yield. Ideal for investors who value stability above anything
                else
              </p>

              <div className=" flex justify-start items-center group/link gap-5 pointer-events-auto">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="2"
                    height="2"
                    className=" fill-[#79fbf6] group-hover/link:fill-white"
                    transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 5 10)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    className=" fill-[#79fbf6] group-hover/link:fill-white"
                    transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 5 2)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    className=" fill-[#79fbf6] group-hover/link:fill-white"
                    transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 7 8)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    className=" fill-[#79fbf6] group-hover/link:fill-white"
                    transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 7 4)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    className=" fill-[#79fbf6] group-hover/link:fill-white"
                    transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 9 6)"
                  ></rect>
                </svg>
                <span className=" text-[#79fbf6] font-semibold group-hover/link:text-white transition-all hover:-translate-x-2 tracking-[6px] relative">
                  EXPLORE
                </span>
              </div>
            </div>
          </div>
          <div className=" lg:w-1/2"></div>
        </section>

        <section className=" h-dvh w-full flex justify-center items-center font-chakra">
          <div className=" lg:w-1/2"></div>
          <div className=" blurText lg:w-1/2 ">
            <div className=" blurTextI scale-125 blur-sm opacity-0 text-left lg:p-0 p-5">
              <h1 className=" max-w-6xl lg:text-8xl text-4xl lg:w-1/2">VARIABLE RETURNS</h1>
              <p className=" my-3 lg:text-lg text-base tracking-widest lg:w-1/2">
                Our variable return option offers amplified returns through
                leveraged exposure to the performance of the underlying assets
              </p>

              <div className=" flex justify-start items-center group/link gap-5 pointer-events-auto">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="2"
                    height="2"
                    className=" fill-[#79fbf6] group-hover/link:fill-white"
                    transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 5 10)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    className=" fill-[#79fbf6] group-hover/link:fill-white"
                    transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 5 2)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    className=" fill-[#79fbf6] group-hover/link:fill-white"
                    transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 7 8)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    className=" fill-[#79fbf6] group-hover/link:fill-white"
                    transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 7 4)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    className=" fill-[#79fbf6] group-hover/link:fill-white"
                    transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 9 6)"
                  ></rect>
                </svg>
                <span className=" text-[#79fbf6] font-semibold group-hover/link:text-white transition-all hover:-translate-x-2 tracking-[6px] relative">
                  EXPLORE
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className=" First h-[300vh] w-full flex flex-col gap-5 justify-start items-center font-chakra">
          <div className=" Slide w-full">
            <div className=" w-full flex justify-center items-center flex-col text-xl">
              <p>0{Slide} / 03</p>
              <div className=" my-2 h-1 w-20 rounded-full relative bg-[#80fbf72e]">
                <div className="SlideBar w-[33%] bg-[#80fbf7] rounded-full h-full absolute top-0 left-0"></div>
              </div>
            </div>
            <div className="SlideInner flex justify-between lg:w-auto w-[300vw] items-center lg:gap-[250px] lg:translate-x-[33%]">

              <div className=" lg:w-auto w-screen">
                <h5 className=" lg:text-8xl text-4xl opacity-30 SlideMainText1">
                  STRUCTURE
                </h5>
                <p className=" opacity-0 scale-125 blur-sm SlideText1">
                  Custimize your own interest-rate products
                </p>
              </div>

              <div className=" lg:w-auto w-screen">
                <h5 className=" lg:text-8xl text-4xl opacity-30 SlideMainText2">DEPOSIT</h5>
                <p className=" opacity-0 scale-125 blur-sm SlideText2">
                  Deploy assists into a vault that fits your needs
                </p>
              </div>

              <div className=" lg:w-auto w-screen">
                <h5 className=" lg:text-8xl text-4xl opacity-30 SlideMainText3">EARN</h5>
                <p className=" opacity-0 scale-125 blur-sm SlideText3">
                  Sit back and let your investment and accure yeild
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className=" h-dvh w-full flex flex-col justify-center items-center font-chakra">
          <div className=" blurText">
            <div className=" blurTextI scale-125 blur-sm opacity-0">
              <h1 id="customize" className=" max-w-6xl lg:text-8xl text-4xl px-10 text-center">
                CUSTOMIZE YOUR OWN INTEREST-RATE PRODUCTS
              </h1>
              <p className=" my-3 lg:text-lg text-base tracking-widest lg:w-2/4 mx-auto">
                Permissionlessly create your own interest-rate products using
                our smart product factory
              </p>
              <Link to={"/market"}>
              <button className=" px-7 py-3 bg-[#0901eb] rounded-sm text-white group/btn hover:text-black font-semibold transition-[color] duration-100 ease-out tracking-[6px] my-5 relative">
                <span className=" relative z-10">LAUNCH APP</span>{" "}
                <div className=" transition-all duration-200 ease-[cubic-bezier(.19,1,.22,1)] absolute top-0 left-0 w-full h-full scale-y-0 bg-white group-hover/btn:scale-y-100"></div>
              </button>
              </Link>
            </div>
          </div>
        </section>

        <section className=" flex flex-col justify-start items-end">
          <div className=" slideLeftBars h-20 w-0 bg-[#020042]"></div>
          <div className=" slideLeftBars h-20 w-0 bg-[#020042]"></div>
          <div className=" slideLeftBars h-20 w-0 bg-[#020042]"></div>
          <div className=" w-full bg-[#020042]">


            <h4 className="blurTextI blur-[2px] scale-125 opacity-0 lg:text-8xl text-4xl mt-16 my-10 pt-20 font-chakra">F.A.Q.</h4>

            <div className=" w-full flex lg:flex-row flex-col justify-between items-start pb-32">
              <div className=" lg:w-1/2 w-full bg-[#45404d] p-px lg:pb-px flex flex-col justify-center items-center gap-[1px]">
               {FaqData.map((faq,i) => (
                <FaqItem key={i} faq={faq}/>
               ))}
              </div>
              <div className=" lg:w-1/2 w-full bg-[#45404d] p-px lg:pl-0 flex flex-col justify-center items-center gap-[1px]">
               {FaqData2.map((faq,i) => (
                <FaqItem key={i} faq={faq}/>
               ))}
              </div>
            </div>

          </div>
        </section>

          <div className=" flex flex-col justify-end items-end bg-[#020042]" aria-hidden>
          <div className=" slideLeftBarsF origin-right w-0 scale-100 h-20 bg-[#111]"></div>
          <div className=" slideLeftBarsF origin-right w-0 scale-100 h-20 bg-[#111]"></div>
          <div className=" slideLeftBarsF origin-right w-0 scale-100 h-20 bg-[#111]"></div>
          </div>
        <footer className=" relative lg:pt-[250px] px-4 pb-4 bg-[#111] font-chakra">
          <h4 id="newsletter" className=" font-chakra lg:text-8xl text-4xl mb-10">NEWSLETTER SIGNUP</h4>
          <p id="joined"></p>
          {!joined &&
          <form onSubmit={(e) => {e.preventDefault(); handleJoin()}} className=" flex lg:gap-2 gap-5 lg:flex-row flex-col justify-between items-center">
            <input required type="text" placeholder="YOUR NAME" className=" font-chakra text-xl text-white border-b-2 border-gray-600 bg-transparent px-5 py-2 lg:w-[37%] w-full outline-none" />
            <div className=" lg:w-[37%] w-full relative">
            <input required type="email" id="email" onChange={handleEmail} placeholder="E-MAIL ADDRESS" className=" font-chakra text-xl text-white border-b-2 border-gray-600 bg-transparent px-5 py-2 w-full outline-none" />
               <p id="valid" className=" absolute lg:-bottom-10 -bottom-6 left-2 text-red-600"></p>
            </div>

            <button id="join" type="submit" onMouseEnter={JoinHover} onMouseLeave={JoinHoverC} className=' origin-center h-full lg:w-[25%] w-full px-14 py-5 relative rounded-sm flex justify-center items-center gap-4 text-sm font-chakra font-semibold'>
             <div className=' joinBG absolute bg-[#ffffff] top-0 left-0 w-full h-full rounded-sm'></div>
             <div className=' joinbar1 absolute bg-[#ffffff] top-0 left-0 w-full h-[2px] rounded-sm'></div>
             <div className=' joinbar2 absolute bg-[#ffffff] bottom-0 left-0 w-full h-[2px] rounded-sm'></div>
                <span className='joinText relative z-10 tracking-[8px] text-black'>JOIN</span>

             </button>
          </form>
          }
          <p className=" lg:hidden text-gray-500 my-5">Struct finance 2023</p>


          <div className=" my-32 lg:mt-48 mt-12 grid lg:grid-cols-3 grid-cols-2 lg:gap-7">
            <div className=" lg:flex hidden flex-col justify-between items-start">
              <p className=" text-gray-500">Struct finance 2023</p>
              <p onClick={() => {window.scrollTo({top:0, behavior:"smooth"})}} className=" text-white tracking-[6px] pointer-events-auto cursor-pointer">BACK TO TOP</p>
            </div>

            <div> 
            <p className=' text-white/30 tracking-[5px] mb-5 text-left'>PRODUCT</p>
            <div className=' w-full overflow-x-hidden text-left'>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> FAQ</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Docs</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Litepaper</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Proposal</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Feedback</div>
            </div>
            </div>

            <div> 
            <p className=' text-white/30 tracking-[5px] mb-5 text-left'>SOCIALS</p>
            <div className=' w-full overflow-x-hidden text-left'>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Discord</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Twitter</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Telegram</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Linkedin</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Medium</div>

            </div>
            </div>
          </div>
          <p onClick={() => {window.scrollTo({top:0, behavior:"smooth"})}} className=" text-white tracking-[6px] pointer-events-auto cursor-pointer lg:hidden">BACK TO TOP</p>

        </footer>
      </main>

{/* GLOW EFFECT */}
      <div id="glowMouse" aria-hidden className=" lg:block hidden pointer-events-none skew-x-[-15deg] fixed h-screen w-[70vh] bg-gradient-to-r from-transparent via-white to-transparent -translate-x-1/2 -translate-y-1/2 opacity-5 blur-3xl "></div>
      <div aria-hidden className=" glowScreen pointer-events-none w-screen h-screen fixed top-0 left-0 bg-[#9e00c613] blur-lg"></div>
    </div>
  );
}

export default Overlay;
