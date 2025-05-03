import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const handleClickVillage = () => {
    window.location.href = '/PracticeMode';
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-white">
      <h1 className="text-center text-xl font-bold my-2">歡迎來到 RPG 世界地圖</h1>
      <div className="flex justify-center">
        <div className="relative">
          <img
            src="/map.png"
            alt="World Map"
            className="w-full h-auto max-w-[1200px] rounded shadow"
          />
          
          {/* 點擊 VILLAGE 區域 */}
          <button
            onClick={handleClickVillage}
            className="absolute left-[12%] top-[67%] w-[13%] h-[11%] opacity-0"
            title="進入村莊"
          />
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
