'use client';

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { useFormState } from "react-dom";

// use server is a directive, which is used to create a server action, which guarentee that it will be executed in the server
// the function where we used use server must be an async function

export default function ShareMealPage() {
  // this only works, if the component is not a client component
  //   if the component is a client component, then we can store this server action in separate file, which is alternate solution
  //   async function shareMeal(formData) {
  //     "use server";

  //     const meal = {
  //       title: formData.get("title"),
  //       creator: formData.get("name"),
  //       creator_email: formData.get("email"),
  //       summary: formData.get("summary"),
  //       instructions: formData.get("instructions"),
  //       image: formData.get("image"),
  //     };
  //   }

  // To get the response that was sent by the action using useFormState
  const [state, formAction] = useFormState(shareMeal, {meassage: null})

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          {state.meassage && <p>{state.meassage}</p>}
          <ImagePicker label="Your image" name="image" />
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
