import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Post1 from "../../assets/blog_img/post-1.jpg";
import Post2 from "../../assets/blog_img/post-2.jpg";
import Post3 from "../../assets/blog_img/post-3.jpg";

export default function Blogsection() {
  return (
    <section className="blogs_section">
      <Container className="py-5">
        <Row>
          <div class="hero">
            <h1>Explore Our Foodie Insights</h1>
            <p>Delicious stories and recipes waiting for you!</p>
          </div>
        </Row>
        <Row>
          <div class="container category-list d-flex justify-content-center flex-wrap">
            <div class="category-item"><a rel="noreferrer" target="_blank" href="https://www.realsimple.com/food-recipes/recipe-collections-favorites/healthy-meals/vegetarian-recipes">Veg Receipes</a></div>
            <div class="category-item"><a rel="noreferrer" target="_blank" href="https://blog.myfitnesspal.com/essential-guide-to-healthy-eating/">Healthy Eating</a></div>
            <div class="category-item"><a rel="noreferrer" target="_blank" href="https://www.everydayhealth.com/pictures/top-healthy-food-trends/">Food Trends</a></div>
            <div class="category-item"><a rel="noreferrer" target="_blank" href="https://www.jaquar.com/hi/GuideDetails/44/restaurant-lighting-design">Restaurant Spotlights</a></div>
          </div>
        </Row>
        <Row className="g-4">
          <Col md={4}>
            <div className="blog-card">
              <img
                src={Post1}
                alt="Delicious Food"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h5>Top 10 Healthy Breakfast Ideas</h5>
                <p>
                  Kickstart your day with these easy and nutritious meals. Be
                  healthy, stay strong, and fit.
                </p>
                <a rel="noreferrer" target="_blank" href="https://www.eatingwell.com/article/7874786/best-healthy-breakfast-foods-to-eat/" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="blog-card">
              <img
                src={Post2}
                alt="Quick Meals"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h5>5-Minute Recipes for Busy Foodies</h5>
                <p>
                  Quick and tasty meals for your hectic lifestyle. Easy to make,
                  tasty to eat, and good for health.
                </p>
                <a rel="noreferrer" target="_blank" href="https://www.bbcgoodfood.com/recipes/collection/5-minute-meal-recipes" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="blog-card">
              <img
                src={Post3}
                alt="Vegan Delights"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h5>Vegan Delights: Order Plant-Based Meals</h5>
                <p>
                  Explore our curated list of vegan dishes available for
                  delivery.
                </p>
                <a rel="noreferrer" target="_blank" href="https://vegiedelights.com.au/" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
