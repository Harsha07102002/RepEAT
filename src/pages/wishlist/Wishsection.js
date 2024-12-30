import React from "react";
import { useWish } from "../../comoponents/layouts/WishContext";
import {  Container, Row } from "react-bootstrap";
import Cards from "../../comoponents/layouts/Cards";

export default function Wishsection() {
    const { wish } = useWish();
    const renderRatingIcons = (rating) => {
        const stars = [];
      
        for (let i = 0; i < 5; i++) {
          if (rating > 0.5) {
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
            rating--;
          } else if (rating > 0 && rating < 1) {
            stars.push(<i key={"half"} className="bi bi-star-half"></i>);
            rating--;
          } else {
            stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
          }
        }
        return stars;
      };
  return (
    <section className="wish_section">
        <Container>
        <Row>
            <h2>Wishlist Products</h2>
    {wish.map((cardData, index) => {
      return (
        <Cards
          key={index}
          image={cardData.image}
          rating={cardData.rating}
          title={cardData.title}
          paragraph={cardData.paragraph}
          price={cardData.price}
          renderRatingIcons={renderRatingIcons}
          
        />
      );
    })}
  </Row>
        </Container>
    </section>
  );
}
