import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { log } from "node:console";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  //   throw new Error("Something went wrong");
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extenstion = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extenstion}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  //   to convert array buffer to normal buffer, because we need to write normal buffer
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed. Please try again later.");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals (
         slug,
         title,
         image,
         summary,
         instructions,
         creator,
         creator_email
    )
    VALUES
    (
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email)
`
  ).run(meal);
}
