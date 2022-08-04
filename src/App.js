import Navbar from './Sections/Navbar';
import Header from './Sections/Header';
import Stats from './Sections/Stats';
import Servicios from './Sections/Servicios';
import TeOfrecemos from './Sections/TeOfrecemos';
import QuienesSomos from './Sections/QuienesSomos';
import Marcas from './Sections/Marcas';
import Reviews from './Sections/Reviews';
import Contacto from './Sections/Contacto';
import Footer from './Sections/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Stats />
      <Servicios />
      <TeOfrecemos />
      <QuienesSomos />
      <Marcas />
      <Reviews />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
