// import React, { useState } from "react";
// import "./rehman1.scss";
// import image from '../assets/images/Dp/22.jpg'
// import { Link } from "react-router-dom";

// const WhyStudyAbroad = () => {
//   const [isOpen, setIsOpen] = useState({
//     benefits: false,
//     experience: false,
//     steps: false,
//     parentsGuide: false,
//     faq: false,
//   });

//   const toggleSection = (section) => {
//     setIsOpen((prevState) => ({
//       ...prevState,
//       [section]: !prevState[section],
//     }));
//   };

//   return (
//     <div className="why-study-abroad">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Why Study Abroad?</h1>
//           <p>Learn how studying abroad opens a world of opportunities</p>
//         </div>
//         <div className="hero-image">
//           <img 
//             src={image} 
//             alt="Decorative Leave Shape" 
//           />
//         </div>
//       </section>

//       {/* Introduction Section */}
//       <section className="intro-section">
//         <div className="intro-text">
//           <h2>Expand your horizons, skills, and opportunities</h2>
//           <p>
//             Want to make an investment in yourself to secure a successful
//             future? Studying abroad is a journey of a lifetime that opens up new
//             possibilities and pathways to personal and professional growth.
//           </p>
//         </div>
//       </section>

//       {/* Feature Section */}
//       <section className="feature-cards">
//         <div className="feature-card">
//           <h3 onClick={() => toggleSection("benefits")}>
//             Benefits of Studying Abroad
//             <span>{isOpen.benefits ? " -" : " +"}</span>
//           </h3>
//           {isOpen.benefits && (
//             <p>
//               Studying abroad allows you to experience different cultures,
//               languages, and education systems, enhancing your personal growth
//               and global awareness. It also provides opportunities for career
//               advancement and networking in international job markets.
//             </p>
//           )}
//           <Link to="/benefits">Learn More</Link>
//         </div>
//         <div className="feature-card">
//           <h3 onClick={() => toggleSection("experience")}>
//             The Study Abroad Experience
//             <span>{isOpen.experience ? " -" : " +"}</span>
//           </h3>
//           {isOpen.experience && (
//             <p>
//               Studying abroad exposes you to unique challenges, enriching your
//               life experiences. From adapting to new educational systems to
//               exploring diverse cultures, every moment is an opportunity for
//               self-discovery. The experience also helps you become more
//               independent and resourceful.
//             </p>
//           )}
//           <Link to="/experience">Learn More</Link>
//         </div>
//         <div className="feature-card">
//           <h3 onClick={() => toggleSection("steps")}>
//             Breaking Down the Steps
//             <span>{isOpen.steps ? " -" : " +"}</span>
//           </h3>
//           {isOpen.steps && (
//             <p>
//               Getting started with studying abroad involves researching
//               programs, applying to universities, securing visas, and preparing
//               for your stay. With proper planning, you can make the process
//               smoother and ensure that your time abroad is fulfilling and
//               successful.
//             </p>
//           )}
//           <Link to="/steps">Learn More</Link>
//         </div>
//         <div className="feature-card">
//           <h3 onClick={() => toggleSection("parentsGuide")}>
//             Study Abroad Guide for Parents
//             <span>{isOpen.parentsGuide ? " -" : " +"}</span>
//           </h3>
//           {isOpen.parentsGuide && (
//             <p>
//               Parents play a crucial role in supporting their child's study
//               abroad journey. From helping them choose the right program to
//               understanding the safety aspects, there are various resources
//               available to help parents navigate the process and ensure their
//               child’s success.
//             </p>
//           )}
//           <Link to="/guide-for-parents">Learn More</Link>
//         </div>
//       </section>

//       {/* Articles & News */}
//       <section className="articles-news">
//         <h2>Related Articles</h2>
//         <div className="news-item">
//           <h3>Canadian Universities Tuition Fees</h3>
//           <p>December 25, 2024</p>
//         </div>
//         {/* More news items */}
//       </section>

//       {/* FAQ Section */}
//       <section className="faq-section">
//         <h2>Frequently Asked Questions</h2>
//         <div className="faq-item">
//           <h4 onClick={() => toggleSection("faq")}>
//             What is studying abroad?
//             <span>{isOpen.faq ? " -" : " +"}</span>
//           </h4>
//           {isOpen.faq && (
//             <p>
//               Studying abroad refers to the opportunity to live and study in a
//               foreign country, allowing you to experience different educational
//               systems, cultures, and languages. It's a life-changing opportunity
//               that broadens your perspective and boosts your personal growth.
//             </p>
//           )}
//         </div>
//         {/* More FAQ items */}
//       </section>
//     </div>
//   );
// };

// export default WhyStudyAbroad;
// pages/WhereAndWhatToStudy.js
// pages/WhereAndWhatToStudy.js

// import React from 'react';
// import './rehman1.scss';

// const WhereAndWhatToStudy = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <h2>Abroad Mentors</h2>
//         </div>
//         <ul className="navbar-links">
//           <li><a href="#destination">Destinations</a></li>
//           <li><a href="#costs">Costs</a></li>
//           <li><a href="#levels">Study Levels</a></li>
//           <li><a href="#course">Courses</a></li>
//           <li><a href="#university">Universities</a></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero hero-study-options">
//         <div className="hero-content">
//           <h1>Where and What to Study?</h1>
//           <p>We're here to help you navigate through your study abroad options with ease. From choosing a destination to course advice.</p>
//         </div>
//       </section>

//       {/* Pick Your Dream Destination */}
//       <section id="destination" className="destination-info">
//         <h2>Pick your dream destination and course</h2>
//         <p>You've taken a significant step by deciding to study overseas. Now it's time to choose where and what to study. Navigating through hundreds of course and university options can be overwhelming. With Abroad Mentors, you’re in good hands. Simply create an account, complete your profile, and we’ll provide you with personalised course recommendations that align perfectly with your aspirations.</p>
//         <p>We also offer a wide array of tools and resources to make your decision on where and what to study abroad smooth and stress-free.</p>
//       </section>

//       {/* Video Section */}
//       <section className="video-section">
//         <h2>Watch Our Guide on Choosing Your Study Destination</h2>
//         <div className="video-frame">
//     <iframe 
//       width="100%" 
//       height="500" 
//       src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
//       title="Study Abroad Guide" 
//       frameBorder="0" 
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//       allowFullScreen
//     ></iframe>
//   </div>
//       </section>

//       {/* Account Section */}
//       <section className="account-info">
//         <h3>One account for all your study abroad needs</h3>
//         <p>Create your profile and unlock a wide array of features including personalised recommendations, fast-tracked applications, and much more.</p>
//       </section>

//       {/* Explore Study Abroad Options */}
//       <section id="steps" className="steps-section">
//         <h2>Explore Study Abroad Options</h2>
//         <div className="steps">
//           <div className="step">
//             <h3>1. Choose a destination</h3>
//             <p>Choose from six amazing countries. Learn about each destination's lifestyle and post-graduation options.</p>
//           </div>
//           <div className="step">
//             <h3>2. Explore costs</h3>
//             <p>Find out how much things cost in your chosen destination using our cost calculator.</p>
//           </div>
//           <div className="step">
//             <h3>3. Pick a study level</h3>
//             <p>Undergraduate, graduate, PhD, or pathway courses—learn which level suits you best.</p>
//           </div>
//           <div className="step">
//             <h3>4. Find a course</h3>
//             <p>If you’re not sure what to study, take our quiz to find the best course for you.</p>
//           </div>
//           <div className="step">
//             <h3>5. Choose a university</h3>
//             <p>Browse institutions across 6 different country destinations to see which aligns with your academic goals.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WhereAndWhatToStudy;



// import React, { useEffect } from "react";

// import { FaGlobe, FaUniversity, FaMoneyBill, FaGraduationCap, FaBook } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// //import "./event.scss"; 



// const WhereWhatStudy = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
//   }, []);

//   return (
//     <div className="study-options-container">
//       <header className="study-banner" data-aos="fade-down">
//         <h1>Where and What to Study with Abroad Mentors</h1>
//         <p>
//           Navigating study abroad options can be overwhelming. We help you choose your dream
//           destination and the right course with expert guidance and personalized recommendations.
//         </p>
//       </header>

//       <section className="study-steps">
//         <div className="step-card" data-aos="flip-left">
//           <FaGlobe className="icon" />
//           <h2>Choose a Destination</h2>
//           <p>Explore top countries like the UK, USA, Canada, Australia, and more.</p>
//         </div>

//         <div className="step-card" data-aos="flip-left" data-aos-delay="200">
//           <FaMoneyBill className="icon" />
//           <h2>Explore Costs</h2>
//           <p>Find out about tuition fees, living expenses, and scholarships available.</p>
//         </div>

//         <div className="step-card" data-aos="flip-left" data-aos-delay="400">
//           <FaGraduationCap className="icon" />
//           <h2>Pick a Study Level</h2>
//           <p>Choose from undergraduate, master’s, PhD, or pathway courses.</p>
//         </div>

//         <div className="step-card" data-aos="flip-left" data-aos-delay="600">
//           <FaBook className="icon" />
//           <h2>Find a Course</h2>
//           <p>Browse course guides or take our short quiz for personalized suggestions.</p>
//         </div>

//         <div className="step-card" data-aos="flip-left" data-aos-delay="800">
//           <FaUniversity className="icon" />
//           <h2>Choose a University</h2>
//           <p>Compare institutions, rankings, and find the best fit for your career goals.</p>
//         </div>
//       </section>

//       <footer className="cta-section" data-aos="zoom-in">
//         <h2>One Account for All Your Study Abroad Needs</h2>
//         <p>Get personalized recommendations and fast-tracked applications with Abroad Mentors.</p>
//         <button className="signup-btn" data-aos="pulse">Sign Up Now</button>
//       </footer>
//     </div>
    
//   );
// };

// export default WhereWhatStudy;
// src/components/UK.jsx








import './rehman1.scss'; // Import custom styling
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaWhatsapp } from "react-icons/fa"
const App = () => {
  return (
    <div className="app-container">

      {/* Animated Introduction */}
      <motion.section
        className="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Where and What to Study</h1>
        <p>
          We're here to help you navigate through your study abroad options
          with ease. From choosing a destination through to course advice.
        </p>
      </motion.section>

      {/* Animated Destinations Section with Card-style Button */}
      <motion.section
        className="destinations"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Pick Your Dream Destination and Course</h2>
        <p>
          You've taken a significant step by deciding to study overseas. Now it’s time to choose where and what to study. Navigating through hundreds of course and university options can be overwhelming, plus you’ll have tons of other questions on your mind.
        </p>
        <div className="list-style">
          <Link to="/uk">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              UK
            </motion.div>
          </Link>
          <Link to="/australia">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Australia
            </motion.div>
          </Link>
          <Link to="/newzealand">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              New Zealand
            </motion.div>
          </Link>
          <Link to="/usa">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              USA
            </motion.div>
          </Link>
          <Link to="/canada">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Canada
            </motion.div>
          </Link>
          <Link to="/ireland">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Ireland
            </motion.div>
          </Link>
        </div>
      </motion.section>

      {/* Other Sections... */}
      <motion.div
        className="whatsapp-btn-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <a
          href="https://wa.me/24323432343" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="whatsapp-btn">
            <FaWhatsapp className="whatsapp-icon" />
            <span className="whatsapp-text">Chat with Us on WhatsApp</span>
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default App;
