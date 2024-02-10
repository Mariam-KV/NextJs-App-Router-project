import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../components/Meals/MealsGrid";
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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
