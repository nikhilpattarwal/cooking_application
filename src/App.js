import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { Navbar } from './components/navBar/navBar';
import { SavedItems } from './components/savedItems/savedItems';

function App() {
  const [loader, setLoader] = useState(true);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home setLoader={setLoader} />}
        />
        <Route path="/savedItems" element={<SavedItems />} />

      </Routes>

      {loader && (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
