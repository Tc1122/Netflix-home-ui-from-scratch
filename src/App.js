import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import { action, originals } from './urls';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost title='Action' isSmall url={action}/>
     <RowPost title='Originals' url={originals}/>
    </div>
  );
}

export default App;
