
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

import classes from "./PostList.module.css";
import { useEffect, useState } from "react";

export default function PostList() {
  const postList = useLoaderData()
  // const [postList, setPostList] = useState([]);
  // const [isFetching, setIsFetching] = useState(false)

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true)
  //     const response = await fetch("http://localhost:8080/posts");
  //     const postList = await response.json();

  //     setPostList(postList.posts);
  //     setIsFetching(false)
  //   }

  //   fetchPosts()
  // }, []);

  // function handlePostList(postData) {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(postData),
  //   });
  //   setPostList((currPostList) => [...currPostList, postData]);
  // }

  return (
    <>
      {/* {isFetching && <p>Fetching Posts...</p>} */}
      {postList.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Post Available.</h2>
          <p>Please add a post to see.</p>
        </div>
      )}
      {postList.length > 0 && (
        <ul className={classes.posts}>
          {postList.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} id={post.id}/>
          ))}
        </ul>
      )}
    </>
  );
}
