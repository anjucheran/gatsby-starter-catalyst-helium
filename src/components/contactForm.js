import React from 'react'
import { Button, Grid, TextField, FormControlLabel, Checkbox, Container } from '@material-ui/core'

class ContactForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            botField: '',
            name: '',
            email: '',
            company: '',
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

    handleCompany = (evt) => {
        this.setState({
            company: evt.target.value
        })
    }

    handleConsent = () => {
        this.setState({
            consent: !this.state.consent
        })
    }

    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
              "form-name": evt.target.getAttribute("name"),
              ...this.state
            })
          }).then(() => console.log("/thank-you/")).catch(error => alert(error))
    }
    
    render() {
        return (
            <Container>
            <form netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit={this.handleSubmit}>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
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
                            <TextField fullWidth label="Company Name" name="company" size="small" variant="outlined" onChange={this.handleCompany} />
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

export default ContactForm