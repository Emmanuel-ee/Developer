import logo from './logo.svg';
import './App.css';
import {createRef} from 'react'
import {useState} from 'react'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from './firebase';
import Home from './Home';
function App() {
const usernameRef = createRef()
const passwordRef = createRef()
const [res,setRes] = useState({})
const handlelogin = () => {
signInWithEmailAndPassword(getAuth(app),usernameRef.current.value,passwordRef.current.value)
.then(res=>setRes(res))
}

if (JSON.stringify(res)===JSON.stringify({}))
  return (
    <div className="App">
      <header className="App-header">
        <label>
          enter your username: 
          <input ref = {usernameRef}/>
        </label>
        <label>
          enter your password: 
          <input ref = {passwordRef}/>
        </label>
        <button onClick={handlelogin}>Login</button>
        <br/>{JSON.stringify(res)}
      </header>
    </div>
  );
  else{
    return(<Home/>)
  }
}

export default App;
