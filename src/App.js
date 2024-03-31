import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_Menu from './Components/MainMenu/Main_Menu';
import Battery_Menu from './Components/Battery/BatteryMenu'; // Updated import
import Parts_Menu from './Components/PartsMenu/Parts_Menu';
import ReplacementOrder from './Components/ReplacementOrder/ReplacementOrder';
import Book_In from './Components/PartsForms/Book_In';


function App() {
  return (
    <BrowserRouter>
      <Main_Menu />
      <Routes>
        <Route path="/Battery_Menu" element={<Battery_Menu />} />
        <Route path="/Parts_Menu" element={<Parts_Menu />} />
        <Route path="/book-in" element={<Book_In />} />
        <Route path="/ReplacementOrder" element={<ReplacementOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

