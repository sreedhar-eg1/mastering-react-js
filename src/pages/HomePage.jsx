import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to={"/products"}>the products page</Link>
      </p>
      <button onClick={() => navigate("/products")}>Navigate</button>
    </>
  );
}
