





// import React, { useState, useEffect, useLayoutEffect } from "react";
// import "./Comments.scss"; // SCSS file for styling
// // Import the images individually
// import johnImage from '../assets/images/Dp/22.jpg';
// import janeImage from '../assets/images/Dp/22.jpg';
// import michaelImage from '../assets/images/Dp/22.jpg';
// import sarahImage from '../assets/images/Dp/22.jpg';
// import chrisImage from '../assets/images/Dp/22.jpg';
// import emmaImage from '../assets/images/Dp/22.jpg';
// import ryanImage from '../assets/images/Dp/22.jpg';
// import scarlettImage from '../assets/images/22.jpg';

// const WorkPage = () => {
//   const works = [
//     { name: "John Doe", profilePic: johnImage, comment: "As a graphic designer at Future Career Hub, I worked on branding and designing multiple marketing assets. The experience was incredibly rewarding, and the team was highly collaborative.", rating: 5 },
//     { name: "Jane Smith", profilePic: janeImage, comment: "I worked as a consultant for Abroad Mentoring, helping students navigate their study-abroad processes. It was a fantastic experience working with diverse clients and shaping their future.", rating: 4 },
//     { name: "Michael Brown", profilePic: michaelImage, comment: "Brand Identity Creation for a startup was challenging yet fulfilling. I developed everything from logos to social media presence, helping establish their brand in a competitive market.", rating: 5 },
//     { name: "Sarah Lee", profilePic: sarahImage, comment: "As a designer for marketing campaigns, I created engaging social media graphics that captured the attention of the target audience. The campaigns were successful thanks to our teamwork and creativity.", rating: 4 },
//     { name: "Chris Evans", profilePic: chrisImage, comment: "I designed creative posters for event promotions. It was an exciting challenge to create designs that could effectively promote the events while aligning with the brand’s voice.", rating: 3 },
//     { name: "Emma Watson", profilePic: emmaImage, comment: "UI/UX design for web applications was a fantastic opportunity to blend design with technology. I aimed to create a seamless user experience that was both functional and visually appealing.", rating: 5 },
//     { name: "Ryan Reynolds", profilePic: ryanImage, comment: "Logo design for a tech company was a rewarding project, helping to create a symbol that represents their innovative approach to technology in the digital age.", rating: 4 },
//     { name: "Scarlett Johansson", profilePic: scarlettImage, comment: "Branding design for the fashion industry allowed me to explore cutting-edge styles while crafting a unique identity for our clients. It was a great opportunity to push creative boundaries.", rating: 5 },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animationState, setAnimationState] = useState("fade-in");
//   const [isMobile, setIsMobile] = useState(false);

//   // Check screen size
//   useLayoutEffect(() => {
//     const updateScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", updateScreenSize);
//     updateScreenSize();
//     return () => window.removeEventListener("resize", updateScreenSize);
//   }, []);

//   useEffect(() => {
//     if (!isMobile) {
//       const cycleComments = setInterval(() => {
//         setAnimationState("fade-out");
//         setTimeout(() => {
//           setCurrentIndex((prevIndex) => (prevIndex + 3) % works.length); // Cycle 3 comments at a time
//           setAnimationState("fade-in");
//         }, 1000);
//       }, 4000);

//       return () => clearInterval(cycleComments);
//     }
//   }, [works.length, isMobile]);

//   const generateStars = (rating) => {
//     return (
//       <div className="stars">
//         {[...Array(5)].map((_, index) => (
//           <span
//             key={index}
//             className={`star ${index < rating ? "filled" : "empty"}`}
//           >
//             ★
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="work-page">
//       <h1 className="work-title">Client Comments</h1>
//       <div className="work-container">
//         {/* Loop through works, show 1 for mobile or 3 for larger screens */}
//         {[...Array(isMobile ? 1 : 3)].map((_, index) => (
//           works[currentIndex + index] && (
//             <div
//               key={index}
//               className={`comment-box ${animationState} comment-${index + 1}`}
//               style={{ width: isMobile ? "100%" : "30%" }} 
//             >
//               <div className="profile">
//                 <img
//                   src={works[currentIndex + index].profilePic}
//                   alt={works[currentIndex + index].name}
//                   className="profile-pic"
//                 />
//                 <div className="profile-info">
//                   <h3 className="name">{works[currentIndex + index].name}</h3>
//                 </div>
//               </div>
//               <p className="comment">{works[currentIndex + index].comment}</p>
//               {generateStars(works[currentIndex + index].rating)}
//             </div>
//           )
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkPage;






// import React, { useState, useEffect, useLayoutEffect } from "react";
// import "./Comments.scss"; // SCSS file for styling
// // Import the images individually
// import johnImage from '../assets/images/Dp/22.jpg';
// import janeImage from '../assets/images/Dp/22.jpg';
// import michaelImage from '../assets/images/Dp/22.jpg';
// import sarahImage from '../assets/images/Dp/22.jpg';
// import chrisImage from '../assets/images/Dp/22.jpg';
// import emmaImage from '../assets/images/Dp/22.jpg';
// import ryanImage from '../assets/images/Dp/22.jpg';
// import scarlettImage from '../assets/images/22.jpg';

// const WorkPage = () => {
//   const works = [
//     { name: "John Doe", profilePic: johnImage, comment: "As a graphic designer at Future Career Hub, I worked on branding and designing multiple marketing assets. The experience was incredibly rewarding, and the team was highly collaborative.", rating: 5 },
//     { name: "Jane Smith", profilePic: janeImage, comment: "I worked as a consultant for Abroad Mentoring, helping students navigate their study-abroad processes. It was a fantastic experience working with diverse clients and shaping their future.", rating: 4 },
//     { name: "Michael Brown", profilePic: michaelImage, comment: "Brand Identity Creation for a startup was challenging yet fulfilling. I developed everything from logos to social media presence, helping establish their brand in a competitive market.", rating: 5 },
//     { name: "Sarah Lee", profilePic: sarahImage, comment: "As a designer for marketing campaigns, I created engaging social media graphics that captured the attention of the target audience. The campaigns were successful thanks to our teamwork and creativity.", rating: 4 },
//     { name: "Chris Evans", profilePic: chrisImage, comment: "I designed creative posters for event promotions. It was an exciting challenge to create designs that could effectively promote the events while aligning with the brand’s voice.", rating: 3 },
//     { name: "Emma Watson", profilePic: emmaImage, comment: "UI/UX design for web applications was a fantastic opportunity to blend design with technology. I aimed to create a seamless user experience that was both functional and visually appealing.", rating: 5 },
//     { name: "Ryan Reynolds", profilePic: ryanImage, comment: "Logo design for a tech company was a rewarding project, helping to create a symbol that represents their innovative approach to technology in the digital age.", rating: 4 },
//     { name: "Scarlett Johansson", profilePic: scarlettImage, comment: "Branding design for the fashion industry allowed me to explore cutting-edge styles while crafting a unique identity for our clients. It was a great opportunity to push creative boundaries.", rating: 5 },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animationState, setAnimationState] = useState("fade-in");
//   const [isMobile, setIsMobile] = useState(false);

//   // Check screen size
//   useLayoutEffect(() => {
//     const updateScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", updateScreenSize);
//     updateScreenSize();
//     return () => window.removeEventListener("resize", updateScreenSize);
//   }, []);

//   useEffect(() => {
//     if (isMobile) {
//       const cycleComments = setInterval(() => {
//         setAnimationState("fade-out");
//         setTimeout(() => {
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length); // Cycle 1 comment at a time
//           setAnimationState("fade-in");
//         }, 1000);
//       }, 4000); // Change comment every 4 seconds

//       return () => clearInterval(cycleComments);
//     }
//   }, [works.length, isMobile]);

//   const generateStars = (rating) => {
//     return (
//       <div className="stars">
//         {[...Array(5)].map((_, index) => (
//           <span
//             key={index}
//             className={`star ${index < rating ? "filled" : "empty"}`}
//           >
//             ★
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="work-page">
//       <h1 className="work-title">Client Comments</h1>
//       <div className="work-container">
//         {/* Show 1 comment on mobile, 3 on large screens */}
//         {[...Array(isMobile ? 1 : 3)].map((_, index) => (
//           works[currentIndex + index] && (
//             <div
//               key={index}
//               className={`comment-box ${animationState} comment-${index + 1}`}
//               style={{ width: isMobile ? "100%" : "30%" }}  
//             >
//               <div className="profile">
//                 <img
//                   src={works[currentIndex + index].profilePic}
//                   alt={works[currentIndex + index].name}
//                   className="profile-pic"
//                 />
//                 <div className="profile-info">
//                   <h3 className="name">{works[currentIndex + index].name}</h3>
//                 </div>
//               </div>
//               <p className="comment">{works[currentIndex + index].comment}</p>
//               {generateStars(works[currentIndex + index].rating)}
//             </div>
//           )
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkPage;









// import React, { useState, useEffect, useLayoutEffect } from "react";
// import "./Comments.scss"; // SCSS file for styling
// // Import the images individually
// import johnImage from '../assets/images/Dp/22.jpg';
// import janeImage from '../assets/images/Dp/22.jpg';
// import michaelImage from '../assets/images/Dp/22.jpg';
// import sarahImage from '../assets/images/Dp/22.jpg';
// import chrisImage from '../assets/images/Dp/22.jpg';
// import emmaImage from '../assets/images/Dp/22.jpg';
// import ryanImage from '../assets/images/Dp/22.jpg';
// import scarlettImage from '../assets/images/22.jpg';

// const WorkPage = () => {
//   const works = [
//     { name: "John Doe", profilePic: johnImage, comment: "As a graphic designer at Future Career Hub, I worked on branding and designing multiple marketing assets. The experience was incredibly rewarding, and the team was highly collaborative.", rating: 5 },
//     { name: "Jane Smith", profilePic: janeImage, comment: "I worked as a consultant for Abroad Mentoring, helping students navigate their study-abroad processes. It was a fantastic experience working with diverse clients and shaping their future.", rating: 4 },
//     { name: "Michael Brown", profilePic: michaelImage, comment: "Brand Identity Creation for a startup was challenging yet fulfilling. I developed everything from logos to social media presence, helping establish their brand in a competitive market.", rating: 5 },
//     { name: "Sarah Lee", profilePic: sarahImage, comment: "As a designer for marketing campaigns, I created engaging social media graphics that captured the attention of the target audience. The campaigns were successful thanks to our teamwork and creativity.", rating: 4 },
//     { name: "Chris Evans", profilePic: chrisImage, comment: "I designed creative posters for event promotions. It was an exciting challenge to create designs that could effectively promote the events while aligning with the brand’s voice.", rating: 3 },
//     { name: "Emma Watson", profilePic: emmaImage, comment: "UI/UX design for web applications was a fantastic opportunity to blend design with technology. I aimed to create a seamless user experience that was both functional and visually appealing.", rating: 5 },
//     { name: "Ryan Reynolds", profilePic: ryanImage, comment: "Logo design for a tech company was a rewarding project, helping to create a symbol that represents their innovative approach to technology in the digital age.", rating: 4 },
//     { name: "Scarlett Johansson", profilePic: scarlettImage, comment: "Branding design for the fashion industry allowed me to explore cutting-edge styles while crafting a unique identity for our clients. It was a great opportunity to push creative boundaries.", rating: 5 },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animationState, setAnimationState] = useState("fade-in");
//   const [isMobile, setIsMobile] = useState(false);

//   // Check screen size
//   useLayoutEffect(() => {
//     const updateScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", updateScreenSize);
//     updateScreenSize();
//     return () => window.removeEventListener("resize", updateScreenSize);
//   }, []);

//   useEffect(() => {
//     if (isMobile) {
//       const cycleComments = setInterval(() => {
//         setAnimationState("fade-out");
//         setTimeout(() => {
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length); // Cycle 1 comment at a time
//           setAnimationState("fade-in");
//         }, 1000);
//       }, 4000); // Change comment every 4 seconds

//       return () => clearInterval(cycleComments);
//     } else {
//       const cycleComments = setInterval(() => {
//         setAnimationState("fade-out");
//         setTimeout(() => {
//           setCurrentIndex((prevIndex) => (prevIndex + 3) % works.length); // Cycle 3 comments at a time
//           setAnimationState("fade-in");
//         }, 1000);
//       }, 4000); // Change comment every 4 seconds for desktop

//       return () => clearInterval(cycleComments);
//     }
//   }, [works.length, isMobile]);

//   const generateStars = (rating) => {
//     return (
//       <div className="stars">
//         {[...Array(5)].map((_, index) => (
//           <span
//             key={index}
//             className={`star ${index < rating ? "filled" : "empty"}`}
//           >
//             ★
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="work-page">
//       <h1 className="work-title">Client Comments</h1>
//       <div className="work-container">
//         {/* Show 1 comment on mobile, 3 on large screens */}
//         {[...Array(isMobile ? 1 : 3)].map((_, index) => (
//           works[currentIndex + index] && (
//             <div
//               key={index}
//               className={`comment-box ${animationState} comment-${index + 1}`}
//               style={{ width: isMobile ? "100%" : "30%" }}  
              
//             >
//               <div className="profile">
//                 <img
//                   src={works[currentIndex + index].profilePic}
//                   alt={works[currentIndex + index].name}
//                   className="profile-pic"
//                 />
//                 <div className="profile-info">
//                   <h3 className="name">{works[currentIndex + index].name}</h3>
//                 </div>
//               </div>
//               <p className="comment">{works[currentIndex + index].comment}</p>
//               {generateStars(works[currentIndex + index].rating)}
//             </div>
//           )
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkPage;





// import React, { useState, useEffect } from "react";
// import "./Comments.scss";

// // Import the images
// import image1 from "../assets/images/Dp/22.jpg";
// import image2 from "../assets/images/Dp/22.jpg";
// import image3 from "../assets/images/Dp/22.jpg";
// import image4 from "../assets/images/Dp/22.jpg";
// import image5 from "../assets/images/Dp/22.jpg";
// import image6 from "../assets/images/Dp/22.jpg";
// import image7 from "../assets/images/Dp/22.jpg";
// import image8 from "../assets/images/Dp/22.jpg";
// import image9 from "../assets/images/Dp/22.jpg";
// import image10 from "../assets/images/Dp/22.jpg";

// const comments = [
//   { name: "Saba Hussain", profilePic: image1, comment: "Dunya Consultants helped me throughout my UK Visa process. Their sincerity made a huge difference!", rating: 5 },
//   { name: "Hamza Saleem", profilePic: image2, comment: "The consultants were extremely professional and helpful. My study abroad process was smooth!", rating: 5 },
//   { name: "Ali Raza", profilePic: image3, comment: "Great experience! They answered all my queries about studying in Europe with patience and detail.", rating: 4 },
//   { name: "Ayesha Khan", profilePic: image4, comment: "A fantastic service for students looking to go abroad. Highly recommend!", rating: 5 },
//   { name: "Umar Shah", profilePic: image5, comment: "Their visa guidance was excellent. Thanks to them, I am now in Canada!", rating: 5 },
//   { name: "Zara Malik", profilePic: image6, comment: "I was impressed with their dedication to helping students. Best consultants in town!", rating: 4 },
//   { name: "Bilal Ahmed", profilePic: image7, comment: "They provided clear and step-by-step assistance. Very happy with the service.", rating: 5 },
//   { name: "Hina Farooq", profilePic: image8, comment: "Professional, reliable, and friendly team. Highly recommended!", rating: 5 },
//   { name: "Kashif Javed", profilePic: image9, comment: "They made my visa process stress-free. Big thanks to the team!", rating: 5 },
//   { name: "Rabia Saeed", profilePic: image10, comment: "I got my student visa approved with their help. Excellent service!", rating: 4 }
// ];

// const CommentsSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="comments-slider">
//       {comments.map((comment, index) => (
//         <div
//           key={index}
//           className={`comment-box ${index === currentIndex ? "active" : "hidden"}`}
//         >
//           <img src={comment.profilePic} alt={comment.name} className="profile-pic" />
//           <h3>{comment.name}</h3>
//           <p>{comment.comment}</p>
//           <div className="stars">{Array(comment.rating).fill("★").join(" ")}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CommentsSlider;

// import './event.scss'
// import React from 'react';
// import Slider from 'react-slick';
// import { FaStar } from 'react-icons/fa';


// const feedbacks = [
//   {
//     id: 1,
//     text: "In Sargodha, Dunya Consultants provides great consultancy for students.",
//     author: "Anonymous",
//     image: "path/to/student1.jpg",
//     rating: 5,
//     details: "Detailed information about the feedback.",
//   },
//   {
//     id: 2,
//     text: "Best services. Especially M. Dabeer Raza from Sargodha.",
//     author: "Anonymous",
//     image: "path/to/student2.jpg",
//     rating: 4,
//     details: "Detailed information about the feedback.",
//   },
//   // Add more feedback objects as needed
// ];

// const FeedbackCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//   };

//   return (
//     <div className="feedback-carousel">
//       <Slider {...settings}>
//         {feedbacks.map((feedback) => (
//           <div key={feedback.id} className="feedback-item">
//             <div className="feedback-content">
//               <p>{feedback.text}</p>
//               <p><strong>- {feedback.author}</strong></p>
//               <div className="feedback-rating">
//                 {[...Array(feedback.rating)].map((_, index) => (
//                   <FaStar key={index} className="star-icon" />
//                 ))}
//               </div>
//               <p className="feedback-details">{feedback.details}</p>
//             </div>
//             <div className="feedback-image">
//               <img src={feedback.image} alt={feedback.author} />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default FeedbackCarousel;




import React from 'react'

export default function Comments() {
  return (
    <div>
      
    </div>
  )
}
