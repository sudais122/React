import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setdata] = useState([]);

  async function APIFUN() {
    const Respose = await fetch('https://picsum.photos/v2/list');
    const Data = await Respose.json();
    setdata(Data);
  }

  return (
    <div className="app">
      <header className="topbar">
        <h1 className="brand">Picsum Gallery</h1>
        <button className="load-btn" onClick={APIFUN}>Load Photos</button>
      </header>

      <div className="gallery">
        {data.map((elem) => (
          <article className="card" key={elem.id}>
            <div className="card-media">
              <img src={elem.download_url} alt={`Photo by ${elem.author}`} />
            </div>
            <div className="card-body">
              <h2 className="card-author">{elem.author}</h2>
              <div className="card-meta">
                <span>ID {elem.id}</span>
                <span>{elem.width} × {elem.height}</span>
              </div>
              <a className="card-download" href={elem.download_url} target="_blank" rel="noreferrer">
                Download 
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default App;