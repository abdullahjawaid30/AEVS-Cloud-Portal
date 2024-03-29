import React, { useState } from "react";
// import "./Parts_Menu.css";

const InventoryForm = () => {
  const [quantity, setQuantity] = useState("");
  const [inventoryType, setInventoryType] = useState([]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleInventoryTypeChange = (event) => {
    const value = event.target.value;
    if (inventoryType.includes(value)) {
      setInventoryType(inventoryType.filter((type) => type !== value));
    } else {
      setInventoryType([...inventoryType, value]);
    }
  };

  return (
    <div className="inventory-form">
      <label className="form-label">Inventory Type *</label>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            value="NEW"
            checked={inventoryType.includes("NEW")}
            onChange={handleInventoryTypeChange}
          />{" "}
          NEW
        </label>
        <label>
          <input
            type="checkbox"
            value="REMAN"
            checked={inventoryType.includes("REMAN")}
            onChange={handleInventoryTypeChange}
          />{" "}
          REMAN
        </label>
      </div>
    </div>
  );
};

const Book_InSecond = () => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-group half-width">
          <label htmlFor="deliveryRef" className="form-label">
            Part Number
          </label>
          <input type="text" id="deliveryRef" className="form-input" required />
        </div>
        <div className="form-group half-width">
          <label htmlFor="dgnNo" className="form-label">
            Location*
          </label>
          <input
            type="text"
            id="dgnNo"
            className="form-input"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="clear-fix"></div>
        <div className="form-group half-width">
          <label htmlFor="quantity" className="form-label">
            Quantity*
          </label>
          <input type="text" id="quantity" className="form-input" />
        </div>

        <div className="clear-fix"></div>
        <InventoryForm />

        <div className="form-btn">
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
          <button type="button" className="btn btn-primary">
            Next
          </button>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Book_InSecond;
