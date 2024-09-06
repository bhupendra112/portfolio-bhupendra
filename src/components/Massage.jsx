import React, { useEffect, useState } from 'react';

export default function Massage() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    const fetchDetails = async () => {
      try {
        const response = await fetch('http://localhost:8080/data');
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <>
      <div>
        <h1>Messages</h1>
        {details.length > 0 ? (
          details.map((detail) => (
            <div key={detail._id} style={{ marginBottom: '20px' }}>
              <h3>Name: {detail.name}</h3>
              <h3>Email: {detail.email}</h3>
              <h3>Message: {detail.message}</h3>
            </div>
          ))
        ) : (
          <p>No messages found</p>
        )}
      </div>
    </>
  );
}
