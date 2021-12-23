import logo from './logo.svg';
import './App.css';
import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <h1 className='title'>Our Menu</h1>
      <div className='line' />
      <div className='select-bar'>
        <button className='select-item'>All</button>
        <button className='select-item'>Breakfast</button>
        <button className='select-item'>Lunch</button>
        <button className='select-item'>Shakes</button>
      </div>
    </div >
  );
}




export default App;
