// ** React Imports
// ** Icon Imports
import Icon from "@web/@core/components/icon";
// ** Styled Components
import StepperWrapper from "@web/@core/styles/mui/stepper";
// ** Custom Components Imports
import StepperCustomDot from "@web/views/forms/form-wizard/StepperCustomDot";
import StepDealDetails from "@web/views/pages/wizard-examples/create-deal/StepDealDetails";
// ** Step Components
import StepDealType from "@web/views/pages/wizard-examples/create-deal/StepDealType";
import StepDealUsage from "@web/views/pages/wizard-examples/create-deal/StepDealUsage";
import StepReview from "@web/views/pages/wizard-examples/create-deal/StepReview";
import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent, { CardContentProps } from "@mui/material/CardContent";
import MuiStep, { StepProps } from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const steps = [
  {
    title: "Deal Type",
    icon: "mdi:tag-outline",
    subtitle: "Choose type of deal",
  },
  {
    title: "Deal Details",
    subtitle: "Provide deal details",
    icon: "mdi:clipboard-text-outline",
  },
  {
    title: "Deal Usage",
    icon: "mdi:credit-card-outline",
    subtitle: "Limitations & Offers",
  },
  {
    subtitle: "Launch a deal",
    title: "Review & Complete",
    icon: "mdi:rocket-launch-outline",
  },
];

const Step = styled(MuiStep)<StepProps>(({ theme }) => ({
  "&:not(:last-of-type)": {
    marginBottom: theme.spacing(4),
  },
  "& .MuiStepLabel-root": {
    padding: 0,
    cursor: "pointer",
  },
}));

const StepperHeaderContainer = styled(CardContent)<CardContentProps>(({ theme }) => ({
  minWidth: 300,
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down("md")]: {
    borderRight: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const CreateDealWizard = () => {
  // ** States
  const [activeStep, setActiveStep] = useState<number>(0);

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <StepDealType />;
      case 1:
        return <StepDealDetails />;
      case 2:
        return <StepDealUsage />;
      case 3:
        return <StepReview />;
      default:
        return null;
    }
  };

  const renderContent = () => {
    return getStepContent(activeStep);
  };

  const renderFooter = () => {
    const stepCondition = activeStep === steps.length - 1;

    return (
      <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
        <Button
          color="secondary"
          variant="outlined"
          onClick={handlePrev}
          disabled={activeStep === 0}
          startIcon={<Icon icon="mdi:arrow-left" />}>
          Previous
        </Button>
        <Button
          variant="contained"
          color={stepCondition ? "success" : "primary"}
          {...(!stepCondition ? { endIcon: <Icon icon="mdi:arrow-right" /> } : {})}
          onClick={() => (stepCondition ? alert("Submitted..!!") : handleNext())}>
          {stepCondition ? "Submit" : "Next"}
        </Button>
      </Box>
    );
  };

  return (
    <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <StepperHeaderContainer>
        <StepperWrapper sx={{ height: "100%", "& .MuiStepLabel-label": { cursor: "pointer" } }}>
          <Stepper connector={<></>} activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => {
              return (
                <Step
                  key={index}
                  onClick={() => setActiveStep(index)}
                  sx={{ "&.Mui-completed + svg": { color: "primary.main" } }}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className="step-label">
                      <Typography className="step-number">{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className="step-title">{step.title}</Typography>
                        <Typography className="step-subtitle">{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </StepperWrapper>
      </StepperHeaderContainer>
      <div>
        <CardContent>
          {renderContent()}
          {renderFooter()}
        </CardContent>
      </div>
    </Card>
  );
};

export default CreateDealWizard;
