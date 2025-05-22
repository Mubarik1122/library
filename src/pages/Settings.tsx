import React, { useState } from 'react';
import { User, Bell, Shield, Eye, Moon, Monitor } from 'lucide-react';

const Settings: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [emailNotifications, setEmailNotifications] = useState(true);
  
  return (
    <div className="settings-container fade-in">
      <h1 className="mb-4">Settings</h1>
      
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="list-group">
            <button className="list-group-item list-group-item-action active">
              <User size={18} className="me-2" /> Account
            </button>
            <button className="list-group-item list-group-item-action">
              <Bell size={18} className="me-2" /> Notifications
            </button>
            <button className="list-group-item list-group-item-action">
              <Shield size={18} className="me-2" /> Privacy
            </button>
            <button className="list-group-item list-group-item-action">
              <Eye size={18} className="me-2" /> Appearance
            </button>
          </div>
        </div>
        
        <div className="col-md-9">
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Account Settings</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" defaultValue="Mubarik Akbar" />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" defaultValue="mubarik@example.com" />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="currentPassword" className="form-label">Current Password</label>
                  <input type="password" className="form-control" id="currentPassword" placeholder="Enter current password" />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">New Password</label>
                  <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm new password" />
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
          
          <div className="card mb-4">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">Appearance Settings</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label d-block">Theme</label>
                <div className="btn-group" role="group">
                  <input 
                    type="radio" 
                    className="btn-check" 
                    name="theme" 
                    id="lightTheme" 
                    checked={theme === 'light'} 
                    onChange={() => setTheme('light')}
                  />
                  <label className="btn btn-outline-primary" htmlFor="lightTheme">
                    <Monitor size={18} className="me-1" /> Light
                  </label>
                  
                  <input 
                    type="radio" 
                    className="btn-check" 
                    name="theme" 
                    id="darkTheme" 
                    checked={theme === 'dark'} 
                    onChange={() => setTheme('dark')}
                  />
                  <label className="btn btn-outline-primary" htmlFor="darkTheme">
                    <Moon size={18} className="me-1" /> Dark
                  </label>
                </div>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Book Display</label>
                <select className="form-select">
                  <option value="grid">Grid View (Default)</option>
                  <option value="list">List View</option>
                  <option value="compact">Compact View</option>
                </select>
              </div>
              
              <button className="btn btn-primary">
                Save Appearance Settings
              </button>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">Notification Settings</h5>
            </div>
            <div className="card-body">
              <div className="form-check form-switch mb-3">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="emailNotifications" 
                  checked={emailNotifications} 
                  onChange={() => setEmailNotifications(!emailNotifications)}
                />
                <label className="form-check-label" htmlFor="emailNotifications">
                  Email Notifications
                </label>
                <div className="form-text">Receive email updates about your library.</div>
              </div>
              
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" id="loanReminders" defaultChecked />
                <label className="form-check-label" htmlFor="loanReminders">
                  Loan Reminders
                </label>
                <div className="form-text">Get reminders about books you've loaned out.</div>
              </div>
              
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" id="newFeatures" defaultChecked />
                <label className="form-check-label" htmlFor="newFeatures">
                  New Features
                </label>
                <div className="form-text">Be notified when new features are available.</div>
              </div>
              
              <button className="btn btn-primary">
                Save Notification Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;