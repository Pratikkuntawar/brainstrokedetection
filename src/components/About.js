// import React from 'react';
// import strokeImage from '../images/stroke_image.jpg'; // Replace with your stroke image
// import './About.css'; // Make sure this path is correct

// function About() {
//   return (
//     <div className='container mt-5'>
//       <div className='row'>
//         {/* Left Column: Brain Stroke Definition */}
//         <div className='col-lg-6 text-container'>
//           <h2 className="heading">What is Brain Stroke?</h2>
//           <p className="definition">
     
//             A brain stroke occurs when there is an interruption of blood supply to the brain, leading to brain cell death. This interruption can result from a blockage in a blood vessel (ischemic stroke) or a rupture of a blood vessel (hemorrhagic stroke). Ischemic strokes account for about 87% of strokes and can occur due to blood clots forming in arteries (thrombotic stroke) or traveling from other body parts (embolic stroke). In contrast, hemorrhagic strokes occur when a blood vessel bursts, causing bleeding in or around the brain, often linked to high blood pressure or aneurysms. A transient ischemic attack (TIA), or "mini-stroke," is a temporary interruption of blood flow that may last only a few minutes without permanent damage, yet it serves as a crucial warning sign.
//           </p>
//         </div>

//         {/* Right Column: Image */}
//         <div className='col-lg-6 image-container d-flex justify-content-center'>
//           <img 
//             src={strokeImage} 
//             alt='Brain Stroke Illustration' 
//             className='img-fluid rounded'
//           />
//         </div>
//       </div>

//        <h2 id="h2">Types Of Brain Strokes</h2>
     
//       <div className='row'>
//         {/* Left Card: Ischemic Stroke */}
//         <div className='col-lg-6 mb-4 textcontainer'>
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title">Ischemic Stroke</h2>
//               <p className="card-text">
//                 An ischemic stroke occurs when a blood vessel supplying blood to the brain is obstructed. This can happen due to blood clots forming in the arteries (thrombotic stroke) or clots traveling from other parts of the body (embolic stroke). Ischemic strokes account for approximately 87% of all strokes. The lack of blood flow can lead to brain cell death, and timely treatment is essential to restore blood supply and minimize damage.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Card: Hemorrhagic Stroke */}
//         <div className='col-lg-6 mb-4'>
//           <div className="card ">
//             <div className="card-body ">
//               <h2 className="card-title ">Hemorrhagic Stroke</h2>
//               <p className="card-text ">
//                 A hemorrhagic stroke occurs when a blood vessel in the brain bursts, leading to bleeding in or around the brain. This type of stroke can result from high blood pressure, aneurysms, or arteriovenous malformations (AVMs). The bleeding puts pressure on surrounding brain tissue, causing damage and impairing function. Immediate medical intervention is critical to manage bleeding and reduce complications.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <h2 className=" symptoms text-center mb-4">Symptoms of Brain Stroke</h2>
//       <div className='row'>
//         {/* Row 1: Symptoms 1, 2, and 3 */}
//         <div className='col-lg-4 mb-4'>
//           <div className="card d">
//             <div className="card-body b">
//               <h5 className="card-title t1">Sudden Numbness</h5>
//               <p className="card-text t2">
//                 Sudden numbness or weakness in the face, arm, or leg, especially on one side of the body.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className='col-lg-4 mb-4'>
//           <div className="card d">
//             <div className="card-body b">
//               <h5 className="card-title t1">Confusion</h5>
//               <p className="card-text 2">
//                 Sudden confusion, trouble speaking, or difficulty understanding as well as listening  speech.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className='col-lg-4 mb-4'>
//           <div className="card d">
//             <div className="card-body b">
//               <h5 className="card-title t1">Vision Problems</h5>
//               <p className="card-text t2">
//                 Sudden trouble seeing in one or both eyes, such as blurry or double vision which is significant symptom of stroke.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='row'>
//         {/* Row 2: Symptoms 4, 5, and 6 */}
//         <div className='col-lg-4 mb-4'>
//           <div className="card d">
//             <div className="card-body b">
//               <h5 className="card-title t1">Walking Difficulties</h5>
//               <p className="card-text t2">
//               Sudden dizziness, loss of balance, and impaired coordination can hinder walking and risk injuries.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className='col-lg-4 mb-4'>
//           <div className="card d">
//             <div className="card-body b1">
//               <h5 className="card-title t1">Severe Headache</h5>
//               <p className="card-text t2">
//                 Sudden severe headache with no known cause, which may indicate a hemorrhagic stroke.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className='col-lg-4 mb-4'>
//           <div className="card d">
//             <div className="card-body b">
//               <h5 className="card-title t1">Face Drooping</h5>
//               <p className="card-text t2">
//                 One side of the face may droop or feel numb; ask the person to smile to check for asymmetry.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
     
//   );
// }

// export default About;





import React from 'react';
import strokeImage from '../images/stroke_image.jpg'; // Replace with your stroke image
import './About.css'; // Make sure this path is correct

function About() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        {/* Left Column: Brain Stroke Definition */}
        <div className='col-lg-6 text-container'>
          <h2 className="heading">What is Brain Stroke?</h2>
          <p className="definition">
     
            A brain stroke occurs when there is an interruption of blood supply to the brain, leading to brain cell death. This interruption can result from a blockage in a blood vessel (ischemic stroke) or a rupture of a blood vessel (hemorrhagic stroke). Ischemic strokes account for about 87% of strokes and can occur due to blood clots forming in arteries (thrombotic stroke) or traveling from other body parts (embolic stroke). In contrast, hemorrhagic strokes occur when a blood vessel bursts, causing bleeding in or around the brain, often linked to high blood pressure or aneurysms. A transient ischemic attack (TIA), or "mini-stroke," is a temporary interruption of blood flow that may last only a few minutes without permanent damage, yet it serves as a crucial warning sign.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className='col-lg-6 image-container d-flex justify-content-center'>
          <img 
            src={strokeImage} 
            alt='Brain Stroke Illustration' 
            className='img-fluid rounded'
          />
        </div>
      </div>

       <h2 id="h2">Types Of Brain Strokes</h2>
     
      <div className='row'>
        {/* Left Card: Ischemic Stroke */}
        <div className='col-lg-6 mb-4 textcontainer'>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Ischemic Stroke</h2>
              <p className="card-text">
                An ischemic stroke occurs when a blood vessel supplying blood to the brain is obstructed. This can happen due to blood clots forming in the arteries (thrombotic stroke) or clots traveling from other parts of the body (embolic stroke). Ischemic strokes account for approximately 87% of all strokes. The lack of blood flow can lead to brain cell death, and timely treatment is essential to restore blood supply and minimize damage.
              </p>
            </div>
          </div>
        </div>

        {/* Right Card: Hemorrhagic Stroke */}
        <div className='col-lg-6 mb-4'>
          <div className="card ">
            <div className="card-body ">
              <h2 className="card-title ">Hemorrhagic Stroke</h2>
              <p className="card-text ">
                A hemorrhagic stroke occurs when a blood vessel in the brain bursts, leading to bleeding in or around the brain. This type of stroke can result from high blood pressure, aneurysms, or arteriovenous malformations (AVMs). The bleeding puts pressure on surrounding brain tissue, causing damage and impairing function. Immediate medical intervention is critical to manage bleeding and reduce complications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className=" symptoms text-center mb-4">Symptoms of Brain Stroke</h2>
      <div className='row'>
        {/* Row 1: Symptoms 1, 2, and 3 */}
        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b">
              <h5 className="card-title t1">Sudden Numbness</h5>
              <p className="card-text t2">
                Sudden numbness or weakness in the face, arm, or leg, especially on one side of the body.
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b">
              <h5 className="card-title t1">Confusion</h5>
              <p className="card-text t2">
                Sudden confusion, trouble speaking, or difficulty understanding as well as listening  speech.
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b">
              <h5 className="card-title t1">Vision Problems</h5>
              <p className="card-text t2">
                Sudden trouble seeing in one or both eyes is significant symptom of stroke.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        {/* Row 2: Symptoms 4, 5, and 6 */}
        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b">
              <h5 className="card-title t1">Walking Difficulties</h5>
              <p className="card-text t2">
              Sudden dizziness, loss of balance, and impaired coordination can hinder walking and risk injuries.
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b1">
              <h5 className="card-title t1">Severe Headache</h5>
              <p className="card-text t2">
                Sudden severe headache with no known cause, which may indicate a hemorrhagic stroke.
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b">
              <h5 className="card-title t1">Face Drooping</h5>
              <p className="card-text t2">
                One side of the face may droop or feel numb; ask the person to smile to check for asymmetry.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
     
  );
}

export default About;


// import React from 'react';
// import strokeImage from '../images/stroke_image.jpg'; // Replace with your stroke image

// function About() {
//   return (
//     <div className='container mt-5'>
//       <div className='row align-items-center'>
//         {/* Left Column: Brain Stroke Definition */}
//         <div className='col-lg-6 text-container'>
//           <h2 className='heading'>What is Brain Stroke?</h2>
//           <p className='description'>
//             A brain stroke occurs when there is an interruption of blood supply to the brain, 
//             leading to brain cell death. Stroke is a medical emergency, and prompt treatment 
//             is crucial to improving outcomes and reducing complications.
//           </p>
//         </div>

//         {/* Right Column: Image */}
//         <div className='col-lg-6 d-flex justify-content-center'>
//           <img 
//             src={strokeImage} 
//             alt='Brain Stroke Illustration' 
//             className='img-fluid rounded shadow stroke-image'
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;


// import React from 'react';
// //import './About.css'; // Optional: If you need custom CSS styling
// import strokeImage from '../images/stroke_image.jpg'; // Replace with your stroke image
// function About() {
//   return (
//     <div className='container mt-5'>
//       <div className='row align-items-center'>
//         {/* Left Column: Brain Stroke Definition */}
//         <div className='col-lg-6'>
//           <section className='definition'>
//             <h2>What is Brain Stroke?</h2>
//             <p>
//               A brain stroke occurs when there is an interruption of blood supply to the brain, 
//               leading to brain cell death. Stroke is a medical emergency, and prompt treatment 
//               is crucial to improving outcomes and reducing complications.
//             </p>
//           </section>
//         </div>

//         {/* Right Column: Image */}
//         <div className=' leftdiv col-lg-6 d-flex justify-content-center'>
//           <img 
//             src={strokeImage} 
//             alt='Brain Stroke Illustration' 
//             className='img-fluid rounded shadow'
//             height={500}
//             width={500} 
            
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



// About.js
// import React from 'react';
// import './About.css';
// import strokeImage from '../images/stroke_image.jpg'; // Replace with your stroke image

// const About = () => {
//   return (
//     <div className="about-container">
//       {/* What is Brain Stroke and Image Section */}
//       <div className="grid-container">
//         <div className="grid-item grid-5">
//           <section className="definition">
//             <h2>What is Brain Stroke?</h2>
//             <p>
//               A brain stroke occurs when there is an interruption of blood supply to the brain, 
//               leading to brain cell death. Stroke is a medical emergency, and prompt treatment 
//               is crucial to improving outcomes and reducing complications.
//             </p>
//           </section>
//         </div>
//         <div className="grid-item grid-5">
//           <img src={strokeImage} alt="Brain Stroke Illustration" className="stroke-image" />
//         </div>
//       </div>

//       {/* Types of Strokes Section */}
//       <h2 className="types-title">Types of Strokes</h2>
//       <div className="grid-container">
//         <div className="grid-item grid-5">
//           <div className="type-card">
//             <h3>Ischemic Stroke</h3>
//             <p>
//               Ischemic stroke occurs when a blood clot blocks or narrows a blood vessel, 
//               reducing blood flow to the brain. It accounts for the majority of stroke cases.
//             </p>
//           </div>
//         </div>
//         <div className="grid-item grid-5">
//           <div className="type-card">
//             <h3>Hemorrhagic Stroke</h3>
//             <p>
//               Hemorrhagic stroke occurs when a blood vessel in the brain bursts, 
//               causing bleeding and damage to brain tissue. This type of stroke is 
//               often associated with high blood pressure.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Symptoms Section */}
//       <h2 className="symptoms-title">Symptoms of Brain Stroke</h2>
//       <div className="grid-container">
//         <div className="grid-item grid-3">
//           <div className="symptom-card">
//             <h4 className="symptom-title">Sudden Weakness</h4>
//             <p>
//               Numbness or weakness in the face, arm, or leg, especially on one side of the body.
//             </p>
//           </div>
//         </div>
//         <div className="grid-item grid-3">
//           <div className="symptom-card">
//             <h4 className="symptom-title">Trouble Speaking</h4>
//             <p>
//               Difficulty speaking or understanding speech is a common sign of stroke.
//             </p>
//           </div>
//         </div>
//         <div className="grid-item grid-3">
//           <div className="symptom-card">
//             <h4 className="symptom-title">Vision Problems</h4>
//             <p>
//               Sudden blurred or blackened vision in one or both eyes can indicate a stroke.
//             </p>
//           </div>
//         </div>
//         <div className="grid-item grid-3">
//           <div className="symptom-card">
//             <h4 className="symptom-title">Severe Headache</h4>
//             <p>
//               An intense headache with no known cause may indicate hemorrhagic stroke.
//             </p>
//           </div>
//         </div>
//         <div className="grid-item grid-3">
//           <div className="symptom-card">
//             <h4 className="symptom-title"> Loss of Balance</h4>
//             <p>
//               Stroke may cause dizziness, difficulty walking, or loss of coordination.
//             </p>
//           </div>
//         </div>
//         <div className="grid-item grid-3">
//           <div className="symptom-card">
//             <h4 className="symptom-title">Difficulty Swallowing</h4>
//             <p>
//               Difficulty swallowing or drooping on one side of the face can be a stroke sign.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// About.js
// import React from 'react';
// import './About.css';
// import strokeImage from '../images/stroke_image.jpg'; // Replace with your stroke image

// const About = () => {
//   return (
//     <div className="about-container">
//       {/* Section with Image and Definition */}
//       <div className="row">
//         <div className="col-6">
//           <section className="definition">
//             <h2>What is Brain Stroke?</h2>
//             <p>
//               A brain stroke occurs when there is an interruption of blood supply to the brain, leading to brain cell death.
//               Stroke is a medical emergency, and prompt treatment is crucial to improving outcomes and reducing complications.
//             </p>
//           </section>
//         </div>
//         <div className="col-6">
//           <img src={strokeImage} alt="Brain Stroke Illustration" className="stroke-image" />
//         </div>
//       </div>

//       {/* Types of Strokes */}
//       <h2 className="types-title">Types of Strokes</h2>
//       <div className="types-container">
//         <div className="type-card">
//           <h3>Ischemic Stroke</h3>
//           <p>
//             Ischemic stroke occurs when a blood clot blocks or narrows a blood vessel, reducing blood flow to the brain.
//             It accounts for the majority of stroke cases.
//           </p>
//         </div>
//         <div className="type-card">
//           <h3>Hemorrhagic Stroke</h3>
//           <p>
//             Hemorrhagic stroke occurs when a blood vessel in the brain bursts, causing bleeding and damage to brain tissue.
//             This type of stroke is often associated with high blood pressure.
//           </p>
//         </div>
//       </div>

//       {/* Symptoms of Brain Stroke */}
//       <h2 className="symptoms-title">Symptoms of Brain Stroke</h2>
//       <div className="symptoms-container">
//         <div className="symptom-card">
//           <h4 className="symptom-title">Sudden Numbness or Weakness</h4>
//           <p className="symptom-description">
//             Numbness or weakness in the face, arm, or leg, especially on one side of the body, is a common sign of stroke.
//           </p>
//         </div>
//         <div className="symptom-card">
//           <h4 className="symptom-title">Confusion or Trouble Speaking</h4>
//           <p className="symptom-description">
//             The person may have trouble speaking or understanding speech, indicating brain function impairment.
//           </p>
//         </div>
//         <div className="symptom-card">
//           <h4 className="symptom-title">Vision Problems</h4>
//           <p className="symptom-description">
//             Sudden vision issues, such as blurred or blackened vision in one or both eyes, can indicate a stroke.
//           </p>
//         </div>
//         <div className="symptom-card">
//           <h4 className="symptom-title">Severe Headache</h4>
//           <p className="symptom-description">
//             An intense headache with no known cause may indicate hemorrhagic stroke due to a ruptured blood vessel.
//           </p>
//         </div>
//         <div className="symptom-card">
//           <h4 className="symptom-title">Dizziness or Loss of Balance</h4>
//           <p className="symptom-description">
//             Stroke may cause sudden dizziness, difficulty walking, or a loss of balance and coordination.
//           </p>
//         </div>
//         <div className="symptom-card">
//           <h4 className="symptom-title">Difficulty Swallowing</h4>
//           <p className="symptom-description">
//             Swallowing difficulty or drooping on one side of the face may indicate stroke-related muscle weakness.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



// import React from 'react';
// import './About.css';
// import strokeImage from '../images/stroke_image.jpg'; // Replace with your stroke-related image

// const About = () => {
//   return (
//     <div className="about-container">
//       {/* Section with Image and Definition */}
//       <div className="row">
//         <div className="col-6">
//           <section className="definition">
//             <h2>What is Brain Stroke?</h2>
//             <p>
//               A brain stroke occurs when there is an interruption of blood supply to the brain, leading to brain cell death. 
//               Stroke is a medical emergency, and prompt treatment is crucial to improving outcomes and reducing complications.
//             </p>
//           </section>
//         </div>
//         <div className="col-6">
//           <img src={strokeImage} alt="Brain Stroke Illustration" className="stroke-image" height={500} width={500} />
//         </div>
//       </div>

//       {/* Types of Strokes */}
//       <h2 className="types-title">Types of Strokes</h2>
//       <div className="types-container">
//         <div className="type-card">
//           <h3>Ischemic Stroke</h3>
//           <p>
//             Ischemic stroke occurs when a blood clot blocks or narrows a blood vessel, reducing blood flow to the brain.
//             It accounts for the majority of stroke cases.
//           </p>
//         </div>
//         <div className="type-card">
//           <h3>Hemorrhagic Stroke</h3>
//           <p>
//             Hemorrhagic stroke occurs when a blood vessel in the brain bursts, causing bleeding and damage to brain tissue.
//             This type of stroke is often associated with high blood pressure.
//           </p>
//         </div>
//       </div>

//       {/* Symptoms of Brain Stroke */}
//       <h2 className="symptoms-title">Symptoms of Brain Stroke</h2>
//       <div className="symptoms-container">
//         <div className="symptom-card">Sudden numbness or weakness in face, arm, or leg</div>
//         <div className="symptom-card">Confusion, trouble speaking, or understanding</div>
//         <div className="symptom-card">Sudden vision problems in one or both eyes</div>
//         <div className="symptom-card">Severe headache with no known cause</div>
//         <div className="symptom-card">Dizziness, trouble walking, or loss of balance</div>
//         <div className="symptom-card">Difficulty swallowing or drooping face</div>
//       </div>
//     </div>
//   );
// };

// export default About;


// import React from 'react';
// import './About.css'; // Ensure to import your CSS styles

// const About = () => {
//   // Data for types of stroke
//   const typesOfStroke = [
//     {
//       title: 'Ischemic Stroke',
//       description: 'The most common type of stroke, caused by a blockage in a blood vessel supplying blood to the brain.',
//     },
//     {
//       title: 'Hemorrhagic Stroke',
//       description: 'Occurs when a weakened blood vessel ruptures and bleeds into the surrounding brain.',
//     },
//     {
//       title: 'Transient Ischemic Attack (TIA)',
//       description: 'Often called a mini-stroke, TIA is caused by a temporary decrease in blood supply to part of the brain.',
//     },
//   ];

//   // Data for symptoms
//   const symptoms = [
//     {
//       name: 'Numbness or Weakness',
//       description: 'Sudden numbness or weakness in the face, arm, or leg, especially on one side of the body.',
//     },
//     {
//       name: 'Difficulty Speaking',
//       description: 'Trouble speaking or understanding speech, or confusion about what others are saying.',
//     },
//     {
//       name: 'Vision Problems',
//       description: 'Sudden trouble seeing in one or both eyes, such as blurred or blackened vision.',
//     },
//     {
//       name: 'Severe Headache',
//       description: 'A sudden, severe headache with no known cause, often described as the worst headache ever experienced.',
//     },
//     {
//       name: 'Dizziness or Loss of Balance',
//       description: 'Sudden dizziness, loss of balance, or coordination problems.',
//     },
//     {
//       name: 'Nausea or Vomiting',
//       description: 'Feeling nauseous or experiencing vomiting, especially in conjunction with severe headache.',
//     },
//   ];

//   return (
//     <div className="about-page">
//       <h1>About Brain Stroke</h1>
      
//       <section className="definition">
//         <h2>What is Brain Stroke?</h2>
//         <p>
//           A brain stroke occurs when there is an interruption of blood supply to the brain, leading to brain cell death. 
//           Stroke is a medical emergency, and prompt treatment is crucial to improving outcomes and reducing complications.
//         </p>
//       </section>

//       <section className="stroke-types">
//         <h2>Types of Brain Stroke</h2>
//         {typesOfStroke.map((stroke, index) => (
//           <div className="stroke-card" key={index}>
//             <h3>{stroke.title}</h3>
//             <p>{stroke.description}</p>
//           </div>
//         ))}
//       </section>

//       <section className="symptoms">
//         <h2>Symptoms of Brain Stroke</h2>
//         <div className="symptoms-grid">
//           {symptoms.map((symptom, index) => (
//             <div className="symptom-card" key={index}>
//               <h3>{symptom.name}</h3>
//               <p>{symptom.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

