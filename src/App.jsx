import Evening from "./components/Evening";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Hello from "./components/Hello";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import MyState from "./components/MyState";


function App() {

 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} >
          <Route index element={<MyState/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;