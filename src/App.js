import Header from "./components/Header";
import Hero from "./components/Hero";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Hero></Hero>
      </main>
    </div>
  );
}

export default App;
