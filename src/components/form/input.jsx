import React from 'react'

export function Input({ type="text", ...props }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input type={type} {...props} />
      <p style={{ fontSize: 11, color: '#f00' }}></p>
    </div>
  )
}
