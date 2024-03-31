import React, { useState } from "react";
import "./Book_In.css";

const Book_InSecond = () => {
  const [inventoryType, setInventoryType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Processing form submission here
    // You can use inventoryType state in your submission logic
  };

  const handleInventoryTypeChange = (event) => {
    setInventoryType(event.target.value);
  };

  return (
    <div className="book-in-second">
      <h2 className="title">PART BOOK-IN</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="partNumber">Part Number *</label>
          <input type="text" id="partNumber" required />
        </div>
        
        <div className="input-group">
          <label htmlFor="location">Location *</label>
          <select id="location" required>
            <option value="">--SELECT--</option>
            {/* Option elements here */}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="quantity">Quantity *</label>
          <input type="number" id="quantity" required />
        </div>

        <div className="input-group inventory-type">
          <span>Inventory Type? *</span>
          <label htmlFor="new">
            <input
              type="radio"
              id="new"
              name="inventoryType"
              value="NEW"
              checked={inventoryType === 'NEW'}
              onChange={handleInventoryTypeChange}
              required
            />
            NEW
          </label>
          <label htmlFor="reman">
            <input
              type="radio"
              id="reman"
              name="inventoryType"
              value="REMAN"
              checked={inventoryType === 'REMAN'}
              onChange={handleInventoryTypeChange}
            />
            REMAN
          </label>
        </div>

        <div className="button-group">
          <button type="button" className="btn-cancel">Cancel</button>
          <button type="button" className="btn-add-new">Add New</button>
          <button type="submit" className="btn-submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Book_InSecond;
