import { useState } from 'react';
import './App.css'
import PortfolioContent from './Components/PortfolioContent/PortfolioContent';
import LoadingScreen from './Components/Looder/Looder';
import StarryBackground from './Animation/Start/start';
import { AiOutlineCodepen } from "react-icons/ai";

function App() {
  const [loading, setLoading] = useState(true);
  const [Mode, setMode] = useState(false);

  const handleLoaded = () => {
    setLoading(false); // عندما يتم الانتهاء من التحميل، قم بإخفاء شاشة التحميل
  };

  return (
    <main className={Mode? 'desmain' : 'main'}>
      <StarryBackground/>

      {!loading ? (
        <LoadingScreen onLoaded={handleLoaded} />
      ) : (
        // هذا هو المحتوى الأساسي للبورتفوليو
        <div > 
          <button className='ModeChanger' onClick={() => setMode(!Mode)}><AiOutlineCodepen />
          </button>
          <PortfolioContent />
        </div> 
      )}
    </main>
  )
}

export default App
