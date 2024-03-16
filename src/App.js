import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Navbar from './component/navbar/navbar';
import Banner from './component/banner/banner';

function App() {
  return (
    <div>
    <Navbar />
    <Banner />
    </div>
  );
}

export default App;
