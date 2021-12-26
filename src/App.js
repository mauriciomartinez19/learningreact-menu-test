import logo from './logo.svg';
import './App.css';
import Menu from './menu';
import TopNavbar from './TopNavbar';



function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <h1 className='title'>Our Menu</h1>
      <div className='line' />
      <Menu />
    </div >
  );
}




export default App;
