import React from "react";
import PropTypes from "prop-types";

function Food({ name, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h3> {rating}/5.0</h3>
    </div>
  );
}
const foodILike = [
  {
    id: 1,
    name: "김치",
    rating: 3.7,
  },
  {
    id: 2,
    name: "라면",
    rating: 4.3,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
