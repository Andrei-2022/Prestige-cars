let cars;

fetch("cars.json")
  .then((response) => response.json())
  .then((data) => {
    cars = data;
  })
  .catch((error) => console.error("Error:", error));
