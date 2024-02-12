import React from "react";

function Filter( {onCategoryChange} ) {
    return (
        <select onChange={onCategoryChange}>
            <option></option>
        </select>
    ) 
}

export default Filter