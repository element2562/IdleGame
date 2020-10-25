import './App.css';
import React from 'react';
import Login from './components/Login';
import Navbar from "./components/NavBar";
import { useAuth0 } from '@auth0/auth0-react';
import { Alert } from 'react-bootstrap';

const App = () => {
  const { isLoading } = useAuth0();

  if ( isLoading ) return <Alert variant='info'>We are loading your information...</Alert>

  return (
    <>
      <Login />
      <Navbar />
    </>
  );
}

export default App;
