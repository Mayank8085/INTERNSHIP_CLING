import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <div>
        <span>
            Search: {' '}
            <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        </span>
    </div>
  )
}
