import './App.css';

import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';

const darkTheme = createTheme({
	palette: {
	  mode: 'dark',
	},
  });

function Section({title, text, content, dir}) {
    const [show, setShow] = useState(false);
    return (
		<ThemeProvider theme={darkTheme}>
			<Stack direction={dir} spacing={2}>
				<Button sx={{
					marginLeft: 1,
					marginRight: 1,
					marginTop: 1,
					width: 300,
					fontSize: 12,
					height: "fit-content",
					textTransform: 'none',
					color: "white",
				}}
					disabled={show} variant="outlined" onClick={() => setShow(prev => !prev)}><Box>{title}<Divider /><Box sx={{textAlign:"left", textIndent: 15,}}>{text}</Box></Box></Button>
				<Collapse in={show} children={content} orientation='horizontal'/>
			</Stack>
			
		</ThemeProvider>
	);
}

export default Section;
