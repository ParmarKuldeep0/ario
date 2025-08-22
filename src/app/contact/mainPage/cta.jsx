'use client'
import React from "react";
import {
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaCommentAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import "./cta.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta-container">
      <div className="contact-cta-left">
        <div className="section-header">
          <h2>Send Us a Message</h2>
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/info@arioshipping.com"
          method="POST"
          target="_blank"
        >
          <input type="hidden" name="_subject" value="New contact form submission from Ario Shipping" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://arioshipping.com" />
          <input type="text" name="_honey" style={{ display: 'none' }} />

          <div className="input-group">
            <span className="input-icon">
              <FaUser />
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="contact-input"
            />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <FaCommentAlt />
            </span>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="contact-input"
            />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <FaEnvelope />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="contact-input"
            />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <FaPhone className="scale-x-[-1]"/>
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone (Optional)"
              className="contact-input"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="contact-textarea"
            rows="5"
          />

          <button
            type="submit"
            className="contact-button"
          >
            <FaPaperPlane className="button-icon" />
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-cta-right">
        <div className="section-header">
          <h2>Get in Touch</h2>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div>
              <h3>Email Us</h3>
              <p>info@arioshipping.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaPhone className="scale-x-[-1]" />
            </div>
            <div>
              <h3>Call Us</h3>
              <p>+91 2244500487</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3>Visit Us</h3>
              <p>Office# 805, 8th floor, Plan S Business Park, Plot No.: D 108/1, Shiravane MIDC, Nerul,<br />
                Navi Mumbai - 400 706</p>
            </div>
          </div>
        </div>

        <div className="social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/ario-shipping-logistics-private-limited/" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;