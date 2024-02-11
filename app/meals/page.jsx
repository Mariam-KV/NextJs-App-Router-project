import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../components/Meals/MealsGrid";
import { getMeals } from "../../lib/meals";
import { Suspense } from "react";
import loading from "../meals/Loading.module.css";
async function FetchingMeals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
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
        <Suspense
          fallback={<p className={loading.loading}>Fetching data...</p>}
        >
          <FetchingMeals />
        </Suspense>
      </main>
    </>
  );
}
