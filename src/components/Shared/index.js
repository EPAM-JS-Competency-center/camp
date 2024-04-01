import React from 'react';

export const Highlight = ({children, color}) => (
    <span
        style={{
          backgroundColor: color,
          borderRadius: '5px',
          color: '#fff',
          padding: '0.3rem',
          minWidth: '60px',
          textAlign: 'center',
          display: 'inline-block',
        }}>
    {children}
  </span>
);
