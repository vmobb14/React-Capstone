import { Link } from "react-router-dom";

export default function Products(props) {
  const renderProducts = () => {
    return props.products.map((product) => {
      return (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt="Product Placeholder" />
          </Link>
          <p>{product.title}</p>
          <div className="card-info">
            <p>${product.price.toFixed(2)}</p>
            <p>Rating: {product.rating.rate} / 5</p>
          </div>
        </div>
      );
    });
  };

  return <div className="products-body">{renderProducts()}</div>;
}
