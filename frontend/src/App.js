import './App.css';
import { useState } from 'react';
import Forms from './components/forms';
import Carsget from './components/cardCars';
import Search from './components/searchCar';

function App() {
  const [cambio, setCambio] = useState(true)

  const cambioForm = () => {
    setCambio(true);
  }
  const cambioSearch = () => {
    setCambio(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <h1 class="navbar-brand" href="#">Parkig Crud</h1>
          <div id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link text-dark" href="#" onClick={cambioForm}>ingresar carros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#" onClick={cambioSearch}>Buscar Carro</a>
              </li>
            </ul>
          </div>

        </nav>
      </header>
      <body>
        {cambio ? <Forms /> : <Search />}

        <Carsget />
      </body>
    </div>
  );
}

export default App;
