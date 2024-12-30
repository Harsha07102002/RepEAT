import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from '../../assets/hero/hero-2.png'
import { Link } from 'react-router-dom'

export default function Section1() {
  return (
    <section className='hero_section'>
        <Container>
            <Row>
                <Col lg={7} className='mb-5 mb-lg-0'>
                    <div className='position-relative'>
                        <img src={Burger} className='img-fluid' alt="Hero" />
                        <div className='price_badge'>
                            <div className='badge_text'>
                                <h4 className='h4_xs'>Only</h4>
                                <h3 className='h3_lg'>₹99.99/-</h3>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className='hero_text text_center'>
                        <h1 className='text_white'>New Burger</h1>
                        <h2 className='text_white'>with Onion</h2>
                        <p className='text_white pt-2 pb-4'>A juicy, flame-grilled patty topped with crispy fried onions, caramelized onion relish, fresh lettuce, and creamy aioli, all nestled in a toasted brioche bun.</p>
                        <Link to='/' className='btn order_now'>
                            Order Now
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
