import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row>
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery</h2>
            <p>
            We promise your food will arrive fresh and hot within 30 minutes or less, every time. Enjoy fast, reliable service that ensures you never have to wait long for your cravings to be satisfied.</p>
            <Link to="/" className="btn btn_green px-4 py-2 rounded-2">
                Call: 9848032919
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
