import { useEffect, useState } from "react";

export default function SingleProduct(props) {
  const [productData, setProductData] = useState({});
  const setCart = props.setCart;
  const url = `https://fakestoreapi.com/products/${props.match.params.slug}`;

  useEffect(() => {
    const controller = new AbortController();

    fetch(url)
      .then((result) => result.json())
      .then((data) => setProductData(data));

    return () => controller.abort();
  }, [url]);

  const addToCart = () => {
    return props.cart.includes(productData.id)
      ? console.log(props.cart)
      : setCart((prevState) => [...prevState, productData.id]);
  };

  const renderProduct = (productData) => {
    return (
      <div className="product-card">
        <p className="title">{productData.title}</p>
        <img src={productData.image} alt="Product Placeholder" />
        <div className="product-info">
          <button onClick={addToCart}>Add to cart</button>
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
