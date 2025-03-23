// src/app/[id]/layout.jsx
import { fetchCardDetails } from "../../utils/apicall";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const token = process.env.NEXT_PUBLIC_TOKEN || null;
  const job = await fetchCardDetails(
    `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${id}`,
    "GET",
    token
  );

  if (!job || !job._id) {
    return {
      title: "Job Not Found",
      description: "The requested job posting could not be found.",
    };
  }

  const description =""
  return {
    title: `${job.title} - ${job.company} | Job Posting`,
    description: job.description[0] || `Apply for ${job.title} at ${job.company}. Location: ${job.location}. Salary: ${job.salary}.`,
    openGraph: {
      title: `${job.title} - ${job.company}`,
      description: description || `Apply for ${job.title} at ${job.company}. Location: ${job.location}. Salary: ${job.salary}.`,
      images: [job.image || "/default-job-image.jpg"],
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${id}`,
      type: "website",
    },
  };
}

export default function Layout({ children }) {
  return <>{children}</>;
}