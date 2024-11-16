const fs = require('fs');
const mongoose = require('mongoose');
const ChartData = require('./models/ChartData'); // Import the model

require('dotenv').config(); 

const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Read data from the JSON file
fs.readFile('data.json', 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  const jsonData = JSON.parse(data);

  // Insert the data into MongoDB
  try {
    await ChartData.insertMany(jsonData);
    console.log('Data inserted into MongoDB successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  }

 
  mongoose.connection.close();
});
