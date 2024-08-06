import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

function App() {
  <Hero />;
  // === Also for Airbnb ===
  const tourItems = data.map((tour) => {
    return (
      <Card
        key={tour.id}
        img={tour.tourImage}
        location={tour.location}
        artifact={tour.artifact}
        date={tour.date}
        description={tour.description}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">{tourItems}</section>
    </div>
  );
}

export default App;

// <Card
//   key={item.id}
//   coverImg={item.coverImg}
//   rating={item.stats.rating}
//   reviewCount={item.stats.reviewCount}
//   location={item.location}
//   title={item.title}
//   price={item.price}
//   openSpots={item.openSpots}
// />
