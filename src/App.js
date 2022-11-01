import { useState } from 'react';
import './App.css';
// Components
import VenueTab from './components/header/venue/venueTab';
import InnerVenue from './components/header/venue/innerVenue/innerVenue';
import UserInfo from './components/leftContent/userInfo/userInfo';

function App() {
  const [showNav, setShowNav] = useState(false);
  const [current, setCurrent] = useState('');
  
  const prp = {
    current,
    setCurrent,
    showNav,
    setShowNav,
  }
  return (
    <div className="app">
      <div className="left">
        <UserInfo />
      </div>
      <div className="middle">
       <VenueTab {...prp}/>
      </div>
    </div>
  );
}

export default App;
