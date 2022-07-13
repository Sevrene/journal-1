import './App.css';
import Section from './Section';

function App() {
  return (
    <Section name="Text 1" content={<Section name="Text 2"/>}/>
  );
}

export default App;