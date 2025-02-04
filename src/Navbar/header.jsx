// import React from 'react';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// //import './App.scss';
// import img from '../assets/l.png'

// const NavbarComponent = () => {
//   return (
//     <Navbar expand="lg" variant="dark" className="custom-navbar">
//       <Container>
//         <Navbar.Brand href="#home" className="logo">
//           <img src={img} alt="Logo" className="logo-img" />
//          Umar Akhtar
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ml-auto animated-nav">
//             <Nav.Link href="#home" className="nav-item">Home</Nav.Link>
//             <Nav.Link href="#features" className="nav-item">Features</Nav.Link>
//             <Nav.Link href="#pricing" className="nav-item">Pricing</Nav.Link>
//             <Nav.Link href="#pricing" className="nav-item">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComponent;\
/* DEMO STYLE */

// import React, { useState } from 'react';
// import './App.scss';  // Assuming you're using an external CSS file

// const OverlayNav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openNav = () => {
//     setIsOpen(true);
//   };

//   const closeNav = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       {/* Overlay Navigation */}
//       <div id="myNav" className={`overlay ${isOpen ? 'open' : ''}`}>
//         <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
//           &times;
//         </a>
//         <div className="overlay-content">
//           <a href="#">About</a>
//           <a href="#">Services</a>
//           <a href="#">Clients</a>
//           <a href="#">Contact</a>
//         </div>
//       </div>

//       {/* Toggle Button (Hamburger Icon) */}
//       <span
//         className="open-btn"
//         onClick={openNav}
//       >
//         &#9776; 
//       </span>

      
//     </div>
//   );
// };

// // export default OverlayNav;
// import React, { useState } from "react";
// import './App.scss';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="top">
//       <div className="container">
//         <a href="index.php" className="logo">mattscorner</a>
//         <div className="navbtn" onClick={toggleMenu}>
//           <div className={`bar ${menuOpen ? 'animate' : ''}`}></div>
//         </div>
//         <span className={`mobile_bg ${menuOpen ? 'show' : ''}`}>
//           <nav className="main-nav">
//             <ul className="site-nav">
//               <li><a href="aboutus.php" className="link_aboutus">About Us</a></li>
//               <li><a href="#" className="link_products">Products</a></li>
//               <li><a href="#" className="link_contact">Contact</a></li>
//             </ul>
//           </nav>
//           <section className="product_overlay">
//             <nav className="products">
//               <div className="row">
//                 <div className="col-md-4">
//                   <a href="monsoon-blinds_manual-system.php" className="nav-head">Monsoon Blinds</a>
//                   <ul className="pro-nav">
//                     <li><a href="monsoon-blinds_manual-system.php">Manual system</a></li>
//                     <li><a href="crank_shaft.php">Crank Shaft</a></li>
//                     <li><a href="motorized.php">Motorized</a></li>
//                     <li><a href="curved.php">Curved</a></li>
//                   </ul>
//                   <a href="#" className="nav-head">Wooden Venetian Blinds</a>
//                   <ul className="pro-nav">
//                     <li><a href="wooden_venetian_35mm.php">35 mm</a></li>
//                     <li><a href="wooden_venetian_mtsm.php">50 mm</a></li>
//                   </ul>
//                 </div>
//                 <div className="col-md-4">
//                   <a href="blackout_fabric.php" className="nav-head">Printed Roller Fabric Blinds</a>
//                   <ul className="pro-nav">
//                     <li><a href="blackout_fabric.php">Blackout fabric</a></li>
//                     <li><a href="semi_transluscent.php">Semi translucent</a></li>
//                     <li><a href="transluscent.php">translucent</a></li>
//                   </ul>
//                   <a href="exterior_interior_blinds.php" className="nav-head">Exterior and Interior Blinds</a>
//                 </div>
//                 <div className="col-md-4">
//                   <a href="barrier_free_system.php" className="nav-head">Insect Screens & Systems</a>
//                   <ul className="pro-nav">
//                     <li><a href="barrier_free_system.php">Barrier free system</a></li>
//                     <li><a href="plisse_system.php">Plisee system</a></li>
//                     <li><a href="vertical_retractable_ssytem.php">Vertical retractable system</a></li>
//                     <li><a href="hinged_openable_road.php">Hinged openable door</a></li>
//                     <li><a href="fixed_window.php">Fixed window</a></li>
//                     <li><a href="openable_window.php">openable window</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//           </section>
//         </span>
//       </div>
//     </header>
//   );
// };

// export default Header;





import React from 'react'

export default function header() {
  return (
    <div>
      
    </div>
  )
}
