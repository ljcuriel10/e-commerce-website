import React, { Component } from 'react'
import Product from './Product'

export default class ShoppingCart extends Component {
  state = { products: [
    {id:1, productName: 'iphone', price: 8900, quantity: 0},
    {id:2, productName: 'Sony Camera', price: 4500, quantity: 0},
    {id:3, productName: 'Samsung QLED TV', price: 7745, quantity: 0},
    {id:4, productName: 'iPad Pro', price: 12400, quantity: 0},
    {id:5, productName: 'Xbox', price: 7780, quantity: 0},
    {id:6, productName: 'Dell Monitor', price: 880, quantity: 0},
]}

  render() {
    return (
      <div className='container-fluid'>
        <h4>Shopping Cart</h4>
        <div className='row'>
            {this.state.products.map((prod, i) => {
                return (
                    <Product 
                    key={i} 
                    product={prod}
                    onIncrement= {this.handleIncrement}
                    onDecrement = {this.handleDecrement}
                    >
                        <button className='btn btn-primary'>Buy Now</button>
                    </Product>
            )})}
        </div>
      </div>
    )
  }
//   Render ends Here
  
  handleIncrement = (product) => {

//    get index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product)

    // increment quantity
    allProducts[index].quantity++

    //set state
    this.setState({products: allProducts})
  }

  handleDecrement = (product) => {

    // get index of the selected product
    let allProducts = [...this.state.products]
    let index = allProducts.indexOf(product)

    // decrement quantity
    allProducts[index].quantity--

    //set state
    this.setState({products: allProducts})
  }
}
