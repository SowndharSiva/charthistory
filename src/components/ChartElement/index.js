import React, { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Tooltip,Line,LineChart,Area,AreaChart,
} from 'recharts';

import './index.css';
  

const data = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
    { name: 'Page F', uv: 2390, pv: 3800 },
    { name: 'Page G', uv: 3490, pv: 4300 },
];

const ChartElement = () => {
    const [resolvedData, setResolvedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // Simulating data fetching process
            const fetchedData = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(data);
                }, 1000); // Simulating a delay of 1 second
            });

            setResolvedData(fetchedData);
        };

        fetchData();
    }, []);

    if (resolvedData.length === 0) {
        return <p>Loading...</p>; // Display a loading message or spinner while data is being fetched
    }

    return (
        <>
            <h1 className="chart-heading">Chart Library</h1>
            <div className="max-chart">
            <h1 className="chart-text">Bar chart</h1>
            <BarChart width={730} height={250} data={resolvedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
            </div>
            <div className="max-chart">     
                <h1 className="chart-text">Line Chart</h1>                           
                <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>                                                   
                </div>
                <div className="max-chart">
                    <h1 className="chart-text">Area Chart</h1>                                        
                    <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            
        </>
    );
};

export default ChartElement;