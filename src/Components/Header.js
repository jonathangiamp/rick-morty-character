import React from 'react';

const Header = () => { 
  return (
    <header className="header--section">
      <h1 className="header--title">
        Rick and Morty 
        <span role="img" aria-label="man">👨</span>
        <span role="img" aria-label="woman">👩</span>
      </h1>
    </header>
  ); 
};

export default Header;