import './App.css';
import './index.css';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import FormularioRecepcionEntrega from './components/FormularioRecepcionEntrega';
import Contacto from './components/contacto';
import Inicio from './components/Inicio';
import CheckListAlcancesIncidentes from './components/CheckListAlcancesIncidentes';
import { Routes, Route } from "react-router-dom";
import BackGround from './components/BackGround';
import OG from './components/OG';

function App() {
  return (
    <div className="App">

      <NavBar />
      <BackGround />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/recepcion" element={<FormularioRecepcionEntrega />} />
        <Route path="/incidentes" element={<CheckListAlcancesIncidentes />} />
      </Routes>
      <Footer />
      <OG />
      
    </div>
  );
}

// export default App;
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
export default App;
