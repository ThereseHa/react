import React, { useState } from 'react'
import styled from 'styled-components'

const FormTitle = styled.h1`
    font-size: 28px;
    font-weight: bold;
    margin-top: 90px;
    text-align: center;
    color: white;
`
const StyledFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        text-align: right;
    }

    label {
        margin-bottom: 5px;
        color: white;
        text-align: left;
    }

    input,
    textarea {
        align-self: center;
        width: 40vw;
        padding: 10px;
        border-radius: 5px;
        border: none;
    }

    textarea {
        height: 200px;
    }

    button {
        padding: 10px;
        background-color: #88d7d7;
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100px;
    }
`

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showNotification, setShowNotification] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)
        setShowNotification(true)
        setName('')
        setEmail('')
        setMessage('')
        setTimeout(() => setShowNotification(false), 5000) //Makes the notification go away after 5 sec
    }

    return (
        <>
            <FormTitle>
                Do you have any questions? You can contact us here below.
            </FormTitle>
            <StyledFormContainer>
                {showNotification ? (
                    <p style={{ color: 'green' }}>Message sent successfully!</p>
                ) : (
                    <StyledForm onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button type="submit">Send</button>
                    </StyledForm>
                )}
            </StyledFormContainer>
        </>
    )
}

export default ContactForm
