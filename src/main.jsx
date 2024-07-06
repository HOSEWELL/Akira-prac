import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import User from './User/user.jsx';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:"<User/>"
//   },
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

{/* <RouterProvider router={router}/> */}

  </React.StrictMode>,
)
