import React from "react";

export default function ContactSection() {
  return (
    <>
      <div className="contacts_section">
          <center>
          <h1>Contact Us</h1>
          </center>
      </div>

      <section id="contact-form">
        <h2>Send Us a Message</h2>
        <form action="#" method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <section id="company-details">
        <h2>Our Details</h2>
        <p>
          <strong>Phone:</strong> 98480-32919
        </p>
        <p>
          <strong>Email:</strong> repeat@fooddelivery.com
        </p>
        <p>
          <strong>Address:</strong> Cyber Towers HiTech City, Hyderabad, TS
          500081 India
        </p>
      </section>

      <section id="map">
        <h2>Our Location</h2>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.070853249586!2d-122.4194155846815!3d37.77492977975952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858192b32a2569%3A0xa77e8498a6ec3786!2sSan+Francisco+City+Hall!5e0!3m2!1sen!2sus!4v1608245507925!5m2!1sen!2sus"
  width="600"
  height="450"
  allowfullscreen
  loading="lazy"
  title="Map showing San Francisco City Hall"
></iframe>

      </section>

      <section id="social-media">
        <h2>Follow Us On</h2>
        <a href="/">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="/">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="/">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="/">
          <i class="bi bi-youtube"></i>
        </a>
      </section>
    </>
  );
}
