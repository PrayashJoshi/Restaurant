import React, { useState } from "react";
import "../App.css";
import { db } from "./database/config";
import {Card, Button,Jumbotron, Form} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import '../components/menu-database/box.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        toast.info('Message Delivered!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
   <main>
   <Fade bottom cascade >
<Card>
  <Card.Body>
   <Jumbotron class="grid" >
                      <h1>Contact Us</h1>
                      <p>
                      It is our mission to understand the comments and concerned of our valued customers. Please give us ur Feedback!  </p>
                      </Jumbotron>


<Form.Group>
  <Form.Control type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)}/>
  <br />
  <Form.Control type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
  <br/>
  <Form.Control  type="message" placeholder="Message" value={message}onChange={(e) => setMessage(e.target.value)}/>
  <br/>
  <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
</Form.Group>
  </Card.Body>
</Card>
</Fade>

</main>
  );
};

export default ContactForm;