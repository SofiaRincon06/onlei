import React, { useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>

      <div>
        <h2>Productos</h2>
        <ul>
          <li>
            <button onClick={() => addToCart('Producto 1')}>Agregar Producto 1</button>
          </li>
          <li>
            <button onClick={() => addToCart('Producto 2')}>Agregar Producto 2</button>
          </li>
          {/* Puedes agregar más productos con botones similares */}
        </ul>
      </div>

      <div>
        <h2>Carrito</h2>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
