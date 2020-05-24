import React from 'react';

class AddOrder extends React.Component {

  render() {

    return (
      <div>
        <h2>Add a new order</h2>
        <form>
          <div class="form-input">
            <input 
              type="text"
              name="productName"
              value={this.state.productName}
              placeholder="Product Name"
            />
          </div>
          <div class="form-input">
            <input 
              type="text"
              name="category"
              value={this.state.category}
              placeholder="Category"
            />
          </div>
          <div class="form-input">
            <input 
              type="text"
              name="size"
              value={this.state.size}
              placeholder="Size"
            />
          </div>
          <div class="form-input">
            <input 
              type="text"
              name="colour"
              value={this.state.colour}
              placeholder="Colour"
            />
          </div>
          <div class="form-input">
            <input 
              type="text"
              name="status"
              value={this.state.status}
              placeholder="Status"
            />
          </div>
          <div class="form-input">
            <input 
              type="text"
              name="customerInitials"
              value=""
              placeholder="Customer Initials"
            />
          </div>
          <button>Add Order</button>
        </form>
      </div>
    )
  };
}

export default AddOrder;