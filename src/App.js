import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Model from './Model';
import Form from './Form';

function App() {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h1>User Details Modal</h1>
      <Model>
      <Form/>
      </Model>

  
    </div>
  );
}

export default App;
