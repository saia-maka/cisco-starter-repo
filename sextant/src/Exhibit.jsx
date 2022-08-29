import React from 'react';

const ExhibitTitle = () => {
  return <div className="Exhibit-Title-Wrapper">
    <h2 className='Exhibit-Title'>Sextant Exhibit</h2>
  </div>
}

export const Exhibit = (children) => {
  return <div className='Exhibit-Wrapper'>
    <ExhibitTitle />
    {children}
  </div>
}