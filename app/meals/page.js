import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../components/Meals/MealsGrid";
import { getMeals } from "../../lib/meals";
import Loading from "../loading";
export default async function MealsPage() {
  //inside server compoennt we can use async-await
  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          <span></span>
        </h1>
        <p></p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
