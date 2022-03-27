import React, { FC } from 'react';
import './App.css';
import CustomButton from './components/CustomButton';

const App: FC = () => {
  return (
    <div>
      <CustomButton color="success" disabled={false}>Okay</CustomButton>
    </div>
  );
}

export default App;
