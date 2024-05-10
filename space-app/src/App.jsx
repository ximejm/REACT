import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar/navbar";
import Hero from  "./componentes/hero/hero";
import Astros from "./componentes/astros/astros.jsx";
import './App.css'
function App() {
const links =[
  {
    id:1,
    text:"Home",
    link:"/",
  },
  {
    id:2, 
    text: "apod",
    link: "/apod",
  },
  {
    id:3,
    text:"astros",
    link:"/astros",
  },
]
  return ( 
  <>
  <Navbar header="space-app" links={links} />
  <Routes>
    <Route element ={< Hero />} path='/'/>
    <Route element ={<Astros />} path ="/astros" /> 
    </Routes> 
  </>
  );
}

export default App;
