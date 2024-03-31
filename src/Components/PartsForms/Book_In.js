import React, { useState } from "react";
import "./Book_In.css";
import Book_InSecond from "./Book_InSecond";

const Book_In = () => {
  const [showFirstForm, setShowFirstForm] = useState(true);
  const [showNextForm, setShowNextForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowFirstForm(false);
    setShowNextForm(true);
  };

  return (
    <>
      {showFirstForm && (
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="deliveryRef" className="form-label">
                Delivery Ref *
              </label>
              <input
                type="text"
                id="deliveryRef"
                className="form-input half-width"
                required
              />
              <label htmlFor="dgnNo" className="form-label">
                DGN No
              </label>
              <input type="text" id="dgnNo" className="form-input half-width" />
            </div>
            <div className="form-group">
              <label htmlFor="site" className="form-label">
                Site *
              </label>
              <select id="site" className="form-input half-width" required>
                <option value="">--SELECT--</option>
                {/* Additional options here */}
              </select>
              <label htmlFor="customer" className="form-label">
                Customer *
              </label>
              <select id="customer" className="form-input half-width" required>
                <option value="">--SELECT--</option>
                {/* Additional options here */}
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input type="date" id="date" className="form-input" />
            </div>
            <div className="form-btns">
              <button type="button" className="btn btn-cancel">
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}
      {showNextForm && <Book_InSecond />}
    </>
  );
};

export default Book_In;