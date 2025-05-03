import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const goToPractice = () => {
    window.location.href = '/PracticeMode.html';
  };

  return (
    <div className="text-center bg-white">
      <h1 className="text-2xl font-bold my-4">歡迎來到 RPG 世界地圖</h1>
      <div className="relative inline-block">
        <img src="/map.png" alt="World Map" className="rounded-lg shadow-md max-w-full" />
        
        {/* 點擊村莊區域 */}
        <button
          onClick={goToPractice}
          className="absolute left-[12%] top-[60%] w-[15%] h-[15%] bg-transparent border-none"
          aria-label="Go to Practice Mode"
        />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
