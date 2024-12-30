import React from "react";
import { Col, Card } from "react-bootstrap";
import { useWish } from "./WishContext";
import '../../styles/Cart.css'

export default function Cards({
  image,
  title,
  rating,
  paragraph,
  price,
  renderRatingIcons,
  quantity,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}) {
  const { addToWish } = useWish();

  const handleRemoveFromCart = () => {
    removeFromCart(title);
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(title);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(title);
  };
  const handleAddToWish = () => {
    const product = { image, title, rating, paragraph, price };
    console.log("Product added to wishlist:", product);
    addToWish(product);
  };


  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src={image}
            style={{ height: "250px", width: "100%", objectFit: "cover" }}
          />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <button className="get_wish" onClick={handleAddToWish}>
                <i className="bi bi-bookmark-fill"></i>
              </button>
            </div>
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="menu_price mb-0">₹{price}</h5>
            <div className="quantity-container">
              <button className="increase" onClick={handleDecreaseQuantity}>
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button className="decrease" onClick={handleIncreaseQuantity}>
                +
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <button className="remove" onClick={handleRemoveFromCart}>
              Remove from Cart
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}