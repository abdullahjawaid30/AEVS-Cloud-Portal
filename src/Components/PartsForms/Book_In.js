import React, { useState } from "react";
import "./Book_In.css";
import Book_InSecond from "./Book_InSecond";

const Book_In = () => {
  const [showFirstForm, setShowFirstForm] = useState(true);
  const [showNextForm, setShowNextForm] = useState(false);

  const handleSubmit = () => {
    setShowFirstForm(false);
    setShowNextForm(true);
  };

  return (
    <>
      {showFirstForm && (
        <div className="form-container">
          <form>
            <div className="form-group half-width">
              <label htmlFor="deliveryRef" className="form-label">
                Delivery Ref *
              </label>
              <input
                type="text"
                id="deliveryRef"
                className="form-input"
                required
              />
            </div>
            <div className="form-group half-width">
              <label htmlFor="dgnNo" className="form-label">
                DGN No
              </label>
              <input type="text" id="dgnNo" className="form-input" />
            </div>
            <div className="clear-fix"></div>
            <div className="form-group half-width">
              <label htmlFor="site" className="form-label">
                Site *
              </label>
              <select id="site" className="form-input" required>
                <option value="">--SELECT--</option>
                {/* Additional options here */}
              </select>
            </div>
            <div className="form-group half-width">
              <label htmlFor="customer" className="form-label">
                Customer *
              </label>
              <select id="customer" className="form-input" required>
                <option value="">--SELECT--</option>
                {/* Additional options here */}
              </select>
            </div>
            <div className="clear-fix"></div>
            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input type="date" id="date" className="form-input" />
            </div>
            <div className="form-btn">
              <button type="button" className="btn btn-danger">
                Cancel
              </button>
              <button
                type="button"
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
