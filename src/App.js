import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
    </>
      
    
    
  );
}

export default App;
