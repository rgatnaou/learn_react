
import './App.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from './home';
import Post from './Post';
import About from './About';
import PostInfo from './PostInfo';

import Navbar from './navbar.js';
import Creat from './Creat';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/creat' element={<Creat/>}/>
                <Route path='/posts' element={<Post/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/posts/:id' element={<PostInfo/>}/>
                <Route path='/edit/:id' element={<Edit/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  ); 
}

export default App;
