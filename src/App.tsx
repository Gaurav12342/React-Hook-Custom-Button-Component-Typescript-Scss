import React, { FC } from 'react';
import './App.css';
import Button from './components/CustomButton';

const App: FC = () => {
  return (
    <div>
      <Button variant="contained" size="small" disabled={false} loading={true}>Okay</Button>
      <Button variant="outlined" size="medium" disabled={false} loading={false}>Okay</Button>
      <Button color="success" size="large" disabled={false} loading={true}>Okay</Button>
      <Button color="error" size="small" disabled={false}>Okay</Button>

    </div>
  );
}

export default App;
