import React from "react";
import {Stepper, Step, StepLabel} from '@mui/material';

interface ShoppingStepperProps {
    activeStep: number
}

export function ShoppingStepper({activeStep}: ShoppingStepperProps) {

    const shoppingSteps = ["Purchase", "Basket", "Delivery"];

    return <Stepper activeStep={activeStep}>
        {shoppingSteps.map((label, index) => (
            <Step key={index}>
                <StepLabel>{label}</StepLabel>
            </Step>
        ))}
    </Stepper>;
}