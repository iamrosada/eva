import { BrowserRouter } from "react-router-dom";
import Routes from './routes'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
        <BrowserRouter>
        <ToastContainer autoClose={5000}/>
          <Routes/>
        </BrowserRouter>
  );
}

export default App;
