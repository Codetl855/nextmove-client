import React from 'react';

const loaderStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '4px',
  zIndex: 2000,
  animation: 'loaderLine 1.2s linear infinite',
};

const blurOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,  
  width: '100vw',
  height: '100vh',
  background: 'rgba(255,255,255,0.2)',
  backdropFilter: 'blur(0px)',
  zIndex: 1999,
};

export const Loader: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;
  return (
    <>
      <div style={blurOverlayStyle} />
      <div className='bg-aztec' style={loaderStyle} />
      <style>{`
        @keyframes loaderLine {
          0% { left: -100vw; }
          100% { left: 100vw; }
        }
      `}</style>
    </>
  );
};
