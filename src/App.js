import './App.css';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

const Component = () => {
  const [show, setShow] = useState(false);
  return(
    <>
      <button onClick={() => setShow(prev => !prev)}>Click</button>
      {show && <Box>This is your component</Box>}
    </>
  );
}

function App() {
  const [show, setShow] = useState(false);
  return (
    <><Button variant="outlined" onClick={() => setShow(prev => !prev)}>Test</Button><Collapse in={show}>
      <Button variant="outlined" onClick={() => setShow(prev => !prev)}>Test</Button>
    </Collapse></>
  );
}

export default App;