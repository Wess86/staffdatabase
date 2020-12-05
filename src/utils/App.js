import logo from './logo.svg';
import './App.css';
import EmployeeDirectory from "./components/directory";
import SearchForm from "./components/SearchForm";
import Jumbo from "./components/Jumbo";

function App() {
  return (
    <div className="App">
      <Jumbo/>
      <EmployeeDirectory/>
    </div>
  );
}

export default App;