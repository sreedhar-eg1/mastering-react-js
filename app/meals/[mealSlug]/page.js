import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

// setting dynamic meta data
export async function generateMetadata({ params }) {
  const slug = await params?.mealSlug;
  const meal = getMeal(slug)

  return {
    title: meal.title,
    description: meal.summary
  }
}

// next js provide a special params props fo the reserverd page with filename page.js

export default async function MealDetailsPage({ params }) {
  const slug = await params?.mealSlug;
  const meal = await getMeal(slug);

  if (!meal) {
    // we can call the closest not found page in next js using notFound() method
    // which will render closest error or not found page
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creater}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
