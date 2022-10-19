import "./App.css";
import Header from "./components/header/Header";
import Background from "./components/background/Background";
import Benefit from "./components/benefits/Benefit";
import Category from "./components/categories/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <Benefit />
      <Category />
    </div>
  );
}

export default App;
