// `${product.id}, ${product.title}, ${product.price}, ${product.description}, ${product.category}, ${product.image}, ${product.rating.rate}, ${product.rating.count}`

import { Link } from "react-router-dom";

export default function Products(props) {
  console.log(props);

  function renderProducts() {
    return props.products.map((product) => {
      return (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt="Product Placeholder" />
          </Link>
          <p>{product.title}</p>
          <div className="card-info">
            <p>${product.price.toFixed(2)}</p>
            <p>{product.rating.rate}</p>
          </div>
        </div>
      );
    });
  }

  return <div className="products-body">{renderProducts()}</div>;
}
