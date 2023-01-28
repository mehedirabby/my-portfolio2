import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Home></Home>
      </main>
    </>
  );
}

export default App;
