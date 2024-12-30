import React from "react";
import { Col, Card } from "react-bootstrap";
import { useCart } from "./CartContext";
import { useWish} from "./WishContext";

export default function Cards({
  image,
  title,
  rating,
  paragraph,
  price,
  renderRatingIcons,
}) {
  const { addToCart } = useCart();
  const { addToWish } = useWish();
  const handleAddToCart = () => {
    const product = { image, title, rating, paragraph, price };
    console.log("Product added:", product);
    addToCart(product);
  };
  
  const handleAddToWish = () => {
    const product = { image, title, rating, paragraph, price };
    console.log("Product added:", product);
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
            <button className="get_wish" onClick={handleAddToWish}><i class="bi bi-bookmark-fill"></i></button>
            </div>
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">₹{price}</h5>
            </div>
            
            <div className="add_to_cart">
            <button className="change" onClick={handleAddToCart}>Add To Cart</button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}