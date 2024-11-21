import React, { useState } from 'react';
import './Upload.css'; // Custom CSS for styling

function Upload() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.size > maxFileSize) {
        setError('File size exceeds 10 MB. Please upload a smaller file.');
        setImage(null);
      } else {
        setError('');
        setImage(URL.createObjectURL(file)); // Set preview image
      }
    } else {
      setImage(null);
    }
  };

  // Function to trigger file input click
  const triggerFileInput = () => {
    document.getElementById('file-upload').click();
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload MRI Image for Analysis</h2>

      <div className="instructions">
        <h3>Instructions:</h3>
        <ul>
          <li><strong>Supported formats:</strong> JPEG, PNG</li>
          <li><strong>Maximum file size:</strong> 10 MB</li>
          <li><strong>Ensure the image is focused and clear for accurate analysis.</strong></li>
        </ul>
      </div>

      <div className="upload-input">
        {/* Hidden File Input */}
        <input
          id="file-upload"
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
          style={{ display: 'none' }} // Hide the file input
        />
        
        {/* Button to Trigger File Input */}
        <button className="upload-btn" onClick={triggerFileInput}>
          Select Image
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {image && (
        <div className="image-preview-container">
          <h4>Image Preview:</h4>
          <img src={image} alt="Uploaded MRI" className="image-preview" />
          <p className="analysis-message">
            <strong>Here is the complete analysis of your image.</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default Upload;


// import React, { useState } from 'react';
// import './Upload.css'; // Custom CSS for styling

// function Upload() {
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState('');
//   const maxFileSize = 10 * 1024 * 1024; // 10MB

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       if (file.size > maxFileSize) {
//         setError('File size exceeds 10 MB. Please upload a smaller file.');
//         setImage(null);
//       } else {
//         setError('');
//         setImage(URL.createObjectURL(file)); // Set preview image
//       }
//     } else {
//       setImage(null);
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h2 className="upload-title">Upload MRI Image for Analysis</h2>

//       <div className="instructions">
//         <h3>Instructions:</h3>
//         <ul>
//           <li><strong>Supported formats:</strong> JPEG, PNG</li>
//           <li><strong>Maximum file size:</strong> 10 MB</li>
//           <li><strong>Ensure the image is focused and clear for accurate analysis.</strong></li>
//         </ul>

//       </div>

//       <div className="upload-input">
//         <label htmlFor="file-upload" className="upload-label">
//           <input
//             id="file-upload"
//             type="file"
//             accept=".jpg,.jpeg,.png"
//             onChange={handleFileChange}
//             hidden
//           />
//           <button className="upload-btn">Select Image</button>
//         </label>
//       </div>

//       {error && <p className="error-message">{error}</p>}

//       {image && (
//         <div className="image-preview-container">
//           <h4>Image Preview:</h4>
//           <img src={image} alt="Uploaded MRI" className="image-preview" />
//           <p className="analysis-message">
//             <strong>Here is the complete analysis of your image.</strong>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Upload;


// import React, { useState } from 'react';
// import './Upload.css'; // Custom CSS for styling

// function Upload() {
//   const [imageUploaded, setImageUploaded] = useState(false);

//   // Handle file upload change
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImageUploaded(true); // Show message when a file is uploaded
//     } else {
//       setImageUploaded(false); // Reset if no file is uploaded
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h2 className="upload-title">Upload MRI Image for Analysis</h2>

//       <div className="instructions">
//         <h3>Instructions for Use:</h3>
//         <ul>
//           <li>Supported file formats: JPEG, PNG</li>
//           <li>Maximum file size: 10 MB</li>
//           <li>Ensure the image is clear and focused.</li>
//         </ul>

//         <h3>User Input:</h3>
//         <p>If required, provide personal details or relevant medical history along with the image.</p>

//         <h3>Analysis Process:</h3>
//         <p>
//           Our system uses advanced machine learning models, including CNNs, to analyze MRI images. The expected time
//           for analysis may vary but usually takes a few minutes. You will receive a detailed report upon completion.
//         </p>

//         <h3>Privacy Assurance:</h3>
//         <p>
//           Your data is encrypted and securely stored. We ensure strict privacy policies to protect your information,
//           and no data is shared without your consent.
//         </p>
//       </div>

//       <div className="upload-input">
//         <input type="file" accept=".jpg,.jpeg,.png" onChange={handleFileChange} />
//       </div>

//       {imageUploaded && (
//         <p className="analysis-message">
//           <strong>Here is the complete analysis of your image.</strong>
//         </p>
//       )}
//     </div>
//   );
// }

// export default Upload;

