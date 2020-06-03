import React from 'react';
import axios from 'axios';

class AddOrder extends React.Component {

  state = {
    productName: '',
    category: '',
    size: '',
    colour: '',
    status: '',
    customerInitials: ''
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      productName: this.state.productName,
      category: this.state.productName,
      size: this.state.productName,
      colour: this.state.productName,
      status: this.state.productName,
      customerInitials: this.state.productName
    }
    axios({
      url: '/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data sent');
    })
    .catch(() => {
      console.log('Error sending data');
    });
  };

  render() {

    return (
      <div>
        <h2>Add a new order</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="text"
              name="productName"
              value={this.state.productName}
              placeholder="Product Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input 
              type="text"
              name="category"
              value={this.state.category}
              placeholder="Category"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input 
              type="text"
              name="size"
              value={this.state.size}
              placeholder="Size"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input 
              type="text"
              name="colour"
              value={this.state.colour}
              placeholder="Colour"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input 
              type="text"
              name="status"
              value={this.state.status}
              placeholder="Status"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input 
              type="text"
              name="customerInitials"
              value={this.state.customerInitials}
              placeholder="Customer Initials"
              onChange={this.handleChange}
            />
          </div>
          <button>Add Order</button>
        </form>
      </div>
    )
  };
}

export default AddOrder;