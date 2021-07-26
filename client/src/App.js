import Main from "./components/Main";
import './App.css';
import ViewProduct from "./components/ViewProduct";
import UpdateProduct from "./components/UpdateProduct";
import {Router} from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
      <UpdateProduct path="/products/update/:id"/>
      <ViewProduct path="/products/:id"/>
      <Main path="/products"/>
      </Router>
    </div>
  );
}

export default App;
