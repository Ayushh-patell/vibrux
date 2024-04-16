import React, { useState } from 'react'
import DashboardCard from './Component/DashboardCard'
import { DashboardData } from './Component/DashboardData'
import gsap from 'gsap'

const Dashboard = () => {
    const [open, setopen] = useState(0)
    const [NavOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        if(NavOpen) {
            setNavOpen(false)
            gsap.set("body", { overflow:"auto"})
            gsap.to(".menu", { height:"1rem", duration:0.1})
            gsap.to(".mobileNav", { top:"-999px", duration:0.5, ease:"power1.out"})
            
            
        }
        else {
            setNavOpen(true)
            gsap.set("body", { overflow:"hidden"})
            gsap.to(".menu", { height:"1px", duration:0.1})
            gsap.to(".mobileNav", { top:"120%", duration:0.5, ease:"power1.in"})

        }
    }
    const NavHover = () => {
        if(!NavOpen) {gsap.to(".menu", { height:"1.5rem", duration:0.1})}
    }
    const NavHoverC = () => {
        if(!NavOpen) {gsap.to(".menu", { height:"1rem", duration:0.1})}
    }
  return (
    <>
      <header>
        <nav className=' bg-[#111] relative flex justify-between items-center lg:px-6 px-3 lg:py-5 py-2 font-chakra text-white'>
            <div className=' w-full flex justify-between items-center lg:gap-16 gap-3 py-2'>
                <img src="../logo.svg" alt="Struct logo" className=' lg:h-5 h-3 pr-5' />
                <div className=' lg:flex hidden justify-between items-center text-sm gap-24 text-gray-400 '>
                    <p className=' cursor-pointer hover:text-white transition-all duration-200'>Dashboard</p>
                    <p className=' cursor-pointer text-white'>Markets</p>
                    <p className=' cursor-pointer hover:text-white transition-all duration-200'>Leaderboard</p>
                </div>

<div className=' flex justify-center items-center gap-2'>
<div onClick={toggleNav} className='pointer-events-auto flex justify-center cursor-pointer items-center h-8 py-9'>
        <div onMouseEnter={NavHover} onMouseLeave={NavHoverC} title='Open Menu' className={` menu w-14 h-4 flex flex-col justify-between items-center  transition-[height] duration-200 ease-out`}>
            <div aria-hidden className=' bg-white h-px w-full'></div>
            <div aria-hidden className=' bg-white h-px w-full'></div>
        </div>
        </div>
        <button className=' my-2 border border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg'>Connect</button>
</div>

                
            </div>

            <div className=' relative lg:flex hidden items-center'>
                <p className=' mr-4 py-2'>:</p>
                <div className=' group/more mr-10 relative h-14 px-2 text-gray-400 hover:text-white transition-all duration-200 flex justify-center items-center'><span>More</span>
                <div className=' group-hover/more:opacity-100 group-hover/more:pointer-events-auto opacity-0 pointer-events-none transition-all absolute top-full left-1/2 -translate-x-1/2 border border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg shadow-inner'>
                    <ul>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Docs</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Community</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Feedback</li>
                        
                    </ul>
                </div>
                </div>
                <button className=' my-2 border border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg'>Connect</button>
            </div>


            <div className='mobileNav z-50 bg-[#111] w-[90vw] text-[#9c9a9e] absolute -top-[999px] left-1/2 -translate-x-1/2' style={{boxShadow:"0 24px 40px rgba(0,0,0,.35)"}}>
            <p className=' text-3xl cursor-pointer hover:text-white transition-all duration-200'>Dashboard</p>
            <p className=' text-3xl cursor-pointer text-white'>Markets</p>
            <p className=' text-3xl cursor-pointer hover:text-white transition-all duration-200'>Leaderboard</p>
            <div aria-hidden className=' mt-20 h-[2px] w-10 bg-[#9c9a9e] rounded-full mb-5'/>
            <ul>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Docs</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Community</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Feedback</li>
                        
                    </ul>
            </div>
        </nav>
      </header>
      <main className=' bg-[#111] min-h-screen px-5 py-16 font-chakra text-white'>
        <p className=' tracking-widest lg:text-4xl text-3xl my-2 lg:text-left text-center'>Markets</p>
        <p className=' text-left text-gray-400'>TYI: <span className=' pl-2'>$8,344,463.30</span></p>

{/* FILTER SELECTION */}
        <div className=' w-full lg:flex hidden justify-between items-center'>
            <div className=' mt-28'>
                <p className=' text-gray-400 text-lg my-2'>Sort / Platforms</p>
                <div className=' flex justify-start items-center gap-2'>
                    <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                        <img src="../Filter.svg" alt="filter" className=' h-5' />
                    </div>
                    <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                        <img src="../gmx.svg" alt="gmx" className=' h-5' />
                        GMX
                    </div>
                    <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                        <img src="../traderjoe.svg" alt="trader joe" className=' h-5' />
                        TraderJoe
                    </div>
                </div>
            </div>
            <div className=' mt-28'>
                <p className=' text-gray-400 text-lg my-2 text-right'>Tokens</p>
                <div className=' flex justify-start items-center gap-2'>
                    <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                        <img src="../btc.svg" alt="btc" className=' h-5' />
                        BTC.B
                    </div>
                    <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                        <img src="../eth.svg" alt="ETH" className=' h-5' />
                        wETH
                    </div>
                    <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                        <img src="../avax.svg" alt="avax" className=' h-5' />
                        AVAX
                    </div>
                    <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                        <img src="../usdc.svg" alt="usdc" className=' h-5' />
                        USDC
                    </div>
                    <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                        <img src="../savax.svg" alt="savax" className=' h-5' />
                        sAVAX
                    </div>
                    <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                        <img src="../wbtc.svg" alt="wbtc" className=' h-5' />
                        wBTC
                    </div>
                    <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                        <img src="../eurc.svg" alt="eurc" className=' h-5' />
                        EURO
                    </div>
                </div>
            </div>
        </div>

        {/* MOBILE FILTER SECTION */}
        <div className=' w-full my-4 space-y-2'>
            <div onClick={() => {open===1?setopen(0):setopen(1)}} className=' relative w-full border-l-2 border-[#9c9a9e] bg-[#222] text-xs font-medium rounded py-2 px-4 flex justify-between items-center'>
                <p>TVL</p>
                <img src="../Arrow.svg" alt=" arrow" className={` h-2 ${open===1?" -rotate-90":" rotate-90"} transition-all duration-150`} />

                <div className={` absolute top-[120%] z-30 left-0 w-full bg-[#222] border-[0.5px] border-[#3a393d] rounded p-4 ${open===1?"block":" hidden"}`}>
                    <ul className=' space-y-3 '>
                        <li>TVL</li>
                        <li>Highest Fixed</li>
                        <li>Highest Variable</li>
                    </ul>
                </div>
            </div>

<div className='relative'>
<div onClick={() => {open===2?setopen(0):setopen(2)}} className='  w-full border-l-2 border-[#9c9a9e] bg-[#222] text-xs font-medium rounded py-2 px-4 flex justify-between items-center'>
                <p>Filter By</p>
                <img src="../Arrow.svg" alt=" arrow" className={` h-2 ${open===2?" -rotate-90":" rotate-90"} transition-all duration-150`} />


            </div>
            <div className={` absolute top-[120%] z-30 left-0 w-full bg-[#222] border-[0.5px] border-[#3a393d] rounded p-4 ${open===2?"block":" hidden"}`}>
                    <h6 className='  text-gray-400 text-sm tracking-wider w-full border-b pb-4 border-gray-600 mb-3'>TOKENS</h6>
                    <p className=' my-4 text-xs'>Deselect All</p>
                    <form className=' space-y-4 flex flex-col justify-start items-start text-sm'>
                        <label htmlFor="btcb"> <input type="checkbox"  className='regular-checkbox' id='btcb' /> <label htmlFor="btcb"></label> BTC.B</label>
                        <label htmlFor="weth"> <input type="checkbox"  className='regular-checkbox' id='weth' /> <label htmlFor="weth"></label> wETH</label>
                        <label htmlFor="avax"> <input type="checkbox"  className='regular-checkbox' id='avax' /> <label htmlFor="avax"></label> AVAX</label>
                        <label htmlFor="usdc"> <input type="checkbox"  className='regular-checkbox' id='usdc' /> <label htmlFor="usdc"></label> USDC</label>
                        <label htmlFor="savax"> <input type="checkbox" className='regular-checkbox'  id='savax' /> <label htmlFor="savax"></label> sAVAX</label>
                        <label htmlFor="wbtc"> <input type="checkbox"  className='regular-checkbox' id='wbtc' /> <label htmlFor="wbtc"></label> wBTC</label>
                        <label htmlFor="eurc"> <input type="checkbox"  className='regular-checkbox' id='eurc' /> <label htmlFor="eurc"></label> EURC</label>
                    </form>

                    <h6 className='  text-gray-400 text-sm tracking-wider w-full border-b pb-4 border-gray-600 mb-3 mt-7'>PLATFORMS</h6>
                    <form className=' space-y-4 flex flex-col justify-start items-start text-sm'>
                        <label htmlFor="gmx"> <input type="checkbox"  className='regular-checkbox' id='gmx' /> <label htmlFor="gmx"></label> GMX</label>
                        <label htmlFor="traderjoe"> <input type="checkbox"  className='regular-checkbox' id='traderjoe' /> <label htmlFor="traderjoe"></label> TraderJoe</label>

                    </form>

                </div>
</div>
        </div>
{/* CARDS */}
        <div className=' grid lg:grid-cols-4 grid-cols-1 gap-4 my-7'>
        {DashboardData.map((data,i) => (
            <DashboardCard key={i} data={data} />
        ))}
        </div>
      </main>
      <footer className=" relative lg:pt-32 pt-5 px-4 pb-4 bg-[#111] text-white font-chakra">

          <div className=" my-32 lg:mt-48 grid lg:grid-cols-3 grid-cols-2 lg:gap-7 gap-3">

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

            <div className=' lg:col-span-1 col-span-2'> 
            <p className=' text-white/30 tracking-[5px] mb-5 text-left'>STATUS</p>
<div className=' grid grid-cols-2 max-w-[250px] place-content-start place-items-center justify-items-start'>
<p>Values</p>
<p className=' flex gap-7 justify-center items-center'> <span className=' h-3 w-3 rounded-full bg-green-400 mx-5'></span> <span className=' text-gray-400 text-sm'>11:06:04</span></p>
<p>Prices</p>
<p className=' flex gap-7 justify-center items-center'> <span className=' h-3 w-3 rounded-full bg-green-400 mx-5'></span> <span className=' text-gray-400 text-sm'>11:06:03</span></p>
<p className='text-gray-400 font-bold'>Auto Pools</p>
<p className=' flex gap-7 justify-center items-center font-bold justify-self-end my-4'> <span className=' text-gray-400 text-sm'>Latest</span></p>
<p>BTC.B / AVAX</p>
<p className=' flex gap-7 justify-center items-center'> <span className=' h-3 w-3 rounded-full bg-green-400 mx-5'></span> <span className=' text-gray-400 text-sm'>11:06:03</span></p>
<p>sAVAX / AVAX</p>
<p className=' flex gap-7 justify-center items-center'> <span className=' h-3 w-3 rounded-full bg-green-400 mx-5'></span> <span className=' text-gray-400 text-sm'>11:06:03</span></p>
<p>wETH / AVAX</p>
<p className=' flex gap-7 justify-center items-center'> <span className=' h-3 w-3 rounded-full bg-green-400 mx-5'></span> <span className=' text-gray-400 text-sm'>11:06:03</span></p>
<p>ABTC.E / BTC.B</p>
<p className=' flex gap-7 justify-center items-center'> <span className=' h-3 w-3 rounded-full bg-green-400 mx-5'></span> <span className=' text-gray-400 text-sm'>11:06:03</span></p>
<p>EURC / USDC</p>
<p className=' flex gap-7 justify-center items-center'> <span className=' h-3 w-3 rounded-full bg-green-400 mx-5'></span> <span className=' text-gray-400 text-sm'>11:06:03</span></p>
<p>AVAX / USDC</p>
<p className=' flex gap-7 justify-center items-center'> <span className=' h-3 w-3 rounded-full bg-green-400 mx-5'></span> <span className=' text-gray-400 text-sm'>11:06:03</span></p>

</div>
            </div>


          </div>
        </footer>
    </>
  )
}

export default Dashboard
