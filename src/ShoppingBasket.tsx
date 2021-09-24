import React from "react";
import {Stack, Typography, List, ListItem} from '@mui/material';


interface ShoppingBasketProps {
    shoes: number;
    hats: number;
}

export function ShoppingBasket({hats, shoes}: ShoppingBasketProps) {
    return <Stack direction={"column"} spacing={2}>
        <Typography variant="h4" component="div">
            So far you have bought:
        </Typography>
        <List>
            {shoes > 0 && <ListItem>{shoes} pair of Shoes for {shoes * 35}€</ListItem>}
            {hats > 0 && <ListItem>{hats} unit of Hats for {hats * 50}€</ListItem>}
            <ListItem>For a total of: {hats * 50 + shoes * 35}€</ListItem>
        </List>
    </Stack>;
}