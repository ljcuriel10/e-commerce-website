import React, { Component } from 'react'

export default class CustomersList extends Component {

    state = { 
        pageTitle: 'Customers',
        customerCount: 8,
        customers: [
            {id:1, name:"Luis", phone: null, address: {city:"June Lake", state:"CA", zipCode: 93529}, image:"https://picsum.photos/id/1010/60"},
            {id:2, name:"Emma", phone: "456-555", address: {city:"June Lake", state:"CA", zipCode: 93529}, image:"https://picsum.photos/id/1002/60"},
            {id:3, name:"Janet", phone: "789-555", address: {city:"June Lake",state:"CA", zipCode: 93529}, image:"https://picsum.photos/id/1003/60"},
            {id:4, name:"Esme", phone: "111-555", address: {city:"June Lake", state:"CA", zipCode: 93529}, image:"https://picsum.photos/id/1004/60"},
            {id:5, name:"Luis Cesar", phone: "222-555", address: {city:"June Lake", state:"CA", zipCode: 93529}, image:"https://picsum.photos/id/1005/60"},
        ]
    };

  render() {
    return (
      <div>
        <h4 className='m-1 p-1'>
          {this.state.pageTitle}
          <span className='badge rounded-pill text-bg-secondary m-2'>
            {this.state.customerCount}
          </span>
          <button className='btn btn-info' onClick={this.onResfreshClick}>Refresh</button>
        </h4>
        <table className='table'>
            <thead>
            <tr>
                <th>#</th>
                <th>Customer Name</th>
                <th>Phone #</th>
                <th>Address</th>
                <th>Customer Photo</th>
            </tr>
            </thead>
            <tbody>
                {this.state.customers.map((cust, index) => {
                   return (
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td>{cust.name}</td>
                        <td>{!cust.phone ? <div className='bg-danger p-2 text-center'>No Phone</div>: cust.phone}</td>
                        <td>{cust.address.city}, {cust.address.state} {cust.address.zipCode}</td>
                        <td>
                            <img src={cust.image} alt='customer'/>
                            <div>
                                <button className='btn btn-sm btn-secondary m-1' onClick={() => {this.onChangePictureClick(cust, index)}}>Change Picture</button>
                            </div>
                        </td>
                    </tr>
                   )
                })}
            </tbody>
        </table>
      </div>
    )
  }
  // executes when the user clicks on 'Change Picture' button in the grid
  //Receives the 'customer object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
      // get existing customers
      const custArr = this.state.customers;
      custArr[index].image = 'https://picsum.photos/id/104/60';

      // update 'customers' array
      this.setState({ customers: custArr})
    }

  onResfreshClick = () => {
    this.setState({
        customerCount: 7,
    })
  }
}
