import React from 'react'
import { Button, Grid, TextField, FormControlLabel, Checkbox, Container } from '@material-ui/core'
import { navigate } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class MailForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            consent: false
        }
    }

    handleName = (evt) => {
        this.setState({
            name: evt.target.value
        })
    }

    handleEmail = (evt) => {
        this.setState({
            email: evt.target.value
        })
    }

    handleConsent = () => {
        this.setState({
            consent: !this.state.consent
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        addToMailchimp(this.state.email, {
            FNAME: this.state.name,
            'group[79316][1]': this.state.consent ? 1 : 0
        }).then(() => navigate("/thank-you/")).catch(error => console.log(error))
    }
    
    render() {
        return (
            <Container>
            <form name="mail" onSubmit={this.handleSubmit}>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField fullWidth label="First Name" name="name" size="small" variant="outlined" required onChange={this.handleName} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                size="small"
                                type="email"
                                variant="outlined"
                                required
                                onChange={this.handleEmail}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={this.state.consent}
                                onChange={this.handleConsent}
                                name="consent"
                                color="primary"
                            />
                            }
                            label="Marketing Consent"
                        />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button color="primary" fullWidth type="submit" variant="contained">
                    Submit
                    </Button>
                </Grid>
                </Grid>
            </form>
            </Container>
        )
    }
}

export default MailForm