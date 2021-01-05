import React from 'react'
import { Button, Grid, TextField, FormControlLabel, Checkbox, Container } from '@material-ui/core'

class ContactForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            checkedB: false
        }
    }

    handleChange = () => {
        this.setState({
            checkedB: !this.state.consent
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(evt)
    }
    
    render() {
        return (
            <Container>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit={this.handleSubmit}>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField fullWidth label="First Name" name="name" size="small" variant="outlined" required />
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
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Company Name" name="company" size="small" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={this.state.consent}
                                onChange={this.handleChange}
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