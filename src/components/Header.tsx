import React from 'react';
import { Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Start Searching..." 
        />
      </div>
      
      <div className="user-profile">
        <div className="user-info">
          <p className="user-name">Mubarik Akbar</p>
          <p className="user-status">Account Menu</p>
        </div>
        <div className="user-avatar">
          MA
        </div>
      </div>
    </header>
  );
};

export default Header;