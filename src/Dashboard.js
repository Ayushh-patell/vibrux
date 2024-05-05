import React, { useContext, useState } from 'react'
import DashboardCard from './Component/DashboardCard'
import { DashboardData } from './Component/DashboardData'
import gsap from 'gsap'
import { ConnectContext } from './ConnectContext'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [open, setopen] = useState(true)
    const [NavOpen, setNavOpen] = useState(false)
    const {Connect, setConnect} = useContext(ConnectContext)

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

    //      WALLET CONFIG           


    
    const connect = () => {
        setConnect((prev) => !prev)

        // console.log(Connect);
    //     const wallets = await onboard.connectWallet()
    
    // console.log(wallets)
    
    
    // if (wallets[0]) {
    //   // create an ethers provider with the last connected wallet provider
    //   // if using ethers v6 this is:
    //   let ethersProvider = new ethers.BrowserProvider(wallets.provider, 'any')
    // //   const ethersProvider = new ethers.providers.Web3Provider(wallets[0].provider, 'any')
    
    //   const signer = ethersProvider.getSigner()
    
    //   // send a transaction with the ethers provider
    //   const txn = await signer.sendTransaction({
    //     to: '0x',
    //     value: 100000000000000
    //   })
    
    //   const receipt = await txn.wait()
    //   console.log(receipt)
    // }
}

return (
    <>
      <header>
        <nav className=' bg-[#111] relative flex justify-between items-center lg:px-6 px-3 lg:py-5 py-2 font-chakra text-white'>
            <div className=' w-full flex lg:justify-start justify-between items-center lg:gap-16 gap-3 py-2'>
                <img src="../logo.svg" alt="Struct logo" className=' lg:h-5 h-3 pr-5' />
                <div className=' lg:flex hidden justify-between items-center text-sm gap-24 text-gray-400 '>
                    <p className=' cursor-pointer text-white'>Dashboard</p>
                    <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/market"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Markets</p></Link>
                    <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/leaderboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Leaderboard</p></Link>
                </div>

<div className=' lg:hidden flex justify-center items-center gap-2'>
<div onClick={toggleNav} className='pointer-events-auto flex justify-center cursor-pointer items-center h-8 py-9'>
        <div onMouseEnter={NavHover} onMouseLeave={NavHoverC} title='Open Menu' className={` menu w-14 h-4 flex flex-col justify-between items-center  transition-[height] duration-200 ease-out`}>
            <div aria-hidden className=' bg-white h-px w-full'></div>
            <div aria-hidden className=' bg-white h-px w-full'></div>
        </div>
        </div>
        <button onClick={connect} className=' my-2 border border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg flex justify-center items-center gap-2'>
        {Connect ? <>
            <div className=' rounded-full w-5 aspect-square border border-white bg-blue-700'></div>
            <p>f34r2...414</p>
        </>:"Connect"}
      </button>
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
                <button onClick={connect} className=' my-2 border border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg flex justify-center items-center gap-2'>
                {Connect ? <>
            <div className=' rounded-full w-5 aspect-square border border-white bg-blue-700'></div>
            <p>f34r2...414</p>
        </>:"Connect"}
                </button>
                {Connect && <button className='border mx-2 border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg flex justify-center items-center'> <img src="../bell.svg" alt="notification" className=' w-[5.5rem] aspect-square'/></button>}
            </div>


            <div className='mobileNav z-50 bg-[#111] w-[90vw] text-[#9c9a9e] absolute -top-[999px] left-1/2 -translate-x-1/2' style={{boxShadow:"0 24px 40px rgba(0,0,0,.35)"}}>
            <p className=' text-3xl cursor-pointer text-white'>Dashboard</p>
            <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/market"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Markets</p></Link>
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
      <main className=' bg-[#111] px-5 pt-16 font-chakra text-white'>

      <div className=' max-w-screen-lg mx-auto flex flex-col justify-center items-center'>
        {!Connect ? <button onClick={connect} className=' my-2 border border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg flex justify-center items-center gap-2'>Connect</button>
        :
        <>
        <div className=' gap-px grid lg:grid-cols-3 grid-cols-1 w-full'>
            <div className=' bg-[#212121] flex flex-col justify-between items-start p-5 h-32'>
                <p className=' text-white/50'>My Refunds: <span>0</span> pending</p>
                <p className=' text-4xl'>$0.00</p>
            </div>
            <div className=' bg-[#212121] flex flex-col justify-between items-start p-5 h-32'>
                <p className=' text-white/50'>To Withdraw: <span>0</span> pending</p>
                <p className=' text-4xl'>$0.00</p>
            </div>
            <div className=' bg-[#212121] flex flex-col justify-between items-start p-5 h-32'>
                <p className=' text-white/50'>Rewards: <span>0</span> pending</p>
                <p className=' text-4xl'>$0.00</p>
            </div>
        </div>
        <div className=' flex justify-start items-center gap-6 w-full my-12'>
            <p onClick={() => {setopen(true)}} className={` cursor-pointer lg:text-4xl text-2xl ${open? " text-white underline":" text-white/25"}`}>Positions</p>
            <p onClick={() => {setopen(false)}} className={` cursor-pointer lg:text-4xl text-2xl ${!open? " text-white underline":" text-white/25"}`}>Transactions</p>
        </div>

        <div className=' w-full'>
            {open ? "":<p className=' w-full'>You haven't done any transactions yet!</p>}
        </div>
        <Link to={"/market"} className=' w-full p-5 rounded-md text-center bg-[#0901eb] text-white my-5'>
            Find a vault!
        </Link>
        </>
        }
        
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
