import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { stepConnectorClasses } from '@mui/material/StepConnector';
import { Step, StepConnector, StepContent, StepLabel, Stepper } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MessageIcon from '@mui/icons-material/Message';
import StepButton from '@mui/material/StepButton';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
	palette: {
	  mode: 'dark',
	},
});

const GradientConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
}));

function StepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SelfImprovementIcon />,
    2: <AirlineStopsIcon />,
    3: <EmojiEmotionsIcon />,
  };

  return (
    <StepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </StepIconRoot>
  );
}

function MainIcon(props) {
  const { active, completed, className } = props;

  return (
    <StepIconRoot ownerState={{ completed, active }} className={className}>
      {<MessageIcon />}
    </StepIconRoot>
  );
}

StepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const StepIconRoot = styled('div')(({ ownerState }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

const steps = [
  {
    label: 'Overall Final Thoughts - Click Me!',
    children: [{
      label: 'Enjoyment of the class',
      desc: 'I was recommended this class by a classmate in my program in the previous semester and I was originally treating it as something that I was moderately interested in, but ultimately taking for the elective to finish off my degree. I tried to diversify my electives as much as possible and so this class was very outside of the normal scope for me, however I am extremely happy that I chose this class out of all of my choices. Aside from the overall enjoyment of the class structure I also found the content to be unexpectedly leagues more fascinating than I anticipated.'
    },
    {
      label: 'What I learned',
      desc: 'Out of all the electives I have taken to diversify myself, I believe this class to have contributed the most to me personally. While others have taught me much about how others think and how world views can differ to my own, the Philosophy of Yoga taught me both that and how my own existence fits into those views. The theory side of yoga was interesting to learn about and taught me much that I was unaware of, however I found the practice classes to be the most detrimental part of what I learned. It taught me much about my own body and the subtleties of its functions, how my mind is connected to different parts of my body, and how yoga benefits many aspects of my future life.'
    }],
  },
  {
    label: 'Transition Theory to Practice',
    children: [{
      label: 'Chakras',
      desc: 'I am unsure if chakras are always taught right before the transition to practice, though I found their placement in timing of the course to be incredibly appropriate, as of all the theory based descriptive content that we went over, I found that the descriptive chakras set up for the practical classes well by collecting all of the ideas we introduced in earlier theory. They were immediately relevant to the practical classes and helped my mind be in the right place for approaching the practical side of the class.'
    }],
  },
  {
    label: 'The Future',
    children: [{
      label: 'Benefits to Me',
      desc: 'Beyond just the overall knowledge taught within this class, from the history to the postures, I find the most beneficial side of it for me going forward is the approach towards the view of my own existence and how I can be in control of it, be that physically or mentality. Given that this is my final semester and that I will be going forward into a field known to be quite stressful on the body and mind I hope to find that the practical side of this class will pay off extremely well, especially in the focus of the last few classes of bending and relaxation.'
    },
    {
      label: 'Role of Yoga in Society',
      desc: 'As we discussed in class and discovered through our assignments, with the ever evolving structure of yoga, I find it difficult to gauge how it will progress going forward however I do fear it becoming like so many other fields and becoming even more commodified than it currently is. Currently, I find that the versions and ways of teaching yoga are quite healthy for its development within society by allowing it to be an unguarded practice, despite that going against its original basis. However, at the same time I do acknowledge my massive gap in in-depth knowledge of the teachings of yoga and the great differences between modern yoga and traditional yoga that create a divide that needs to be worked on and mended along with the various issues that plague modern postural yoga. That being said, addressing these issues is no small feat, and I find that any potential answer I could come up with in this paper would not be given the proper time, thought, and commitment needed to really present a true view of a potential solution.'
    }],
  }
];

function App() {

  const [mainActiveStep, setMainActiveStep] = React.useState(-1);
  const [subActiveStep, setSubActiveStep] = React.useState(-1);

  const handleMainStep = (step) => () => {
    setSubActiveStep(-1);
    setMainActiveStep(step);
  };

  const handleSubStep = (step) => () => {
    setSubActiveStep(step);
  };

	return (
  	<div class="App">
      <ThemeProvider theme={darkTheme}>
        <Stepper nonLinear activeStep={mainActiveStep} connector={<GradientConnector />}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepButton onClick={handleMainStep(index)}>
                <StepLabel StepIconComponent={StepIcon}>{step.label}</StepLabel>
              </StepButton>
              <StepContent sx={{width: "fit-content", color: "white"}}>
                <Stepper nonLinear activeStep={subActiveStep} orientation="vertical">
                  {step.children.map((step, index) => (
                  <Step key={step.label}>
                    <StepButton onClick={handleSubStep(index)}>
                      <StepLabel StepIconComponent={MainIcon}>
                        {step.label}
                        <StepContent sx={{width: 300}}>{step.desc}</StepContent>
                      </StepLabel>  
                    </StepButton>
                  </Step>))}
                </Stepper>
              </StepContent>
            </Step>))}
        </Stepper>
        </ThemeProvider>
    </div>
  );
}

export default App;