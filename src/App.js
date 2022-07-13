import './App.css';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setShow(prev => !prev)}>Test</Button>
        <Collapse in={show}>
          <Button variant="outlined" onClick={() => setShow2(prev => !prev)}>Test</Button>
          <Collapse in={show2}>
          <Button variant="outlined" onClick={() => setShow(prev => !prev)}>Test</Button>
          <Collapse in={show}>
          <Button variant="outlined" onClick={() => setShow(prev => !prev)}>Test</Button>
          <Collapse in={show}>
          <Button variant="outlined" onClick={() => setShow(prev => !prev)}>Test</Button>
          </Collapse>
          </Collapse>
          </Collapse>
          </Collapse>
    </>
  );
}

export default App;