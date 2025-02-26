'use client'

import { useState } from "react";

export default function Frontend() {
    const [teachersdata, setTeachersData] = useState(null);
    const [studentsdata, setStudentsData] = useState(null);
    const [inp, setInp] = useState("");

    async function handleClick1() {
        let response = await fetch('/api/teacher');
        let result = await response.json();
        setTeachersData(result); // Store data if needed
        console.log("Teachers Data:", result); // Log response directly
    }

    async function handleClick2() {
        let response = await fetch('/api/students');
        let result = await response.json();
        setStudentsData(result); // Store data if needed
        console.log("Students Data:", result); // Log response directly
    }

    async function handleClick3() {
        let response = await fetch('/api/students', {
            method: 'POST',
            body: JSON.stringify({ name: inp }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        let result = await response.json();
        // console.log("Teacher student:", result);
        setTeachersData(result);
  
    }
    

    return (
        <div>
            <button onClick={handleClick1}>Get Teacher Data</button><br />
            <button onClick={handleClick2}>Get Student Data</button><br />
            
            <input 
                type='text' 
                value={inp} 
                onChange={(e) => setInp(e.target.value)} 
                placeholder="Enter teacher Name"
            /><br />
            
            <button onClick={handleClick3}>Search</button>

            {/* Display fetched data */}
            <h3>Students:</h3>
            {studentsdata && <pre>{JSON.stringify(studentsdata, null, 2)}</pre>}
            <h3>Teacher:</h3>
            {teachersdata && <pre>{JSON.stringify(teachersdata, null, 2)}</pre>}
        </div>
    );
}
