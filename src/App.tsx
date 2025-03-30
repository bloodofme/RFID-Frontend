import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Tabs, Tab } from '@mui/material';

import GifPage from './components/membersPortal/gifPage';
import Instructions from './components/instructions';
import MembersPortal from './components/membersPortal/membersPortal';
import WebUI from './components/pm3WebUI/webUI';
import Authenticate from './components/authenticateCard/cardAuthenticate';

const AppContent: React.FC = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const paths = ['/authenticate', '/readwrite', '/members', '/instructions'];
    setValue(paths.indexOf(location.pathname));
  }, [location]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Authenticate Card" component={Link} to="/authenticate" />
        <Tab label="Read & Write Card" component={Link} to="/readwrite" />
        <Tab label="Members" component={Link} to="/members" />
        <Tab label="Instructions" component={Link} to="/instructions" />
      </Tabs>
      <Routes>
        <Route path="/" element={<Navigate to="/authenticate" />} />
        <Route path="/authenticate" element={<Authenticate/>} />
        <Route path="/readwrite" element={<WebUI/>} />
        <Route path="/members" element={<MembersPortal/>} />
        <Route path="/gif" element={<GifPage/>} />
        <Route path="/instructions" element={<Instructions/>} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent/>
    </Router>
  );
};

export default App;
