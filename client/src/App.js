import React, { Fragment } from 'react';

import './App.css';

import InputCity from "./components/InputCity";
import ListCity from "./components/ListCity";

function App() {
  return (
    <Fragment>
      <div className="container">
      <InputCity />
      <ListCity />
      </div>
    </Fragment>
  );
}

export default App;
