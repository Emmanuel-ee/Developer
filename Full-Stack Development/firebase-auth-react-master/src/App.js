import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import { getAuth, onAuthStateChanged } from '@firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCTFff2GNR-BXmqEobdDV1RGseQCaJIzUs",
  authDomain: "loginlogout-b42b0.firebaseapp.com",
  projectId: "loginlogout-b42b0",
  storageBucket: "loginlogout-b42b0.appspot.com",
  messagingSenderId: "223670393204",
  appId: "1:223670393204:web:aa797c94b4eee279a07421",
  measurementId: "G-T8BJYWJP2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
