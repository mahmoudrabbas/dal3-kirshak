import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="own-container container py-5">
      <h2 className="text-center text-primary mb-4">About Dal3 Kirshak</h2>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/chef-cooking-in-restaurant-illustration-download-svg-png-gif-file-formats--service-staff-catering-work-process-pack-food-drink-illustrations-7961368.png"
            alt="Restaurant Kitchen"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h4 className="text-primary mb-3">Our Story</h4>
          <p>
            Dal3 Kirshak was founded with a passion for delivering unforgettable
            dining experiences. Our team of expert chefs combines traditional
            recipes with modern culinary techniques to bring you a unique taste
            sensation.
          </p>

          <h4 className="text-primary mt-4 mb-3">Our Mission</h4>
          <p>
            To provide fresh, delicious meals made from the finest ingredients,
            served in a warm and welcoming atmosphere that feels like home.
          </p>

          <h4 className="text-primary mt-4 mb-3">Why Choose Us?</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Quality Ingredients:</strong> We never compromise on
              freshness.
            </li>
            <li className="list-group-item">
              <strong>Friendly Staff:</strong> Our team is dedicated to making
              your visit enjoyable.
            </li>
            <li className="list-group-item">
              <strong>Cozy Atmosphere:</strong> Relax and enjoy your meal in
              comfort.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
