"use client";
import React, { useEffect, useState } from 'react';
import "../styles/style.css"
import Image from 'next/image';

export default function Index(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://randomuser.me/api/'); // Replace with your API URL
        const jsonData = await response.json();
        const results = jsonData.results;

        setData(results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex-1 p-4 max-w-screen-lg mx-auto bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome to the details of random people
        </h1>
        {data.map((item, index) => (
          <div className="flex mb-4" key={index}>
            <div className="w-1/2 p-4 bg-blue-200 rounded-lg shadow-md">
              <Image
                src={item.picture.large}
                alt={`${item.name.first} ${item.name.last}`}
                width={400}
                height={400}
                className="rounded-full"
                loading="lazy"
              />
            </div>
            <div className="w-1/2 p-4 bg-green-200 rounded-lg shadow-md">
              <p className="text-lg font-semibold">Name : {item.name.title} {item.name.first} {item.name.last}
              </p>
              <p>Gender: {item.gender}</p>
              <p>Email: {item.email}</p>
              <p>Age: {item.dob.age}</p>
              <p>Phone No: {item.cell}</p>
              <p>
                Address: {item.location.street.number}, {item.location.street.name}, {item.location.city}, {item.location.state}, {item.location.country}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
