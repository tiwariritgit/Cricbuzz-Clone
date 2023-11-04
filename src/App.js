import './App.css';
import Nav from './Nav'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Footer from './Footer'
import HomeCarousel from './component/Caro';
import AutoLayoutExample from './component/Box';
import Anu from './component/Ca';

// import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="App"  id="outer-container">
      <BrowserRouter>
      <Nav />
      {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
      {/* <div id="page-wrap">
        <h1>Cool Restaurant</h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div> */}
      <HomeCarousel />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="Rankings" element={<h1>Rankings</h1>} />
        <Route path="Stories" element={<h1>Top Stories</h1>} />
        <Route path="Fixtures" element={<h1>Fixtures</h1>} />
        <Route path="About" element={<h1>About</h1>} />
      </Routes>
      <Anu />
      <AutoLayoutExample />
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
