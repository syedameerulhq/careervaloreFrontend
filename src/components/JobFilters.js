"use client";
import React, { useState, useEffect } from "react";

function JobFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    type: '',
    sector: '',
    location: '',
    pinned: false,
  });

  // Filter options from controllers
  const jobTypes = ['fulltime', 'parttime', 'internship', 'contract', 'remote'];
  const sectors = ['IT', 'Mechanical', 'Civil', 'Electronics', 'Any Degree'];
  const locations = ['remote', 'kurnool', 'bengaluru', 'london'];

  const handleFilterChange = (filterName, value) => {
    let newFilters = { ...filters };

    if (filterName === 'all') {
      newFilters = { type: '', sector: '', location: '', pinned: false };
    } else if (filterName === 'pinned') {
      newFilters = { 
        type: '', 
        sector: '', 
        location: '', 
        pinned: !filters.pinned 
      };
    } else {
      newFilters = {
        ...filters,
        type: filterName === 'type' ? value : '',
        sector: filterName === 'sector' ? value : '',
        location: filterName === 'location' ? value : '',
        pinned: false
      };
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {/* All Jobs Button */}
      {/* <button
        onClick={() => handleFilterChange('all')}
        style={{ border: "1px solid black",backgroundColor:"white",color:"black" }}
        className="inline-block text-white px-3 py-1.5 rounded-lg hover:bg-gray-900 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        All Jobs
      </button> */}

      {/* Sector Dropdown */}
      <div className="relative inline-block">
        <select
          value={filters.sector}
          style={{ border: "1px solid black",backgroundColor:"white",color:"black" }}
          onChange={(e) => handleFilterChange('sector', e.target.value)}
          className="appearance-none text-white px-3 py-1.5 rounded-lg hover:bg-gray-900 transition-colors pr-7 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          <option value="" style={{color:"black"}}>Sector</option>
          {sectors.map((sector) => (
            <option key={sector} value={sector} style={{color:"black"}}>
              {sector.charAt(0).toUpperCase() + sector.slice(1)}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={{color:"black"}}>
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

      {/* Type Dropdown */}
      <div className="relative inline-block">
        <select
          value={filters.type}
          style={{ border: "1px solid black",backgroundColor:"white",color:"black" }}
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className="appearance-none text-white px-3 py-1.5 rounded-lg hover:bg-gray-900 transition-colors pr-7 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          <option value="" style={{color:"black"}}>Type</option>
          {jobTypes.map((type) => (
            <option key={type} value={type} style={{color:"black"}}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={{color:"black"}}>
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

      {/* Location Dropdown */}
      {/* <div className="relative inline-block">
        <select
          value={filters.location}
          style={{ border: "1px solid black",backgroundColor:"white",color:"black" }}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          className="appearance-none text-black px-3 py-1.5 rounded-lg hover:bg-gray-900 transition-colors pr-7 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          <option value="" style={{color:"black"}}>Location</option>
          {locations.map((location) => (
            <option key={location} value={location} style={{color:"black"}}>
              {location.charAt(0).toUpperCase() + location.slice(1)}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={{color:"black"}}>
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div> */}

      {/* Pinned Toggle */}
      <button
        onClick={() => handleFilterChange('pinned')}
        style={{ border: "1px solid black",backgroundColor:"white",color:"black" }}
        className={`inline-block px-3 py-1.5 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ${
          filters.pinned ? 'bg-gray-900 text-white' : ' text-white hover:bg-gray-900'
        }`}
      >
        Trending job
        {/* pinned only */}
      </button>
    </div>
  );
}

export default JobFilters;