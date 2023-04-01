import './App.css';
import Blog from './components/blog/blog';
import Body from './components/body/body';
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Blog></Blog>
    </div>
  );
}

export default App;
