"use client";
import React, { useState, useEffect } from "react";
import JobGrid from '../components/JobGrid';
import ArticleCard from '../components/ArticleCard';
import ArticleGrid from '../components/ArticleGrid';
import { Grid, Box } from '@mui/material';
import Secondsection from '@/components/Secondsection';
import JobSearch from "@/components/JobSearch";
import JobDiv2 from "@/components/JobDiv2";
import Footer from "@/components/Footer";
import JobFilters from "@/components/JobFilters";
import { fetchCardDetails } from '../utils/apicall';

function Temp() {
  const [latestJobs, setLatestJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    all:'',
    type: '',
    sector: '',
    location: '',
    pinned: false,
  });

  // Fetch latest 5 jobs
  async function fetchLatestJobs() {
    try {
      const response = await fetchCardDetails(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/latest?limit=20`,
        "GET"
      );
      if (!response || !Array.isArray(response)) {
        throw new Error("Failed to fetch latest jobs");
      }
      setLatestJobs(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Fetch all jobs (optional, if needed elsewhere)
  const fetchJobs = async () => {
    try {
      const response = await fetchCardDetails(
        // `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/alljobs`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/mostviewed`,

        "GET"
      );
      if (!response || !Array.isArray(response)) {
        throw new Error("Failed to fetch jobs");
      }
      setJobs(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch filtered jobs based on filters
  async function fetchFilteredJobs(filters) {
    try {
      const queryParams = new URLSearchParams({
        ...(filters.type && { type: filters.type }),
        ...(filters.sector && { sector: filters.sector }),
        ...(filters.location && { location: filters.location }),
        ...(filters.pinned && { pinned: filters.pinned }),
      }).toString();

      const response = await fetchCardDetails(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/filtered?${queryParams}`,
        "GET"
      );

      if (!response || !Array.isArray(response)) {
        throw new Error("Failed to fetch filtered jobs");
      }
      setFilteredJobs(response);
    } catch (err) {
      setError(err.message);
    }
  }

  // Handle filter changes from JobFilters
  const handleFilterChange = (newFilters) => {
    setLoading(true);
    setActiveFilters(newFilters); // Update active filters
    if (isFilterApplied(newFilters)) {
      fetchFilteredJobs(newFilters); // Fetch filtered jobs only if a filter is applied
    }
    setLoading(false);
  };

  // Check if any filter is applied
  const isFilterApplied = (filters = activeFilters) => {
    return (
      filters.type !== '' ||
      filters.sector !== '' ||
      filters.location !== '' ||
      filters.pinned
    );
  };

  useEffect(() => {
    fetchLatestJobs();
    fetchJobs();
  }, []);

  return (
    <>
      <div className="px-2 md:px-10">
        {/* <JobGrid /> */}
        <div>
          <JobFilters onFilterChange={handleFilterChange} />
          {loading && <JobDiv2 jobs={filteredJobs}/>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            isFilterApplied() ? (
              <JobDiv2 jobs={filteredJobs} />
            ) : (
              <JobDiv2 jobs={latestJobs} />
            )
          )}
        </div>
        {/* <div>
          {error && <p>Error: {error}</p>}
          {!loading && !error && <JobDiv2 jobs={latestJobs} />}
        </div> */}
        <div className="flex items-center space-x-2" style={{ marginBottom: "2%" }}>
          <span className="text-black text-xl font-semibold">Most Viewed Jobs</span>
          <div className="w-2/4 h-1 bg-orange-500"></div>
        </div>
        <div>
          <ArticleGrid jobs={jobs} />
        </div>
      </div>
    </>
  );
}

export default Temp;