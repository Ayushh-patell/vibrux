import React, { useContext, useState } from 'react'

// import Onboard from '@web3-onboard/core'
// import injectedModule from '@web3-onboard/injected-wallets'
// import { ethers } from 'ethers'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { leaderboardData } from './Component/LeaderboardData'
import { ConnectContext } from './ConnectContext'

// const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/<INFURA_KEY>'

// const injected = injectedModule()

// const onboard = Onboard({
//   wallets: [injected],
//   chains: [
//     {
//       id: '0x1',
//       token: 'ETH',
//       label: 'Ethereum Mainnet',
//       rpcUrl: MAINNET_RPC_URL
//     },
//     {
//       id: 42161,
//       token: 'ARB-ETH',
//       label: 'Arbitrum One',
//       rpcUrl: 'https://rpc.ankr.com/arbitrum'
//     },
//     {
//       id: '0xa4ba',
//       token: 'ARB',
//       label: 'Arbitrum Nova',
//       rpcUrl: 'https://nova.arbitrum.io/rpc'
//     },
//     {
//       id: '0x2105',
//       token: 'ETH',
//       label: 'Base',
//       rpcUrl: 'https://mainnet.base.org'
//     },
//     {
//       id: '0xa4ec',
//       token: 'ETH',
//       label: 'Celo',
//       rpcUrl: 'https://1rpc.io/celo'
//     },
//     {
//       id: 666666666,
//       token: 'DEGEN',
//       label: 'Degen',
//       rpcUrl: 'https://rpc.degen.tips'
//     }
//   ]
// })



const Leaderboard = () => {
    const [open, setopen] = useState(0)
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
                <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/dashboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Dashboard</p></Link>
                    <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/market"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Market</p></Link>
                    <p className=' cursor-pointer text-white '>Leaderboard</p>
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
            <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/dashboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Dashboard</p></Link>
            <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/market"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Market</p></Link>
            <p className=' text-3xl cursor-pointer text-white '>Leaderboard</p>
            <div aria-hidden className=' mt-20 h-[2px] w-10 bg-[#9c9a9e] rounded-full mb-5'/>
            <ul>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Docs</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Community</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Feedback</li>
                        
                    </ul>
            </div>
        </nav>
      </header>


      {/*           MAIN PAGE            */}
      <main className=' bg-[#111] px-5 pt-16 font-chakra text-white'>
      <div className=' container mx-auto max-w-screen-lg'>
      <Link to={"/market"}><div className=' text-sm cursor-pointer text-white/40 hover:text-white transition-all duration-200 flex justify-start items-center gap-2'> <div aria-hidden className=' h-1 w-4 bg-white/25 relative'> <div className=' h-full aspect-square bg-white '></div></div>Go Back</div></Link>
        <h1 className=' tracking-widest lg:text-4xl text-3xl lg:text-left text-center my-8 mt-12'>Leaderboard</h1>
        <p className=' text-left text-white'>This ranking will define your eligibility for retroactive and future incentives. Click <a className=' text-gray-400' href="https://medium.com/p/ed4f93475de2" target="_blank" rel="noopener noreferrer">here</a> for the methodology and further details.</p>
        <p className=' text-left text-white'>TraderJoe Leaderboard last updated: <span className=' text-green-600'>{new Date().toLocaleDateString()}</span></p>


        <div className=' mt-10 overflow-x-scroll'>
            <div className=' min-w-[550px] grid grid-cols-9 gap-2 lg:text-base text-xs text-white/35 py-3 px-1'>
                <p className=' place-self-center'>RANK</p>
                <p className=' col-span-2'>ADDRESS</p>
                <p className=' col-span-2'>INVESTED</p>
                <p className=' place-self-center'>VAULTS</p>
                <p className=' place-self-center'>TRANCHES</p>
                <p className=' place-self-center'>ROLE</p>
                <p className=' place-self-center'>POINTS</p>
            </div>
            <div className=' min-w-[550px] bg-gradient-to-b from-[#0901eb] to-transparent'>
            {leaderboardData.map((data,i) => (

                <div className=' grid grid-cols-9 py-4 px-1 gap-2 border-b border-[#111] lg:text-base text-xs'>
                <p className=' truncate pl-4 place-self-center'>{i===0? "🥇":i===1?"🥈":i===2?"🥉":i+1}</p>
                <div className=' truncate col-span-2 flex justify-start items-center gap-2' title={data.address}><div className=' w-5 aspect-square rounded-full border border-white bg-blue-400'></div>{data.address.slice(0, 5)}...{data.address.slice(38)}</div>
                <p className=' truncate col-span-2'>${data.invested}</p>
                <p className=' truncate place-self-center'>{data.vaults}</p>
                <p className=' truncate place-self-center'>{data.trenches}</p>
                <p className=' truncate place-self-center'>Early Adopter</p>
                <p className=' truncate place-self-center'>{data.points}</p>
            </div>  
            ))}
            </div>
        </div>

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

export default Leaderboard
