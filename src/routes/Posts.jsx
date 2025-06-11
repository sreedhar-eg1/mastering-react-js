import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const postList = await response.json();

  return postList.posts;
}

export default Posts;
