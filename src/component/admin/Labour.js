import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddLabour from './AddLabour'
import ProfessionLabour from './ProfessionLabour'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import PswdLabour from './PswdLabour'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  button: {
  background : '#3f51b5',
  },
}));

function getSteps() {
  return ['Personal Details', 'Professional Details', 'Display Details'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <AddLabour/>;
    case 1:
      return <ProfessionLabour/>;
    case 2:
      return <PswdLabour/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function Labour(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return ( <div><Breadcrumbs aria-label="breadcrumb">
  <Link color="inherit" href="/Dashboard"  className={classes.link}>
    <HomeIcon className={classes.icon} />
    Dashboard
  </Link>
  <Typography color="textPrimary" className={classes.link}>
    <GrainIcon className={classes.icon} />
    Add Labour
  </Typography>
</Breadcrumbs><br/>
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel color="primary">
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Labour Registered</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" className={classes.button} onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div></div>
  );
}