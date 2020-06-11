import React from 'react';
function ContactForm() {
    return (<form className='contact-form' action="/action_page.php">
        <label >First Name</label>
        <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.." />

        <label >Last Name</label>
        <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.." />

        <label >Subject</label>
        <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "170px" }}>
        </textarea>

        <input type="submit" value="Submit" />
    </form>
    )

}
export default ContactForm