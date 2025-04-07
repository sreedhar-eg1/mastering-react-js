import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate()

  return (
    <>
      <h2>Products</h2>
      <ul>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return <li key={item} onClick={() => navigate(`/products/${index + 1}`)}>Product {index + 1}</li>;
        })}
      </ul>
    </>
  );
}
