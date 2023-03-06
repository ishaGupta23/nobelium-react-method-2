import logo from './logo.svg';
import './App.css';

// First component
function HeadingOne() {
  return <h1>I am heading one ... from first component</h1>;
}

// Second component
function HeadingTwo() {
  return <h2>I am heading two ... from second component</h2>;
}

// Third component
function HeadingThree() {
  return <h3>I am heading three ... from third component</h3>;
}

// Fourth component
function Button() {
  return <button>Click me!</button>;
}

function App() {
  return (
    <div>
      <HeadingOne />
      <HeadingTwo />
      <HeadingThree />
      <Button />
    </div>
  );
}

export default App;
