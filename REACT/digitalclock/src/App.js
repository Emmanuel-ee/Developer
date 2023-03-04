import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [clock,setClock] = useState(new Date())
  useEffect(() => {
    setInterval(() => {
      setClock(new Date())
    }, 5000);
  
    return () => {
      
    }
  }, [clock])
  
   
  return (
    <div className="App">
      Clock ={clock.getHours()}:{clock.getMinutes()}:{clock.getSeconds()}
    </div>
  );
}

export default App;