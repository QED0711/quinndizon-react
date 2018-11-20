import React from 'react'

// import $ from 'jquery';

const EmailForm = () => {


    // formspree no longer works with ajax for free. use below code with paied account
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.getAttribute("action"))
    //     const data = {
    //         replyTo: e.target.children[2].value,
    //         subject: e.target.children[6].value,
    //         messageBody: e.target.children[10].value.value
    //     }
    //     $.post(e.target.getAttribute("action"), data).done(function(error){
    //         console.log(error)
    //     })
    // }

    return(
        <form action="https://formspree.io/qdizon%40gmail%2ecom" method="POST">
            
            <label htmlFor="name"><h3>Your Name:</h3></label><br />
            <input type="text" id="name" name="name" required/><br />
            
            <label htmlFor="reply-to"><h3>Your Email Address:</h3></label><br />
            <input type="email" id="reply-to" name="reply-to" required/><br />

            <label htmlFor="subject"><h3>Subject:</h3></label><br />
            <input type="text" id="subject" name="subject"/><br />

            <label htmlFor="message-body"><h3>Your Message:</h3></label><br />
            <textarea id="message-body" name="message-body"></textarea><br />

            <input type="submit" value="Send Message"/>
            <p style={{margin: 0}}>powered by <em>Formspree</em></p>
        </form>
    )

}

export default EmailForm;