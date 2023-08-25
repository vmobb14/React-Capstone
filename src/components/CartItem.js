import { useState } from "react";

export default function CartItem(props) {
  const productData = props.productData;
  const setCart = props.setCart;
  const [productQuantity, setProductQuantity] = useState(1);
  const [productCost, setProductCost] = useState(productData.price.toFixed(2));

  const updateCost = () =>
    setProductCost((productQuantity * productData.price).toFixed(2));

  const addQuantity = () => {
    setProductQuantity((prevState) => prevState + 1);
    updateCost();
  };

  const subtractQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((prevState) => prevState - 1);
      updateCost();
    }
  };

  const removeAllQuantity = (productData) => {
    const removeIndex = props.cart.indexOf(productData.id);
    setProductQuantity(0);
    setCart((prevState) => prevState.splice(removeIndex, 1));
  };

  return (
    <div className="product-card" key={productData.id}>
      <img src={productData.image} alt="Product Placeholder" />
      <p>{productData.title}</p>
      <div className="card-info">
        <p>Quantity: {productQuantity}</p>
        <p>${productCost}</p>
      </div>
      <div className="quantity-control">
        <button onClick={addQuantity}>+</button>
        <button onClick={subtractQuantity}>-</button>
        <button onClick={removeAllQuantity}>Remove</button>
      </div>
    </div>
  );
}
