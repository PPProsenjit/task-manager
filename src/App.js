
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <div className='h-screen'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
