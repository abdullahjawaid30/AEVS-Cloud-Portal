import React from 'react';
import './Components.css'; // Make sure to create a CSS file for styling

const Book_In = () => {
    return (
        <div className="form-container">
        <form>
            <label>
                Delivery Ref*
                <input className="input-field" type="text" />
            </label>
            <label>
                Site*
                <select className="select-field">
                    <option value="">--SELECT--</option>
                    {/* Add options here */}
                </select>
            </label>
            <label>
                Customer*
                <select className="select-field">
                    <option value="">--SELECT--</option>
                    {/* Add options here */}
                </select>
            </label>
            <label>
                Date
                <input className="input-field" type="date" />
            </label>
            <label>
                DGN No
                <input className="input-field" type="text" />
            </label>
            <div>
                <button className="button" type="button">Cancel</button>
                <button className="button" type="submit">Next</button> {/* Fixed the closing tag here */}
            </div>
        </form>
    </div>
    );
};

export default Book_In;