

import './App.css';
import Navbar from './navbar.js';
import Home from './home';
import About from './About';
import Post  from './Post';

function App() {
  return (
    <div className="App">
        <Navbar />
        {/* <Home/> */}
        <Post/>
        <About/>
    </div>
  ); 
}

export default App;
