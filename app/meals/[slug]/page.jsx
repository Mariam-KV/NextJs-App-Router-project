import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const meal = await getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}
export default async function MealsDetailPage({ params }) {
  const meal = await getMeal(params.slug);
  if (!meal) notFound();
  const {
    id,
    slug,
    title,
    image,
    summary,
    instructions,
    creator,
    creator_email,
  } = meal;

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            fill
            src={`https://mariam-kvirkviia-nextjs-demo-users-image.s3-us-west-2.amazonaws.com/${image}`}
            alt={title}
          />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions.replace(/\n/g, "<br />"),
          }}
        ></p>
      </main>
    </>
  );
}
