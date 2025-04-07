import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  return (
    <>
      <h3>Product details</h3>
      <p>Product details {params.id}</p>
    </>
  );
}
