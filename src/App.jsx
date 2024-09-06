import { useState } from 'react';
import './App.css'
import PortfolioContent from './Components/PortfolioContent/PortfolioContent';
import LoadingScreen from './Components/Looder/Looder';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false); // عندما يتم الانتهاء من التحميل، قم بإخفاء شاشة التحميل
  };

  return (
    <main>
      {loading ? (
        <LoadingScreen onLoaded={handleLoaded} />
      ) : (
        <PortfolioContent /> // هذا هو المحتوى الأساسي للبورتفوليو
      )}
    </main>
  )
}

export default App
