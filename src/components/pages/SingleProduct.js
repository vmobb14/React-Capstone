// `${product.id}, ${product.title}, ${product.price}, ${product.description}, ${product.category}, ${product.image}, ${product.rating.rate}, ${product.rating.count}`
import { useEffect, useState } from "react";

export default function SingleProduct(props) {
  const [productData, setProductData] = useState({});
  const url = `https://fakestoreapi.com/products/${props.match.params.slug}`;

  useEffect(() => {
    const controller = new AbortController();

    fetch(url)
      .then((result) => result.json())
      .then((data) => setProductData(data));

    return () => controller.abort();
  }, []);

  console.log(productData);

  return (
    <div className="product-body">
      <div className="product-content">Product Please</div>
    </div>
  );
}
