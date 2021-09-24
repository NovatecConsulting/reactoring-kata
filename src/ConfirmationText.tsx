import React from "react";
import {Stack, Typography} from '@mui/material';

interface ConfirmationTextProps {
    contact: { firstName: string; lastName: string; address: string };
}

export function ConfirmationText({contact: {address, firstName}}: ConfirmationTextProps) {
    return <Stack direction={"column"} spacing={2} textAlign="center">
        <Typography variant="h4" component="div">
            Thank you so much for your purchase, {firstName}!
        </Typography>
        <Typography variant="h5" component="div" textAlign="center">
            We are going to send your cool new stuff to : {address} ~
        </Typography>
    </Stack>;
}