import React from 'react'
import { navigate } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import '../styles/formStyles.css'

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
            <div class="container">
                <form name="mail" onSubmit={this.handleSubmit}>

                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="First Name" required onChange={this.handleName} />

                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Email Address" required onChange={this.handleEmail} />

                    <label for="consent">
                        <input type="checkbox" id="consent" name="consent" onChange={this.handleConsent} value={this.state.consent} />
                        Marketing Consent
                    </label>

                    <input type="submit" value="Submit" />

                </form>
            </div>
        )
    }
}

export default MailForm