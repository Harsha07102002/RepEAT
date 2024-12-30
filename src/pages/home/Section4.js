import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

export default function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text_center mb-5 mb-lg-0">
              <img src={PromotionImage} alt="Promotion" className="img_fluid" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              A well-made burger is a universally loved comfort food, creating a sense of joy and satisfaction that people can share, fostering camaraderie.
              </p>
              <ul>
                <li>
                  <p>
                  Burgers are often enjoyed in relaxed settings, whether at a barbecue, diner, or food truck, making it easy for people to connect and engage in lighthearted conversations.
                  </p>
                </li>
                <li>
                  <p>
                  With endless options for toppings, sauces, and sides, burgers can cater to a variety of tastes and dietary preferences, ensuring everyone at the table feels included.
                  </p>
                </li>
                <li>
                  <p>
                  Sharing a meal like burgers, often associated with gatherings and celebrations, strengthens bonds, turning any meal into a memorable experience.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
