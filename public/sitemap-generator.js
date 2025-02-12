const Sitemap = require('react-router-sitemap').default;
const router = require('./src/App').default; // Import your main router
new Sitemap(router)
  .build('https://abroad-mentors-form.netlify.app/') // Replace with your actual website URL
  .save('/sitemap.xml'); // Save the sitemap.xml file inside the public folder
