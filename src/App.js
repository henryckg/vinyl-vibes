import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido! Un gusto recibir tu visita"}/>
    </div>
  )
}

export default App;
