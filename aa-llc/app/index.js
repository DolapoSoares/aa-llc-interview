"use client"

import React from 'react'
import { useEffect, useState } from 'react';


const Index = () => {

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
    <div>
      <h1> Welcome to My blog gallery ssg</h1>
        {data.map((item, index) =>(
        <div key={index}>
            <div>
            <img src={item.picture.large} />
            </div>
            <div>
                <p>Name : {item.name.title} {item.name.first} {item.name.last}</p>
                <p>Gender : {item.gender} </p>
            </div>
        </div>
        
    ))}
    </div>
  )
}
export default Index