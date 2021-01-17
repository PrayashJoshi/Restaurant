import React, { useState } from "react";
import "../App.css";
import { db } from "./database/config";
import {Card, Button,Jumbotron, Form} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import '../components/menu-database/box.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
const ReservationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [count, setCount] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("reservation")
      .add({
        name: name,
        email: email,
        number: number,
        count: count,
        message: message,

      })
      .then(() => {
        setLoader(false);
        toast.info('Reservation Made!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          toast.info('We will Contact You Shortly!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            delay: 2000,
            progress: undefined,
            });
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setNumber("");
    setCount("");
    setMessage("");
  };

  return (
   <main>
   <Fade bottom cascade >
<Card>
  <Card.Body>
   <Jumbotron class="grid" >
                      <h1>Set a Reservation</h1>
                      <p> We follow the state regulations for safe eating. Our staff follow our safety and responce protocal setup inspite of the current Pandemic. We hope to see you at our establishment! </p>
                      </Jumbotron>

    <div class="form-row">
    <div class="form-group col-md-5">
    <div dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.1154842436754!2d-77.30954928432317!3d38.8298159585295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e607b427ebd%3A0xd766a653e6557544!2sGeorge%20Mason%20University!5e0!3m2!1sen!2sus!4v1610817334726!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>` }} />
    </div>
    <div class="form-group col-md-6">
<Form.Group>
  <Form.Control type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)}/>
  <br />
  <Form.Control type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
  <br/>
  <Form.Control type="text" placeholder="Phone Number" value={number} onChange={(e) => setNumber(e.target.value)}/>
  <br/>
  <Form.Control type="text" placeholder="Count of People" value={count} onChange={(e) => setCount(e.target.value)}/>
  <br/>
  <Form.Control  type="message" placeholder="Message" value={message}onChange={(e) => setMessage(e.target.value)}/>
  <br/>
  <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
</Form.Group>
</div>
</div>
  </Card.Body>
</Card>
</Fade>

</main>




    
  );
};

export default ReservationForm;