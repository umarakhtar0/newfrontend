



// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const multer = require("multer");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Set up file upload handling
// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage: storage });

// app.post("/register", upload.array("files", 15), async (req, res) => {
//   // Extract form data
//   const { organizationName, legalEntityName, firstName, lastName, role, email, mobileNumber, city } = req.body;
//   const files = req.files || []; // Ensure files is always an array

//   // Setup nodemailer transporter with hardcoded email credentials
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "info.abroadmentors.pk@gmail.com", // Direct email
//       pass: "kfga nqhh dvuw rvfu", // Direct email password
//     },
//   });

//   // 📩 1. Send Email to Admin
//   const adminMailOptions = {
//     from: "info.abroadmentors.pk@gmail.com", // Direct email
//     to: "info.abroadmentors.pk@gmail.com", // Send to the same email (admin)
//     subject: "New Partner Registration",
//     text: `
//       Organization Name: ${organizationName}
//       Legal Entity Name: ${legalEntityName}
//       First Name: ${firstName}
//       Last Name: ${lastName}
//       Role: ${role}
//       Email: ${email}
//       Mobile Number: ${mobileNumber}
//       City: ${city}
//     `,
//     attachments: files.map((file) => ({
//       filename: file.originalname,
//       content: file.buffer,
//       contentType: file.mimetype,
//     })),
//   };

//   // 📩 2. Send Confirmation Email to User
//   const userMailOptions = {
//     from: "info.abroadmentors.pk@gmail.com", // Direct email
//     to: email, // Send to the user's email
//     subject: "Thank You for Registering",
//     text: `Dear ${firstName},\n\nThank you for registering with Abroad Mentors.\n\nBest Regards,\nAbroad Mentors Team`,
//   };

//   try {
//     // Send emails
//     await transporter.sendMail(adminMailOptions);
//     await transporter.sendMail(userMailOptions);
    
//     // Respond with success
//     res.status(200).json({ message: "Email sent successfully to both admin and user" });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     res.status(500).json({ message: "Error sending email", error: error.message });
//   }
// });

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const multer = require("multer");
// const path = require("path");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Serve React static files
// app.use(express.static(path.join(__dirname, "../../client/build")));

// // Set up file upload handling
// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage: storage });

// app.post("/register", upload.array("files", 15), async (req, res) => {
//   const { organizationName, legalEntityName, firstName, lastName, role, email, mobileNumber, city } = req.body;
//   const files = req.files || [];

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "info.abroadmentors.pk@gmail.com",
//       pass: "kfga nqhh dvuw rvfu",
//     },
//   });

//   const adminMailOptions = {
//     from: "info.abroadmentors.pk@gmail.com",
//     to: "info.abroadmentors.pk@gmail.com",
//     subject: "New Partner Registration",
//     text: `
//       Organization Name: ${organizationName}
//       Legal Entity Name: ${legalEntityName}
//       First Name: ${firstName}
//       Last Name: ${lastName}
//       Role: ${role}
//       Email: ${email}
//       Mobile Number: ${mobileNumber}
//       City: ${city}
//     `,
//     attachments: files.map((file) => ({
//       filename: file.originalname,
//       content: file.buffer,
//       contentType: file.mimetype,
//     })),
//   };

//   const userMailOptions = {
//     from: "info.abroadmentors.pk@gmail.com",
//     to: email,
//     subject: "Thank You for Registering",
//     text: `Dear ${firstName},\n\nThank you for registering with Abroad Mentors.\n\nBest Regards,\nAbroad Mentors Team`,
//   };

//   try {
//     await transporter.sendMail(adminMailOptions);
//     await transporter.sendMail(userMailOptions);
//     res.status(200).json({ message: "Email sent successfully to both admin and user" });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     res.status(500).json({ message: "Error sending email", error: error.message });
//   }
// });

// // Serve the React app for all other routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const multer = require("multer");
// const path = require("path");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Set up file upload handling
// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage: storage });

// app.post("/register", upload.array("files", 15), async (req, res) => {
//   const { organizationName, legalEntityName, firstName, lastName, role, email, mobileNumber, city } = req.body;
//   const files = req.files || [];

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "info.abroadmentors.pk@gmail.com",
//       pass: "kfga nqhh dvuw rvfu", // You might want to use environment variables for sensitive info
//     },
//   });

//   const adminMailOptions = {
//     from: "info.abroadmentors.pk@gmail.com",
//     to: "info.abroadmentors.pk@gmail.com",
//     subject: "New Partner Registration",
//     text: `
//       Organization Name: ${organizationName}
//       Legal Entity Name: ${legalEntityName}
//       First Name: ${firstName}
//       Last Name: ${lastName}
//       Role: ${role}
//       Email: ${email}
//       Mobile Number: ${mobileNumber}
//       City: ${city}
//     `,
//     attachments: files.map((file) => ({
//       filename: file.originalname,
//       content: file.buffer,
//       contentType: file.mimetype,
//     })),
//   };

//   const userMailOptions = {
//     from: "info.abroadmentors.pk@gmail.com",
//     to: email,
//     subject: "Thank You for Registering",
//     text: `Dear ${firstName},\n\nThank you for registering with Abroad Mentors.\n\nBest Regards,\nAbroad Mentors Team`,
//   };

//   try {
//     await transporter.sendMail(adminMailOptions);
//     await transporter.sendMail(userMailOptions);
//     res.status(200).json({ message: "Email sent successfully to both admin and user" });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     res.status(500).json({ message: "Error sending email", error: error.message });
//   }
// });

// // Serve the React app for all other routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

// // Export the Express app as a Firebase function
// exports.api = functions.https.onRequest(app);





// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const multer = require("multer");
// const path = require("path");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Serve React static files
// app.use(express.static(path.join(__dirname, "../../client/build")));

// // Set up file upload handling
// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage: storage });

// app.post("/register", upload.array("files", 15), async (req, res) => {
//   const { organizationName, legalEntityName, firstName, lastName, role, email, mobileNumber, city } = req.body;
//   const files = req.files || [];

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "info.abroadmentors.pk@gmail.com",
//       pass: "kfga nqhh dvuw rvfu", // You might want to use environment variables for sensitive info
//     },
//   });

//   const adminMailOptions = {
//     from: "info.abroadmentors.pk@gmail.com",
//     to: "info.abroadmentors.pk@gmail.com",
//     subject: "New Partner Registration",
//     text: `
//       Organization Name: ${organizationName}
//       Legal Entity Name: ${legalEntityName}
//       First Name: ${firstName}
//       Last Name: ${lastName}
//       Role: ${role}
//       Email: ${email}
//       Mobile Number: ${mobileNumber}
//       City: ${city}
//     `,
//     attachments: files.map((file) => ({
//       filename: file.originalname,
//       content: file.buffer,
//       contentType: file.mimetype,
//     })),
//   };

//   const userMailOptions = {
//     from: "info.abroadmentors.pk@gmail.com",
//     to: email,
//     subject: "Thank You for Registering",
//     text: `Dear ${firstName},\n\nThank you for registering with Abroad Mentors.\n\nBest Regards,\nAbroad Mentors Team`,
//   };

//   try {
//     await transporter.sendMail(adminMailOptions);
//     await transporter.sendMail(userMailOptions);
//     res.status(200).json({ message: "Email sent successfully to both admin and user" });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     res.status(500).json({ message: "Error sending email", error: error.message });
//   }
// });

// // Serve the React app for all other routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
