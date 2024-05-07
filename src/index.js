import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Leva } from 'leva';
import Market from './Market';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Leaderboard from './Leaderboard';

import { Web3OnboardProvider, init } from '@web3-onboard/react'

//      WALLET MODULES
import injectedModule from '@web3-onboard/injected-wallets'
import trezorModule from '@web3-onboard/trezor'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import torusModule from '@web3-onboard/torus'
import frontierModule from '@web3-onboard/frontier'
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

const apiKey = '0f952107-df57-4fbd-a2b7-ff839a5971da'
const infuraKey = '8280b15c43a04d4aabd8d47d722f6bff'
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

//      WALLET MODULES CONFIG
const coinbase = coinbaseModule()
const torus = torusModule()
const frontier = frontierModule()
const injected = injectedModule()

const walletConnect = walletConnectModule({
  handleUri: uri => console.log(uri),
  projectId: 'f6bd6e2911b56f5ac3bc8b2d0e2d7ad5',
  dappUrl: 'https://www.onboard.blocknative.com'
})

const trezor = trezorModule({
  email: 'test@test.com',
  appUrl: 'https://www.blocknative.com',
  consecutiveEmptyAccountThreshold: 10
})




const chains = [
  {
    id: '0x1',
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl
  },
  {
    id: 42161,
    token: 'ARB-ETH',
    label: 'Arbitrum One',
    rpcUrl: 'https://rpc.ankr.com/arbitrum'
  },
  {
    id: '0xa4ba',
    token: 'ARB',
    label: 'Arbitrum Nova',
    rpcUrl: 'https://nova.arbitrum.io/rpc'
  },
  {
    id: '0x2105',
    token: 'ETH',
    label: 'Base',
    rpcUrl: 'https://mainnet.base.org'
  },
  {
    id: '0x13881',
    token: 'MATIC',
    label: 'Polygon - Mumbai',
    rpcUrl: 'https://matic-mumbai.chainstacklabs.com	'
  },
  {
    id: '0x38',
    token: 'BNB',
    label: 'Binance',
    rpcUrl: 'https://bsc-dataseed.binance.org/'
  },
  {
    id: '0x89',
    token: 'MATIC',
    label: 'Polygon',
    rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
  },
  {
    id: '0xfa',
    token: 'FTM',
    label: 'Fantom',
    rpcUrl: 'https://rpc.ftm.tools/'
  },
  {
    id: 10,
    token: 'OETH',
    label: 'Optimism',
    rpcUrl: 'https://mainnet.optimism.io'
  },
  {
    id: 84531,
    token: 'ETH',
    label: 'Base Goerli',
    rpcUrl: 'https://goerli.base.org'
  }
]

const wallets = [injected, coinbase, walletConnect, torus, trezor, frontier]


const web3Onboard = init({
  apiKey,
  wallets,
  chains,
  appMetadata: {
    name: 'VIBRUX',
    icon: `<svg width="3997" height="817" viewBox="0 0 3997 817" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_28_2)">
    <rect width="3995.96" height="817" transform="translate(0.847656)" fill="white"/>
    <path d="M0.847656 396.122V1943.47H1998.83H3996.81V396.122V-1151.23H1998.83H0.847656V396.122ZM662.179 372.139C704.136 450.28 741.099 515.268 743.097 516.816C745.095 519.137 782.058 454.148 825.014 372.912L902.935 225.914H946.891C970.867 225.914 989.848 228.235 989.848 231.33C989.848 235.198 943.894 314.887 888.95 410.049L787.053 582.578L742.098 580.257L698.143 577.936L599.243 409.275C545.297 316.434 500.343 236.746 500.343 232.877C500.343 228.235 519.323 225.914 542.3 227.462L585.257 229.783L662.179 372.139ZM1179.66 403.859V581.804H1139.7H1099.74V403.859V225.914H1139.7H1179.66V403.859ZM1677.15 243.709C1743.09 271.561 1755.07 340.418 1700.13 374.46L1672.16 392.254L1708.12 407.728C1797.03 447.185 1768.06 547.763 1660.17 573.294C1639.19 577.936 1555.28 581.804 1470.36 581.804H1319.51V403.085V224.367L1482.35 227.462C1615.22 229.783 1650.18 232.104 1677.15 243.709ZM2235.59 234.425C2273.55 245.256 2318.5 278.524 2334.49 308.697C2363.46 360.533 2343.48 431.711 2289.53 468.848L2269.55 483.548L2323.5 531.515C2353.47 557.82 2375.45 581.03 2373.45 583.352C2370.45 585.673 2346.48 585.673 2320.5 584.125C2279.54 581.03 2267.56 576.388 2226.6 542.347L2179.64 504.437H2074.75H1968.86V542.347V580.257L1927.9 583.352C1905.92 584.899 1885.94 584.899 1882.94 582.578C1872.95 574.841 1879.95 502.116 1892.93 477.358C1910.92 444.864 1917.91 444.09 2078.75 440.996C2211.61 437.901 2237.59 431.711 2257.57 398.443C2275.55 368.27 2270.55 336.55 2244.58 313.339C2220.6 291.676 2218.61 291.676 2094.73 289.355L1969.86 286.261L1966.86 354.344C1964.86 396.122 1959.87 423.201 1952.87 424.748C1945.88 426.296 1927.9 419.333 1912.91 408.501C1884.94 390.707 1883.94 386.838 1880.95 307.924L1876.95 225.914H2041.78C2134.69 225.914 2219.6 229.783 2235.59 234.425ZM2550.27 355.118C2553.27 462.658 2556.26 488.19 2571.25 505.21C2595.22 532.289 2629.19 543.12 2693.13 543.12C2764.05 543.12 2794.02 533.063 2818 502.889C2835.98 480.453 2837.98 463.432 2837.98 351.249V225.914H2877.94H2917.9V355.118C2917.9 500.568 2906.91 532.289 2845.97 564.01C2782.04 597.278 2635.18 601.146 2561.26 571.746C2485.34 540.799 2469.35 502.889 2468.35 347.381V225.914H2507.31H2546.27L2550.27 355.118ZM3193.62 291.676C3231.58 328.039 3264.55 357.439 3267.54 357.439C3270.54 357.439 3303.51 328.039 3341.47 291.676L3409.4 225.914H3460.35H3510.3L3491.32 242.935C3468.34 263.051 3350.46 370.591 3329.48 389.159C3318.49 400.764 3327.48 412.37 3411.4 487.416C3464.35 534.61 3507.3 574.841 3507.3 577.162C3507.3 579.483 3486.32 581.804 3459.35 581.804C3412.4 581.804 3412.4 581.804 3347.46 519.137C3311.5 485.095 3277.53 453.374 3271.54 449.506C3263.55 444.864 3237.57 464.206 3186.63 512.174L3112.7 581.804H3065.75C3038.78 581.804 3017.8 580.257 3017.8 578.709C3017.8 576.388 3058.76 539.252 3108.7 495.153C3158.65 451.053 3201.61 411.596 3204.61 406.18C3207.6 400.764 3168.64 360.533 3118.69 315.66C3068.75 271.561 3027.79 232.877 3027.79 230.556C3027.79 228.235 3049.76 225.914 3075.74 225.914H3123.69L3193.62 291.676Z" fill="black"/>
    <path d="M1399.43 322.622V372.911H1502.33C1627.2 372.911 1652.18 363.627 1647.18 320.301C1643.19 280.844 1616.21 272.334 1497.33 272.334H1399.43V322.622Z" fill="black"/>
    <path d="M1399.43 477.363V535.389H1513.32C1613.22 535.389 1629.2 533.841 1653.18 519.142C1675.15 505.989 1680.15 497.479 1677.15 474.268C1672.16 431.716 1632.2 419.338 1502.33 419.338H1399.43V477.363Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_28_2">
    <rect width="3995.96" height="817" fill="white" transform="translate(0.847656)"/>
    </clipPath>
    </defs>
    </svg>`,
    description: 'Your wallet with VIBRUX'
  },
  notify: {
    desktop: {
      enabled: true,
      transactionHandler: transaction => {
        console.log({ transaction })
        if (transaction.eventCode === 'txPool') {
          return {
            type: 'success',
            message: 'Your transaction from #1 DApp is in the mempool',
          }
        }
      },
      position: 'bottomLeft'
    },
    mobile: {
      enabled: true,
      transactionHandler: transaction => {
        console.log({ transaction })
        if (transaction.eventCode === 'txPool') {
          return {
            type: 'success',
            message: 'Your transaction from #1 DApp is in the mempool',
          }
        }
      },
      position: 'topRight'
    }
  },
  accountCenter: {
    desktop: {
      position: 'bottomRight',
      enabled: true,
      minimal: true
    },
    mobile: {
      position: 'topRight',
      enabled: true,
      minimal: true
    }
  },
  theme: 'dark'
})






const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/market",
    element:<Market/>
  },
  {
    path:"/leaderboard",
    element:<Leaderboard/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
])
root.render(
  <React.StrictMode>
  <Web3OnboardProvider web3Onboard={web3Onboard}>
  <Leva/>
 <RouterProvider router={router}></RouterProvider>
 </Web3OnboardProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
