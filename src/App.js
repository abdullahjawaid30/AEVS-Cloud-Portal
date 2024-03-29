import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_Menu from './Components/MainMenu/Main_Menu';
import Battery_Menu from './Components/Battery/Battery_Menu'; // Updated import
import Parts_Menu from './Components/PartsMenu/Parts_Menu';
import ReplacementOrder from './Components/ReplacementOrder/ReplacementOrder';

function App() {
  return (
    <BrowserRouter>
      <Main_Menu />
      <Routes>
        <Route path="/Battery_Menu" element={<Battery_Menu />} />
        <Route path="/Parts_Menu" element={<Parts_Menu />} />
        <Route path="/ReplacementOrder" element={<ReplacementOrder />} />
        {/* ... other routes if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

