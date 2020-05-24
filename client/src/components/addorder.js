import React from 'react';

class AddOrder extends React.Component {

  state = {
    productName: '',
    category: '',
    size: '',
    colour: '',
    status: '',
    customerInitials: ''
  };

  handleChange = () => {

  };

  render() {

    return (
      <div>
        <h2>Add a new order</h2>
        <form>
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
              value=""
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