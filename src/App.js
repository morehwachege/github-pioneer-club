import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import BigContainer from './components/BigContainer';


function App() {
  const style = {
    width: 100 + "%",
    height: 'auto'
  }
  return (
    <div className="App">
      <NavBar />
      <div className='d-flex' style={style} >
        <SideBar />
        <BigContainer />
      </div>

    </div>
  );
}

export default App;
