import React from 'react';
import { Globe, Eye, EyeOff, Share2 } from 'lucide-react';

const Publish: React.FC = () => {
  return (
    <div className="publish-container fade-in">
      <h1 className="mb-4">Publish Your Collections</h1>
      
      <div className="alert alert-info mb-4">
        <div className="d-flex align-items-center">
          <Globe size={24} className="me-3" />
          <div>
            <h5 className="mb-1">Share Your Library with the World</h5>
            <p className="mb-0">Make your collections public to share them with friends, family, or colleagues.</p>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Your Collections</h5>
            </div>
            <div className="card-body">
              <div className="alert alert-warning">
                <p className="mb-0">You haven't created any collections yet. <a href="/add-collection" className="alert-link">Create a collection</a> to get started.</p>
              </div>
              
              {/* This would normally be populated with actual collections */}
              <div className="list-group">
                {/* Example collection item (hidden until collections exist)
                <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" style={{ display: 'none' }}>
                  <div>
                    <h5 className="mb-1">Fiction Books</h5>
                    <p className="mb-1 text-muted">15 books</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      <Eye size={16} className="me-1" /> Public
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      <Share2 size={16} className="me-1" /> Share
                    </button>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">Publishing Options</h5>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <h6><Eye size={18} className="me-2" /> Public Collections</h6>
                <p className="text-muted">Anyone with the link can view your collection.</p>
              </div>
              
              <div className="mb-4">
                <h6><EyeOff size={18} className="me-2" /> Private Collections</h6>
                <p className="text-muted">Only you can view your collection.</p>
              </div>
              
              <div>
                <h6><Share2 size={18} className="me-2" /> Sharing</h6>
                <p className="text-muted">Generate links to share with specific people.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;