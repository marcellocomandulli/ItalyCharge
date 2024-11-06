import Api from "./components/Api";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-full">
      <header className="h-24 flex justify-center items-center">
        
        <h1 className="text-4xl">ItalyCharge</h1>
      </header>

      <Api />

      <Navbar />
    </div>
  );
}

export default App;
