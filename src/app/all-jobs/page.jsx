"use client"
import React,{useState,useEffect} from 'react'
import ArticleGrid from '../../components/ArticleGrid';
import { fetchCardDetails } from '../../utils/apicall';

function page() {

    
  const [jobs, setJobs] = useState([]);


  const fetchJobs = async () => {
     try {
       const response = await fetchCardDetails(
         `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/alljobs`,
         // `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/mostviewed`,
 
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

    useEffect(() => {
       fetchJobs();
     }, []);
  return (
    <div >
    <ArticleGrid jobs={jobs} />
  

</div>  )
}

export default page





 