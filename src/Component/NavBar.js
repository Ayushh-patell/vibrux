import gsap from 'gsap'
import React, { useState } from 'react'


const NavBar = () => {
    gsap.registerPlugin()
    const [NavOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        if(NavOpen) {
            setNavOpen(false)
            gsap.set("body", { overflow:"auto"})
            gsap.to(".menu", { height:"1rem", duration:0.1})
            gsap.to(".MainNav", { backgroundColor:"#11111100", duration:0.5, delay:0.1})
            gsap.to(".MainNav", { height:"auto", duration:0.5})
            gsap.to(".sideArr", {x:0, opacity:1, width:14, duration:0.1})
            gsap.to(".topArr", {opacity:0})
            gsap.to(".bottomArr", {opacity:0})

        }
        else {
            setNavOpen(true)
            gsap.set("body", { overflow:"hidden"})
            gsap.to(".menu", { height:"1px", duration:0.1})
            gsap.to(".MainNav", { backgroundColor:"#111", duration:0.2})
            gsap.to(".MainNav", { height:"100vh", duration:0.5})
            gsap.to(".sideArr", {x:20, opacity:0, width:0, duration:0.1})
            gsap.to(".topArr", {opacity:1})
            gsap.to(".bottomArr", {opacity:1})
        }
    }
    const NavHover = () => {
        if(!NavOpen) {gsap.to(".menu", { height:"1.5rem", duration:0.1})}
    }
    const NavHoverC = () => {
        if(!NavOpen) {gsap.to(".menu", { height:"1rem", duration:0.1})}
    }

    const LaunchHover = () => {
        if(!NavOpen) {
            gsap.to(".launchBG", {scaleY:0, duration:0.3, ease:"power.out"})
            gsap.to(".launchbar1", {top:'-6px', duration:0.3, ease:"power.out"})
            gsap.to(".launchbar2", {bottom:"-6px", duration:0.3, ease:"power.out"})
            gsap.to(".sideArr", {left:"6px", duration:0.3, ease:"power.out"})
        }
        else {
            gsap.to(".topArr", {top:"46%"})
            gsap.to(".bottomArr", {bottom:"46%"})
        }
    }
    const LaunchHoverC = () => {
        if(!NavOpen) {
            gsap.to(".launchBG", {scaleY:1, duration:0.3, ease:"power.out"})
            gsap.to(".launchbar1", {top:'0px', duration:0.3, ease:"power.out"})
            gsap.to(".launchbar2", {bottom:"0px", duration:0.3, ease:"power.out"})
            gsap.to(".sideArr", {left:"0px", duration:0.3, ease:"power.out"})

        }
        else {
            gsap.to(".topArr", {top:"45%"})
            gsap.to(".bottomArr", {bottom:"45%"})
        }
    }


  return (
    <nav className=' MainNav fixed z-50 top-0 left-0 w-full flex justify-between px-5 pr-3 py-1 items-start text-white overflow-hidden'>
      <img src="../logo.svg" alt="Struct Logo" className=' h-5 mt-6' />
      <div className=' flex  justify-end items-start w-[30%] h-full gap-3'>
        <div onClick={toggleNav} className='pointer-events-auto flex justify-center cursor-pointer items-center h-8 py-9'>
        <div onMouseEnter={NavHover} onMouseLeave={NavHoverC} title='Open Menu' className={` menu w-14 h-4 flex flex-col justify-between items-center  transition-[height] duration-200 ease-out`}>
            <div aria-hidden className=' bg-white h-px w-full'></div>
            <div aria-hidden className=' bg-white h-px w-full'></div>
        </div>
        </div>

        <div className=' h-full w-[100%] p-2 flex justify-center items-center'>
             <button onMouseEnter={LaunchHover} onMouseLeave={LaunchHoverC} className='pointer-events-auto origin-center h-full w-full px-14 py-5 relative rounded-sm flex justify-center items-center gap-4 text-sm font-chakra font-semibold'>
             <div className=' launchBG absolute bg-[#9656ff] top-0 left-0 w-full h-full rounded-sm'></div>
             <div className=' launchbar1 absolute bg-[#9656ff] top-0 left-0 w-full h-[2px] rounded-sm'></div>
             <div className=' launchbar2 absolute bg-[#9656ff] bottom-0 left-0 w-full h-[2px] rounded-sm'></div>
                <img src="../Arrow.svg" alt=" arrow" className=' relative z-10 h-3 inline-block mr-2 sideArr' />
                <img src="../Arrow.svg" alt=" arrow" className=' absolute top-[45%] opacity-0 left-1/2 -translate-x-1/2 z-10 h-3 block mr-2 rotate-90 topArr' />
                <span className=' relative z-10 tracking-[8px]'>LAUNCH</span>
                <span className=' relative z-10 tracking-[8px]'>APP</span>
                <img src="../Arrow.svg" alt=" arrow" className=' absolute bottom-[45%] opacity-0 left-1/2 -translate-x-1/2 z-10 h-3 block mr-2 -rotate-90 bottomArr' />

             </button>
        </div>
      </div>

      <div className=' absolute left-3 top-[5.4rem] w-[73%] h-[85%] overflow-y-scroll scrollerHidden text-left pt-5 pointer-events-auto'>
        <div className=' border-b border-gray-800 py-3 px-5'>
            <h4 className=' text-9xl font-chakra menuText'>RESOURCES</h4>
        </div>
        <div className=' border-b border-gray-800 py-3 px-5'>
            <h4 className=' text-9xl font-chakra menuText'>CUSTOMIZE</h4>
        </div>
        <div className=' border-b border-gray-800 py-3 px-5'>
            <h4 className=' text-9xl font-chakra menuText'>NEWSLETTER</h4>
        </div>
        <div className=' border-b border-gray-800 py-3 px-5'>
            <h4 className=' text-9xl font-chakra menuText'>FEEDBACK</h4>
        </div>

        {/* NAV FOOTER */}
        <div className=' w-full grid grid-cols-2 gap-2 font-chakra my-10'>
            <div> 
            <p className=' text-white/30 tracking-[5px] mb-5'>PRODUCT</p>
            <div className=' w-full overflow-x-hidden text-left'>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> FAQ</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Docs</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Litepaper</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Proposal</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Feedback</div>
            </div>
            </div>
            <div> 
            <p className=' text-white/30 tracking-[5px] mb-5'>SOCIALS</p>
            <div className=' w-full overflow-x-hidden text-left'>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Discord</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Twitter</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Telegram</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Linkedin</div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Medium</div>

            </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
