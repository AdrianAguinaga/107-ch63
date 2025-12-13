import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
// Import all of Bootstrap’s CSS
import "bootstrap/scss/bootstrap";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Catalog />
        <Footer />
      </div>

    </>
  )
}
export default App
