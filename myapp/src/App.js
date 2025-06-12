import React from 'react';
import { BrowserRouter, Routes, Route ,Link} from 'react-router-dom';

import { useState } from 'react';
import HeaderPage from './components/Headerpage';

function App() {

  const [cnt,setcnt]=useState(0)
  return (
    <div>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/header">Header</Link>
        </li>
      </ul>
      <button onClick={()=>setcnt(cnt+1)}>Add</button>
      <p>Count:{cnt}</p>
      <Routes>
        
        <Route path="/header" element={<HeaderPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


