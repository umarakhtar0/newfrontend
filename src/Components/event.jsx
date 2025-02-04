// import React from "react";
// import { motion } from "framer-motion";

// const steps = [
//   { title: "Research Programs", description: "Explore different universities and courses that match your goals." },
//   { title: "Contact a Consultant", description: "Book a session with a MyConsultant mentor for personalized guidance." },
//   { title: "Prepare Documents", description: "Gather transcripts, SOP, LORs, and financial proofs." },
//   { title: "Submit Applications", description: "Apply to universities through their official portals with your consultant’s help." },
//   { title: "Visa Process", description: "Receive university admission and apply for a student visa." },
//   { title: "Prepare for Departure", description: "Book flights, arrange accommodation, and attend pre-departure sessions." },
// ];

// const Guide = () => {
//   return (
//     <div className="flex flex-col items-center p-6 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
//       <motion.h1 
//         className="text-4xl font-extrabold mb-6 text-center text-blue-700"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         How to Apply with MyConsultant for Studying Abroad
//       </motion.h1>
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
//         {steps.map((step, index) => (
//           <motion.div 
//             key={index} 
//             className="p-6 shadow-lg bg-white rounded-xl border-l-4 border-blue-500 transform transition duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <h2 className="text-xl font-semibold text-blue-600">{step.title}</h2>
//             <p className="text-gray-700 mt-2">{step.description}</p>
//           </motion.div>
//         ))}
//       </div>
//       <motion.a 
//         href="https://wa.me/923426874805" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="mt-8 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Contact on WhatsApp
//       </motion.a>
//     </div>
//   );
// };

// export default Guide;





// import React from "react";
// import { motion } from "framer-motion";
// import './event.scss'

// const steps = [
//   { title: "Research Programs", description: "Explore different universities and courses that match your goals." },
//   { title: "Contact a Consultant", description: "Book a session with a MyConsultant mentor for personalized guidance." },
//   { title: "Prepare Documents", description: "Gather transcripts, SOP, LORs, and financial proofs." },
//   { title: "Submit Applications", description: "Apply to universities through their official portals with your consultant’s help." },
//   { title: "Visa Process", description: "Receive university admission and apply for a student visa." },
//   { title: "Prepare for Departure", description: "Book flights, arrange accommodation, and attend pre-departure sessions." },
// ];

// const Guide = () => {
//   return (
//     <div className="guide-container">
//       <motion.h1 
//         className="guide-title"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         How to Apply with MyConsultant for Studying Abroad
//       </motion.h1>
//       <div className="guide-steps">
//         {steps.map((step, index) => (
//           <motion.div 
//             key={index} 
//             className="guide-card"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
//           >
//             <div className="card-content">
//               <h2>{step.title}</h2>
//               <p>{step.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       <motion.a 
//         href="https://wa.me/923426874805" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="contact-button"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Contact on WhatsApp
//       </motion.a>
//     </div>
//   );
// };

// export default Guide;



// import React from "react";
// import "./event.scss";
// import { FaCheckCircle, FaUniversity, FaMoneyBillWave, FaHome, FaFileAlt } from "react-icons/fa";

// const NextSteps = () => {
//   return (
//     <div className="next-steps-container">
//       <header className="next-steps-banner">
//         <h1>After receiving an offer</h1>
//         <p>
//           Congratulations! An approved university application means you’re one step closer to 
//           achieving your dream to study abroad. We’re here to support you with visas, money transfers, 
//           health cover, and accommodation. Take a deep breath and make a confident decision with our guidance.
//         </p>
//       </header>
      
//       <section className="steps-list">
//         <div className="step-card" data-aos="fade-up">
//           <FaFileAlt className="icon" />
//           <h2>Track Your Application</h2>
//           <p>Stay informed every step of the way through our ‘Application Tracker’.</p>
//         </div>

//         <div className="step-card" data-aos="fade-up" data-aos-delay="200">
//           <FaUniversity className="icon" />
//           <h2>Choosing Between Offers</h2>
//           <p>Got multiple offers? Make an informed decision with expert guidance.</p>
//         </div>

//         <div className="step-card" data-aos="fade-up" data-aos-delay="400">
//           <FaMoneyBillWave className="icon" />
//           <h2>Pay Admission & Tuition Fees</h2>
//           <p>We help you transfer funds seamlessly to secure your place.</p>
//         </div>

//         <div className="step-card" data-aos="fade-up" data-aos-delay="600">
//           <FaHome className="icon" />
//           <h2>Access Student Essentials</h2>
//           <p>Find accommodation, apply for health insurance, and more.</p>
//         </div>
//       </section>

//       <footer className="cta-section">
//         <h2>One Account for All Your Study Abroad Needs</h2>
//         <p>Unlock a world of features including personalized recommendations and fast-tracked applications.</p>
//         <button className="signup-btn">Sign Up</button>
//       </footer>
//     </div>
//   );
// };

// export default NextSteps;





// import React, { useEffect, useState } from "react";
// import "./event.scss";
// import img from '../assets/+92 320 7482554.png'
// const feedbackData = [
//   [
//     {
//       name: "Toseeq Ali",
//       role: "Client",
//       rating: 5,
//       feedback:
//         "I am thrilled to share my exceptional experience with Dunya Consultants in Sargodha. Their personalized approach and attention to detail made a significant difference, and I felt supported throughout the entire process.",
//     },
//     {
//       name: "Usman Nadeem",
//       role: "Student",
//       rating: 5,
//       feedback:
//         "I had a fantastic experience with Dunya Consultants while applying for my UK study visa. Their service was top-notch, and I highly recommend them to anyone seeking guidance with their visa application. The team was knowledgeable, responsive, and made the process seamless.",
//     },
//   ],
//   [
//     {
//       name: "Ayesha Khan",
//       role: "Business Owner",
//       rating: 5,
//       feedback:
//         "The professionalism and expertise of the team made my journey smooth. I couldn't have asked for better support!",
//     },
//     {
//       name: "Ali Raza",
//       role: "Freelancer",
//       rating: 5,
//       feedback:
//         "They provided me with the best guidance, ensuring I had everything I needed. Highly recommend their services!",
//     },
//   ],
// ];

// const FeedbackPage = () => {
//   const [currentFeedback, setCurrentFeedback] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentFeedback((prev) => (prev + 1) % feedbackData.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="feedback-container">
//       <div className="feedback-left">
//         <h2>What Client Says</h2>
//         <h1>Best Feedback From Clients</h1>
//         <div className="feedback-cards">
//           {feedbackData[currentFeedback].map((feedback, index) => (
//             <div key={index} className="feedback-card">
//               <div className="feedback-rating">
//                 {"★".repeat(feedback.rating)}
//               </div>
//               <h3>{feedback.name}</h3>
//               <p className="role">{feedback.role}</p>
//               <p className="message">{feedback.feedback}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="feedback-right">
//         <img
//           src={img}
//           alt="Graduation"
//           className="feedback-image"
//         />
//       </div>
//     </div>
//   );
// };

// export default FeedbackPage;

// src/components/Feedback.js







// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
// } from "@material-tailwind/react";

// export function AbroadMentorsCards() {
//   return (
//     <div className="container mx-auto py-12">
//       {/* About Section */}
//       <div className="text-center mb-12">
//         <Typography variant="h3" className="font-medium mb-4">
//           About Abroad Mentors
//         </Typography>
//         <Typography variant="h6" className="text-gray-500 max-w-4xl mx-auto">
//           Abroad Mentors is a platform that connects aspiring individuals with experienced mentors to guide them in their journey to studying or working abroad.
//         </Typography>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//         {/* Card 1 */}
//         <Card
//           shadow={false}
//           className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
//         >
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
//           >
//             <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//           </CardHeader>
//           <CardBody className="relative py-14 px-6 md:px-12">
//             <Typography
//               variant="h2"
//               color="white"
//               className="mb-6 font-medium leading-[1.5]"
//             >
//               How we design and code open-source projects?
//             </Typography>
//             <Typography variant="h5" className="mb-4 text-gray-400">
//               Tania Andrew
//             </Typography>
//             <Avatar
//               size="xl"
//               variant="circular"
//               alt="tania andrew"
//               className="border-2 border-white"
//               src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//             />
//           </CardBody>
//         </Card>

//         {/* Repeat the same Card 5 more times with different content */}
//         {Array(5).fill().map((_, index) => (
//           <Card
//             key={index}
//             shadow={false}
//             className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
//           >
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
//             >
//               <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//             </CardHeader>
//             <CardBody className="relative py-14 px-6 md:px-12">
//               <Typography
//                 variant="h2"
//                 color="white"
//                 className="mb-6 font-medium leading-[1.5]"
//               >
//                 How we design and code open-source projects?
//               </Typography>
//               <Typography variant="h5" className="mb-4 text-gray-400">
//                 Mentor {index + 1}
//               </Typography>
//               <Avatar
//                 size="xl"
//                 variant="circular"
//                 alt={`mentor-${index}`}
//                 className="border-2 border-white"
//                 src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//               />
//             </CardBody>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }





// import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardText,
//   MDBCardImage,
//   MDBContainer,
//   MDBRow,
//   MDBCol
// } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBContainer className="py-5">
//       <MDBRow>
//         {/* Card 1 */}
//         <MDBCol md="4" lg="3" className="mb-4">
//           <MDBCard>
//             <MDBCardImage
//               src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
//               alt="Nature image 1"
//               position="top"
//             />
//             <MDBCardBody>
//               <MDBCardText>
//                 Some quick example text to build on the card title and make up the bulk of the card's content.
//               </MDBCardText>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>

//         {/* Card 2 */}
//         <MDBCol md="4" lg="3" className="mb-4">
//           <MDBCard>
//             <MDBCardImage
//               src="https://mdbootstrap.com/img/new/standard/nature/183.webp"
//               alt="Nature image 2"
//               position="top"
//             />
//             <MDBCardBody>
//               <MDBCardText>
//                 Another example text to build on the card title and add some more content to this card.
//               </MDBCardText>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>

//         {/* Card 3 */}
//         <MDBCol md="4" lg="3" className="mb-4">
//           <MDBCard>
//             <MDBCardImage
//               src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
//               alt="Nature image 3"
//               position="top"
//             />
//             <MDBCardBody>
//               <MDBCardText>
//                 A quick description of the content in the card. This can be anything you want to showcase.
//               </MDBCardText>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>

//         {/* Card 4 */}
//         <MDBCol md="4" lg="3" className="mb-4">
//           <MDBCard>
//             <MDBCardImage
//               src="https://mdbootstrap.com/img/new/standard/nature/185.webp"
//               alt="Nature image 4"
//               position="top"
//             />
//             <MDBCardBody>
//               <MDBCardText>
//                 More quick example text for another card. This showcases a consistent design.
//               </MDBCardText>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>

//         {/* Card 5 */}
//         <MDBCol md="4" lg="3" className="mb-4">
//           <MDBCard>
//             <MDBCardImage
//               src="https://mdbootstrap.com/img/new/standard/nature/186.webp"
//               alt="Nature image 5"
//               position="top"
//             />
//             <MDBCardBody>
//               <MDBCardText>
//                 A short description for this card as well. It is identical in size to the others.
//               </MDBCardText>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>

//         {/* Card 6 */}
//         <MDBCol md="4" lg="3" className="mb-4">
//           <MDBCard>
//             <MDBCardImage
//               src="https://mdbootstrap.com/img/new/standard/nature/187.webp"
//               alt="Nature image 6"
//               position="top"
//             />
//             <MDBCardBody>
//               <MDBCardText>
//                 A final example card with similar content and consistent styling.
//               </MDBCardText>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// // }


import React from 'react'

export default function event() {
  return (
    <div>
      
    </div>
  )
}
