import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
    </div>
  );
}

export default App;
