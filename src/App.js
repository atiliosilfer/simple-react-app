import './App.css';
import { Navbar } from './components/navbar';
import profile from './assets/dogcoin.jpg';
import { BlogArticle } from './components/BlogArticle/index';
import { useState } from 'react';

function App() {
  const [showAll, setShowAll] = useState(false);

  function handleShowMore() {
    setShowAll((prev) => !prev);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
     
        <div className="Hero">
          <img src={profile} alt="cute dog"/>
          <article className="Hero-article">
            <h1>
              Seu nome
            </h1>
            <p>
              Coloque aqui sua biografia de forma resumida. 
              Coloque aqui sua biografia de forma resumida. 
              Coloque aqui sua biografia de forma resumida. 
              Coloque aqui sua biografia de forma resumida. 
              Coloque aqui sua biografia de forma resumida.
            </p>
          </article>
        </div>
        
      </header>
      <div className="Article-container">
        <h2>
          Últimas do blog
        </h2>
        <BlogArticle/>
        <BlogArticle/>
        <BlogArticle/>
        {
          showAll === true && <>
            <BlogArticle/>
            <BlogArticle/>
            <BlogArticle/>
          </>
        }
        <button onClick={handleShowMore}>
          {showAll ? <strong>Ver menos</strong> : <strong>Ver tudo</strong>}
        </button>
      </div>
    </div>
  );
}

export default App;
