import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [username, setUsername] = useState('');
  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get('/names');
    console.log(response);
    setUsername(response.data)
  }
  return (
    <>
    <h1>My website</h1>
    <h3>The actual state is {username}</h3>
    </>
  );
}

export default App;
