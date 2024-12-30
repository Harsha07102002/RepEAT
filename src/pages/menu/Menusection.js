import React from 'react'
import {  Container, Row } from "react-bootstrap";
import Cards from "../../comoponents/layouts/Cards";
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Dess1 from '../../assets/menu/dess-1.jpg'
import Dess2 from '../../assets/menu/dess-2.jpeg'
import Dess3 from '../../assets/menu/dess-3.jpg'
import Dess4 from '../../assets/menu/dess-4.jpeg'
import Beve1 from '../../assets/menu/beve-1.jpg'
import Beve2 from '../../assets/menu/beve-2.jpg'
import Beve3 from '../../assets/menu/beve-3.jpeg'
import Beve4 from '../../assets/menu/beve-4.jpg'
import Pizza1 from '../../assets/menu/pizza-1.jpg'
import Pizza2 from '../../assets/menu/pizza-2.jpeg'
import Pizza3 from '../../assets/menu/pizza-3.jpg'
import Pizza4 from '../../assets/menu/pizza-4.jpg'

export default function Menusection() {
    const burgerData = [
        {
          id: "0001",
          image: Image1,
          title: "Crispy Chicken",
          paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
          rating: 5,
          price: 99.15,
        },
        {
          id: "0002",
          image: Image2,
          title: "Ultimate Bacon",
          paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
          rating: 4.5,
          price: 99.32,
        },
        {
          id: "0003",
          image: Image3,
          title: "Black Sheep",
          paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
          rating: 4,
          price: 69.15,
        },
        {
          id: "0004",
          image: Image4,
          title: "Vegan Burger",
          paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
          rating: 3.5,
          price: 99.25,
        },
      ];
      const dessertData = [
        {
          id: "0001",
          image: Dess1,
          title: "Chocolate Lava Cake",
          paragraph: "A rich and moist cake made with premium cocoa powder.",
          rating: 4,
          price: 85.15,
        },
        {
          id: "0002",
          image: Dess2,
          title: "Cheesecake",
          paragraph: "A creamy dessert made with cream cheese and a biscuit crust.",
          rating: 3.5,
          price: 69.32,
        },
        {
          id: "0003",
          image: Dess3,
          title: "Ice Cream",
          paragraph: "A frozen dessert made with milk and sugar, flavored with vanilla.",
          rating: 4.5,
          price: 49.15,
        },
        {
          id: "0004",
          image: Dess4,
          title: "Apple Pie",
          paragraph: "A sweet pie filled with spiced baked apples in a flaky crust.",
          rating: 5,
          price: 59.25,
        },
      ];
        const beveData = [
        {
          id: "0001",
          image: Beve1,
          title: "Chai Latte",
          paragraph: "Spiced tea blended with steamed milk for a warm, comforting taste.",
          rating: 5,
          price: 85.15,
        },
        {
          id: "0002",
          image: Beve2,
          title: "Mocha",
          paragraph: "Espresso mixed with hot chocolate and steamed milk, topped with whipped cream.",
          rating: 4.5,
          price: 69.32,
        },
        {
          id: "0003",
          image: Beve3,
          title: "Hot Chocolate",
          paragraph: "Rich chocolate mixed with steamed milk and topped with whipped cream.",
          rating: 3.5,
          price: 49.15,
        },
        {
          id: "0004",
          image: Beve4,
          title: "Iced Tea",
          paragraph: "Cold tea brewed and served with ice and optional sweeteners.",
          rating: 4,
          price: 59.25,
        },
      ];
      const pizzaData = [
        {
          id: "0001",
          image: Pizza1,
          title: "Margherita Pizza",
          paragraph: "Classic with tomato sauce, fresh mozzarella, and basil.",
          rating: 5,
          price: 85.15,
        },
        {
          id: "0002",
          image: Pizza2,
          title: "Pepperoni Pizza",
          paragraph: "Topped with zesty pepperoni, mozzarella, and tomato sauce.",
          rating: 4.5,
          price: 69.32,
        },
        {
          id: "0003",
          image: Pizza3,
          title: "Vegetarian Pizza",
          paragraph: "Loaded with bell peppers, onions, mushrooms, olives, and fresh mozzarella.",
          rating: 3.5,
          price: 49.15,
        },
        {
          id: "0004",
          image: Pizza4,
          title: "BBQ Chicken Pizza",
          paragraph: "Grilled chicken, BBQ sauce, red onions, cilantro, and mozzarella.",
          rating: 4,
          price: 59.25,
        },
      ]
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
  return(
    <section className="menu_section">
  <Container>
  <Row>
  <h2>Burgers</h2>
            {burgerData.map((cardData, index) => {
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
          <Row>
  <h2>Desserts</h2>
            {dessertData.map((cardData, index) => {
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
          <Row>
  <h2>Beverages</h2>
            {beveData.map((cardData, index) => {
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
          <Row>
  <h2>Pizzas</h2>
            {pizzaData.map((cardData, index) => {
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

  )
}
