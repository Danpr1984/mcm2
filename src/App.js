import React, { useState } from 'react';
import UserContext from './UserContext.jsx';
import Routing from './Routing.jsx';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Routing />
      </div>
    </UserContext.Provider>
  );
}

export default App;
