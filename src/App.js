import './App.css';
import { Content } from './Content';
import './Content.css';
import Header from './Header';
import { Footer } from './Footer';
// import  Web from './Web'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      {/* <Web /> */}
      <Footer />
    </div>
  );
}

export default App;
