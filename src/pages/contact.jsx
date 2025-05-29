import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="own-container container py-5">
      <h2 className="text-center text-primary mb-4">Contact Us</h2>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-7 mb-4">
          <div className="p-4 shadow rounded bg-light">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details */}
        <div className="col-md-5 d-flex align-items-center">
          <div className="bg-white shadow rounded p-4 w-100">
            <h5 className="text-success mb-3">Reach Us At</h5>
            <p>
              <strong>Email:</strong> contact@gourmetdelights.com
            </p>
            <p>
              <strong>Phone:</strong> +20 1024348948
            </p>
            <p>
              <strong>Address:</strong> 123 Flavor Street, Cairo, Egypt
            </p>
            <div className="mt-3">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0438770936544!2d31.235711215116787!3d30.04441998187816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458410d3c4bcd5f%3A0x88b4a563ec7b5392!2z2YXYr9mK2YbYqSDYp9mE2KjYp9mF2KfZhQ!5e0!3m2!1sen!2seg!4v1685576241559!5m2!1sen!2seg"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
