import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  const handleFilterChange = (filter, value) => {
    onFilterChange(filter, value);
  };

  return (
    <div className="filter-bar">
      <select onChange={(e) => handleFilterChange('company', e.target.value)}>
        <option value="">All Companies</option>
        <option value="AMZ">AMZ</option>
        <option value="FLP">FLP</option>
        <option value="SNP">SNP</option>
        <option value="MYN">MYN</option>
        <option value="AZO">AZO</option>
      </select>
      <select onChange={(e) => handleFilterChange('category', e.target.value)}>
        <option value="">All Categories</option>
        <option value="Phone">Phone</option>
        <option value="Computer">Computer</option>
        <option value="TV">TV</option>
        <option value="Earphone">Earphone</option>
        <option value="Tablet">Tablet</option>
        <option value="Charger">Charger</option>
        <option value="Mouse">Mouse</option>
        <option value="Keypad">Keypad</option>
        <option value="Bluetooth">Bluetooth</option>
        <option value="Pendrive">Pendrive</option>
        <option value="Remote">Remote</option>
        <option value="Speaker">Speaker</option>
        <option value="Headset">Headset</option>
        <option value="Laptop">Laptop</option>
        <option value="PC">PC</option>
      </select>
      <input type="number" placeholder="Min Price" onChange={(e) => handleFilterChange('minPrice', e.target.value)} />
      <input type="number" placeholder="Max Price" onChange={(e) => handleFilterChange('maxPrice', e.target.value)} />
      <select onChange={(e) => handleFilterChange('rating', e.target.value)}>
        <option value="">All Ratings</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
      <select onChange={(e) => handleFilterChange('availability', e.target.value)}>
        <option value="">All Availability</option>
        <option value="yes">Available</option>
        <option value="out-of-stock">Out of Stock</option>
      </select>
    </div>
  );
};

export default FilterBar;