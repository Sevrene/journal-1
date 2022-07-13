import './App.css';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setShow(prev => !prev)}>Test</Button>
        <Collapse in={show}>
          <Button variant="outlined" onClick={() => setShow2(prev => !prev)}>Test</Button>
          <Collapse in={show2}>
          <Button variant="outlined" onClick={() => setShow3(prev => !prev)}>Test</Button>
          <Collapse in={show3}>
          <Button variant="outlined" onClick={() => setShow4(prev => !prev)}>Test</Button>
          <Collapse in={show4}>
          <Button variant="outlined">Test</Button>
          </Collapse>
          </Collapse>
          </Collapse>
          </Collapse>
    </>
  );
}

export default App;