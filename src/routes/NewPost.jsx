import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, redirect, useNavigate } from "react-router-dom";

function NewPost({ onSubmitPost }) {
  const navigate = useNavigate();

  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredName,
    };

    onSubmitPost(postData);
    onCloseHandler();
  }

  function onCloseHandler() {
    navigate("/");
  }

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            name="body"
            required
            rows={3}
            onChange={(event) => setEnteredBody(event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="author"
            required
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </p>
        <p className={classes.actions}>
          <button onClick={onCloseHandler} type="button">
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export async function action(data) {
  const formData = await data.request.formData()
  const postData = Object.fromEntries(formData)

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return redirect('/')
}

export default NewPost;
