import './App.css';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

function Section({text, content}) {
    const [show, setShow] = useState(false);
    return (
        <div class="section">
        	<Button sx={{
				width: 20,
			}}
				disabled={show} variant="outlined" onClick={() => setShow(prev => !prev)}>{text}</Button>
            <Collapse in={show}>{content}</Collapse>
        </div>
	);
}

export default Section;
