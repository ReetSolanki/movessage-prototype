import React, { useEffect } from 'react';
import './sty.css';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
    });

    // GSAP ScrollTrigger setup
    ScrollTrigger.scrollerProxy('#main', {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
    });

    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.refresh();

    return () => {
      scroll.destroy();
    };
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        alert(`Wallet Connected: ${accounts[0]}`);

        // Redirect to a new page
        window.location.href = '/movessage-prototype/chatbot'; // Adjust the path based on your routing setup
      } catch (error) {
        console.error('User rejected the request');
        alert('Wallet connection failed');
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  return (
    <div id="main">
      <div id="nav">
        <h3>movessage.</h3>
        <button id="connectButton" onClick={connectWallet}>Connect Wallet</button>
      </div>
      <div id="page">
        <div id="loop">
          <h1><b>MOVESSAGE</b> is an<b><i></i></b> <span>AI</span> based <span><i>platform.</i></span></h1>
          <h1><b>MOVESSAGE</b> is an <b><i></i></b> <span>AI</span> based <span><i>platform.</i></span></h1>
          <h1><b>MOVESSAGE</b> is an <b><i></i></b> <span>AI</span> based <span><i>platform.</i></span></h1>
        </div>
        <h3><br /> AI based platform for creating smart contracts in the <br /> Move language.</h3>
        <h4>...SCROLL TO READ</h4>
        <canvas></canvas>
      </div>
      <div id="page1">
        <div id="right-text">
          <h3>CYBERFICTION / KEY WORD</h3>
          <h1>HAVE FUN
            <br />
            LET'S PLAY
            <br />
            JUST BE TOGETHER</h1>
        </div>
        <div id="left-text">
          <h1>MAKE A STORY
            <br />
            TAKE A CHANCE
            <br />
            BUILD AND OWNED</h1>
          <h3>..AND MAINTAIN GOOD HUMANITY</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
