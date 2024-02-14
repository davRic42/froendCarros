import './App.css';
import Forms from './components/forms';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <h1 class="navbar-brand" href="#">Parkig Crud</h1>
        </nav>
      </header>
      <body>
        <Forms />
      </body>
    </div>
  );
}

export default App;
