import React from 'react';
import { PieChart, BookOpen, Users, Activity, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container fade-in">
      <h1 className="mb-4">Library Dashboard</h1>
      
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <BookOpen size={32} className="text-primary mb-3" />
              <h5 className="card-title">Total Books</h5>
              <h2 className="card-text">0</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <PieChart size={32} className="text-success mb-3" />
              <h5 className="card-title">Collections</h5>
              <h2 className="card-text">0</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <Activity size={32} className="text-warning mb-3" />
              <h5 className="card-title">Reading Now</h5>
              <h2 className="card-text">0</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <Users size={32} className="text-info mb-3" />
              <h5 className="card-title">Borrowed</h5>
              <h2 className="card-text">0</h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Recent Activity</h5>
            </div>
            <div className="card-body">
              <div className="alert alert-light border">
                <p className="mb-0 text-center">No recent activity to display. Start adding books to your library!</p>
              </div>
              
              {/* This would be populated with actual activity */}
              <div className="timeline" style={{ display: 'none' }}>
                <div className="timeline-item">
                  <div className="timeline-date">June 15, 2025</div>
                  <div className="timeline-content">
                    <p>Added "The Great Gatsby" to Fiction collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">Reading Goals</h5>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <Calendar size={24} className="text-primary me-3" />
                <div>
                  <h6 className="mb-1">2025 Reading Challenge</h6>
                  <p className="mb-0">Set a goal for how many books you want to read this year.</p>
                </div>
              </div>
              
              <button className="btn btn-outline-primary w-100">
                Set Reading Goal
              </button>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">Library Statistics</h5>
            </div>
            <div className="card-body">
              <p className="text-center text-muted">Add books to your library to see statistics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;