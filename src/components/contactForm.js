import React from 'react'
import { navigate } from 'gatsby'

import '../styles/formStyles.css'

class ContactForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            botField: '',
            fname: '',
            email: '',
            company: '',
            message: '',
            consent: false
        }
    }

    handleName = (evt) => {
        this.setState({
            fname: evt.target.value
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

    handleMessage = (evt) => {
        this.setState({
            message: evt.target.value
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
          }).then(() => navigate("/thank-you/")).catch(error => console.log(error))
    }
    
    render() {
        return (
            <div class="container">
                <form netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit={this.handleSubmit}>

                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="First Name" required onChange={this.handleName} />

                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Email Address" required onChange={this.handleEmail} />

                    <label for="company">Company Name</label>
                    <input type="text" id="company" name="company" placeholder="Company Name" onChange={this.handleCompany} />

                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Message" style={{ height: 200 }} onChange={this.handleMessage}></textarea>

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

export default ContactForm