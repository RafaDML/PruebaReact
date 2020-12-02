import './App.css';
import MyComponent from './MiComponente';
import Peliculas from './Components/Peliculas';
import Encabezado from './Components/Encabezado';
import Slider from './Components/Slider';
import './assets/css/styles.css';
import Footer from './Components/Footer';


function App() {
  return (

    <div className="App">
      <Encabezado/>

      <Slider/>

      <MyComponent/>

      <Peliculas/>

      

      <Footer/>
    



      
    </div>
  );
}

export default App;
