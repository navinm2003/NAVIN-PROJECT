import './App.css';
import Card from './Card';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [color, setColor] = useState("");

  return (
    <div>
    <Header/>
      <div className="App" style={{backgroundColor:color}}>
        <Card setColor={setColor}/>
      </div>
      <Footer/>
      </div>
  );
}

export default App;
