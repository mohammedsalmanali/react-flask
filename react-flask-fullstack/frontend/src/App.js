import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

function App() {
    const [data, setData] = useState('');

    useEffect(() => {
        async function fetchDataFromApi() {
            try {
                console.log('Fetching data...');
                const response = await fetchData();
                console.log('Fetched data:', response);
                setData(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchDataFromApi();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>{data}</p>
            </header>
        </div>
    );
}

export default App;
