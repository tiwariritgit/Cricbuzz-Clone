import './App.css';
import Nav from './Nav'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Footer from './Footer'
import HomeCarousel from './component/Caro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <HomeCarousel />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="Rankings" element={<h1>Rankings</h1>} />
        <Route path="Stories" element={<h1>Top Stories</h1>} />
        <Route path="Fixtures" element={<h1>Fixtures</h1>} />
        <Route path="About" element={<h1>About</h1>} />
      </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
