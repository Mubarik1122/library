import React, { useState } from 'react';
import { FolderPlus, Edit, Tag } from 'lucide-react';

const AddCollection: React.FC = () => {
  const [collectionName, setCollectionName] = useState('');
  const [collectionDescription, setCollectionDescription] = useState('');

  return (
    <div className="add-collection-container fade-in">
      <h1 className="mb-4">Create a New Collection</h1>
      
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Collection Details</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="collectionName" className="form-label">Collection Name*</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FolderPlus size={18} />
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="collectionName" 
                      placeholder="e.g., Fiction, Science Books, Favorites"
                      value={collectionName}
                      onChange={(e) => setCollectionName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="collectionDescription" className="form-label">Description</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <Edit size={18} />
                    </span>
                    <textarea 
                      className="form-control" 
                      id="collectionDescription" 
                      rows={4}
                      placeholder="Describe the purpose of this collection..."
                      value={collectionDescription}
                      onChange={(e) => setCollectionDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="collectionTags" className="form-label">Tags</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <Tag size={18} />
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="collectionTags" 
                      placeholder="Separate tags with commas (e.g., fiction, novels, favorites)" 
                    />
                  </div>
                  <div className="form-text">Tags help you organize and find your collections more easily.</div>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={!collectionName}
                >
                  Create Collection
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">Tips</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Collections help you organize your books by category, genre, or any system you prefer.</li>
                <li className="list-group-item">You can add books to multiple collections.</li>
                <li className="list-group-item">Use descriptive names to easily identify your collections.</li>
                <li className="list-group-item">Collections can be made public or kept private.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCollection;