import './App.css';
import ParamItem from './components/paramItem.jsx';
import { useSearchParams } from 'react-router-dom';
const urlSearchParams = new URLSearchParams(window.location.search);
const urlParams = Object.fromEntries(urlSearchParams.entries());




function App() {

  let [searchParams, setSearchParams] = useSearchParams();
  let searchKeys = Array.from(searchParams.entries());
  console.log(searchKeys);

  var rows = [];
  for (var i = 0; i < searchKeys.length; i++) {
      rows.push(<ParamItem key={i} queryName={searchKeys[i][0]} value={searchKeys[i][1]}/>);
  }
  return (
    <div className="app">
      
      {rows}
      <header>
        <h1>my callback</h1>
        <p>What the..? This is a simple solution to a simple problem. Callback here, from wherever and output your query params.</p>
        {Object.keys(urlParams).length === 0 &&
        
        <a href="?code=mysupersecretcode&width=100&height=100">Try this</a>
        }
      </header>
    </div>
  );
}

export default App;
