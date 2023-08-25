export default function Cart(props) {
  const setCart = props.setCart;

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

    const productTotal = (productQuantity * productData.price).toFixed(2);

    const addQuantity = (productData) => {
      setCart((prevState) => [...prevState, productData.id]);
      console.log(productQuantity);
    };

    const subtractQuantity = (productData) => {
      if (productQuantity > 1) {
        const removeIndex = props.cart.indexOf(productData.id);
        setCart((prevState) => prevState.splice(removeIndex, 1));
        console.log(productQuantity);
      }
    };

    const removeAllQuantity = (productData) => {
      const removeIndex = props.cart.indexOf(productData.id);
      setCart((prevState) => prevState.splice(removeIndex, productQuantity));
    };

    return (
      <div className="product-card" key={productData.id}>
        <img src={productData.image} alt="Product Placeholder" />
        <p>{productData.title}</p>
        <div className="card-info">
          <p>Quantity: {productQuantity}</p>
          <p>${productTotal}</p>
        </div>
        <div className="quantity-control">
          <button onClick={addQuantity}>+</button>
          <button onClick={subtractQuantity}>-</button>
          <button onClick={removeAllQuantity}>Remove</button>
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
