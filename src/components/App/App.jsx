import React from 'react';
import { Route, Routes } from 'react-router';
import {Layout} from '../Layout/Layout';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Layout/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
