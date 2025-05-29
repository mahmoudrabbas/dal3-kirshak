import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <h1 className="display-4">Dal3 Kirshak Restaurant</h1>
        <p className="lead">Unforgettable flavors. Unmatched experience.</p>
        <button
          onClick={() => navigate("/menu")}
          className="btn btn-outline-primary mt-3"
        >
          Our Menu
        </button>
      </div>

      {/* About Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/chef-cooking-in-restaurant-illustration-download-svg-png-gif-file-formats--service-staff-catering-work-process-pack-food-drink-illustrations-7961368.png"
              alt="Restaurant"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <h2 className="text-primary">Who We Are</h2>
            <p>
              At Dal3 Kirshak, we serve delicious eastern and western dishes
              prepared with the freshest ingredients by professional chefs. Our
              goal is to deliver high-quality food at reasonable prices while
              offering a cozy dining experience.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h3 className="text-primary mb-4">What Makes Us Special?</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="fa-solid fa-utensils fa-2x text-primary mb-2"></i>
              <h5>Wide Variety</h5>
              <p>Enjoy a rich selection of dishes from around the world.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa-solid fa-seedling fa-2x text-success mb-2"></i>
              <h5>Fresh Ingredients</h5>
              <p>We use only the freshest produce and highest quality meats.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa-solid fa-mug-hot fa-2x text-danger mb-2"></i>
              <h5>Cozy Atmosphere</h5>
              <p>Enjoy your meal in a relaxing and friendly environment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Preview Section */}
      <div className="container my-5 text-center">
        <h3 className="text-warning mb-4">Menu Highlights</h3>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-grill-chickenfood-meat-chicken-grilled-941524616969gg9vh.png"
                className="card-img-top"
                width={350}
                height={350}
                alt="Dish"
              />
              <div className="card-body">
                <h5 className="card-title">Grilled Chicken</h5>
                <p className="card-text">Served with vegetables & herbs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <img
                src="https://png.pngtree.com/png-vector/20240920/ourmid/pngtree-classic-cheeseburger-png-image_13873574.png"
                className="card-img-top"
                width={350}
                height={350}
                alt="Dish"
              />
              <div className="card-body">
                <h5 className="card-title">Classic Burger</h5>
                <p className="card-text">Beef burger with cheese & fries.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <img
                src="https://static.tossdown.com/images/bdc664ca-cb57-44fc-8e98-45c233a37c65.webp"
                className="card-img-top"
                width={350}
                height={350}
                alt="Dish"
              />
              <div className="card-body">
                <h5 className="card-title">Pasta Alfredo</h5>
                <p className="card-text">Creamy pasta with grilled chicken.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h3 className="text-primary mb-4">Customer Reviews</h3>
          <div className="row">
            {/* Testimonial 1 */}
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm bg-white h-100">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah"
                  className="rounded-circle mb-3"
                  width="80"
                  height="80"
                />
                <p className="fst-italic">
                  "Absolutely delicious! Great service and cozy vibes."
                </p>
                <h6 className="text-secondary mt-3">- Sarah M.</h6>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm bg-white h-100">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Ahmed"
                  className="rounded-circle mb-3"
                  width="80"
                  height="80"
                />
                <p className="fst-italic">
                  "The pasta was perfect, and the staff were so friendly."
                </p>
                <h6 className="text-secondary mt-3">- Ahmed R.</h6>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm bg-white h-100">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Lina"
                  className="rounded-circle mb-3"
                  width="80"
                  height="80"
                />
                <p className="fst-italic">
                  "Best burger in town. Will definitely come again!"
                </p>
                <h6 className="text-secondary mt-3">- Lina T.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
