"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
export default async function ShareMeal(formData) {
  function validation(value) {
    return value && value.trim() !== "";
  }
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    validation(meal.title) &&
    validation(meal.creator) &&
    validation(meal.creator_email) &&
    meal.image.size !== 0 &&
    validation(meal.summary) &&
    validation(meal.instructions)
  ) {
    await saveMeal(meal);

    redirect("/meals");
  } else {
    return { message: "Invalid inputs!" };
  }
}
