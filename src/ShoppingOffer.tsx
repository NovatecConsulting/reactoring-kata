import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from '@mui/material';

interface ShoppingOfferProps {
    offer: number,
    offerName: string,
    description: string,
    price: number,
    removeOfferFromOrder: () => void,
    addOfferToOrder: () => void
}

export function ShoppingOffer({
                                  offer,
                                  offerName,
                                  description,
                                  price,
                                  removeOfferFromOrder,
                                  addOfferToOrder
                              }: ShoppingOfferProps) {

    return <Card sx={{minWidth: 275}}>
        <CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                {description}
            </Typography>
            <Typography variant="h5" component="div">
                {offer > 0 && offer + " - "} {offerName}
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                {price}€
            </Typography>
            <Typography variant="body2">
                Your friends are gonna love your new {offerName}!
            </Typography>
        </CardContent>
        <CardActions>
            <Button disabled={offer === 0} onClick={removeOfferFromOrder}>Buy Less</Button>
            <Button onClick={addOfferToOrder}>Buy More</Button>
        </CardActions>
    </Card>;
}