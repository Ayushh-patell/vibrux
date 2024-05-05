import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Leva } from 'leva';
import Market from './Market';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import { ConnectProvider } from './ConnectContext';
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

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
  <ConnectProvider>
  <Leva/>
 <RouterProvider router={router}></RouterProvider>
 </ConnectProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
