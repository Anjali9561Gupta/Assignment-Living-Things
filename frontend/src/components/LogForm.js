import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const LogForm = () => {
  const [accessTime, setAccessTime] = useState('');
  const [accessDate, setAccessDate] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [algoStatus, setAlgoStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const logData = {
      access_time: accessTime,
      access_date: accessDate,
      employee_name: employeeName,
      algo_status: algoStatus
    };

    try {
      await axios.post('http://localhost:5000/api/log-access', logData);
      alert('Log saved successfully!');
    } catch (error) {
      console.error('Error logging access:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Access Time"
        type="time"
        value={accessTime}
        onChange={(e) => setAccessTime(e.target.value)}
        fullWidth
      />
      <TextField
        label="Access Date"
        type="date"
        value={accessDate}
        onChange={(e) => setAccessDate(e.target.value)}
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Energy Saving Mode</InputLabel>
        <Select
          value={algoStatus}
          onChange={(e) => setAlgoStatus(e.target.value)}
        >
          <MenuItem value="ON">ON</MenuItem>
          <MenuItem value="OFF">OFF</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
};

export default LogForm;
