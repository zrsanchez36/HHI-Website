require('dotenv').config(); // Load environment variables
const app = require('./src/app');

//console.log('Service Account Key Path:', process.env.GOOGLE_APPLICATION_CREDENTIALS);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
