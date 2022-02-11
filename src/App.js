import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header';
import AllArticles from './components/AllArticle';
import Footer from './components/Footer';
import { GlobalStyle } from './GlobalStyle';
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/all-articles' element={<AllArticles/>}/>
      </Routes>
      <Footer/>
      
    </Router>
      
    
    
  );
}

export default App;
