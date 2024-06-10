const express = require('express');
const moment = require('moment-timezone');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Route to get the current time in Sri Lanka
app.get('/current-time', (req, res) => {
  try {
    // Get the current time in Sri Lanka
    const sriLankaTime = moment().tz('Asia/Colombo').format('YYYY-MM-DD HH:mm:ss');
    
    // Create the response object
    const timeData = {
      current_time: sriLankaTime,
      powered_by: "🌴NB DEV SL🌴 ⚠️if you are using this API, give credit to the owner⚠️"
    };

    // Send the response
    res.json(timeData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
