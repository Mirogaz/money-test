import React from 'react';
import { Route, Routes } from 'react-router';
import { HomePage } from '../../pages/HomePage/HomePage';
import { PageNotFound } from '../../pages/PageNotFound/PageNotFound';
import {Layout} from '../Layout/Layout';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
