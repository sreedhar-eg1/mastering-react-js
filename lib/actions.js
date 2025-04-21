"use server";

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

// without the help of useFormState, we can accept only one parameter => function shareMeal(formData)
// but with the help of useFormState, we will get prevState as first argument
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.instructions) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    !meal.image.size === 0
  ) {
    // throw new Error("Invalid inputs.");
    // instead of throwing error, we can also send response
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);

  // To revalidate the cache, this will help in production mode
  // page will validate only that route, where as layout will validate all the nested routes also
  revalidatePath("/meals");

  redirect("/meals");
}
