import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Thirty from '../../assets/about_img/thirty.png'
import Special from '../../assets/about_img/special.png'
import Ship from '../../assets/about_img/ship.png'
import Cuisine from '../../assets/about_img/cuisine.png'

export default function Aboutsection1() {
    const mockData = [
        {
          image: Thirty,
          paragraph: "Fast Delivery within 30 minutes",
        },
        {
          image: Special,
          paragraph: "Special offers and loyalty rewards",
        },
        {
          image: Ship,
          paragraph: "Order tracking in real-time",
        },
        {
            image: Cuisine,
            paragraph: "Wide variety of cuisines",
        }
      ];
  return (
    <section className='about_section'>
        <Container>
            <Row>
                <Col className='mb-5 mb-lg-0'>
                    <h2>About Repeat</h2>
                    <p>Welcome to our RepEAT! We bring your favorite meals right to your door, offering a wide variety of cuisines from local restaurants to satisfy every craving.</p>
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide fast, reliable, and high-quality food delivery to your doorstep, ensuring you enjoy fresh meals with just a few taps.</p>
                    <h2>Why Choose Us?</h2>
                    <section className="about_wrapper">
                            <Container>
                                <Row className="justify-content-md-center">
                                    {mockData.map((cardData,index)=>{
                                        return <Col md={3} lg={3} className="mb-4 mb-md-0" key={index}>
                                            <div className="about_box text-center">
                                                <div className="about_icon">
                                                    <img src={cardData.image} alt="icon" className="img-fluid" />
                                                </div>
                                                <h4>{cardData.paragraph}</h4>
                                            </div>
                                        </Col>
                                    })}
                                </Row>
                            </Container>
                        </section>
                    <h2>Key Features</h2>
                    <div className='wanted'>
                        <p>Easy and intuitive ordering system</p>
                        <p>Multiple payment options including credit cards, e-wallets, and cash on delivery</p>
                        <p>Real-time order tracking</p>
                        <p>Ratings and reviews to help you make the best food choices</p>
                    </div>
                    <h2>Our Team</h2>
                    <p>Our team consists of passionate food lovers dedicated to bringing you the best delivery experience. Founded by experts in the food industry, we’re committed to quality and service.</p>
                    <h2>Our Partners</h2>
                    <p>We work with top local restaurants to provide you with a variety of choices and the freshest ingredients.</p>
                    <h2>Our Core Values</h2>
                    <div className='best'>
                        <p>Quapty</p>
                        <p>Customer Satisfaction</p>
                        <p>Repability</p>
                        <p>Sustainability</p>
                    </div>
                    <h2>Our Community Impact</h2>
                    <p>We are proud to support local food banks and charity events, ensuring that everyone has access to nutritious meals, regardless of their circumstances.</p>
                    <h2>Contact Us</h2>
                    <div className='contact'>
                    <p>If you have any questions or need assistance, feel free to reach out to our customer support team:</p>
                    <p>Email: repeat@fooddeliveryapp.com</p>
                    <p>Phone: 98480-32919</p>
                    </div>
                    </Col>
            </Row>
        </Container>
    </section>
  )
}
