import Header from "./components/Header";
import Hero from "./components/Hero";
import Company from "./components/Company";
import Branding from "./components/Branding";
import Custom from "./components/Custom";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Hero></Hero>
        <Company></Company>
        <Branding></Branding>
        <Custom></Custom>
      </main>
    </div>
  );
}

export default App;
