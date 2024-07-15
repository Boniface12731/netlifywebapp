import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router, Link } from 'react-router-dom';
 import ClaimForm from './ClaimForm';
import ClaimPolicy from './ClaimPolicy';
import {Greet} from './components/Greet';
import {Component} from 'react';
import { Boni } from './components/Greet';
import Welcome  from './components/Welcome';
import Details from './components/Details';
import DetailView from './components/DetailView';
import { Button, Switch } from 'antd';
import FormFilled from './components/FormFilled';


const App = () => {
   
    return ( 
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/form-filled" element={<FormFilled />}/>
      </Routes>
     
   );
}
export default App;
