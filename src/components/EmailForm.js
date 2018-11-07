import React from 'react'

const EmailForm = () => {

    return(
        <form>
            <label>Your Email Address:</label>
            <br />
            <input />
            <br />
            <label>Message Title:</label>
            <br />
            <input />
            <br />
            <label>Your Message:</label>
            <br />
            <textarea></textarea>
            <br />
            <input type="submit" value="Send Message"/>
        </form>
    )

}

export default EmailForm;