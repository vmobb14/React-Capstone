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
    const productQuantity = props.cart.filter((cartID) => {
      return productData.id === cartID;
    }).length;

    return (
      <div className="product-card" key={productData.id}>
        <img src={productData.image} alt="Product Placeholder" />
        <p>{productData.title}</p>
        <div className="card-info">
          <p>Quantity: {productQuantity}</p>
          <p>${productData.price.toFixed(2)}</p>
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
