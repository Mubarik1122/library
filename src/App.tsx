import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import AddItems from './pages/AddItems';
import AddCollection from './pages/AddCollection';
import Publish from './pages/Publish';
import Settings from './pages/Settings';
import Support from './pages/Support';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Library />} />
        <Route path="library" element={<Library />} />
        <Route path="add-items" element={<AddItems />} />
        <Route path="add-collection" element={<AddCollection />} />
        <Route path="publish" element={<Publish />} />
        <Route path="dashboards" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;