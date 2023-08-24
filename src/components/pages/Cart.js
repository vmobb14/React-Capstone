export default function Cart(props) {
  const renderCart = () => {
    return props.cart.map((productID) => {
      const productData = props.products.find(
        (stock) => stock.id === productID
      );
      return productData ? renderItem(productData) : null;
    });
  };

  function renderItem(productData) {
    return (
      <div className="product-card" key={productData.id}>
        <img src={productData.image} alt="Product Placeholder" />
        <p>{productData.title}</p>
        <div className="card-info">
          <p>${productData.price.toFixed(2)}</p>
          <p>Rating: {productData.rating.rate} / 5</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-body">
      <div className="cart-content">{renderCart()}</div>
    </div>
  );
}
