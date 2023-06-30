import React from 'react';
import './App.css';
import { LoadingButton } from '@mui/lab';

function App() {
  return (
    <div className="App">
     <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading
      >
        Login
      </LoadingButton>
    </div>
  );
}

export default App;
