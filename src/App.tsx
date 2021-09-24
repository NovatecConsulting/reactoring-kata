import React, {useState} from 'react';
import './App.css';
import {Button, Grid} from '@mui/material';
import {ShoppingStepper} from "./ShoppingStepper";
import {ShoppingOffers} from "./ShoppingOffers";
import {ShoppingBasket} from "./ShoppingBasket";
import {ShoppingContactForm} from "./ShoppingContactForm";
import {ConfirmationText} from "./ConfirmationText";

class Contact {

    constructor(public firstName: string = "",
                public lastName: string = "",
                public address: string = "") {
    }

    isValid() {
        return (
            this.firstName.length >= 3 &&
            this.lastName.length >= 5 &&
            this.address.length >= 8)
    }
}

function App() {
    const [step, setStep] = useState(0);
    const [shoes, setShoes] = useState(0);
    const [hats, setHats] = useState(0);
    const [contact, setContact] = useState(new Contact())
    const handlePreviousClicked = () => step === 3
        ? reset()
        : setStep(step - 1);
    const handleNextClicked = () => setStep(step + 1);

    const reset = () => {
        setStep(0);
        setShoes(0);
        setHats(0);
        setContact(new Contact());
    }

    const handleBuyShoes = () => setShoes(shoes + 1);
    const handleUndoBuyShoes = () => setShoes(shoes - 1);

    const handleBuyHats = () => setHats(hats + 1);
    const handleUndoBuyHats = () => setHats(hats - 1);

    return (
        <Grid container justifyContent="center" style={{height: "97.5vh", padding: "2.5vh"}}>
            <Grid item xs={12}>
                <ShoppingStepper activeStep={step}/>
            </Grid>
            <Grid item>
                {step === 0 &&
                <ShoppingOffers shoes={shoes} removeShoeFromOrder={handleUndoBuyShoes}
                                addShoeToOrder={handleBuyShoes} hats={hats}
                                removeHatFromOrder={handleUndoBuyHats} addHatToOrder={handleBuyHats}/>
                }
                {step === 1 &&
                <ShoppingBasket shoes={shoes} hats={hats}/>
                }
                {step === 2 &&
                <ShoppingContactForm contact={contact}
                                     handleFirstNameChanged={(newFirstName) => setContact(new Contact(newFirstName, contact.lastName, contact.address))}
                                     handleLastNameChanged={(newLastName) => setContact(new Contact(contact.firstName, newLastName, contact.address))}
                                     handleAddressChanged={(newAddress) => setContact(new Contact(contact.firstName, contact.lastName, newAddress))}/>
                }
                {step === 3 &&
                <ConfirmationText contact={contact}/>
                }
            </Grid>
            <Grid item container justifyContent="space-between" alignSelf={"flex-end"}>
                <Button disabled={step === 0}
                        onClick={handlePreviousClicked}>{step === 3 ? "Buy more!" : "Previous"}</Button>
                <Button disabled={
                    step === 3 ||
                    (hats === 0 && shoes === 0) ||
                    (step === 2 && !contact.isValid())
                } onClick={handleNextClicked}>
                    {step === 0 && "Proceed"}
                    {step === 1 && "Confirm"}
                    {step === 2 && "Buy!"}
                </Button>
            </Grid>
        </Grid>
    );
}

export default App;
