import './App.css';
import { BrowserRouter ,Route ,Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>

      </Routes>
    
    
    
    </BrowserRouter>
    
  );
}

export default App;
