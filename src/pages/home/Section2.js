import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from '../../assets/about/pizza.png'
import Salad from '../../assets/about/salad.png'
import Delivery from '../../assets/about/delivery-bike.png'

export default function Section2() {
    const mockData = [
        {
          image: Pizza,
          title: "Original",
          paragraph: `We brings you unique, handcrafted pizzas made with the freshest ingredients, delivering flavors you won’t find anywhere else. Experience a one-of-a-kind culinary journey with every order, right at your doorstep.`,
        },
        {
          image: Salad,
          title: "Qualty Foods",
          paragraph: `We offer only the finest, handpicked ingredients, ensuring every meal is a flavorful and satisfying experience. Taste the difference with every dish, prepared with the utmost care and delivered fresh to you.`,
        },
        {
          image: Delivery,
          title: "Fastest Delivery",
          paragraph: `We ensure lightning-fast service, bringing your favorite meals to your door in record time. Enjoy hot, delicious food delivered swiftly, so you can satisfy your cravings without the wait.`,
        }
      ];
  return (
    <>
    <section className="about_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h2>The burger tastes better when you eat with the family</h2>
            <p>
            Savor the rich, juicy flavors of our signature burger, perfectly crafted to delight every taste bud. With every bite, enjoy the warmth of shared laughter, stories, and memories. Because the burger truly tastes better when shared with the ones you love.It will the happy meal with your family.</p>
          </Col>
          <center>
          <Link to="/" className="btn order_now btn_green">
            Explore Full Menu
          </Link>
          </center>
        </Row>
      </Container>
    </section>
    <section className="about_wrapper">
        <Container>
            <Row className="justify-content-md-center">
                {mockData.map((cardData,index)=>{
                    return <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                        <div className="about_box text-center">
                            <div className="about_icon">
                                <img src={cardData.image} alt="icon" className="img-fluid" />
                            </div>
                            <h4>{cardData.title}</h4>
                            <p>{cardData.paragraph}</p>
                        </div>
                    </Col>
                })}
            </Row>
        </Container>
    </section>
    </>
  );
}
