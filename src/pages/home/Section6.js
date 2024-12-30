import React from 'react'
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from '../../assets/blog/review-author-1.jpg'
import User2 from '../../assets/blog/review-author-2.jpg'
import User3 from '../../assets/blog/review-author-3.jpg'
import User4 from '../../assets/blog/review-author-5.jpg'

export default function Section6() {
  return (
    <div>
      <section className='blog_section'>
      <Container>
        <Row>
        <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                      <img src={User1} className="img-fluid" alt="user-1" />
                    </div>
                    <p>
                    A well-made burger is a universally loved comfort food, creating a sense of joy and satisfaction that people can share, fostering camaraderie.
                    </p>
                    <div className='item_rating mb-2'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    </div>
                    <h5>By Jack Ryan</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                      <img src={User2} className="img-fluid" alt="user-1" />
                    </div>
                    <p>
                    Sharing a meal like burgers, often associated with gatherings and celebrations, strengthens bonds, turning any meal into a memorable experience.</p>
                    <div className='item_rating mb-2'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    </div>
                    <h5>By Elizabeth Washington</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                      <img src={User3} className="img-fluid" alt="user-1" />
                    </div>
                    <p>
                    Burgers are often enjoyed in relaxed settings, whether at a barbecue, diner, or food truck, making it easy for people to connect and engage in lighthearted conversations</p>
                    <div className='item_rating mb-2'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    </div>
                    <h5>By Jmes reece</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                      <img src={User4} className="img-fluid" alt="user-1" />
                    </div>
                    <p>
                    With endless options for toppings, sauces, and sides, burgers can cater to a variety of tastes and dietary preferences, ensuring everyone at the table feels included.</p>
                    <div className='item_rating mb-2'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    </div>
                    <h5>By Emily Blunt</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </Row>
      </Container>
      </section>
    </div>
  )
}
