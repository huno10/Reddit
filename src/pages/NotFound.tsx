import React from 'react'

export const NotFound = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'

    }}>
      <div style={{
        fontSize: '2rem',
        color: '#333',
        marginBottom: '20px'
      }}

      >404 — страница не найдена</div>
      <div style={{
        fontSize: '1rem',
        color: '#666',
        marginBottom: '20px'
      }}>Извините, запрошенная страница не существует.</div>
    </div >
  )
}
