import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import brainStrokeImage from '../images/brainstroke_image.webp';

const Home = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");

  const defaultDescription = `
   Brain stroke detection using machine learning provides a fast and accurate way to analyze 
          CT scan images, helping identify early signs of a stroke. Early detection plays a crucial role 
         in stroke management, where time is of the essence. With these technologies, medical professionals 
         can better predict, diagnose, and prevent life-threatening complications. This solution offers 
          healthcare providers real-time results, ensuring timely interventions and saving lives. With every 
         second being critical, the technology ensures fast diagnosis, minimizing the risks of permanent brain 
         damage and improving patient outcomes.
  `;

  const smallScreenDescription = `
    Brain stroke detection using machine learning provides a fast and accurate way to analyze 
          CT scan images, helping identify early signs of a stroke. Early detection plays a crucial role 
         in stroke management, where time is of the essence..
  `;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDescription(smallScreenDescription);
      } else {
        setDescription(defaultDescription);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleUploadClick = () => {
    navigate('/upload');
  };

  return (
    <div className="home-container" style={{ backgroundImage: `url(${brainStrokeImage})` }}>
      <div className="overlay">
        <h1 className="home-title">Brain Stroke Analysis Based on MRI Images</h1>
        <p className="home-description">{description}</p>
        <button className="upload-button" onClick={handleUploadClick}>Upload CT Scan</button>
      </div>
    </div>
  );
};

export default Home; // Ensure you are using default export


// // Home.js
// // Home.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import brainStrokeImage from '../images/brainstroke_image.webp';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleUploadClick = () => {
//     navigate('/upload');
//   };

//   return (
//     <div className="home-container" style={{ backgroundImage: `url(${brainStrokeImage})` }}>
//       <div className="overlay">
//         <h1 className="home-title">Brain Stroke Analysis Based on CT Scan Images</h1>
//         <p className="home-description">
//           Brain stroke detection using machine learning provides a fast and accurate way to analyze 
//           CT scan images, helping identify early signs of a stroke. Early detection plays a crucial role 
//           in stroke management, where time is of the essence. With these technologies, medical professionals 
//           can better predict, diagnose, and prevent life-threatening complications. This solution offers 
//           healthcare providers real-time results, ensuring timely interventions and saving lives. With every 
//           second being critical, the technology ensures fast diagnosis, minimizing the risks of permanent brain 
//           damage and improving patient outcomes.
//         </p>
//         <button className="upload-button" onClick={handleUploadClick}>
//           Upload CT Scan
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import brainStrokeImage from '../images/brainstroke_image.webp'; // Background image

// const Home = () => {
//   const navigate = useNavigate();

//   const handleUploadClick = () => {
//     navigate('/upload');
//   };

//   return (
//     <div className="home-container" style={{ backgroundImage: `url(${brainStrokeImage})` }}>
//       <div className="overlay">
//         <h1 className="home-title">Brain Stroke Analysis Based on CT Scan Images</h1>
//         {/* <p className="home-description">
//           Brain stroke detection using machine learning involves analyzing CT scan images to identify
//           potential strokes. By leveraging advanced algorithms, we can provide rapid assessments and
//           improve diagnosis accuracy, helping in timely medical interventions.
//         </p> */}
//         <p className="home-description">
//           Brain stroke detection using machine learning provides a fast and accurate way to analyze 
//           CT scan images, helping identify early signs of a stroke. Early detection plays a crucial role in stroke management, where time is of the essence. With 
//           the help of these technologies, medical professionals can better predict, diagnose, and prevent 
//           life-threatening complications. This solution offers healthcare providers real-time results, 
//           helping ensure timely medical interventions and saving lives when every second counts.  With every second 
//           being critical, the technology ensures real-time diagnosis and faster interventions, reducing 
//           the risks of permanent brain damage and other complications.
//         </p>
//         <button className="upload-button" onClick={handleUploadClick}>
//           Upload CT Scan
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import brainStrokeImage from '../images/brainstroke_image.webp'; // Background image

// const Home = () => {
//   const navigate = useNavigate();

//   const handleUploadClick = () => {
//     navigate('/upload');
//   };

//   return (
//     <div className="home-container" style={{ backgroundImage: `url(${brainStrokeImage})` }}>
//       <div className="overlay">
//         <h1 className="home-title">Brain Stroke Analysis Based on CT Scan Images</h1>
//         <p className="home-description">
//           Brain stroke detection using machine learning involves analyzing CT scan images to identify
//           potential strokes. By leveraging advanced algorithms, we can provide rapid assessments and
//           improve diagnosis accuracy, helping in timely medical interventions.
//         </p>
//         <button className="upload-button" onClick={handleUploadClick}>Upload CT Scan</button>
//       </div>
//     </div>
//   );
// };

// export default Home;


// // Home.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import brainStrokeImage from '../images/brainstroke_image.webp'; // Background image

// const Home = () => {
//   const navigate = useNavigate();

//   const handleUploadClick = () => {
//     navigate('/upload');
//   };

//   return (
//     <div className="home-container" style={{ backgroundImage: `url(${brainStrokeImage})` }}>
//       <div className="overlay">
//         <h1 className="home-title">Brain Stroke Analysis Based on CT Scan Images</h1>
//         <p className="home-description">
//           Brain stroke detection using machine learning involves analyzing CT scan images to identify
//           potential strokes. By leveraging advanced algorithms, we can provide rapid assessments and
//           improve diagnosis accuracy, helping in timely medical interventions.
//         </p>
//         <button className="upload-button" onClick={handleUploadClick}>
//             Upload CT Scan
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;


// // Home.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css'; // CSS file for styling
// import brainStrokeImage from '../images/brainstroke_image.webp'; // Import the image

// const Home = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const handleUploadClick = () => {
//     navigate('/upload'); // Navigate to Upload section
//   };

//   return (
//     <div
//       className="home-container"
//       style={{ 
//         backgroundImage: `url(${brainStrokeImage})`, 
//         marginTop: '0', // Inline style to remove margin
//         //padding: '0' // Inline style to remove padding
//       }}
//     >
//       <div className="overlay">
//         <h1 className="home-title">
//           Brain Stroke Analysis Based on CT Scan Images
//         </h1>
//         <button className="upload-button" onClick={handleUploadClick}>
//           Upload CT Scan
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;



// // Home.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css'; // Import the CSS styling

// const Home = () => {
//   const navigate = useNavigate(); // For navigation between pages

//   const handleUploadClick = () => {
//     navigate('/upload'); // Navigate to Upload section
//   };

//   return (
//     <div className="home-container">
//       <div className="overlay">
//         <h1 className="home-title">
//           Brain Stroke Analysis Based on CT Scan Images
//         </h1>
//         <button className="upload-button" onClick={handleUploadClick}>
//           Upload CT Scan
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

