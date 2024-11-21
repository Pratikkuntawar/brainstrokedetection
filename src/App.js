import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Upload from './components/Upload';
import FAQ from './components/FAQ';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;


// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Upload from './components/Upload';
// import FAQ from './components/FAQ';
// import {Route,Routes} from 'react-router-dom';
// function App() {
//   return (
//     <>
//     <Navbar/>
//     <Routes>
//     <Route path='/'>
//       <Home/>
//     </Route>
//     <Route path='/about'>
//       <About/>
//     </Route>
//     <Route path='/upload'>
//       <Upload/>
//     </Route>
//     <Route path='/faq'>
//       <FAQ/>
//     </Route>
//     </Routes>
//     </>
//   );
// }

// export default App;
