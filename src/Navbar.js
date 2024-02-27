import logo from './Logo.png';
// import './App.css';

function Navbar() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Este es un texto del navbar</p>
      </header>
    </div>
  );
}

export default Navbar;
