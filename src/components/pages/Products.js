// `${product.id}, ${product.title}, ${product.price}, ${product.description}, ${product.category}, ${product.image}, ${product.rating.rate}, ${product.rating.count}`

export default function Products(props) {
  console.log(props);

  function renderProducts() {
    return props.products.map((product) => {
      return (
        <div key={product.id} className="product-card">
          <img src={product.image} alt="Product Image" />
          <p>{product.title}</p>
          <div className="card-info">
            <p>{product.price}</p>
            <p>{product.rating.rate}</p>
            <p>{product.rating.count}</p>
          </div>
        </div>
      );
    });
  }

  return <div className="products-body">{renderProducts()}</div>;
}
