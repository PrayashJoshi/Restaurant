import React from 'react'
import classes from '../assets/css/video.css';
import prepVideo from '../assets/videos/prep.mp4'
import chefCook from '../assets/images/chefcooking.png'
import chefPrep from '../assets/images/chefPrep.png'
import { Carousel, Jumbotron, Card, Image} from 'react-bootstrap'
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import ReservationForm from '../components/reservationform'


export default function Home () {
    return (
        <main className="home">
            <section className="container">
            </section>
            <section className="bg-white">
                <section className="container">
                    <div className="row">
                        <p1>"With Good Ingredients comes Good Everlasting Taste"-Papa Prayash</p1>
                    </div>
                </section>
            </section>
            
            <section className="slide" >
                <Pulse>
            <Carousel>
                <Carousel.Item>
                <section className="video" >
            <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} height="800px" object-fit="cover">
                <source src={prepVideo} type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
            </div>
            </section>
                    <Carousel.Caption>
                    <h3>Named the Best Imaginary Resturant by Critics around the Globe</h3>
                    <p>Experience the Cultures of Different Origins by the Means of Sublime Taste </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={chefCook}
                    height="800px"
                    object-fit="cover"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Our Chefs</h3>
                    <p>Central Kitchen Mediterranean is able to offer its delights only possible by its fine array of Award Winning Chefs</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={chefPrep}
                    height= "800px"
                    object-fit="cover"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Our Values</h3>
                    <p>Customer - Staff - Community. We are know for supporting our stafff and our local farmers. They are the backbone of our company and keep it running. You are our first priority now!
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </Pulse>
                <br/>
                <Fade>
            <div className={classes.Content}>
                <div className="component" >
                <Jumbotron class="grid" >
                      <h1>"Best Upincomming Resturant in Northern Virginia"- Rishal</h1>
                      <Card>
                        <Card.Body className="container">
                        <p>Central Kitchen Mediterranean was founded in 1998 with the goal to make the most unique food from the Mediterranean Sea that was hard to find in the United-States.
                        We are a restaurant around the New York area. As we grew, we started to sell our Mediterranean food products to distributors in other parts of the US. Today, you can find our Mediterranean restaurants all around the country. Our main focus is to find very high-quality products. 
                        Consistency and good service, have also been part of our culture, and our commitment to our customers.</p>
                        </Card.Body>
                        </Card>
                        <br/>
                      </Jumbotron>
                      </div>

                      <div class="form-row">
                        <div class="form-group col-md-6">
                      <Image width="auto" height="800px" src={window.location.origin + '/images/outside.png'}  />
                      </div>
                      <div class="form-group row-md-6">

                      <div class="form-group col-md-6">
                      <Image width="auto" height="400px" src={window.location.origin + '/images/serve.png'}  />
                      </div>
                      <div class="form-group row-md-6">
                      <Image width="auto" height="400px" src={window.location.origin + '/images/twopeople.png'} />
                      </div>

                      </div>
                      </div>
            </div>
            <br/>

                        <ReservationForm/>
            </Fade>
            </section>
        </main>
    )}