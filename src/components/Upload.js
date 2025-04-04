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

//   // Function to trigger file input click
//   const triggerFileInput = () => {
//     document.getElementById('file-upload').click();
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
//         {/* Hidden File Input */}
//         <input
//           id="file-upload"
//           type="file"
//           accept=".jpg,.jpeg,.png"
//           onChange={handleFileChange}
//           style={{ display: 'none' }} // Hide the file input
//         />
        
//         {/* Button to Trigger File Input */}
//         <button className="upload-btn" onClick={triggerFileInput}>
//           Select Image
//         </button>
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

// import React, { useState } from "react";

// const Upload = () => {
//     const [file, setFile] = useState(null);
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState(null);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!file) {
//             alert("Please select a file first!");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const res = await fetch("https://final-year-pro-ut4k.onrender.com/predict", {
//                 method: "POST",
//                 body: formData,
//                 headers: {
//                     // No need to set 'Content-Type', browser sets it automatically for FormData
//                 },
//             });

//             if (!res.ok) {
//                 throw new Error(`Error: ${res.status} ${res.statusText}`);
//             }

//             const data = await res.json();
//             setResponse(data);
//             setError(null);
//         } catch (err) {
//             setError(err.message);
//             setResponse(null);
//         }
//     };

//     return (
//         <div>
//             <h2>Upload a File</h2>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleUpload}>Upload</button>

//             {response && (
//                 <div>
//                     <h3>Response:</h3>
//                     <pre>{JSON.stringify(response, null, 2)}</pre>
//                 </div>
//             )}

//             {error && (
//                 <div style={{ color: "red" }}>
//                     <h3>Error:</h3>
//                     <p>{error}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Upload;



// import React, { useState } from "react";
// import "./Upload.css"; // Ensure you have the corresponding CSS file

// const Upload = () => {
//     const [file, setFile] = useState(null);
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState(null);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!file) {
//             alert("Please select a file first!");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const res = await fetch("https://final-year-pro-ut4k.onrender.com/predict", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (!res.ok) {
//                 throw new Error(`Error: ${res.status} ${res.statusText}`);
//             }

//             const data = await res.json();
//             setResponse(data);
//             setError(null);
//         } catch (err) {
//             setError(err.message);
//             setResponse(null);
//         }
//     };

//     const getPredictionLabel = (predictedClass) => {
//         switch (predictedClass) {
//             case 0:
//                 return "Hemo (Hemorrhagic Stroke)";
//             case 1:
//                 return "Ischemic Stroke";
//             case 2:
//                 return "Normal Brain";
//             default:
//                 return "Unknown";
//         }
//     };

//     return (
//         <div className="upload-container">
//             <h2 className="upload-title">Upload MRI Image for Analysis</h2>

//             <div className="instructions">
//                 <h3>Instructions:</h3>
//                 <ul>
//                     <li><strong>Supported formats:</strong> JPEG, PNG</li>
//                     <li><strong>Maximum file size:</strong> 10 MB</li>
//                     <li><strong>Ensure the image is focused and clear for accurate analysis.</strong></li>
//                 </ul>
//             </div>

//             <div className="upload-input">
//                 <input type="file" onChange={handleFileChange} style={{ display: "none" }} id="file-upload" />
//                 <button className="upload-btn" onClick={() => document.getElementById("file-upload").click()}>Select Image</button>
//                 <button className="upload-btn" onClick={handleUpload}>Upload</button>
//             </div>

//             {error && (
//                 <div className="error-message">
//                     <h3>Error:</h3>
//                     <p>{error}</p>
//                 </div>
//             )}

//             {response && (
//                 <div className="result-container">
//                     <h3>Result of Brain Stroke Prediction:</h3>
//                     <p><strong>{getPredictionLabel(response.predicted_class)}</strong></p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Upload;
// import React, { useState } from "react";
//this is 1st version
// import React, { useState } from "react";
// import "./Upload.css"; // Ensure you have the corresponding CSS file

// const Upload = () => {
//     const [file, setFile] = useState(null);
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState(null);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!file) {
//             alert("Please select a file first!");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const res = await fetch("https://final-year-pro-ut4k.onrender.com/predict", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (!res.ok) {
//                 throw new Error(`Error: ${res.status} ${res.statusText}`);
//             }

//             const data = await res.json();
//             setResponse(data);
//             setError(null);
//         } catch (err) {
//             setError(err.message);
//             setResponse(null);
//         }
//     };

//     const getPredictionLabel = (predictedClass) => {
//         switch (predictedClass) {
//             case 0:
//                 return "Hemorrhagic Stroke";
//             case 1:
//                 return "Ischemic Stroke";
//             case 2:
//                 return "Normal Brain";
//             default:
//                 return "Unknown";
//         }
//     };

//     return (
//         <div className="upload-container">
//             <h2 className="upload-title">Upload MRI Image for Analysis</h2>

//             <div className="instructions">
//                 <h3>Instructions:</h3>
//                 <ul>
//                     <li><strong>Supported formats:</strong> JPEG, PNG</li>
//                     <li><strong>Maximum file size:</strong> 10 MB</li>
//                     <li><strong>Ensure the image is focused and clear for accurate analysis.</strong></li>
//                 </ul>
//             </div>

//             <div className="upload-input">
//                 <input type="file" onChange={handleFileChange} style={{ display: "none" }} id="file-upload" />
//                 <button className="upload-btn" onClick={() => document.getElementById("file-upload").click()}>Select Image</button>
//             </div>

//             {file && (
//                 <div className="image-preview" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", textAlign: "center", marginTop: "10px" }}>
//                     <img src={URL.createObjectURL(file)} alt="Selected" className="preview-img" style={{ maxWidth: "100%", height: "450px", display: "block", margin: "0 auto", animation: "pulse 1.5s infinite alternate" }} />
//                     <button className="upload-btn" onClick={handleUpload} style={{ marginTop: "10px" }}>Upload</button>
//                 </div>
//             )}

//             {error && (
//                 <div className="error-message">
//                     <h3>Error:</h3>
//                     <p>{error}</p>
//                 </div>
//             )}

//             {response && (
//                 <div className="result-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: "10px" }}>
//                     <strong>Result of Brain Stroke Prediction:</strong>
//                     <span style={{ marginTop: "10px", fontSize: "1.2rem", fontWeight: "bold" }}>{getPredictionLabel(response.predicted_class)}</span>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Upload;
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









// this is second version
// import React, { useState } from "react";
// import "./Upload.css"; // Ensure you have the corresponding CSS file

// const Upload = () => {
//     const [file, setFile] = useState(null);
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState(null);

//     const handleFileChange = (e) => {
//         const selectedFile = e.target.files[0];

//         if (selectedFile) {
//             setFile(selectedFile);
//         }
//     };

//     const handleUpload = async () => {
//         if (!file) {
//             alert("Please select a file first!");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const res = await fetch("https://final-year-pro-ut4k.onrender.com/predict", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (!res.ok) {
//                 throw new Error(`Error: ${res.status} ${res.statusText}`);
//             }

//             const data = await res.json();
//             setResponse(data);
//             setError(null);
//         } catch (err) {
//             setError(err.message);
//             setResponse(null);
//         }
//     };

//     const getPredictionLabel = (predictedClass) => {
//         switch (predictedClass) {
//             case 0:
//                 return "Hemorrhagic Stroke";
//             case 1:
//                 return "Ischemic Stroke";
//             case 2:
//                 return "Normal Brain";
//             default:
//                 return "Unknown";
//         }
//     };

//     return (
//         <div className="upload-container">
//             <h2 className="upload-title">Upload MRI Image for Analysis</h2>

//             <div className="instructions">
//                 <h3>Instructions:</h3>
//                 <ul>
//                     <li><strong>Supported formats:</strong> JPEG, PNG</li>
//                     <li><strong>Required image size:</strong> 512 x 512</li>
//                     <li><strong>Maximum file size:</strong> 10 MB</li>
//                 </ul>
//             </div>

//             <div className="upload-input">
//                 <input type="file" onChange={handleFileChange} style={{ display: "none" }} id="file-upload" />
//                 <button className="upload-btn" onClick={() => document.getElementById("file-upload").click()}>Select Image</button>
//             </div>

//             {file && (
//                 <div className="image-preview">
//                     <img src={URL.createObjectURL(file)} alt="Selected" className="preview-img" />
//                 </div>
//             )}

//             {file && <button className="upload-btn" onClick={handleUpload}>Upload</button>}

//             {error && (
//                 <div className="error-message">
//                     <h3>Error:</h3>
//                     <p>{error}</p>
//                 </div>
//             )}

//             {response && (
//                 <div className="result-container">
//                     <strong>Result of Brain Stroke Prediction:</strong>
//                     <span className="prediction-result">{getPredictionLabel(response.predicted_class)}</span>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Upload;

//this is latest with summary table
// import React, { useState } from "react";
// import "./Upload.css"; // Ensure you have the corresponding CSS file

// const Upload = () => {
//     const [file, setFile] = useState(null);
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState(null);
//     const [showSummary, setShowSummary] = useState(false);

//     const handleFileChange = (e) => {
//         const selectedFile = e.target.files[0];

//         if (selectedFile) {
//             setFile(selectedFile);
//         }
//     };

//     const handleUpload = async () => {
//         if (!file) {
//             alert("Please select a file first!");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const res = await fetch("https://final-year-pro-ut4k.onrender.com/predict", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (!res.ok) {
//                 throw new Error(`Error: ${res.status} ${res.statusText}`);
//             }

//             const data = await res.json();
//             setResponse(data);
//             setError(null);
//             setShowSummary(false);
//         } catch (err) {
//             setError(err.message);
//             setResponse(null);
//         }
//     };

//     const getPredictionLabel = (predictedClass) => {
//         switch (predictedClass) {
//             case 0:
//                 return "Hemorrhagic Stroke";
//             case 1:
//                 return "Ischemic Stroke";
//             case 2:
//                 return "Normal Brain";
//             default:
//                 return "Unknown";
//         }
//     };

//     return (
//         <div className="upload-container">
//             <h2 className="upload-title">Upload MRI Image for Analysis</h2>

//             <div className="instructions">
//                 <h3>Instructions:</h3>
//                 <ul>
//                     <li><strong>Supported formats:</strong> JPEG, PNG</li>
//                     <li><strong>Required image size:</strong> 512 x 512</li>
//                     <li><strong>Maximum file size:</strong> 10 MB</li>
//                 </ul>
//             </div>

//             <div className="upload-input">
//                 <input type="file" onChange={handleFileChange} style={{ display: "none" }} id="file-upload" />
//                 <button className="upload-btn" onClick={() => document.getElementById("file-upload").click()}>Select Image</button>
//             </div>

//             {file && (
//                 <div className="image-preview">
//                     <img src={URL.createObjectURL(file)} alt="Selected" className="preview-img" />
//                 </div>
//             )}

//             {file && <button className="upload-btn" onClick={handleUpload}>Upload</button>}

//             {error && (
//                 <div className="error-message">
//                     <h3>Error:</h3>
//                     <p>{error}</p>
//                 </div>
//             )}

//             {response && (
//                 <div className="result-container">
//                     <strong>Result of Brain Stroke Prediction:</strong>
//                     <span className="prediction-result">{getPredictionLabel(response.predicted_class)}</span>
//                     {(response.predicted_class === 0 || response.predicted_class === 1) && (
//                         <button className="summary-btn" onClick={() => setShowSummary(!showSummary)}>
//                             {showSummary ? "Hide Summary" : "Show Summary"}
//                         </button>
//                     )}
//                 </div>
//             )}

//             {showSummary && (
//                 <div className="summary-table">
//                     <h3>📝 Stroke Prediction Summary Table</h3>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Feature</th>
//                                 <th>Result / Value</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>Prediction</td>
//                                 <td>🧠 {getPredictionLabel(response.predicted_class)}</td>
//                             </tr>
//                             <tr>
//                                 <td>Confidence Level</td>
//                                 <td>📊 92% (Model Accuracy)</td>
//                             </tr>
//                             <tr>
//                                 <td>Possible Symptoms</td>
//                                 <td>Weakness, Speech Difficulty (if applicable)</td>
//                             </tr>
//                             <tr>
//                                 <td>Suggested Next Step</td>
//                                 <td>🩺 Consult Neurologist / Further MRI Scan</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Upload;
import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [showSummary, setShowSummary] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("https://final-year-pro-ut4k.onrender.com/predict", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);

            const data = await res.json();
            setResponse(data);
            setError(null);
            setShowSummary(false);
        } catch (err) {
            setError(err.message);
            setResponse(null);
        }
    };

    const getPredictionLabel = (predictedClass) => {
        switch (predictedClass) {
            case 0:
                return "Hemorrhagic Stroke";
            case 1:
                return "Ischemic Stroke";
            case 2:
                return "Normal Brain";
            default:
                return "Unknown";
        }
    };

    return (
        <div className="upload-container">
            <h2 className="upload-title">Upload MRI Image for Analysis</h2>

            <div className="instructions">
                <h3>Instructions:</h3>
                <ul>
                    <li><strong>Supported formats:</strong> JPEG, PNG</li>
                    <li><strong>Required image size:</strong> 512 x 512</li>
                    <li><strong>Maximum file size:</strong> 10 MB</li>
                </ul>
            </div>

            <div className="upload-input">
                <input type="file" onChange={handleFileChange} style={{ display: "none" }} id="file-upload" />
                <button className="upload-btn" onClick={() => document.getElementById("file-upload").click()}>Select Image</button>
            </div>

            {file && (
                <div className="image-preview">
                    <img src={URL.createObjectURL(file)} alt="Selected" className="preview-img" />
                </div>
            )}

            {file && <button className="upload-btn" onClick={handleUpload}>Upload</button>}

            {error && (
                <div className="error-message">
                    <h3>Error:</h3>
                    <p>{error}</p>
                </div>
            )}

            {response && (
                <div className="result-container">
                    <strong>Result of Brain Stroke Prediction:</strong>
                    <span className="prediction-result">{getPredictionLabel(response.predicted_class)}</span>

                    {(response.predicted_class === 0 || response.predicted_class === 1) && (
                        <button
                            className="summary-btn"
                            onClick={() => setShowSummary(!showSummary)}
                        >
                            {showSummary ? "Hide Summary" : "Show Summary"}
                        </button>
                    )}
                </div>
            )}

            {/* Summary table - only shows when showSummary is true */}
            {showSummary && response && (
                <div className="summary-table">
                    <h3>📝 Stroke Prediction Summary</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Result / Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Prediction</td>
                                <td>🧠 {getPredictionLabel(response.predicted_class)}</td>
                            </tr>
                            <tr>
                                <td>Confidence Level</td>
                                <td>📊 92% (Model Accuracy)</td>
                            </tr>
                            <tr>
                                <td>Possible Symptoms</td>
                                <td>Weakness, Speech Difficulty (if applicable)</td>
                            </tr>
                            <tr>
                                <td>Suggested Next Step</td>
                                <td>🩺 Consult Neurologist / Further MRI Scan</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Upload;







// import React, { useState } from "react";

// const BrainStrokePrediction = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [processedImage, setProcessedImage] = useState(null);
//   const [predictedClass, setPredictedClass] = useState(null);
//   const [confidenceScore, setConfidenceScore] = useState(null);
//   const [uploaded, setUploaded] = useState(false);
//   const [showSummary, setShowSummary] = useState(false);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//     setProcessedImage(null);
//     setPredictedClass(null);
//     setConfidenceScore(null);
//     setUploaded(false);
//     setShowSummary(false);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert("Please select an image first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await fetch("https://final-year-pro-ut4k.onrender.com/predict/", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error(`API error: ${response.status}`);
//       }

//       // ✅ Extract predicted class & confidence score from response headers
//       const predictedClass = response.headers.get("x-predicted-class");
//       const confidenceScore = response.headers.get("x-confidence-score");

//       console.log("Predicted Class:", predictedClass);
//       console.log("Confidence Score:", confidenceScore);

//       if (!predictedClass) {
//         alert("Prediction failed. No class received.");
//         return;
//       }

//       const blob = await response.blob();
//       setProcessedImage(URL.createObjectURL(blob));
//       setPredictedClass(predictedClass.trim());
//       setConfidenceScore(confidenceScore ? confidenceScore.trim() : "N/A");
//       setUploaded(true);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("Error processing the image. Please try again.");
//     }
//   };

//   const getClassLabel = (predictedClass) => {
//     switch (predictedClass) {
//       case "0":
//         return "Hemorrhagic Stroke";
//       case "1":
//         return "Ischemic Stroke";
//       case "2":
//         return "Normal Brain";
//       default:
//         return "Unknown";
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>Brain Stroke Detection</h2>

//       {/* File Upload Input */}
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       <br /><br />

//       {/* Upload Button */}
//       <button onClick={handleUpload}>Upload & Predict</button>

//       {/* Show Processed Image */}
//       {uploaded && processedImage && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Processed Image</h3>
//           <img src={processedImage} alt="Processed" style={{ width: "300px", border: "1px solid #ccc" }} />
//         </div>
//       )}

//       {/* Show Predicted Class */}
//       {predictedClass && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Brain Stroke Prediction: {getClassLabel(predictedClass)}</h3>
//         </div>
//       )}

//       {/* Show "View Summary" Button */}
//       {predictedClass && (
//         <div style={{ marginTop: "10px" }}>
//           <button onClick={() => setShowSummary(true)}>View Summary</button>
//         </div>
//       )}

//       {/* Summary Table */}
//       {showSummary && predictedClass && (
//         <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px", display: "inline-block" }}>
//           <h4>Summary</h4>
//           <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr>
//                 <th>Parameter</th>
//                 <th>Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Predicted Class</td>
//                 <td>{getClassLabel(predictedClass)}</td>
//               </tr>
//               <tr>
//                 <td>Confidence Score</td>
//                 <td>{confidenceScore ? confidenceScore : "N/A"}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BrainStrokePrediction;




// import React, { useState } from "react";

// const Upload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [inputImage, setInputImage] = useState(null);
//   const [processedImage, setProcessedImage] = useState(null);
//   const [predictedClass, setPredictedClass] = useState(null);
//   const [confidenceScore, setConfidenceScore] = useState(null);
//   const [showSummary, setShowSummary] = useState(false);
//   const [uploaded, setUploaded] = useState(false);

//   // Handle file selection
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setInputImage(URL.createObjectURL(file));
//       setProcessedImage(null);
//       setPredictedClass(null);
//       setShowSummary(false);
//       setUploaded(false);
//     }
//   };

//   // Handle file upload
//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert("Please select an image first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await fetch("https://final-year-pro-ut4k.onrender.com/predict/", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error(API error: ${response.status});
//       }

//       const blob = await response.blob();
//       const headers = response.headers;

//       const predictedClass = headers.get("x-predicted-class");
//       const confidenceScore = headers.get("x-confidence-score");

//       setProcessedImage(URL.createObjectURL(blob));
//       setPredictedClass(predictedClass);
//       setConfidenceScore(confidenceScore);
//       setUploaded(true);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("Error processing the image. Please try again.");
//     }
//   };

//   // Map predicted class to readable labels
//   const getClassLabel = (predictedClass) => {
//     if (predictedClass === "0") return "Hemorrhagic Stroke";
//     if (predictedClass === "1") return "Ischemic Stroke";
//     if (predictedClass === "2") return "Normal Brain";
//     return "Unknown";
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       {/* Select Image Button */}
//       <input type="file" accept="image/*" onChange={handleFileChange} />
      
//       {/* Show Selected Image Before Upload */}
//       {inputImage && !uploaded && (
//         <div style={{ marginTop: "20px" }}>
//           <img src={inputImage} alt="Selected" style={{ width: "250px", height: "250px" }} />
//         </div>
//       )}

//       {/* Upload Button */}
//       {inputImage && (
//         <div style={{ marginTop: "20px" }}>
//           <button onClick={handleUpload}>Upload</button>
//         </div>
//       )}

//       {/* Show Images Side by Side After Upload */}
//       {inputImage && processedImage && uploaded && (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px 0" }}>
//           <img src={inputImage} alt="Input" style={{ width: "250px", height: "250px", marginRight: "20px" }} />
//           <img src={processedImage} alt="Processed" style={{ width: "250px", height: "250px" }} />
//         </div>
//       )}

//       {/* Predicted Class and View Summary Button */}
//       {predictedClass && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Brain Stroke Prediction: {getClassLabel(predictedClass)}</h3>
//           <button onClick={() => setShowSummary(!showSummary)}>View Summary</button>
//         </div>
//       )}

//       {/* Summary Table */}
//       {showSummary && (
//         <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px", display: "inline-block" }}>
//           <h4>Summary</h4>
//           <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr>
//                 <th>Parameter</th>
//                 <th>Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Predicted Class</td>
//                 <td>{getClassLabel(predictedClass)}</td>
//               </tr>
//               <tr>
//                 <td>Confidence Score</td>
//                 <td>{confidenceScore ? confidenceScore : "N/A"}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;

