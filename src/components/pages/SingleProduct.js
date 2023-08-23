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
  }, [url]);

  const renderProduct = (productData) => {
    return (
      <div className="product-card">
        <p className="title">{productData.title}</p>
        <img src={productData.image} alt="Product Placeholder" />
        <div className="product-info">
          <button>Add to cart</button>
          <p>Price: ${productData.price?.toFixed(2)}</p>
          <p>Rating: {productData.rating?.rate} / 5</p>
          <p>Reviews: {productData.rating?.count}</p>
        </div>
        <p className="description">{productData.description}</p>
      </div>
    );
  };

  return (
    <div className="product-body">
      <div className="product-content">{renderProduct(productData)}</div>
    </div>
  );
}
