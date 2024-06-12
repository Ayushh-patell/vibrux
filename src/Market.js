import { useConnectWallet } from '@web3-onboard/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardCard from './Component/DashboardCard'
import { DashboardData } from './Component/DashboardData'
import { leaderboardData } from './Component/LeaderboardData'
const ethers = require('ethers')







const Market = () => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

        //      WALLET CONFIG 
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

    // create an ethers provider
    let ethersProvider
  
    if (wallet) {
      // if using ethers v6 this is:
      ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
      // ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
      console.log(wallet);
    }


    const [open, setopen] = useState(0)
    const [NavOpen, setNavOpen] = useState(false)
    const [selectedTokens, setselectedTokens] = useState([])
    const [selectedCards, setselectedCards] = useState(DashboardData)

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
    const handleTokens = (token) => {
        if(selectedTokens.some((item) => (item===token))) {
            let tokenArr = selectedTokens.filter((item) => (item!==token))
         setselectedTokens(tokenArr)   
        }
        else {
            let tokenArr = [...selectedTokens, token]
            setselectedTokens(tokenArr)
        }
        console.log(selectedTokens);
    }

    useEffect(() => {
        if(selectedTokens.length===0) {
            setselectedCards(DashboardData)
        }
        else {
            let cardsArr = DashboardData.filter((data) => (
                selectedTokens.every((token) => {
                    return data.tokens[0]===token || data.tokens[1]===token
                })
            ))
            setselectedCards(cardsArr)
        }
    },[selectedTokens])

    const handleDeSelect = () => {
        setselectedTokens([])
        document.querySelectorAll(".regular-checkbox").forEach(box => box.checked = false)
    }          

  return (
    <>
      <header>
        <nav className=' bg-[#111] relative flex justify-between items-center lg:px-6 px-3 lg:py-5 py-2 font-chakra text-white'>
            <div className=' w-full flex lg:justify-start justify-between items-center lg:gap-16 gap-3 py-2'>
                <div className=' bg-black mix-blend-lighten'>
                <img src="../vibrux.png" alt="vibrux logo" className=' lg:h-7 h-5' />
                </div>
                <div className=' lg:flex hidden justify-between items-center text-sm gap-24 text-gray-400 '>
                <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/dashboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Dashboard</p></Link>
                    <p className=' cursor-pointer text-white'>Markets</p>
                    <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/leaderboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Leaderboard</p></Link>
                </div>

<div className=' lg:hidden flex justify-center items-center gap-2'>
<div onClick={toggleNav} className='pointer-events-auto flex justify-center cursor-pointer items-center h-8 py-9'>
        <div onMouseEnter={NavHover} onMouseLeave={NavHoverC} title='Open Menu' className={` menu w-14 h-4 flex flex-col justify-between items-center  transition-[height] duration-200 ease-out`}>
            <div aria-hidden className=' bg-white h-px w-full'></div>
            <div aria-hidden className=' bg-white h-px w-full'></div>
        </div>
        </div>
        <button  disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())} title={`${wallet?"Disconnect":"Connect"}`} className=' my-2 border border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg flex justify-center items-center gap-2'>
        {connecting ? 'connecting' : wallet ? <>
            <img src={wallet.icon} alt={wallet.label} />
            <p>{wallet.accounts[0].address.slice(0,5)}..${wallet.accounts[0].address.slice(38)}</p>
        </> : 'Connect'}
      </button>
</div>
            {/* <div className=' rounded-full w-5 aspect-square border border-white bg-blue-700'></div>
            <p>f34r2...414</p> */}

                
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
                <button  disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())} title={`${wallet?"Disconnect":"Connect"}`} className=' my-2 border border-[#FFFFFF21] bg-[#212121] px-4 py-2 rounded-lg flex justify-center items-center gap-1'>
        {connecting ? 'connecting' : wallet ? <>
            <img src={wallet.icon} alt={wallet.label} style={{height:"20px"}} />
            <p className=' whitespace-nowrap text-xs'>{wallet.accounts[0].address.slice(0,4)}..${wallet.accounts[0].address.slice(39)}</p>
        </> : 'Connect'}
      </button>
                {wallet && <button className='border mx-2 border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg flex justify-center items-center'> <img src="../bell.svg" alt="notification" className=' w-[50px] aspect-square'/></button>}
            </div>


            <div className='mobileNav z-50 bg-[#111] w-[90vw] text-[#9c9a9e] absolute -top-[999px] left-1/2 -translate-x-1/2' style={{boxShadow:"0 24px 40px rgba(0,0,0,.35)"}}>
            <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/dashboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Dashboard</p></Link>
            <p className=' text-3xl cursor-pointer text-white'>Markets</p>
            <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/leaderboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Leaderboard</p></Link>
            <div aria-hidden className=' mt-20 h-[2px] w-10 bg-[#9c9a9e] rounded-full mb-5'/>
            <ul>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Docs</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Community</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Feedback</li>
                        
                    </ul>
            </div>
        </nav>
      </header>
      <main className=' bg-[#111] px-5 py-16 font-chakra text-white'>
        <p className=' tracking-widest lg:text-4xl text-3xl my-2 lg:text-left text-center'>Markets</p>
        <p className=' text-left text-gray-400'>TVI: <span className=' pl-2'>{formatter.format(leaderboardData.map((data)=> parseInt(data.invested)).reduce((tvl, curr)=> tvl += curr))}</span></p>

{/* FILTER SELECTION */}
        <div className=' w-full lg:flex hidden justify-between items-center'>
            <div className=' mt-28'>
                <p className=' text-gray-400 text-lg my-2'>Sort</p>
                <div className=' flex justify-start items-center gap-2'>
                    <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                        <img src="../Filter.svg" alt="filter" className=' h-5' />
                    </div>
                </div>
            </div>
            <div className=' mt-28'>
                <p className=' text-gray-400 text-lg my-2 text-right'>Tokens</p>
                <div className=' flex justify-start items-center gap-2'>
                    <div onClick={() => {handleTokens("BTC.B")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="BTC.B"))? " bg-white/5":""}`}>
                        <img src="../btc.svg" alt="btc" className=' h-5' />
                        BTC.B
                    </div>
                    <div onClick={() => {handleTokens("wETH")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="wETH"))? " bg-white/5":""}`}>
                        <img src="../eth.svg" alt="ETH" className=' h-5' />
                        wETH
                    </div>
                    <div onClick={() => {handleTokens("USDT")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="USDT"))? " bg-white/5":""}`}>
                        <img src="../usdt.svg" alt="usdt" className=' h-5' />
                        USDT
                    </div>
                    <div onClick={() => {handleTokens("USDC")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="USDC"))? " bg-white/5":""}`}>
                        <img src="../usdc.svg" alt="usdc" className=' h-5' />
                        USDC
                    </div>
                    <div onClick={() => {handleTokens("sAVAX")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="sAVAX"))? " bg-white/5":""}`}>
                        <img src="../savax.svg" alt="savax" className=' h-5' />
                        sAVAX
                    </div>
                    <div onClick={() => {handleTokens("wBTC")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="wBTC"))? " bg-white/5":""}`}>
                        <img src="../wbtc.svg" alt="wbtc" className=' h-5' />
                        wBTC
                    </div>
                    <div onClick={() => {handleTokens("EURC")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="EURC"))? " bg-white/5":""}`}>
                        <img src="../eurc.svg" alt="eurc" className=' h-5' />
                        EURC
                    </div>
                </div>
            </div>
        </div>

        {/* MOBILE FILTER SECTION */}
        <div className='lg:hidden w-full my-4 space-y-2'>
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
                    <p onClick={handleDeSelect} className=' cursor-pointer my-4 text-xs'>Deselect All</p>
                    <form className=' space-y-4 flex flex-col justify-start items-start text-sm'>
                        <label htmlFor="btcb"> <input onClick={() => {handleTokens("BTC.B")}} type="checkbox"  className='regular-checkbox' id='btcb' /> <label htmlFor="btcb"></label> BTC.B</label>
                        <label htmlFor="weth"> <input onClick={() => {handleTokens("wETH")}} type="checkbox"  className='regular-checkbox' id='weth' /> <label htmlFor="weth"></label> wETH</label>
                        <label htmlFor="usdt"> <input onClick={() => {handleTokens("USDT")}} type="checkbox"  className='regular-checkbox' id='usdt' /> <label htmlFor="usdt"></label> USDT</label>
                        <label htmlFor="usdc"> <input onClick={() => {handleTokens("USDC")}} type="checkbox"  className='regular-checkbox' id='usdc' /> <label htmlFor="usdc"></label> USDC</label>
                        <label htmlFor="savax"> <input onClick={() => {handleTokens("sAVAX")}} type="checkbox" className='regular-checkbox'  id='savax' /> <label htmlFor="savax"></label> sAVAX</label>
                        <label htmlFor="wbtc"> <input onClick={() => {handleTokens("wBTC")}}  type="checkbox"  className='regular-checkbox' id='wbtc' /> <label htmlFor="wbtc"></label> wBTC</label>
                        <label htmlFor="eurc"> <input onClick={() => {handleTokens("EURC")}} type="checkbox"  className='regular-checkbox' id='eurc' /> <label htmlFor="eurc"></label> EURC</label>
                    </form>

                </div>
</div>
        </div>
{/* CARDS */}
        <div className=' grid lg:grid-cols-4 grid-cols-1 gap-4 my-7'>
        {selectedCards.map((data,i) => (
            <DashboardCard key={i} data={data} />
        ))}
        </div>
        {selectedCards.length===0 && <p className=' text-4xl'>No markets found in the current filters</p>}
      </main>
      <footer className=" relative lg:pt-32 pt-5 px-4 pb-4 bg-[#111] text-white font-chakra">

          <div className=" my-32 lg:mt-48 place-items-center grid grid-cols-2 lg:gap-7 gap-3">

            <div> 
            <p className=' text-white/30 tracking-[5px] mb-5 text-left'>PRODUCT</p>
            <div className=' w-full overflow-x-hidden text-left'>
            <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> <a href="docs.vibrux.finance" target="_blank" rel="noopener noreferrer">Docs</a></div>
            </div>
            </div>

            <div> 
            <p className=' text-white/30 tracking-[5px] mb-5 text-left'>SOCIALS</p>
            <div className=' w-full overflow-x-hidden text-left'>
            <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /><a href="https://twitter.com/vibruxfi" target="_blank" rel="noopener noreferrer">Twitter</a></div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /><a href="http://t.me/vibruxfi" target="_blank" rel="noopener noreferrer">Telegram</a></div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> Medium</div>

            </div>
            </div>


          </div>
        </footer>
    </>
  )
}

export default Market
