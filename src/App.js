import './App.css';
import Section from './Section';

function App() {
  return (
    <Section text="Text 1" content={<Section text="Text 2"/>}/>
  );
}

export default App;