import Header from './Header'
import Footer from './Footer'
import Students from "./Students.jsx";

function App() {
  return(
    <div className="app-container">
      <Header />
      <div className="content">
        <Students/>
      </div>
      <Footer />
    </div>
  );
  
}

export default App
