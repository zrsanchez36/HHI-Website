import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// navigation components
import Header from "./components/header/header";



function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
      <Routes>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
