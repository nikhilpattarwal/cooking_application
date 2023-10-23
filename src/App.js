import React, { useState } from 'react';
import { Home } from './components/home/home';
import { Navbar } from './components/navBar/navBar';
import { SavedItems } from './components/savedItems/savedItems';
import   "./App.css"
function App() {
  const [loader, setLoader] = useState(true);
  const [select, setSelect] = useState(true);
  return (
   <>
      <Navbar setSelectObj={{setSelect, select}}  />
      {select ? <Home setLoader={setLoader} /> : <SavedItems />}
  
      {loader && (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      )}
     </>
  );
}

export default App;
