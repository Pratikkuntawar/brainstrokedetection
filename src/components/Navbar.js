import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/brain_logo.webp';
import './Navbar.css'; // Import custom CSS for further styling

function Navbar() {
  return (
    <>
      <nav className=" navb navbar navbar-expand-lg navbar-dark bg-danger bg-opacity-0 px-4">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logo} 
            alt="BrainStroke logo" 
            height="60px" 
            width="150px" 
            className="me-3 logo-hover" // Added logo hover class
          />
          <h3 className="mb-0 text-white brand-name">Brain Stroke Detection</h3> {/* Brand name with custom class */}
        </NavLink>

        {/* Navbar toggle button for mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/" activeClassName="active">Home</NavLink> {/* Added nav-hover class */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/about" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/upload" activeClassName="active">Upload</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/faq" activeClassName="active">FAQ</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from 'react-router-dom';
// import logo from '../images/brain_logo.webp';
// import './Navbar.css'; // Import custom CSS for further styling

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-danger bg-opacity-0 px-4">
//         {/* Logo */}
//         <NavLink className="navbar-brand d-flex align-items-center" to="/">
//           <img 
//             src={logo} 
//             alt="BrainStroke logo" 
//             height="60px" 
//             width="150px" 
//             className="me-3"
//           />
//           <h3 className="mb-0 text-white">Brain Stroke Detection</h3>
//         </NavLink>

//         {/* Navbar toggle button for mobile view */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" // Updated to use 'data-bs-' for Bootstrap 5
//           data-bs-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar links */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto gap-4"> {/* Increased gap between items */}
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/" activeClassName="active">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/about" activeClassName="active">About</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/upload" activeClassName="active">Upload</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/faq" activeClassName="active">FAQ</NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from 'react-router-dom';
// import logo from '../images/brain_logo.webp';
// import './Navbar.css'; // Import custom CSS for further styling

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-danger  px-4">
//         {/* Logo */}
//         <NavLink className="navbar-brand d-flex align-items-center" to="/">
//           <img 
//             src={logo} 
//             alt="BrainStroke logo" 
//             height="60px" 
//             width="150px" 
//             className="me-3"
//           />
//           <h3 className="mb-0 text-white">Brain Stroke Detection</h3>
//         </NavLink>

//         {/* Navbar toggle button for mobile view */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-toggle="collapse" 
//           data-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar links */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto gap-3">
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/" activeClassName="active">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/about" activeClassName="active">About</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/upload" activeClassName="active">Upload</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white" to="/faq" activeClassName="active">FAQ</NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
// import {NavLink} from 'react-router-dom';
// import logo from '../images/brain_logo.webp';
// function Navbar() {
//   return (
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <NavLink  className="navbar-brand" to="#"><img src={logo} alt="brainStroke logo" height="80px" width="200px"/></NavLink >
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav ms-auto">
//       <li className="nav-item active">
//         <NavLink className="nav-link" to="/">Home </NavLink >
//       </li>
//       <li className="nav-item">
//         <NavLink  className="nav-link" to="/about">About</NavLink >
//       </li>
//       <li className="nav-item">
//         <NavLink  className="nav-link" to="/upload">Upload</NavLink >
//       </li>
//       <li className="nav-item">
//         <NavLink  className="nav-link" to="/faq">FAQ</NavLink >
//       </li>

//     </ul>
//   </div>
// </nav>
//     </>
//   );
// }

// export default Navbar;
