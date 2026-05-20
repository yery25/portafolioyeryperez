'use client';

import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-card-glow" />

          <div className="contact-grid">
            {/* Left: Info */}
            <div>
              <h2 className="contact-title">
                Let&apos;s build something{' '}
                <span className="text-gradient">extraordinary</span> together.
              </h2>
              <p className="contact-subtitle">
                Whether you have a project in mind or just want to say hi, my
                inbox is always open.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon primary">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="contact-info-label">Email</p>
                    <p className="contact-info-value">yeriantonio52@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon accent">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="contact-info-label">Phone</p>
                    <p className="contact-info-value">+1 (849) 654-0294</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  rows={4}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
