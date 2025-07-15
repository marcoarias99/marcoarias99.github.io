import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Redirect to the static portfolio
    window.location.href = '/portfolio.html';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2>Loading Marco's Portfolio...</h2>
    </div>
  );
}

export default App;
