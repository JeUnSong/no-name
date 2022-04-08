import logo from './logo.svg';
import './App.css';
import { firestore } from "./firebase";
import { useEffect } from 'react';
import Ui from './Ui';

function App() {
      
  return (
    <div className="App">
      firebase 활용한 사전 ! 
      <Ui />
    </div>
    
  );
}

export default App;
