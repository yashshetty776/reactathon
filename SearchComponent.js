import React from 'react';
 
function SearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>Overlays Clothing </h1>
            <h3> Shopping Cart</h3>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for Overlays Products..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}
 
export default SearchComponent;