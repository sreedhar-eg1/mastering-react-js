import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  // const [meals, setMeals] = useState([]);

  // useEffect(() => {
  //   async function getMeals() {
  //     const response = await fetch("http://localhost:3000/meals");

  //     if (!response.ok) {
  //       return;
  //     }

  //     const data = await response.json();
  //     setMeals(data);
  //   }

  //   getMeals();
  // }, []);

  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" messsage={error}></Error>;
  }

  // if (!meals) {
  //   return <p>No meals found.</p>
  // }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal}></MealItem>
      ))}
    </ul>
  );
}
