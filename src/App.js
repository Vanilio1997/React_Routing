import './App.css';
import Preloader from './components/Preloader';
import Header from './components/Header';
import {Route,Routes,Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Category from './Pages/Category';
import Recipe from './Pages/Recipe';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container content'>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About/>} />
        <Route path='/contacts' element={<Contact/>} />
        <Route path='*' element={<NotFound />} />
        <Route path='/category/:name' element={<Category />} />
        <Route path='/meal/:id' element={<Recipe/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
