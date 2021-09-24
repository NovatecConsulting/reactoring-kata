import React from "react";
import {Step, StepLabel} from '@mui/material';

interface StepItemProps {
    key : number
    title : string
}

export function StepItem({key, title} : StepItemProps) {
    return <Step key={key}>
        <StepLabel>{title}</StepLabel>
    </Step>;
}