import React, { useMemo } from "react";
import { useCart } from "../../comoponents/layouts/CartContext";
import { Container, Row} from "react-bootstrap";
import CartCard from '../../comoponents/layouts/Cartcard'

export default function Cartsection() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const totalCartPrice = useMemo(() => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  }, [cart]);

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
    <section className="cart_section">
      <Container>
        <Row>
          <h2>Cart Products</h2>
            {cart.map((cardData, index) => (
                <CartCard
                  key={index}
                  image={cardData.image}
                  rating={cardData.rating}
                  title={cardData.title}
                  paragraph={cardData.paragraph}
                  price={cardData.price}
                  renderRatingIcons={renderRatingIcons}
                  quantity={cardData.quantity}
                  removeFromCart={removeFromCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
            ))}
        </Row>
      </Container>
      <h3>
        Total Cart Price: <span>₹{totalCartPrice}</span>
        <button>Buy Now</button>
      </h3>
    </section>
  );
}
