import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Landing from './components/landing';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';





function App() {
  useEffect(() => {
    document.getElementById('loader').classList.add('remove')
  })
  
  let [contentState, setContent] = useState('content slideContent');
  document.addEventListener('scroll', () => {
    const emailMe= document.getElementById('emailMe');
    const content1 = document.getElementById('project').scrollHeight;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if (vh === 1024 && vw === 768) {
      if (window.scrollY >= (content1 - 2400)) {
        setContent(contentState = 'content');
      } else {
        setContent(contentState = 'content slideContent');
      }
    }
    else if (vh === 1366 && vw === 1024) {
      setContent(contentState = 'content');
    }
    else {
      emailMe.style.opacity=1
      if (window.scrollY >= (content1 - 1350)) {
        setContent(contentState = 'content');
      } else {
        setContent(contentState = 'content slideContent');
      }
    }
  });

  return (
    <div id="App" className="App">
      <div id="emailMe" title="email Me">
        <div>
        <a href='mailto:ikehcharles.ci@gmail.com'>
          <i className="fas fa-envelope"></i>
        </a>
        </div>
      </div>
      <Header />
      <Landing />
      <div id='project' className={contentState}>
        <Projects />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
