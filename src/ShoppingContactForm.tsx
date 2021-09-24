import React from "react";
import {TextField, Stack, Typography} from '@mui/material';

interface ShoppingContactFormProps {
    contact: { firstName: string; lastName: string; address: string };
    handleFirstNameChanged: (newFirstName: string) => void;
    handleLastNameChanged: (newLastName: string) => void;
    handleAddressChanged: (newAddress: string) => void;
}

export function ShoppingContactForm({
                                        contact: {address, firstName, lastName},
                                        handleAddressChanged,
                                        handleFirstNameChanged,
                                        handleLastNameChanged
                                    }: ShoppingContactFormProps) {
    return <Stack direction={"column"} spacing={2}>
        <Typography variant="h4" component="div">
            We still need your address:
        </Typography>
        <Stack direction={"row"} spacing={1}>
            <TextField
                required
                value={firstName}
                onChange={(e) => handleFirstNameChanged(e.target.value)}
                error={firstName.length > 0 && firstName.length < 3}
                helperText={firstName.length > 0 && firstName.length < 3
                    ? "Your first name is too short :("
                    : ""}
                label="First name"
            />
            <TextField
                required
                value={lastName}
                onChange={(e) => handleLastNameChanged(e.target.value)}
                error={lastName.length > 0 && lastName.length < 5}
                helperText={lastName.length > 0 && lastName.length < 5
                    ? "Your last name is too short :("
                    : ""}
                label="Last name"
            />
        </Stack>
        <TextField
            required
            value={address}
            onChange={(e) => handleAddressChanged(e.target.value)}
            error={address.length > 0 && address.length < 8}
            helperText={address.length > 0 && address.length < 8
                ? "Your address is too short :("
                : ""}
            label="Your address"
        />
    </Stack>;
}