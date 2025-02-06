






// // import React from "react";
// // import './Work.scss';

// // // Use Webpack's require.context to load all images from the folder
// // const importAll = (r) => r.keys().map(r);

// // const WorkPage = () => {
// //   // Dynamically require all images in the images folder
// //   const images = importAll(require.context('../assets/images', false, /\.(jpg)$/));

// //   return (
// //     <div className="work-page">
// //       <h1 className="work-title">My Work</h1>
// //       <div className="gallery">
// //         {images.map((image, index) => (
// //           <div key={index} className="gallery-item">
// //             <img src={image} alt={`image-${index}`} />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default WorkPage;





// // import React, { useState } from "react";
// // import './Work.scss';

// // // Use Webpack's require.context to load all images from the folder
// // const importAll = (r) => r.keys().map(r);

// // const WorkPage = () => {
// //   // Dynamically require all images in the images folder
// //   const images = importAll(require.context('../assets/images', false, /\.(jpg)$/));

// //   // State to track how many images to show
// //   const [visibleImages, setVisibleImages] = useState(6); // Start by showing 6 images

// //   // Function to handle loading more images
// //   const loadMoreImages = () => {
// //     setVisibleImages(visibleImages + 6); // Load 6 more images
// //   };

// //   return (
// //     <div className="work-page">
// //       <h1 className="work-title">My Work</h1>
// //       <div className="gallery">
// //         {images.slice(0, visibleImages).map((image, index) => (
// //           <div key={index} className="gallery-item">
// //             <img src={image} alt={`image-${index}`} />
// //           </div>
// //         ))}
// //       </div>
// //       {/* Button to load more images */}
// //       {visibleImages < images.length && (
// //         <button className="load-more" onClick={loadMoreImages}>Load More</button>
// //       )}
// //     </div>
// //   );
// // };

// // export default WorkPage;





// import React, { useState } from "react";
// import './Work.scss';

// // Use Webpack's require.context to load all images from the folder
// const importAll = (r) => r.keys().map(r);

// const WorkPage = () => {
//   // Dynamically require all images in the images folder
//   const images = importAll(require.context('../assets/images', false, /\.(jpg)$/));

//   // State to track how many images to show
//   const [visibleImages, setVisibleImages] = useState(4); // Start by showing 6 images
//   const [isAllVisible, setIsAllVisible] = useState(false); // Track if all images are visible

//   // Function to handle loading more images
//   const loadMoreImages = () => {
//     setVisibleImages(images.length); // Show all images
//     setIsAllVisible(true); // Set to "all visible"
//   };

//   // Function to handle showing fewer images
//   const showLessImages = () => {
//     setVisibleImages(4); // Reset to initial number of images
//     setIsAllVisible(false); // Set to "not all visible"
//   };

//   return (
//     <div className="work-page">
//       <h1 className="work-title">My Work</h1>
//       <div className="gallery">
//         {images.slice(0, visibleImages).map((image, index) => (
//           <div key={index} className="gallery-item">
//             <img src={image} alt={`image-${index}`} />
//           </div>
//         ))}
//       </div>

//       {/* Button to load more or show less images */}
//       <button
//         className="load-more"
//         onClick={isAllVisible ? showLessImages : loadMoreImages}
//       >
//         {isAllVisible ? "Show Less" : "Load More"}
//       </button>
//     </div>
//   );
// };

// export default WorkPage;

// import React, { useState } from "react";
// import './Work.scss';

// // Use Webpack's require.context to load all images from the folder
// const importAll = (r) => r.keys().map(r);

// const WorkPage = () => {
//   // Dynamically require all images in the images folder
//   const images = importAll(require.context('../assets/images', false, /\.(jpg)$/));

//   // State to track how many images to show
//   const [visibleImages, setVisibleImages] = useState(8); // Start by showing 4 images
//   const [isAllVisible, setIsAllVisible] = useState(false); // Track if all images are visible

//   // Function to handle loading more images
//   const loadMoreImages = () => {
//     const newVisibleImages = visibleImages + 8;
//     setVisibleImages(newVisibleImages);

//     // Check if we've reached the total number of images
//     if (newVisibleImages >= images.length) {
//       setIsAllVisible(true); // Set to all images visible
//     }
//   };

//   // Function to handle showing fewer images
//   const showLessImages = () => {
//     setVisibleImages(8); // Reset to initial number of images
//     setIsAllVisible(false); // Set to "not all visible"
//   };

//   return (
//     <div className="work-page">
//       <h1 className="work-title">My Work</h1>
//       <div className="gallery">
//         {images.slice(0, visibleImages).map((image, index) => (
//           <div key={index} className="gallery-item">
//             <img src={image} alt={`image-${index}`} />
//           </div>
//         ))}
//       </div>

//       {/* Button to load more or show less images */}
//       {visibleImages < images.length && !isAllVisible && (
//         <button className="load-more" onClick={loadMoreImages}>
//           Load More
//         </button>
//       )}

//       {/* Button to show less images */}
//       {isAllVisible && (
//         <button className="load-more" onClick={showLessImages}>
//           Show Less
//         </button>
//       )}
//     </div>
//   );
// };

// export default WorkPage;


import React from 'react'

export default function Work() {
  return (
    <div>
      
    </div>
  )
}
