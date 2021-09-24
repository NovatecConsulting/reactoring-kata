import React from "react";
import {Stack} from '@mui/material';
import {ShoppingOffer} from "./ShoppingOffer";

interface ShoppingOffersProps {
    shoes: number,
    removeShoeFromOrder: () => void,
    addShoeToOrder: () => void,
    hats: number,
    removeHatFromOrder: () => void,
    addHatToOrder: () => void,
}

export function ShoppingOffers({
                                   shoes,
                                   removeShoeFromOrder,
                                   addShoeToOrder,
                                   hats,
                                   removeHatFromOrder,
                                   addHatToOrder
                               }: ShoppingOffersProps) {
    return <Stack direction={"row"} spacing={2}>
        <ShoppingOffer offer={shoes} offerName={"Shoes"} description={"Some item to be bought"} price={35}
                       removeOfferFromOrder={removeShoeFromOrder} addOfferToOrder={addShoeToOrder}/>
        <ShoppingOffer offer={hats} offerName={"Hats"} description={"Some other item to be bought"} price={50}
                       removeOfferFromOrder={removeHatFromOrder} addOfferToOrder={addHatToOrder}/>
    </Stack>;
}