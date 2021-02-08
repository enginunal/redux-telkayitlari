import Header from './components/Header';
import Footer from './components/Footer';
import Kayitlar from './components/Kayitlar';
import YeniEkle from './components/YeniEkle';

function App() {
  return (
    <div className='container'>
      <Header />
      <YeniEkle />      
      <Kayitlar />
      <Footer />
    </div>
  );
}

export default App;
