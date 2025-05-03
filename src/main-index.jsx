import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 如果有使用 Tailwind 的話

const App = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 標題改為浮在上面，帶透明背景 */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/70 px-4 py-2 rounded shadow text-xl font-semibold z-10">
        歡迎來到 RPG 世界地圖
      </div>

      {/* 地圖圖片全螢幕鋪滿 */}
      <img
        src="/map.png"
        alt="World Map"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
