import React, { useEffect, useState } from 'react';

export default function CompanyMessage() {
  const [companyDetails, setCompanyDetails] = useState([]);

  useEffect(() => {
    // Fetch company details from the backend when the component mounts
    const fetchCompanyDetails = async () => {
      try {
        const response = await fetch('http://localhost:8080/company-details'); // Assumes the server is running at the same origin
        const data = await response.json();
        setCompanyDetails(data); // Set the fetched data to the state
      } catch (error) {
        console.error('Error fetching company details:', error);
      }
    };

    fetchCompanyDetails(); // Call the fetch function when the component mounts
  }, []);

  return (
    <>
      <div>
        <h1>Company Details</h1>
        {companyDetails.length > 0 ? (
          companyDetails.map((detail) => (
            <div key={detail._id} style={{ marginBottom: '20px' }}>
              <h3>Company: {detail.company}</h3>
              <h3>Salary: {detail.salary}</h3>
              <h3>Location: {detail.location}</h3>
              <h3>Position: {detail.position}</h3>
              <h3>Message: {detail.message}</h3>
            </div>
          ))
        ) : (
          <p>No company details found.</p>
        )}
      </div>
    </>
  );
}
