
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import './FAQ.css'; // Import custom CSS

function FAQ() {
  const faqs = [
    {
      question: "What is a brain stroke, and why is early detection important?",
      answer: "A brain stroke occurs when the blood flow to a part of the brain is blocked or reduced, either due to a clot (ischemic stroke) or a ruptured blood vessel (hemorrhagic stroke). Without oxygen, brain cells begin to die within minutes, leading to serious damage or even death. Early detection allows for timely medical intervention, such as thrombolysis, which can restore blood flow and significantly improve recovery outcomes."
    },
    {
      question: "How accurate is the machine learning model?",
      answer: "The accuracy of the machine learning model depends on the quantity and quality of training data used. Models trained with diverse datasets from real-world cases perform better, with many achieving over 90% accuracy. However, even highly accurate models need regular updates to ensure performance, and results should be verified with medical experts for reliable diagnosis."
    },
    {
      question: "What are the common symptoms of a stroke?",
      answer: "Stroke symptoms often include sudden numbness or weakness, especially on one side of the body, confusion, difficulty speaking or understanding speech, blurred vision in one or both eyes, dizziness, and loss of coordination or balance. Some people may experience severe headaches with no known cause. If these symptoms occur, it’s essential to seek emergency medical care immediately."
    },
    {
      question: "What should I do if I receive a positive indication of a stroke?",
      answer: "A positive stroke indication requires immediate medical attention. Call emergency services or rush the patient to the nearest hospital equipped to handle stroke cases. Time is critical in stroke treatment, as the sooner blood flow is restored to the brain, the higher the chances of minimizing permanent damage and improving recovery."
    },
    {
      question: "Is there any cost associated with using this application?",
      answer: "Currently, the application is offered free of charge to help users assess stroke risks conveniently. However, future versions may include premium features or advanced diagnostic tools for a subscription fee. The goal is to keep the core functionality accessible to everyone."
    },
    {
      question: "How can lifestyle changes help reduce stroke risk?",
      answer: "Adopting a healthy lifestyle can significantly lower the risk of stroke. Key changes include maintaining a balanced diet low in salt and trans fats, exercising regularly, managing stress, quitting smoking, and limiting alcohol consumption. It’s also important to monitor blood pressure and blood sugar levels, as hypertension and diabetes are major risk factors. Regular check-ups can help keep these conditions under control and reduce stroke risk over time."
    },
    {
      question: "Can I use this application for someone else?",
      answer: "Yes, you can use the application to assess stroke risks for family members, friends, or patients, provided you have their permission. This is especially helpful for elderly individuals or those with limited technical abilities, as early detection can lead to better treatment outcomes."
    },
    {
      question: "What kind of machine learning techniques are used?",
      answer: "The application utilizes classification algorithms like CNN, logistic regression, decision trees, or neural networks to analyze patterns in patient data. These techniques identify high-risk cases by learning from past stroke data and continuously improving their accuracy through new inputs."
    },
    {
      question: "How frequently should I check for stroke indications?",
      answer: "If you or a loved one has high-risk factors, such as hypertension, diabetes, or a family history of stroke, it’s recommended to use the application regularly—perhaps once a month. Regular assessments can help detect early warning signs, especially if symptoms occur or risk factors change."
    },
    {
      question: "Is this application a substitute for professional medical advice?",
      answer: "No, this application is designed to offer preliminary insights based on machine learning analysis and should not replace professional medical advice. Always consult a healthcare provider for a complete diagnosis and treatment plan. Use the tool as a supplement to medical guidance, not a replacement."
    }
    ,{
      question:" How does this application ensure the reliability of stroke detection results?",
      answer:"The application ensures reliability by using validated machine learning algorithms trained on diverse and high-quality medical datasets. It undergoes continuous testing and updates to incorporate the latest medical research and feedback from healthcare professionals. Additionally, it cross-references multiple factors—such as symptoms, medical history, and vital signs—to reduce false positives or negatives, providing users with more accurate and dependable stroke risk assessments."
    }
  ];

  return (
    <div className="faq-container" 
    style={{ 
      marginTop: '50px', // Inline style to remove margin // Inline style to remove padding
    }}>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map(function (item, index) {
          return (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <strong>{item.answer}</strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;


// import React from 'react';
// import './FAQ.css'; // Custom CSS for styling

// function FAQ() {
//   const faqs = [
//     {
//       question: "What is a brain stroke, and why is early detection important?",
//       answer: "A brain stroke occurs when the blood flow to a part of the brain is blocked or reduced, either due to a clot (ischemic stroke) or a ruptured blood vessel (hemorrhagic stroke). Without oxygen, brain cells begin to die within minutes, leading to serious damage or even death. Early detection allows for timely medical intervention, such as thrombolysis, which can restore blood flow and significantly improve recovery outcomes."
//     },
//     {
//       question: "How accurate is the machine learning model?",
//       answer: "The accuracy of the machine learning model depends on the quantity and quality of training data used. Models trained with diverse datasets from real-world cases perform better, with many achieving over 90% accuracy. However, even highly accurate models need regular updates to ensure performance, and results should be verified with medical experts for reliable diagnosis."
//     },
//     {
//       question: "What are the common symptoms of a stroke?",
//       answer: "Stroke symptoms often include sudden numbness or weakness, especially on one side of the body, confusion, difficulty speaking or understanding speech, blurred vision in one or both eyes, dizziness, and loss of coordination or balance. Some people may experience severe headaches with no known cause. If these symptoms occur, it’s essential to seek emergency medical care immediately."
//     },
//     {
//       question: "What should I do if I receive a positive indication of a stroke?",
//       answer: "A positive stroke indication requires immediate medical attention. Call emergency services or rush the patient to the nearest hospital equipped to handle stroke cases. Time is critical in stroke treatment, as the sooner blood flow is restored to the brain, the higher the chances of minimizing permanent damage and improving recovery."
//     },
//     {
//       question: "Is there any cost associated with using this application?",
//       answer: "Currently, the application is offered free of charge to help users assess stroke risks conveniently. However, future versions may include premium features or advanced diagnostic tools for a subscription fee. The goal is to keep the core functionality accessible to everyone.Currently, the application is free to use for users. However, we may explore premium features in the future."
//     },
//     {
//       question: "How is my data used, and is it stored securely?",
//       answer: "Your data is processed to analyze stroke risk and improve the model’s accuracy. We follow strict security protocols, including data encryption, to ensure your information remains safe. Data is not shared with third parties without your consent, and anonymized data may be used for research purposes."
//     },
//     {
//       question: "Can I use this application for someone else?",
//       answer: "Yes, you can use the application to assess stroke risks for family members, friends, or patients, provided you have their permission. This is especially helpful for elderly individuals or those with limited technical abilities, as early detection can lead to better treatment outcomes."
//     },
//     {
//       question: "What kind of machine learning techniques are used?",
//       answer: "The application utilizes classification algorithms like CNN,logistic regression, decision trees, or neural networks to analyze patterns in patient data. These techniques identify high-risk cases by learning from past stroke data and continuously improving their accuracy through new inputs."
//     },
//     {
//       question: "How frequently should I check for stroke indications?",
//       answer: "If you or a loved one has high-risk factors, such as hypertension, diabetes, or a family history of stroke, it’s recommended to use the application regularly—perhaps once a month. Regular assessments can help detect early warning signs, especially if symptoms occur or risk factors change."
//     },
//     {
//       question: "Is this application a substitute for professional medical advice?",
//       answer: "No, this application is designed to offer preliminary insights based on machine learning analysis and should not replace professional medical advice. Always consult a healthcare provider for a complete diagnosis and treatment plan. Use the tool as a supplement to medical guidance, not a replacement."
//     },
//   ];

//   return (
//     <div className="faq-container">
//       <h2 className="faq-title">Frequently Asked Questions</h2>
//       <div className="accordion" id="faqAccordion">
//         {faqs.map(function(item, index) {
//           return (
//             <div className="accordion-item" key={index}>
//               <h2 className="accordion-header" id={`heading${index}`}>
//                 <button
//                   className="accordion-button"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target={`#collapse${index}`}
//                   aria-expanded="false"
//                   aria-controls={`collapse${index}`}
//                 >
//                   {item.question}
//                 </button>
//               </h2>
//               <div
//                 id={`collapse${index}`}
//                 className="accordion-collapse collapse"
//                 aria-labelledby={`heading${index}`}
//                 data-bs-parent="#faqAccordion"
//               >
//                 <div className="accordion-body">
//                   <strong>{item.answer}</strong>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default FAQ;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
// import './FAQ.css'; // Custom CSS for styling

// function FAQ() {
//   const faqs = [
//     {
//       question: "What is a brain stroke, and why is early detection important?",
//       answer: "A brain stroke occurs when the blood supply to a part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Early detection is crucial because it can lead to prompt treatment, minimizing brain damage and improving recovery outcomes."
//     },
//     {
//       question: "How accurate is the machine learning model?",
//       answer: "The accuracy of the machine learning model varies based on the quality and quantity of training data. Regular updates and training with diverse datasets help improve its reliability and accuracy."
//     },
//     {
//       question: "What should I do if I receive a positive indication of a stroke?",
//       answer: "If you receive a positive indication, seek medical attention immediately. It's important to consult with healthcare professionals for further evaluation and potential treatment."
//     },
//     {
//       question: "Is there any cost associated with using this application?",
//       answer: "Currently, the application is free to use for users. However, we may explore premium features in the future."
//     },
//     {
//       question: "How is my data used, and is it stored securely?",
//       answer: "User data is processed for analysis and is stored securly . We do not share your data with third parties without your consent."
//     },
//   ];

//   return (
//     <div className="faq-container">
//       <h2 className="faq-title">Frequently Asked Questions</h2>
//       <div className="accordion" id="faqAccordion">
//         {faqs.map(function(item, index) {
//           return (
//             <div className="accordion-item" key={index}>
//               <h2 className="accordion-header" id={`heading${index}`}>
//                 <button
//                   className="accordion-button"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target={`#collapse${index}`}
//                   aria-expanded="true"
//                   aria-controls={`collapse${index}`}
//                 >
//                   {item.question}
//                 </button>
//               </h2>
//               <div
//                 id={`collapse${index}`}
//                 className="accordion-collapse collapse"
//                 aria-labelledby={`heading${index}`}
//                 data-bs-parent="#faqAccordion"
//               >
//                 <div className="accordion-body">
//                   {item.answer}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default FAQ;


