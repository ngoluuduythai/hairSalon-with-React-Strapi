import React from 'react';
import ReactDom from 'react-dom';
// import App from "./App";
import "./sass/basic-styles-scss/abstract-and-base.scss";
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router
} from "react-router-dom";
 
ReactDom.render(<Router><Navbar /></Router>, document.getElementById("root"))

// pwa
if ('serviceWorker' in navigator) {
       window.addEventListener('load', () => {
         navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
           console.log('SW registered: ', registration);
         }).catch(registrationError => {
           console.log('SW registration failed: ', registrationError);
         });
       });
     }