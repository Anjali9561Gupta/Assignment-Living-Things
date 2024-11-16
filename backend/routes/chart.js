

const express = require('express');
const router = express.Router();

// Define the route for logging access
router.post('/log-access', (req, res) => {
    
    const { access_time, access_date, employee_name, algo_status } = req.body;


    console.log(`Access Log: ${access_time}, ${access_date}, ${employee_name}, ${algo_status}`);

    
    res.status(200).json({ message: 'Access logged successfully' });
});

module.exports = router;
