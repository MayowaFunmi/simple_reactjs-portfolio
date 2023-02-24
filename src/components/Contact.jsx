import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to send the form data to a server or do any other processing you need to do
    console.log('Form submitted:', { fullName, email, phoneNumber, message });
  };

  return (
    <div id="contact">
      <center>
        <h3>Contact Me</h3>
      </center>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
