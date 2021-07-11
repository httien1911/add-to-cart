import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
    this.deleteItemOfCart = this.deleteItemOfCart.bind(this);
  }

  addToCart(product) {
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }
  deleteItemOfCart(cartItem) {
    this.setState({
      cartItems: this.state.cartItems.filter(Item => 
        Item !== cartItem)
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          deleteItemOfCart: this.deleteItemOfCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
