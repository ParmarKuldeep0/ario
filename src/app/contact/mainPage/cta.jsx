import React, { useState } from "react";
import {
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaCommentAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./cta.css";

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use the correct API endpoint for your Express server
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is OK before trying to parse JSON
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: "", subject: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus('error');
        console.error('Submission error:', data.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section className="contact-cta-container">
      <div className="contact-cta-left">
        <div className="section-header">
          <h2>Send Us a Message</h2> 
        </div>

        {submitStatus === 'success' && (
          <div className="success-message">
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="error-message">
            Sorry, there was an error sending your message. Please try again or contact us directly.
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon">
              <FaUser />
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.subject}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <FaPhone />
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="contact-input"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-textarea"
            rows="5"
          />

          <button
            type="submit"
            className="contact-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane className="button-icon" />
                Send Message
              </>
            )}
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
              <FaPhone  className="scale-x-[-1]"/>
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
              <p>Office# 805, 8th floor, Plan S Business Park, Plot No.: D 108/1, Shiravane MIDC, Nerul,<br/> 
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