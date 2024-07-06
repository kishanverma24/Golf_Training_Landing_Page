import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./coffeeShop.css";

const CoffeeShop = () => {
  return (
    <>
      <Navbar />
      <div className="coffeeContainer">
        <div
          style={{
            width: "80vw",
            backgroundColor: "white",
            marginTop: "150px",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{ color: "black", marginTop: "10px", textAlign: "center" }}
          >
            {" "}
            Coffee Shop
          </h1>

          <p style={{ color: "black", padding: "30px" }}>
            Welcome to{" "}
            <span style={{ fontWeight: "bold", color: "black" }}>
              Coffee Corner
            </span>
            , where every cup tells a story of exploration and discovery.
            Nestled in a cozy corner of the world, our café blends the thrill of
            adventure with the warmth of community and the aroma of freshly
            brewed coffee.
          </p>

          <p style={{ color: "black", padding: "30px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Exotic Coffee Origins:{" "}
            </span>{" "}
            Embark on a journey through diverse coffee regions, from the misty
            mountains of Ethiopia to the lush plantations of Costa Rica.
            Discover unique flavors and aromas that reflect the spirit of
            adventure in every sip.
          </p>

          <p style={{ color: "black", padding: "30px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Roasting Adventures:{" "}
            </span>{" "}
            Experience the art of coffee roasting as we transform carefully
            selected beans into rich, flavorful blends. Our master roasters
            bring out the best in each batch, ensuring a bold and memorable
            coffee experience.
          </p>

          <p style={{ color: "black", padding: "30px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Adventure-Inspired Brews:{" "}
            </span>{" "}
            Indulge in our specialty adventure brews crafted to ignite your
            senses and inspire your next expedition. From bold espresso shots to
            refreshing cold brews, each cup is a passport to new taste
            sensations.
          </p>

          <p style={{ color: "black", padding: "30px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Community and Connection:{" "}
            </span>{" "}
            Join fellow adventurers in our welcoming space, where stories are
            shared over steaming mugs and friendships are forged. Whether
            planning your next hike or reflecting on past travels, Adventure
            Coffee Shop is where every adventure begins.
          </p>

          <p style={{ color: "black", padding: "30px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Sustainability Commitment:{" "}
            </span>{" "}
            We are committed to sustainability, sourcing our coffee beans
            responsibly and reducing our environmental footprint. By supporting
            Adventure Coffee Shop, you contribute to conservation efforts that
            protect the natural wonders that inspire our coffee journeys.
          </p>

          <p style={{ color: "black", padding: "30px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Adventure Merchandise:{" "}
            </span>{" "}
            Take a piece of adventure home with you with our curated selection
            of adventure-themed merchandise. From travel-inspired mugs to
            exploration guides, each item is a reminder of your coffee
            adventures at our café.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <img
              style={{ height: "200px" }}
              src="/public/pages/coffee.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeShop;
