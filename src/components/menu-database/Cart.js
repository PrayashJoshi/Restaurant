import React, {useContext, useState} from 'react';
import {CartContext} from './CartContext';
import {Button,Modal,Card} from 'react-bootstrap'

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const [show, setShow] = useState(false);
  //console.log(cart);

  return (
    <main>
    <>
    <div className="cartButton">
      <Button variant="primary" onClick={() => setShow(true)} >
        View Cart
      </Button>
    </div>

      <Modal className="modal"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Going Already?
          </Modal.Title>
        </Modal.Header>
        <span align="center">Items In Cart : {cart.length}</span>
        <Modal.Body>
        {cart.map(item => (
          <Card body>{item.name}
            <Card.Text align="right">${item.price}</Card.Text>
          </Card>
        ))}
        <section align="right">
      <span>Total Price : ${totalPrice}</span>
      <br/>
      <Button variant="primary" onClick={() => setShow(false)}>Pay Now</Button>
    </section>
        </Modal.Body>
      </Modal>
    </>
    </main>
  )
}