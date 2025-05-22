import React, { useState } from 'react';
import { Grid, List, Filter, ChevronRight } from 'lucide-react';

const Library: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [books, setBooks] = useState<any[]>([]); // This would normally be populated from an API

  return (
    <div className="library-container fade-in">
      <div className="library-header">
        <div className="dropdown-custom">
          <button 
            className="dropdown-toggle" 
            type="button" 
            id="dropdownMenuButton" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            Select an Option
            <ChevronRight size={16} />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">All Books</a></li>
            <li><a className="dropdown-item" href="#">Fiction</a></li>
            <li><a className="dropdown-item" href="#">Non-Fiction</a></li>
            <li><a className="dropdown-item" href="#">Science</a></li>
            <li><a className="dropdown-item" href="#">History</a></li>
          </ul>
        </div>
        
        <div className="view-options">
          <button 
            className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid size={18} /> Cover
          </button>
          <button 
            className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => setViewMode('list')}
          >
            <List size={18} /> Title
          </button>
          <button className="btn btn-outline-secondary">
            <Filter size={18} /> Filters
          </button>
        </div>
      </div>
      
      {books.length > 0 ? (
        <div className={`books-${viewMode}`}>
          {books.map(book => (
            <div key={book.id} className="book-card">
              <div className="book-cover">
                <img src={book.coverUrl} alt={book.title} />
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-library">
          <h2>Start by <span>adding a collection</span>.</h2>
        </div>
      )}
    </div>
  );
};

export default Library;