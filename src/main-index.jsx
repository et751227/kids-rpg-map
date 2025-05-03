import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#fff' }}>
      <h1 style={{ fontSize: '2rem', margin: '20px' }}>歡迎來到 RPG 世界地圖</h1>
      <img
        src="/map.png"
        alt="World Map"
        style={{ maxWidth: '90%', borderRadius: '12px', boxShadow: '0 0 12px rgba(0,0,0,0.2)' }}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
