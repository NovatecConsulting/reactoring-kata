import React, {useState} from 'react';
import './App.css';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {
    Button,
    Grid,
    Card,
    Typography,
    CardContent,
    CardActions,
    Stack,
    List,
    ListItem,
    TextField
} from '@mui/material';

function App() {
    const [step, setStep] = useState(0);
    const [shoes, setShoes] = useState(0);
    const [hats, setHats] = useState(0);
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        address: ""
    })

    const handlePreviousClicked = () => step === 3
        ? reset()
        : setStep(step - 1);
    const handleNextClicked = () => setStep(step + 1);

    const reset = () => {
        setStep(0);
        setShoes(0);
        setHats(0);
        setContact({
            firstName: "",
            lastName: "",
            address: ""
        });
    }

    const handleBuyShoes = () => setShoes(shoes + 1);
    const handleUndoBuyShoes = () => setShoes(shoes - 1);

    const handleBuyHats = () => setHats(hats + 1);
    const handleUndoBuyHats = () => setHats(hats - 1);

    return (
        <Grid container justifyContent="center" style={{height: "97.5vh", padding: "2.5vh"}}>
            <Grid item xs={12}>
                <Stepper activeStep={step}>
                    <Step key={0}>
                        <StepLabel>{"Purchase"}</StepLabel>
                    </Step>
                    <Step key={1}>
                        <StepLabel>{"Basket"}</StepLabel>
                    </Step>
                    <Step key={2}>
                        <StepLabel>{"Delivery"}</StepLabel>
                    </Step>
                </Stepper>
            </Grid>
            <Grid item>
                {step === 0 &&
                <Stack direction={"row"} spacing={2}>
                    <Card sx={{minWidth: 275}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Some item to be bought
                            </Typography>
                            <Typography variant="h5" component="div">
                                {shoes > 0 && shoes + " - "} Shoes
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                35€
                            </Typography>
                            <Typography variant="body2">
                                Your friends are gonna love your new shoes!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button disabled={shoes === 0} onClick={handleUndoBuyShoes}>Buy Less</Button>
                            <Button onClick={handleBuyShoes}>Buy More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{minWidth: 275}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Some other item to be bought
                            </Typography>
                            <Typography variant="h5" component="div">
                                {hats > 0 && hats + " - "} Hats
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                50€
                            </Typography>
                            <Typography variant="body2">
                                Your friends are gonna love your new hats!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button disabled={hats === 0} onClick={handleUndoBuyHats}>Buy Less</Button>
                            <Button onClick={handleBuyHats}>Buy More</Button>
                        </CardActions>
                    </Card>
                </Stack>
                }
                {step === 1 &&
                <Stack direction={"column"} spacing={2}>
                    <Typography variant="h4" component="div">
                        So far you have bought:
                    </Typography>
                    <List>
                        {shoes > 0 && <ListItem>{shoes} pair of Shoes for {shoes * 35}€</ListItem>}
                        {hats > 0 && <ListItem>{hats} unit of Hats for {hats * 50}€</ListItem>}
                        <ListItem>For a total of: {hats * 50 + shoes * 35}€</ListItem>
                    </List>
                </Stack>
                }
                {step === 2 &&
                <Stack direction={"column"} spacing={2}>
                    <Typography variant="h4" component="div">
                        We still need your address:
                    </Typography>
                    <Stack direction={"row"} spacing={1}>
                        <TextField
                            required
                            value={contact.firstName}
                            onChange={(e) => setContact({...contact, firstName: e.target.value})}
                            error={contact.firstName.length > 0 && contact.firstName.length < 3}
                            helperText={contact.firstName.length > 0 && contact.firstName.length < 3
                                ? "Your first name is too short :("
                                : ""}
                            label="First name"
                        />
                        <TextField
                            required
                            value={contact.lastName}
                            onChange={(e) => setContact({...contact, lastName: e.target.value})}
                            error={contact.lastName.length > 0 && contact.lastName.length < 5}
                            helperText={contact.lastName.length > 0 && contact.lastName.length < 5
                                ? "Your last name is too short :("
                                : ""}
                            label="Last name"
                        />
                    </Stack>
                    <TextField
                        required
                        value={contact.address}
                        onChange={(e) => setContact({...contact, address: e.target.value})}
                        error={contact.address.length > 0 && contact.address.length < 8}
                        helperText={contact.address.length > 0 && contact.address.length < 8
                            ? "Your address is too short :("
                            : ""}
                        label="Your address"
                    />
                </Stack>
                }
                {step === 3 &&
                <Stack direction={"column"} spacing={2} textAlign="center">
                    <Typography variant="h4" component="div">
                        Thank you so much for your purchase, {contact.firstName}!
                    </Typography>
                    <Typography variant="h5" component="div" textAlign="center">
                        We are going to send your cool new stuff to : {contact.address} ~
                    </Typography>
                </Stack>
                }
            </Grid>
            <Grid item container justifyContent="space-between" alignSelf={"flex-end"}>
                <Button disabled={step === 0}
                        onClick={handlePreviousClicked}>{step === 3 ? "Buy more!" : "Previous"}</Button>
                <Button disabled={
                    step === 3 ||
                    (hats === 0 && shoes === 0) ||
                    (step === 2 && (
                        contact.firstName.length < 3 ||
                        contact.lastName.length < 5 ||
                        contact.address.length < 8
                    ))
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
