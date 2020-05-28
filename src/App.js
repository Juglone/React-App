import React from 'react';
import './App.css';
import hund_bild from './doggo2.png'
import polar_bear from './bjorn.gif'
import pratbubbla from './pratbubbla4.png'
import Typical from 'react-typical';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Välkommen till min sida! :-)</h1>

        <div>
          <div class="division"><img src={pratbubbla} className="dialog" alt="En Pratbubbla" /></div>
          <div class="division"><img src={hund_bild} className="Doggo" alt="En söt Hund" /></div>
          <div class="division"><img src={polar_bear} className="Bjorn" alt="En vandrande Isbjörn" /></div>
        </div>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Klicka för att få höra min favoritlåt!!</h3>
        </a>

        <p>
          Tjena{' '}
          <Typical
          steps={[
            'Henric', 
            1000, 
            'Wiktor!', 
            1000
          ]}
          loop={Infinity}
          wrapper="b"
        />
        </p>
        
      </header>
    </div>
  );
}


export default Home;


