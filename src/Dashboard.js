import React from 'react'
import DashboardCard from './Component/DashboardCard'
import { DashboardData } from './Component/DashboardData'

const Dashboard = () => {
  return (
    <>
      <header>
        <nav className=' bg-[#111] flex justify-between items-center px-6 py-5 font-chakra text-white'>
            <div className=' flex justify-between items-center gap-16 py-2'>
                <img src="../logo.svg" alt="Struct logo" className=' h-5 pr-5' />
                <div className=' flex justify-between items-center text-sm gap-24 text-gray-400 '>
                    <p className=' cursor-pointer hover:text-white transition-all duration-200'>Dashboard</p>
                    <p className=' cursor-pointer text-white'>Markets</p>
                    <p className=' cursor-pointer hover:text-white transition-all duration-200'>Leaderboard</p>
                </div>
            </div>

            <div className=' relative flex items-center'>
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
        </nav>
      </header>
      <main className=' bg-[#111] min-h-screen px-5 py-16 font-chakra text-white'>
        <p className=' tracking-widest text-left text-4xl my-2'>Markets</p>
        <p className=' text-left text-gray-400'>TYI: <span className=' pl-2'>$8,344,463.30</span></p>

{/* FILTER SELECTION */}
        <div className=' w-full flex justify-between items-center'>
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
{/* CARDS */}
        <div className=' grid grid-cols-4 gap-4 my-7'>
        {DashboardData.map((data,i) => (
            <DashboardCard key={i} data={data} />
        ))}
        </div>
      </main>
      <footer className=" relative pt-32 px-4 pb-4 bg-[#111] text-white font-chakra">

          <div className=" my-32 mt-48 grid grid-cols-3 lg:gap-7">

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

            <div> 
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
