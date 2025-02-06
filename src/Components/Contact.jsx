// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import emailjs from 'emailjs-com';
// import 'react-toastify/dist/ReactToastify.css'; // Make sure to import the CSS
// import './Contact.scss'
// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) {
//       toast.error('Please fill all fields!');
//       return;
//     }

//     emailjs
//       .send('service_1rlx9f9', 'template_sx2b3yw', formData, 'FpbtK9jgN-gptlepA')
//       .then((response) => {
//         console.log('Message Sent:', response);
//         toast.success('Message sent successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       })
//       .catch((err) => {
//         console.error('Failed to send message:', err);
//         toast.error('Something went wrong, please try again.');
//       });
//   };

//   return (
//     <Container className="contact-page">
//       <Row className="justify-content-center">
//         <Col lg={8} md={10} sm={12}>
//           <div className="contact-form-container">
//             <h2>Contact Us</h2>
//             <Form onSubmit={handleSubmit} className="contact-form">
//               <Form.Group controlId="formName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="formEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="formMessage">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={4}
//                   placeholder="Your message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Button variant="primary" type="submit" className="submit-btn">
//                 Send Message
//               </Button>
//             </Form>
//           </div>
//         </Col>
//       </Row>

//       <ToastContainer position="top-right" autoClose={5000} />
//     </Container>
//   );
// };

// export default ContactPage;


// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import emailjs from 'emailjs-com';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
// import './Contact.scss';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Check if all fields are filled
//     if (!formData.name || !formData.email || !formData.message) {
//       // Trigger error toast if any field is empty
//       toast.error('Please fill out all fields!');
//       return;
//     }

//     // If all fields are filled, send the email
//     emailjs
//       .send('service_1rlx9f9', 'template_sx2b3yw', formData, 'FpbtK9jgN-gptlepA')
//       .then((response) => {
//         console.log('Message Sent:', response);
//         toast.success('Message sent successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       })
//       .catch((err) => {
//         console.error('Failed to send message:', err);
//         toast.error('Something went wrong, please try again.');
//       });
//   };

//   return (
//     <Container className="contact-page">
//       <Row className="justify-content-center align-items-center min-vh-100">
//         <Col lg={6} md={8} sm={12}>
//           <div className="contact-form-container">
//             <h2 className="text-center mb-4">Contact Us</h2>
//             <Form onSubmit={handleSubmit} className="contact-form">
//               <Form.Group controlId="formName" className="form-group">
//                 <Form.Label className="form-label">Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
                 
//                   className="custom-input animated-input"
//                 />
//               </Form.Group>

//               <Form.Group controlId="formEmail" className="form-group">
//                 <Form.Label className="form-label">Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
               
//                   className="custom-input animated-input"
//                 />
//               </Form.Group>

//               <Form.Group controlId="formMessage" className="form-group">
//                 <Form.Label className="form-label">Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={5}
//                   placeholder="Your message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
                
//                   className="custom-input animated-input"
//                 />
//               </Form.Group>

//               <Button variant="primary" type="submit" className="submit-btn w-100">
//                 Send Message
//               </Button>
//             </Form>
//           </div>
//         </Col>
//       </Row>

//       {/* Toast Container for Notifications */}
//       <ToastContainer 
//         position="top-center" 
//         autoClose={5000} 
//         hideProgressBar={true} 
//         newestOnTop={true} 
//         closeButton={false} 
//         className="custom-toast-container"
//       />
//     </Container>
//   );
// };

// export default ContactPage;



///



// import React, { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import axios from "axios";

// const PartnerRegistration = () => {
//   const [formData, setFormData] = useState({
//     organizationName: "",
//     legalEntityName: "",
//     firstName: "",
//     lastName: "",
//     role: "",
//     email: "",
//     mobileNumber: "",
//     country: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5001/register", formData);
//       toast.success("Registration successful!");
//       setFormData({
//         organizationName: "",
//         legalEntityName: "",
//         firstName: "",
//         lastName: "",
//         role: "",
//         email: "",
//         mobileNumber: "",
//         country: "",
//       });
//     } catch (error) {
//       toast.error("Failed to register. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <Toaster position="top-center" reverseOrder={false} />
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center">Become a Recruitment Partner</h2>
//         <input type="text" name="organizationName" placeholder="Organization Name" className="w-full p-2 border rounded-md" value={formData.organizationName} onChange={handleChange} required />
//         <input type="text" name="legalEntityName" placeholder="Legal Entity Name" className="w-full p-2 border rounded-md" value={formData.legalEntityName} onChange={handleChange} />
//         <div className="flex flex-col md:flex-row gap-2">
//           <input type="text" name="firstName" placeholder="First Name" className="w-full p-2 border rounded-md" value={formData.firstName} onChange={handleChange} required />
//           <input type="text" name="lastName" placeholder="Last Name" className="w-full p-2 border rounded-md" value={formData.lastName} onChange={handleChange} required />
//         </div>
//         <select name="role" className="w-full p-2 border rounded-md" value={formData.role} onChange={handleChange} required>
//           <option value="">Select Role</option>
//           <option value="Consultant">Consultant</option>
//           <option value="Agent">Agent</option>
//         </select>
//         <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md" value={formData.email} onChange={handleChange} required />
//         <input type="text" name="mobileNumber" placeholder="Mobile Number" className="w-full p-2 border rounded-md" value={formData.mobileNumber} onChange={handleChange} required />
//         <input type="text" name="country" placeholder="Country" className="w-full p-2 border rounded-md" value={formData.country} onChange={handleChange} required />
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Create An Account</button>
//       </form>
//     </div>
//   );
// };

// export default PartnerRegistration;



// ///

// import React, { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import axios from "axios";
// import './Contact.scss'; // Import SCSS file for styling

// const PartnerRegistration = () => {
//   const [formData, setFormData] = useState({
//     organizationName: "",
//     legalEntityName: "",
//     firstName: "",
//     lastName: "",
//     role: "",
//     email: "",
//     mobileNumber: "",
//     country: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5001/register", formData);
//       toast.success("Registration successful!");
//       setFormData({
//         organizationName: "",
//         legalEntityName: "",
//         firstName: "",
//         lastName: "",
//         role: "",
//         email: "",
//         mobileNumber: "",
//         country: "",
//       });
//     } catch (error) {
//       toast.error("Failed to register. Try again.");
//     }
//   };

//   return (
//     <div className="container">
//       <Toaster position="top-center" reverseOrder={false} />
//       <form
//         onSubmit={handleSubmit}
//         className="form-container"
//       >
//         <h2 className="form-title">Become a Recruitment Partner</h2>

//         {/* Long Fields */}
//         <input
//           type="text"
//           name="organizationName"
//           placeholder="Enter organization name"
//           className="input-field long-input"
//           value={formData.organizationName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="legalEntityName"
//           placeholder="Enter legal entity name"
//           className="input-field long-input"
//           value={formData.legalEntityName}
//           onChange={handleChange}
//           required
//         />

//         {/* Short Fields */}
//         <div className="flex gap-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="Enter first name"
//             className="input-field short-input"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Enter last name"
//             className="input-field short-input"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//           <select
//             name="role"
//             className="input-field short-input"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Please select</option>
//             <option value="Consultant">Consultant</option>
//             <option value="Agent">Agent</option>
//           </select>
//         </div>

//         <div className="flex gap-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             className="input-field short-input"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="mobileNumber"
//             placeholder="Enter phone number"
//             className="input-field short-input"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             required
//           />
//           <select
//             name="country"
//             className="input-field short-input"
//             value={formData.country}
//             onChange={handleChange}
//             required
//           >
            
//             <option value="">Select country</option>
//             {/* You can add countries here */}
//             <option value="USA">USA</option>
//             <option value="India">India</option>
//             <option value="UK">UK</option>
//           </select>
//         </div>

//         <button type="submit" className="submit-btn">
//           Create An Account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PartnerRegistration;

















// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Toaster, toast } from "react-hot-toast";

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const formData = new FormData(form.current);
//     formData.append("from_name", "Abroad Mentors"); // Ensuring sender name is set

//     emailjs
//       .sendForm(
//         "service_kmxn9lj", // Your service ID
//         "template_sl2r22j", // Your template ID
//         form.current, // The form reference
//         "FMMeyLNkXoaAE1Rik" // Your public key
//       )
//       .then(
//         () => {
//           toast.success("Message sent successfully! Thank you for reaching out to Abroad Mentors.");
//           form.current.reset();
//         },
//         (error) => {
//           toast.error("Failed to send message. Please try again later.");
//           console.error("EmailJS Error:", error.text);
//         }
//       );
//   };

//   return (
//     <div className="form-container">
//       <div className="form-content">
//         <form ref={form} onSubmit={sendEmail}>
//           <h1>Abroad Mentors Can Help You</h1>
//           <p className="description">
//             Enter your details and one of our expert counsellors will reach out to you 
//             so we can connect you to the right course, country, university – and even scholarships!
//           </p>

//           <input type="hidden" name="from_name" value="Abroad Mentors" />

//           <div className="name-group">
//             <div className="input-group">
//               <label>First name*</label>
//               <input type="text" name="first_name" required />
//             </div>
//             <div className="input-group">
//               <label>Last name</label>
//               <input type="text" name="last_name" />
//             </div>
//           </div>

//           <div className="input-group">
//             <label>Email address*</label>
//             <input type="email" name="email" required />
//           </div>

//           <div className="phone-group">
//             <div className="dial-code">
//               <label>Mobile number*</label>
//               <div className="code-input">
//                 <span>+92</span>
//                 <input type="tel" name="mobile" required />
//               </div>
//             </div>
//           </div>

//           <div className="input-group">
//             <label>Your preferred study destination*</label>
//             <select name="study_destination" required>
//               <option value="">Select ▼</option>
//               <option value="USA">USA</option>
//               <option value="UK">UK</option>
//               <option value="Canada">Canada</option>
//               <option value="Australia">Australia</option>
//               <option value="Cyprus">Cyprus</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <button type="submit" className="enquire-button">
//             Enquire now
//           </button>
//         </form>
//       </div>

//       <Toaster position="top-center" reverseOrder={false} />
//     </div>
//   );
// };

// export default ContactForm;












// import React, { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import axios from "axios";
// import './Contact.scss'; // Import SCSS file for styling

// const PartnerRegistration = () => {
//   const [formData, setFormData] = useState({
//     organizationName: "",
//     legalEntityName: "",
//     firstName: "",
//     lastName: "",
//     role: "",
//     email: "",
//     mobileNumber: "",
//     country: "",
//   });

//   const [files, setFiles] = useState([]);  // Array to store multiple files

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);  // Convert FileList to array
//     setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);  // Add selected files to the list
//   };

//   const handleFileCancel = (index) => {
//     setFiles((prevFiles) => {
//       // Filter out the file based on its index
//       const newFiles = prevFiles.filter((_, i) => i !== index);
//       return newFiles;  // Return updated list of files
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataWithFile = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataWithFile.append(key, value);
//     });

//     files.forEach((file) => {
//       formDataWithFile.append("file", file);  // Append each file to form data
//     });

//     try {
//       await axios.post("http://localhost:5001/register", formDataWithFile, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       toast.success("Registration successful!");
//       setFormData({
//         organizationName: "",
//         legalEntityName: "",
//         firstName: "",
//         lastName: "",
//         role: "",
//         email: "",
//         mobileNumber: "",
//         country: "",
//       });
//       setFiles([]);  // Reset files after successful submission
//     } catch (error) {
//       toast.error("Failed to register. Try again.");
//     }
//   };

//   return (
//     <div className="partner-registration-container">
//       <Toaster position="top-center" reverseOrder={false} />
//       <form
//         onSubmit={handleSubmit}
//         className="partner-form"
//       >
//         <h2 className="form-title">Become a Recruitment Partner</h2>

//         {/* Long Fields */}
//         <input
//           type="text"
//           name="organizationName"
//           placeholder="Enter organization name"
//           className="input-field long-input"
//           value={formData.organizationName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="legalEntityName"
//           placeholder="Enter legal entity name"
//           className="input-field long-input"
//           value={formData.legalEntityName}
//           onChange={handleChange}
//           required
//         />

//         {/* Short Fields */}
//         <div className="flex gap-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="Enter first name"
//             className="input-field short-input"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Enter last name"
//             className="input-field short-input"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//           <select
//             name="role"
//             className="input-field short-input"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Please select</option>
//             <option value="Consultant">Consultant</option>
//             <option value="Agent">Agent</option>
//           </select>
//         </div>

//         <div className="flex gap-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             className="input-field short-input"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="mobileNumber"
//             placeholder="Enter phone number"
//             className="input-field short-input"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             required
//           />
//           <select
//             name="country"
//             className="input-field short-input"
//             value={formData.country}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select country</option>
//             <option value="USA">USA</option>
//             <option value="India">India</option>
//             <option value="UK">UK</option>
//           </select>
//         </div>

//         {/* Business Card Upload Field */}
//         <div className="file-upload-container">
//           <label htmlFor="fileInput" className="business-card-label">
//             Add Business Card
//           </label>
//           <input
//             type="file"
//             name="file"
//             id="fileInput"
//             className="file-input"
//             onChange={handleFileChange}
//             multiple
//             required
//           />
//           {files.length > 0 && (
//             <div className="file-list">
//               {files.map((file, index) => (
//                 <div key={index} className="file-name">
//                   <span>{file.name}</span>
//                   <button
//                     type="button"
//                     className="cancel-btn"
//                     onClick={() => handleFileCancel(index)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <button type="submit" className="submit-btn">
//           Create An Account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PartnerRegistration;








// import React, { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import axios from "axios";
// import './Contact.scss'; // Import SCSS file for styling

// const PartnerRegistration = () => {
//   const [formData, setFormData] = useState({
//     organizationName: "",
//     legalEntityName: "",
//     firstName: "",
//     lastName: "",
//     role: "",
//     email: "",
//     mobileNumber: "",
//     country: "",
//   });

//   const [file, setFile] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);  // Store the selected file
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();


//     const formDataWithFile = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataWithFile.append(key, value);
//     });

//     if (file) {
//       formDataWithFile.append("file", file);
//     }

//     try {
//       await axios.post("http://localhost:5001/register", formDataWithFile, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       toast.success("Registration successful!");
//       setFormData({
//         organizationName: "",
//         legalEntityName: "",
//         firstName: "",
//         lastName: "",
//         role: "",
//         email: "",
//         mobileNumber: "",
//         country: "",
//       });
//       setFile(null);
//     } catch (error) {
//       toast.error("Failed to register. Try again.");
//     }
//   };

//   return (
//     <div className="partner-registration-container">
//       <Toaster position="top-center" reverseOrder={false} />
//       <form
//         onSubmit={handleSubmit}
//         className="partner-form"
//       >
//         <h2 className="form-title">Become a Recruitment Partner</h2>

//         {/* Long Fields */}
//         <input
//           type="text"
//           name="organizationName"
//           placeholder="Enter organization name"
//           className="input-field long-input"
//           value={formData.organizationName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="legalEntityName"
//           placeholder="Enter legal entity name"
//           className="input-field long-input"
//           value={formData.legalEntityName}
//           onChange={handleChange}
//           required
//         />

//         {/* Short Fields */}
//         <div className="flex gap-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="Enter first name"
//             className="input-field short-input"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Enter last name"
//             className="input-field short-input"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//           <select
//             name="role"
//             className="input-field short-input"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Please select</option>
//             <option value="Consultant">Consultant</option>
//             <option value="Agent">Agent</option>
//           </select>
//         </div>

//         <div className="flex gap-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             className="input-field short-input"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="mobileNumber"
//             placeholder="Enter phone number"
//             className="input-field short-input"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             required
//           />
//           <select
//             name="country"
//             className="input-field short-input"
//             value={formData.country}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select country</option>
//             <option value="USA">USA</option>
//             <option value="India">India</option>
//             <option value="UK">UK</option>
//           </select>
//         </div>

//         {/* File Upload Field */}
//         {/* <input
//           type="file"
//           name="file"
//           //placeholder="Your Photo"
//           id="fileInput"
//           className="file-input"
//           onChange={handleFileChange}
//           multiple required
//         /> */}
//         <div className="file-upload-container">
//   <label htmlFor="fileInput">Add Business Card</label>
//   <input
//     type="file"
//     name="file"
//     id="fileInput"
//     className="file-input"
//     onChange={handleFileChange}
//     multiple
//     required
//   />
// </div>

          

//         <button type="submit" className="submit-btn">
//           Create An Account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PartnerRegistration;







// import React, { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import axios from "axios";
// import './Contact.scss'; // Import SCSS file for styling

// const PartnerRegistration = () => {
//   const [formData, setFormData] = useState({
//     organizationName: "",
//     legalEntityName: "",
//     firstName: "",
//     lastName: "",
//     role: "",
//     email: "",
//     mobileNumber: "",
//     city: "",
//   });

//   const [file, setFile] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);  // Store the selected file
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();


//     const formDataWithFile = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataWithFile.append(key, value);
//     });

//     if (file) {
//       // formDataWithFile.append("file", file);
//       formDataWithFile.append("file", file);

//     }

//     try {
//       await axios.post("http://localhost:5001/register", formDataWithFile, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       toast.success("Registration successful!");
//       setFormData({
//         organizationName: "",
//         legalEntityName: "",
//         firstName: "",
//         lastName: "",
//         role: "",
//         email: "",
//         mobileNumber: "",
//         city: "",
//       });
//       setFile(null);
//     } catch (error) {
//       toast.error("Failed to register. Try again.");
//     }
//   };

//   return (
//     <div className="partner-registration-container">
//       <Toaster position="top-center" reverseOrder={false} />
//       <form
//         onSubmit={handleSubmit}
//         className="partner-form"
//       >
//         <h2 className="form-title">Become a Recruitment Partner</h2>

//         {/* Long Fields */}
//         <input
//           type="text"
//           name="organizationName"
//           placeholder="Enter organization name"
//           className="input-field long-input"
//           value={formData.organizationName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="legalEntityName"
//           placeholder="Enter legal entity name"
//           className="input-field long-input"
//           value={formData.legalEntityName}
//           onChange={handleChange}
//           required
//         />

//         {/* Short Fields */}
//         <div className="flex gap-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="Enter first name"
//             className="input-field short-input"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Enter last name"
//             className="input-field short-input"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//           <select
//             name="role"
//             className="input-field short-input"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Please select</option>
//             <option value="Consultant">Consultant</option>
//             <option value="Agent">Agent</option>
//           </select>
//         </div>

//         <div className="flex gap-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             className="input-field short-input"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="mobileNumber"
//             placeholder="Enter phone number"
//             className="input-field short-input"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             required
//           />
//           <select
//             name="country"
//             className="input-field short-input"
//             value={formData.country}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select country</option>
//             <option value="USA">USA</option>
//             <option value="India">India</option>
//             <option value="UK">UK</option>
//           </select>
//         </div>

//         {/* File Upload Field */}
//         {/* <input
//           type="file"
//           name="file"
//           //placeholder="Your Photo"
//           id="fileInput"
//           className="file-input"
//           onChange={handleFileChange}
//           multiple required
//         /> */}
//         <div className="file-upload-container">
//   {/* <label htmlFor="fileInput">Add Business Card</label> */}
//   <input
//     type="file"
//     name="file"
//     id="fileInput"
//     className="file-input"
//     onChange={handleFileChange}
//     multiple
//     required
//   />
// </div>

          

//         <button type="submit" className="submit-btn">
//           Create An Account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PartnerRegistration;



import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import './Contact.scss'; // Import SCSS file for styling

const PartnerRegistration = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    legalEntityName: "",
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    mobileNumber: "",
    city: "",  // Adjusted to use 'city' for consistency with backend
  });

  const [files, setFiles] = useState([]);  // Store multiple files

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);  // Store selected files in an array
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formDataWithFiles = new FormData();
  //   Object.entries(formData).forEach(([key, value]) => {
  //     formDataWithFiles.append(key, value);
  //   });

  //   // Append all selected files with 'files' name to match backend
  //   files.forEach((file) => {
  //     formDataWithFiles.append("files", file);
  //   });

  //   try {
  //     await axios.post("https://newbackend-9329.vercel.app//register", formDataWithFiles, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     toast.success("Registration successfullllll!");
  //     setFormData({
  //       organizationName: "",
  //       legalEntityName: "",
  //       firstName: "",
  //       lastName: "",
  //       role: "",
  //       email: "",
  //       mobileNumber: "",
  //       city: "",  // Reset the city field too
  //     });
  //     setFiles([]);  // Clear file selection after successful submit
  //   } catch (error) {
  //     toast.error("Failed to register. Try again.");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataWithFiles = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataWithFiles.append(key, value);
    });
  
    // Append all selected files with 'files' name to match backend
    files.forEach((file) => {
      formDataWithFiles.append("files", file);
    });
  
    try {
      await axios.post("https://newbackend-9329.vercel.app/register", formDataWithFiles, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Registration successful!");
      setFormData({
        organizationName: "",
        legalEntityName: "",
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        mobileNumber: "",
        city: "",  // Reset the city field too
      });
      setFiles([]);  // Clear file selection after successful submit
    } catch (error) {
      toast.error("Failed to register. Try again.");
    }
  };
  

  return (
    <div className="partner-registration-container">
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} className="partner-form">
        <h2 className="form-title">Become a Recruitment Partner</h2>

        {/* Long Fields */}
        <input
          type="text"
          name="organizationName"
          placeholder="Enter organization name"
          className="input-field long-input"
          value={formData.organizationName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="legalEntityName"
          placeholder="Enter legal entity name"
          className="input-field long-input"
          value={formData.legalEntityName}
          onChange={handleChange}
          required
        />

        {/* Short Fields */}
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            className="input-field short-input"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            className="input-field short-input"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            className="input-field short-input"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Please select</option>
            <option value="Student">Student</option>
            <option value="Agent">Agent</option>
          </select>
        </div>

        <div className="flex gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="input-field short-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter phone number"
            className="input-field short-input"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <select
            name="city"
            className="input-field short-input"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select city</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Rawalpindi">Rawalpindi</option>
            <option value="Faisalabad">Faisalabad</option>
            <option value="Multan">Multan</option>
            <option value="Peshawar">Peshawar</option>
            <option value="Quetta">Quetta</option>
            <option value="Sialkot">Sialkot</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>

        <label htmlFor="fileInput">Add Business Card</label>
        <input
          type="file"
          name="files"  // Updated name to 'files' to match the backend
          id="fileInput"
          className="file-input"
          onChange={handleFileChange}
          multiple  // Allow multiple files
        />
        
        {/* Display selected file names */}
        <div className="file-list">
          {files.length > 0 && (
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PartnerRegistration;
