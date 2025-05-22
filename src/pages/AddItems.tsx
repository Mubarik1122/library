import React, { useState } from 'react';
import { BookPlus, Scan, Upload, Camera } from 'lucide-react';

const AddItems: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="add-items-container fade-in">
      <h1 className="mb-4">Add Items to Your Library</h1>
      
      <div className="row mb-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Search for Books</h5>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Search by title, author, or ISBN..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-primary" type="button">
                  Search
                </button>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-secondary mx-2">
                  <Scan size={18} className="me-2" />
                  Scan Barcode
                </button>
                <button className="btn btn-outline-secondary mx-2">
                  <Camera size={18} className="me-2" />
                  Take Photo
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">Other Options</h5>
            </div>
            <div className="card-body">
              <button className="btn btn-outline-primary w-100 mb-3">
                <BookPlus size={18} className="me-2" />
                Add Book Manually
              </button>
              <button className="btn btn-outline-primary w-100">
                <Upload size={18} className="me-2" />
                Import from CSV
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="search-results">
        {searchTerm && (
          <div className="alert alert-info">
            No results found for "{searchTerm}". Try a different search term or add the book manually.
          </div>
        )}
      </div>
    </div>
  );
};

export default AddItems;