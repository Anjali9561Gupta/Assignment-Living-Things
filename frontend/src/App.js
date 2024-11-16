import React from 'react';
import Chart from './components/Chart';
import LogForm from './components/LogForm';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container>
      <h1>Energy Consumption Analytics</h1>
      <Chart />
      <h2>Log Access</h2>
      <LogForm />
    </Container>
  );
};

export default App;
